import React, { useState, useEffect } from 'react';
import { portfolioContent } from '../content';
import { ArrowDownRight, ArrowDown, Github, Linkedin, Mail, FileDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const phrases = [
    "building runtime security tools",
    "learning DSA in C++",
    "exploring IoT & microcontrollers",
    "researching zero-trust for AI agents",
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setDisplayText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentPhrase.length) {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentPhraseIndex]);

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-white/[0.08]">
      {/* Monumental Outlined Watermark Typography (inspired by Rayhan Aditya reference) */}
      <div 
        className="absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none text-center whitespace-nowrap -z-10 opacity-[0.035] dark:opacity-[0.04]"
        aria-hidden="true"
      >
        <span className="font-display font-black text-[130px] sm:text-[180px] md:text-[230px] lg:text-[280px] tracking-tighter uppercase text-transparent stroke-text leading-none block">
          SECURITY
        </span>
      </div>

      {/* Background ambient glows reacting to palette */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-accent-soft blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-accent-soft blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker Bar */}
        <div className="mb-8 flex items-center justify-between border-b border-white/[0.06] pb-3">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
              ZERO-TRUST &amp; IOT SYSTEMS LAB
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <span className="px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/10">BENGALURU, IN</span>
            <span className="text-slate-700">/</span>
            <span className="text-accent font-semibold">2026 EDITION</span>
          </div>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Massive Editorial Typography */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-tight leading-[0.95] select-none">
                Pavankumar <span className="font-sans font-extrabold tracking-normal text-slate-100">S<span className="text-accent">.</span></span>
              </h1>

              <p className="font-display text-2xl sm:text-3xl text-slate-300 leading-snug">
                Student. Builder. <span className="italic font-normal text-accent">Always curious.</span>
              </p>
            </div>

            {/* Terminal Typing Line */}
            <div className="h-8 flex items-center font-mono text-sm sm:text-base text-slate-400">
              <span className="text-accent mr-2">&gt;</span>
              <span className="text-slate-200">{displayText}</span>
              <span className="inline-block w-2 h-4 ml-1 bg-accent animate-pulse align-middle" />
            </div>

            {/* Honest 1st-person bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
              I'm Pavankumar S—1st-year B.Tech student in IoT &amp; Cybersecurity. Exploring runtime security gateways for AI agents, low-level systems, and building a strong foundation in C++ DSA and embedded hardware.
            </p>

            {/* Dual CTAs + Resume Button */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <a
                href="#lab"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono tracking-wider font-semibold uppercase rounded-md transition-all duration-200 shadow-accent active:scale-95 bg-accent"
              >
                <span>Enter the lab</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#story"
                className="text-xs font-mono tracking-wider text-slate-400 hover:text-white uppercase transition-colors border-b border-white/20 hover:border-white pb-0.5"
              >
                The person behind it ↓
              </a>

              <a
                href={portfolioContent.personal.resumeUrl}
                download="Pavankumar_S_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-colors"
                title="Download Resume PDF"
              >
                <FileDown className="w-3.5 h-3.5 text-accent" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Social channels */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500">
              <a
                href={portfolioContent.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>github/Pavan-cyberdev</span>
              </a>

              <a
                href={portfolioContent.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>linkedin/pavankumar-s</span>
              </a>

              <a
                href={`mailto:${portfolioContent.personal.email}`}
                className="hover:text-accent transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>pavangamer1248@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Iridescent Sculpture + Floating Stats Stack */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-88 lg:h-88 flex items-center justify-center">
              
              {/* Backlight bloom */}
              <div className="absolute inset-0 bg-accent-soft blur-3xl rounded-full pointer-events-none" />

              {/* High-fidelity 3D Abstract Sculpture */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 group">
                <img
                  src="/hero_sculpture.jpg"
                  alt="Minimalist abstract 3D iridescent ribbon sculpture symbolizing runtime security and low-level system integrity"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Corner tech watermark overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400/90 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>SENTRY // RUNTIME GATEWAY</span>
                  </span>
                  <span>PS · 2026</span>
                </div>
              </div>

            </div>

            {/* Floating Metric Stats Badge Grid (inspired by Rayhan Aditya layout) */}
            <div className="w-full max-w-sm grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-center">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-accent">24h</div>
                <div className="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">Hackathon Sprint</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-white">0</div>
                <div className="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">Implicit Trust</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-accent">11</div>
                <div className="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">Syllabus Milestones</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent transition-colors">
                <div className="text-xl sm:text-2xl font-bold text-white">1st</div>
                <div className="text-[9px] uppercase tracking-wider text-slate-400 mt-0.5">Year B.Tech</div>
              </div>
            </div>

          </div>

        </div>

        {/* Live Infinite Tech Ticker Marquee (inspired by Alex's 3D portfolio video) */}
        <div className="mt-14 pt-6 border-t border-white/[0.08] relative overflow-hidden">
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-3">
            TECH STACK &amp; CORE INVARIANTS
          </div>
          
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-1 text-xs font-mono">
            {[
              { name: 'Python', role: 'Runtime Gateway' },
              { name: 'FastAPI', role: 'Reverse Proxy' },
              { name: 'Gemini SDK', role: 'AI Agent' },
              { name: 'MCP Servers', role: 'Tool Protocols' },
              { name: 'C++ & DSA', role: 'Core Foundation' },
              { name: 'Arduino / ESP32', role: 'IoT Hardware' },
              { name: 'Zero-Trust', role: 'Default Deny' },
              { name: 'SQLite', role: 'Audit Log' },
              { name: 'SHA-256', role: 'Tool Integrity' },
              { name: 'Prompt Defense', role: 'Output Inspection' },
            ].map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/10 hover:border-accent whitespace-nowrap transition-colors shrink-0 group cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                <span className="text-slate-200 font-semibold">{t.name}</span>
                <span className="text-slate-500 text-[10px]">// {t.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Full-width discover ticker footer */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono uppercase tracking-widest text-slate-500">
          <div className="flex items-center gap-3">
            <span className="text-accent font-semibold">1ST-YEAR B.TECH</span>
            <span className="text-slate-700">/</span>
            <span>IOT &amp; CYBERSECURITY</span>
            <span className="text-slate-700">/</span>
            <span>CO-BUILDER SENTRY X</span>
          </div>

          <a
            href="#story"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-accent animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};
