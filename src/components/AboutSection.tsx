import React from 'react';
import { portfolioContent } from '../content';

export const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Chapter 01 Header Lockup */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
            <span className="text-accent">CHAPTER 01 / IDENTITY</span>
            <span>PS / 01</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <div className="lg:col-span-8 space-y-2">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block">
                A PERSONAL EXPLORATION
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                <span className="italic text-accent font-normal">The </span>story.
              </h2>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-slate-400 uppercase tracking-wider space-y-1 self-end">
              <div>A BUILDER’S MINDSET.</div>
              <div className="text-accent">A STUDENT’S CURIOSITY.</div>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 01, 02, 03 editorial format */}
          <div className="lg:col-span-5 space-y-6 border-l border-white/[0.08] pl-6 sm:pl-8">
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-widest uppercase text-slate-500">
                01 / FIRST PRINCIPLE
              </span>
              <h3 className="text-base font-semibold text-white">
                Ask a deeper question.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Why should autonomous AI agents have unconstrained access to tools? Understanding how systems break is the precursor to securing them.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/[0.05]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
                02 / PRACTICAL PROTOTYPE
              </span>
              <h3 className="text-base font-semibold text-white">
                Build under real pressure.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                At Hackurity 2026, my team Bro Code built Sentry X in 24 hours—proving zero-trust concepts between Gemini AI agents and MCP servers.
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/[0.05]">
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent-secondary">
                03 / FOUNDATIONAL RIGOR
              </span>
              <h3 className="text-base font-semibold text-white">
                Master the fundamentals.
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Daily Data Structures &amp; Algorithms practice in C++, understanding memory safety and pointer mechanics, alongside IoT sensor circuits.
              </p>
            </div>
          </div>

          {/* Right Column: First-Person Prose */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                I am a first-year undergraduate student studying <strong>IoT &amp; Cybersecurity</strong>. I didn't start by memorizing tools; I started with curiosity about what happens underneath the hood when bytes travel across a microcontroller bus, an API gateway, or an LLM tool call.
              </p>
              <p>
                {portfolioContent.personal.shortBio}
              </p>
              <p className="text-sm text-slate-400">
                I believe the most effective defensive security engineers are those who understand the physical hardware, operating system primitives, and algorithms from the ground up.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-4 border-t border-white/[0.08] space-y-3">
              <div className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
                AREAS OF ACTIVE EXPLORATION
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2 hover:text-accent transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Zero-Trust Gateways
                </span>
                <span className="flex items-center gap-2 hover:text-accent transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-soft border border-accent"></span>
                  Model Context Protocol (MCP)
                </span>
                <span className="flex items-center gap-2 hover:text-accent transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  C++ &amp; DSA Foundations
                </span>
                <span className="flex items-center gap-2 hover:text-accent transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  ESP32 &amp; Embedded IoT
                </span>
                <span className="flex items-center gap-2 hover:text-accent transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                  Prompt-Injection Defense
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Engineering Defense Pipeline & Philosophy Card (inspired by Rayhan Aditya Work Process) */}
        <div className="pt-12 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 5-Step Connected Node Track */}
          <div className="lg:col-span-8 rounded-2xl bg-[#0b0f16] border border-white/[0.08] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                DEFENSIVE ENGINEERING PROCESS
              </span>
              <span className="text-[10px] font-mono text-accent">5-PHASE ZERO-TRUST LIFECYCLE</span>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-accent before:via-white/20 before:to-accent/40">
              {[
                { step: '01', title: 'DISCOVER & THREAT RECON', desc: 'Analyzing unconstrained API surfaces, autonomous agent tool-call vectors, and memory safety vulnerabilities.' },
                { step: '02', title: 'ZERO-TRUST POLICY SPECIFICATION', desc: 'Defining default-deny authorization rules, task-bound Mission Lock constraints, and cryptographic tool hashes.' },
                { step: '03', title: 'RUNTIME GATEWAY INTERCEPTION', desc: 'Reverse-proxying calls via FastAPI and validating tool signatures with SHA-256 before forwarding to MCP servers.' },
                { step: '04', title: 'PAYLOAD INSPECTION & AUDIT', desc: 'Sanitizing downstream LLM responses to catch prompt-injection triggers and logging to an immutable SQLite ledger.' },
                { step: '05', title: 'HARDWARE & EMBEDDED EXTENSION', desc: 'Translating zero-trust logic to physical microcontrollers (ESP32/Arduino) with secure firmware and sensor bounds.' },
              ].map((phase) => (
                <div key={phase.step} className="relative group">
                  {/* Node marker */}
                  <div className="absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#070b12] border border-white/20 group-hover:border-accent flex items-center justify-center text-[10px] font-mono font-bold text-slate-300 group-hover:text-accent transition-colors shadow-sm shadow-black">
                    {phase.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider group-hover:text-accent transition-colors">
                      {phase.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Signature Philosophy Quote Card (Rayhan style) */}
          <div className="lg:col-span-4 rounded-2xl bg-gradient-to-br from-[#121824] to-[#0a0e16] border border-accent/30 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-black/60 group">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-accent-soft blur-2xl rounded-full pointer-events-none" />
            
            <div className="space-y-4">
              <span className="text-4xl text-accent font-serif leading-none block select-none">&ldquo;</span>
              <p className="font-display text-lg sm:text-xl text-white font-normal leading-snug">
                Good security is not just how it looks, but understanding how systems break from the ground up.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2">
              <div className="font-display italic text-lg text-accent font-medium">
                Pavankumar S.
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                1st-Year B.Tech IoT &amp; Cybersecurity
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
