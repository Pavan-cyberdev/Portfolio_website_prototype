/**
 * PAVANKUMAR S - PORTFOLIO CONTENT FILE (content.js)
 * ===================================================
 * Edit only this file to change your bio, skills, projects, certificates,
 * and links. The website will automatically update without touching HTML/CSS!
 */

const portfolioData = {
  personal: {
    name: "Pavankumar S",
    monogram: "PS",
    tagline: "1st-year B.Tech student in IoT & Cybersecurity | building security tools | learning DSA in C++",
    shortBio: "I'm very passionate about cybersecurity and IoT. I like understanding how systems work so I can learn how to secure them. At my first hackathon I worked on a runtime security gateway for AI agents, and I'm now building a strong DSA foundation in C++ while making more IoT and security projects.",
    email: "pavangamer1248@gmail.com",
    githubUrl: "https://github.com/Pavan-cyberdev",
    linkedinUrl: "https://www.linkedin.com/in/pavankumar-s-cyberdev",
    resumeUrl: "resume.pdf", // Place your resume.pdf in the same folder
    formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID_HERE", // TODO: Replace with your Formspree ID
    location: "Bengaluru, India",
    degree: "B.Tech in IoT & Cybersecurity (1st Year)"
  },

  skills: [
    { name: "Python", category: "Core", isLearning: false },
    { name: "FastAPI", category: "Core", isLearning: false },
    { name: "HTML / CSS / JavaScript", category: "Core", isLearning: false },
    { name: "SQLite", category: "Core", isLearning: false },
    { name: "C++ (DSA)", category: "Systems", isLearning: true },
    { name: "Arduino / ESP32 (IoT)", category: "Systems", isLearning: true },
    { name: "Gemini SDK", category: "AI & Protocols", isLearning: false },
    { name: "Model Context Protocol (MCP)", category: "AI & Protocols", isLearning: false },
    { name: "Zero-Trust Architecture", category: "Security", isLearning: false },
    { name: "Prompt-Injection Defense", category: "Security", isLearning: false },
    { name: "Audit Logging", category: "Security", isLearning: false },
    { name: "Linux & Shell Basics", category: "Security", isLearning: true }
  ],

  featuredProject: {
    title: "Sentry X",
    tagline: "Zero-Trust Runtime Security Gateway for AI Agents & MCP Servers",
    builtAt: "Hackurity 2026 (REVA Cyber Club, REVA University)",
    team: "Bro Code",
    role: "Researcher (researched the problem space & security approach) & Co-builder",
    githubUrl: null, // TODO: Replace with "https://github.com/Pavan-cyberdev/sentry-x"
    techStack: ["Python", "FastAPI", "Gemini SDK", "Model Context Protocol (MCP)", "SQLite", "HTML/CSS/JS"],
    features: [
      {
        title: "Default-Deny Authorization",
        description: "Zero implicit trust: every agent tool invocation must match a pre-authorized policy whitelist before reaching MCP servers."
      },
      {
        title: "Mission Lock Enforcement",
        description: "Strictly confines agent execution to its stated task scope, preventing goal drift or unauthorized tool calls."
      },
      {
        title: "SHA-256 Tool Integrity Checks",
        description: "Validates tool signatures against cryptographic hashes to prevent unauthorized MCP server substitution."
      },
      {
        title: "Response Inspection",
        description: "Scans downstream tool outputs before returning them to the agent to catch prompt injection attacks and exfiltration triggers."
      },
      {
        title: "SQLite Audit Log & Dashboard",
        description: "Every call (allowed, blocked, or flagged) is recorded with timestamps, tool parameters, and verdicts."
      }
    ],
    caseStudy: {
      problem: "Autonomous AI agents equipped with Model Context Protocol (MCP) execute tools dynamically. Without runtime isolation, a compromised agent or indirect prompt injection in third-party tool output can trigger destructive actions (such as dropping databases) without human oversight.",
      approach: "We implemented an inline reverse-proxy gateway between the Gemini agent and MCP tools. Sentry X acts as a strict zero-trust boundary enforcing Mission Locks, signature verification, and input/output sanitation.",
      architectureSteps: [
        { step: "01", name: "Agent Request", desc: "Gemini Agent proposes a tool invocation with intent and mission context." },
        { step: "02", name: "Sentry X Gateway", desc: "Validates SHA-256 tool hash and matches mission scope against Default-Deny rules." },
        { step: "03", name: "MCP Server Execution", desc: "If approved, forwarded to the target MCP server for isolated execution." },
        { step: "04", name: "Response Inspection", desc: "Downstream output is scanned for prompt-injection patterns before reaching the agent." },
        { step: "05", name: "Audit Logging", desc: "Full transaction record committed to SQLite database and dashboard." }
      ],
      myRole: "I served as researcher on the team: I researched the threat vectors of AI agent tool-calling, explored zero-trust runtime mitigation models, defined the default-deny ruleset, and co-built the FastAPI gateway logic with my teammate.",
      whatILearned: "How fast AI agent security is evolving, how to model zero-trust policies for non-deterministic LLM agents, practical experience with MCP tool schemas, and navigating tight engineering trade-offs during a 24-hour hackathon."
    },
    demoScenarios: [
      {
        name: "Authorized Read-Only Call",
        payload: { agent: "Gemini-Telemetry-Agent", mission: "read-telemetry-and-metrics", tool: "query_user_stats" },
        status: 200,
        verdict: "ALLOWED",
        details: "Tool call matched mission whitelist and passed SHA-256 hash validation."
      },
      {
        name: "Unauthorized Database Drop",
        payload: { agent: "Gemini-Telemetry-Agent", mission: "read-telemetry-and-metrics", tool: "drop_table_production_users" },
        status: 403,
        verdict: "BLOCKED",
        details: "Destructive tool call attempted outside stated read-only scope. Mission Lock triggered."
      },
      {
        name: "Prompt-Injection Detection",
        payload: { agent: "Gemini-Telemetry-Agent", mission: "read-telemetry-and-metrics", tool: "read_telemetry" },
        status: 422,
        verdict: "FLAGGED",
        details: "Downstream MCP response contained adversarial prompt injection syntax. Quarantined."
      }
    ]
  },

  hackathon: {
    title: "Hackurity 2026",
    dates: "2026 · 24-Hour Hackathon",
    organizer: "REVA Cyber Club at REVA University",
    teamName: "Bro Code",
    track: "Track A — AI + Security Crossover",
    problemStatement: "Guarding the Agent",
    result: "Participant & Project Showcase (Did not win)",
    reflection: "Hackurity 2026 was my first hackathon experience as a 1st-year student. Working with my team 'Bro Code' under an intense 24-hour deadline taught me how to break down complex security problems, make pragmatic architecture choices under pressure, and apply zero-trust security thinking to emerging AI agent protocols. We didn't take the trophy, but building Sentry X and presenting it to judges was an invaluable stepping stone."
  },

  miniProjects: [
    {
      title: "ESP32 Sensor Telemetry Node",
      description: "Placeholder for upcoming IoT project: WiFi-enabled telemetry logger with ESP32 reading environmental sensors and reporting over MQTT.",
      tech: ["ESP32", "C++", "MQTT", "Arduino IDE"],
      githubUrl: null, // TODO: Add GitHub repo URL when ready
      status: "In Progress / Planned"
    },
    {
      title: "Arduino Smart Access Controller",
      description: "Placeholder for upcoming IoT project: RFID-based zero-trust physical access latch with local SQLite credential validation.",
      tech: ["Arduino Uno", "C++", "RFID (MFRC522)", "Hardware SPI"],
      githubUrl: null, // TODO: Add GitHub repo URL when ready
      status: "In Progress / Planned"
    }
  ],

  certifications: [
    {
      title: "Cybersecurity Fundamentals / Networking (Placeholder)",
      issuer: "To be filled (e.g. Cisco Networking Academy / Coursera)",
      year: "2025 - 2026",
      credentialUrl: null // TODO: Add credential link
    },
    {
      title: "Foundations of IoT / Embedded Systems (Placeholder)",
      issuer: "To be filled (e.g. NPTEL / edX / Coursework)",
      year: "2025 - 2026",
      credentialUrl: null // TODO: Add credential link
    }
  ],

  learningChecklist: [
    { category: "DSA in C++", title: "Time & Space Complexity Analysis (Big-O)", status: "completed", notes: "Mastered asymptotic bounds and recurrence relations" },
    { category: "DSA in C++", title: "Arrays & Dynamic Memory Allocation in C++", status: "completed", notes: "Pointers, memory layout, dynamic vectors" },
    { category: "DSA in C++", title: "Strings & Two-Pointer / Sliding Window", status: "in-progress", notes: "Working through standard array/string patterns" },
    { category: "DSA in C++", title: "Linked Lists & Pointer Manipulation", status: "in-progress", notes: "Singly, doubly, cycle detection" },
    { category: "DSA in C++", title: "Stacks, Queues & Monotonic Stack", status: "planned", notes: "Next milestone in C++ STL" },
    { category: "DSA in C++", title: "Recursion & Backtracking Foundations", status: "planned", notes: "Tree traversals and divide-and-conquer" },
    { category: "Cybersecurity & IoT", title: "Network Protocols & OSI Model (TCP/IP, UDP, DNS)", status: "completed", notes: "Packet inspection basics and port scanning concepts" },
    { category: "Cybersecurity & IoT", title: "Zero-Trust Architecture & Principle of Least Privilege", status: "completed", notes: "Applied in Sentry X hackathon prototype" },
    { category: "Cybersecurity & IoT", title: "LLM Agent Security & Model Context Protocol (MCP)", status: "in-progress", notes: "Prompt injection attack vectors and gateway defenses" },
    { category: "Cybersecurity & IoT", title: "Microcontroller I/O & Sensor Interfacing (I2C/SPI)", status: "in-progress", notes: "Arduino and ESP32 GPIO, sensor reading" },
    { category: "Cybersecurity & IoT", title: "IoT Security & Secure Firmware Flashing", status: "planned", notes: "MQTT over TLS, secure boot concepts" }
  ]
};
