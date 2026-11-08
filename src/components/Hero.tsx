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
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden border-b border-white/[0.08]">
      {/* Background ambient glows reacting to palette */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-accent-soft blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-accent-soft blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Kicker */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-[11px] font-mono tracking-[0.25em] text-slate-400 uppercase">
            A MIND AT WORK. SYSTEMS IN MOTION.
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-500">
            <span>BENGALURU, IN</span>
            <span>·</span>
            <span>2026</span>
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

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
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
                className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-slate-500 hover:text-accent transition-colors"
                title="Download Resume PDF"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Social channels */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-500">
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

          {/* Right Column: 3D Iridescent Sculpture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96 flex items-center justify-center">
              
              {/* Backlight bloom */}
              <div className="absolute inset-0 bg-accent-soft blur-3xl rounded-full pointer-events-none" />

              {/* High-fidelity 3D Abstract Sculpture */}
              <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
                <img
                  src="/hero_sculpture.jpg"
                  alt="Minimalist abstract 3D iridescent ribbon sculpture symbolizing runtime security and low-level system integrity"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle corner tech watermark overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-400/80 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span>SENTRY // RUNTIME GATEWAY</span>
                  </span>
                  <span>PS · 2026</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-width discover ticker */}
        <div className="mt-16 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono uppercase tracking-widest text-slate-500">
          <div className="flex items-center gap-3">
            <span className="text-accent">1ST-YEAR B.TECH</span>
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
