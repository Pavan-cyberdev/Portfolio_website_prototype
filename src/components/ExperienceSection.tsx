import React from 'react';
import { portfolioContent } from '../content';
import { Trophy, Users, Clock, Compass, ShieldAlert, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const hackathon = portfolioContent.hackathon;

  return (
    <section id="hackathon" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="text-xs font-mono text-teal-400">
            Hackathons &amp; Collaborative Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
            Experience &amp; Hackathons
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Real sprint experience building security solutions under strict time constraints.
          </p>
        </div>

        {/* Timeline Item Card */}
        <div className="relative pl-6 sm:pl-8 border-l border-teal-500/30 space-y-6">
          
          {/* Timeline node marker */}
          <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-[#0b0f14] border-2 border-teal-400 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-300"></span>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#121821] border border-white/10 space-y-6">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-teal-300 mb-1">
                  <span>{hackathon.dates}</span>
                  <span className="text-slate-600">·</span>
                  <span>{hackathon.organizer}</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {hackathon.title}
                </h3>
              </div>

              <div className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto">
                Result: <span className="text-slate-200">{hackathon.result}</span>
              </div>
            </div>

            {/* Hackathon Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-slate-500 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-teal-400" />
                  <span>Team</span>
                </div>
                <div className="text-slate-200 font-semibold">{hackathon.teamName}</div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-slate-500 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-violet-400" />
                  <span>Track</span>
                </div>
                <div className="text-slate-200 font-semibold">{hackathon.track}</div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 space-y-1">
                <div className="text-slate-500 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                  <span>Problem Statement</span>
                </div>
                <div className="text-slate-200 font-semibold">{hackathon.problemStatement}</div>
              </div>
            </div>

            {/* Honest Reflection Prose */}
            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-400">
                Honest Reflection &amp; Takeaways:
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {hackathon.honestReflection}
              </p>
            </div>

            {/* Deliverable created */}
            <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="text-xs font-semibold text-white">
                  Built Prototype: Sentry X
                </div>
                <div className="text-xs text-slate-400">
                  Zero-trust security gateway between Gemini AI Agent and Model Context Protocol (MCP).
                </div>
              </div>
              <a
                href="#sentry-x"
                className="text-xs font-mono text-teal-300 hover:text-teal-200 flex items-center gap-1 whitespace-nowrap shrink-0"
              >
                <span>Read Case Study</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
