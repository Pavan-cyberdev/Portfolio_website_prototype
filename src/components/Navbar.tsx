import React, { useState, useEffect } from 'react';
import { portfolioContent } from '../content';
import { Moon, Sun, Menu, X, ArrowUpRight, FileDown } from 'lucide-react';
import { PaletteSwitcher, type PaletteId } from './PaletteSwitcher';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  currentPalette: PaletteId;
  onSelectPalette: (palette: PaletteId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  currentPalette,
  onSelectPalette,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', num: '01', href: '#story' },
    { name: 'Lab', num: '02', href: '#lab' },
    { name: 'Now', num: '03', href: '#now' },
    { name: 'Contact', num: '04', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl shadow-black/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Zone 1: Wordmark Brand */}
        <a
          href="#"
          className="flex items-center gap-3.5 group shrink-0"
          aria-label="Pavankumar S Home"
        >
          {/* Dominant Aesthetic Cyber-Medallion Logo */}
          <div className="relative w-12 h-12 rounded-2xl p-[1.5px] bg-gradient-to-b from-white/25 via-white/10 to-accent/40 group-hover:from-accent group-hover:via-accent/80 group-hover:to-accent transition-all duration-300 shadow-xl shadow-black/80 group-hover:shadow-[0_0_28px_rgba(var(--accent-glow),0.5)]">
            <div className="w-full h-full rounded-[14px] bg-[#070b12] relative overflow-hidden flex items-center justify-center">
              {/* Internal ambient radial glow in active palette */}
              <div className="absolute inset-0 bg-radial from-accent/25 via-accent/5 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Architectural corner registration marks */}
              <div className="absolute top-1 left-1 text-[8px] font-mono text-white/25 leading-none select-none group-hover:text-accent/60 transition-colors">+</div>
              <div className="absolute bottom-1 right-1 text-[8px] font-mono text-white/25 leading-none select-none group-hover:text-accent/60 transition-colors">+</div>
              
              {/* Live Zero-Trust telemetry beacon */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_currentColor] animate-pulse" />

              {/* Dominant Sculpted Monogram: Editorial P + Cyber S */}
              <div className="relative flex items-baseline select-none transition-transform duration-300 group-hover:scale-110">
                <span className="font-display font-black italic text-2xl text-white tracking-tighter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  P
                </span>
                <span className="font-mono font-black text-lg text-accent -ml-0.5 tracking-tighter drop-shadow-[0_0_12px_rgba(var(--accent-glow),0.5)]">
                  S
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs font-bold tracking-widest text-slate-100 uppercase">
              PAVANKUMAR S
            </span>
            <span className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">
              THE SECURITY &amp; IOT LAB
            </span>
          </div>
        </a>

        {/* Zone 2: Numbered Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors flex items-center gap-1.5 py-1 group"
            >
              <span className="group-hover:text-accent transition-colors">{link.name}</span>
              <span className="text-[10px] text-slate-600 group-hover:text-accent transition-colors">{link.num}</span>
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions + Palette Switcher + Theme Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Palette Selector */}
          <PaletteSwitcher
            currentPalette={currentPalette}
            onSelectPalette={onSelectPalette}
          />

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          <a
            href={portfolioContent.personal.resumeUrl}
            download="Pavankumar_S_Resume.pdf"
            className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors whitespace-nowrap shrink-0"
          >
            <FileDown className="w-3.5 h-3.5 text-accent" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider font-semibold rounded-full transition-all whitespace-nowrap shrink-0 shadow-sm shadow-accent active:scale-95 bg-accent"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07090e] border-b border-white/10 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-white/5 text-slate-300 hover:text-accent transition-colors"
              >
                <span>{link.name}</span>
                <span className="text-slate-600">{link.num}</span>
              </a>
            ))}
          </div>
          <div className="pt-2 flex items-center justify-between">
            <a
              href={portfolioContent.personal.resumeUrl}
              download="Pavankumar_S_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-accent"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
