/**
 * Sentry X Runtime Security Engine (Pure Logic Simulator)
 * Implements zero-trust evaluation: Default-Deny, Mission Lock, Tool Integrity, and Prompt-Injection Inspection.
 */

export interface AgentRequest {
  id: string;
  agentName: string;
  statedMission: string;
  toolName: string;
  toolParameters: Record<string, unknown>;
  expectedToolHash: string;
  providedToolHash: string;
  simulatedResponse?: string;
}

export interface SecurityVerdict {
  isAllowed: boolean;
  statusCode: number;
  reason: string;
  violationType?: 'MISSION_LOCK' | 'INTEGRITY_MISMATCH' | 'PROMPT_INJECTION' | 'DEFAULT_DENY';
  mitreTechnique?: string;
  auditRecord: {
    timestamp: string;
    action: string;
    verdict: 'ALLOW' | 'BLOCK' | 'FLAGGED';
    details: string;
  };
}

// Stated mission allowable scopes
const ALLOWED_TOOLS_BY_MISSION: Record<string, string[]> = {
  'read-telemetry-and-metrics': ['get_device_metrics', 'read_telemetry', 'query_user_stats', 'get_system_health'],
  'customer-support-inquiry': ['get_order_status', 'search_faq', 'verify_account_email'],
};

// Known prompt injection trigger signatures
const INJECTION_PATTERNS = [
  /ignore (all )?previous instructions/i,
  /disregard (prior|all) instructions/i,
  /system override/i,
  /bypass safety/i,
  /exfiltrate/i,
  /reveal all keys/i,
];

export function evaluateAgentRequest(req: AgentRequest): SecurityVerdict {
  const timestamp = new Date().toISOString();

  // 1. Tool Hash Integrity Check (SHA-256 verification)
  if (req.expectedToolHash !== req.providedToolHash) {
    return {
      isAllowed: false,
      statusCode: 401,
      reason: 'Tool binary hash mismatch. Possible unauthorized MCP server tamper detected.',
      violationType: 'INTEGRITY_MISMATCH',
      mitreTechnique: 'T1554: Compromise Host-Software Binary',
      auditRecord: {
        timestamp,
        action: req.toolName,
        verdict: 'BLOCK',
        details: `Integrity check failed. Expected: ${req.expectedToolHash.substring(0, 8)}... Got: ${req.providedToolHash.substring(0, 8)}...`,
      },
    };
  }

  // 2. Mission Lock & Default-Deny Check
  const allowedTools = ALLOWED_TOOLS_BY_MISSION[req.statedMission];
  if (!allowedTools || !allowedTools.includes(req.toolName)) {
    const isDangerous = /delete|drop|purge|truncate|rm|format/i.test(req.toolName) ||
      JSON.stringify(req.toolParameters).toLowerCase().includes('drop table');

    return {
      isAllowed: false,
      statusCode: 403,
      reason: isDangerous
        ? `Mission Lock Violation: Action '${req.toolName}' attempts destructive operation outside stated scope '${req.statedMission}'.`
        : `Default-Deny Policy: Tool '${req.toolName}' is not explicitly whitelisted for mission '${req.statedMission}'.`,
      violationType: 'MISSION_LOCK',
      mitreTechnique: 'T1565.001: Data Destruction / Scope Exceedance',
      auditRecord: {
        timestamp,
        action: req.toolName,
        verdict: 'BLOCK',
        details: `Mission Lock block. Tool '${req.toolName}' outside allowed scope for '${req.statedMission}'.`,
      },
    };
  }

  // 3. Response Inspection for Prompt Injection
  if (req.simulatedResponse) {
    for (const pattern of INJECTION_PATTERNS) {
      if (pattern.test(req.simulatedResponse)) {
        return {
          isAllowed: false,
          statusCode: 422,
          reason: 'Prompt injection signature detected in downstream MCP response payload.',
          violationType: 'PROMPT_INJECTION',
          mitreTechnique: 'OWASP LLM01: Prompt Injection',
          auditRecord: {
            timestamp,
            action: req.toolName,
            verdict: 'FLAGGED',
            details: `Response inspection caught pattern matching: "${pattern.source}". Payload quarantined.`,
          },
        };
      }
    }
  }

  // 4. Default Allow for verified request
  return {
    isAllowed: true,
    statusCode: 200,
    reason: 'Request verified: Tool integrity valid, mission parameters within bounds, payload clean.',
    auditRecord: {
      timestamp,
      action: req.toolName,
      verdict: 'ALLOW',
      details: `Authorized read executed successfully under mission '${req.statedMission}'.`,
    },
  };
}
