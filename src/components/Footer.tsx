import React from 'react';
import { portfolioContent } from '../content';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#05070a] text-slate-500 font-mono text-xs border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/15 flex items-center justify-center text-accent">
              <svg
                viewBox="0 0 32 32"
                className="w-4 h-4 text-white"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M16 3L25 6.5V14C25 20.2 21 25.5 16 27.5C11 25.5 7 20.2 7 14V6.5L16 3Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  className="text-white/30"
                />
                <path
                  d="M12 10V22"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M12 10.5H16C17.7 10.5 19 11.6 19 13C19 14.4 17.7 15.5 16 15.5H12"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M19.5 17C18.5 16.4 17.2 16.2 16 16.8C14.8 17.4 14 18.5 14 19.6C14 21.2 15.5 21.8 17 21.8C18.8 21.8 20 22.5 20 23.8C20 25.2 18.5 26 16.5 26C14.8 26 13.5 25.3 12.8 24.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  className="text-accent"
                />
                <circle cx="16" cy="3" r="1.5" className="fill-accent" />
              </svg>
            </div>
            <div>
              <span className="text-slate-200 uppercase tracking-widest font-semibold block">
                PAVANKUMAR S
              </span>
              <span className="text-[10px] text-slate-500 tracking-wider">
                1st-Year B.Tech IoT &amp; Cybersecurity
              </span>
            </div>
          </div>

          {/* Core Philosophy Memento */}
          <div className="text-slate-400 font-display italic text-sm">
            Curiosity. Code. Zero-Trust Systems.
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center gap-6 uppercase tracking-wider text-[11px]">
            <a
              href={portfolioContent.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href={portfolioContent.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors"
            >
              LINKEDIN ↗
            </a>
            <a
              href={`mailto:${portfolioContent.personal.email}`}
              className="hover:text-accent transition-colors"
            >
              EMAIL ↗
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 transition-colors text-slate-400"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>

        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
          <div>Built with React, TypeScript &amp; Tailwind CSS. Inspired by high-end editorial portfolios.</div>
          <div>&copy; 2026 Pavankumar S. All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
};
