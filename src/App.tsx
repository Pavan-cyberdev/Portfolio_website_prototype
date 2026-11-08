/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SentryXSection } from './components/SentryXSection';
import { NowSection } from './components/NowSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import type { PaletteId } from './components/PaletteSwitcher';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
    }
    return true; // Default dark
  });

  const [palette, setPalette] = useState<PaletteId>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio-palette');
      if (stored && ['teal', 'crimson', 'amber', 'cobalt', 'emerald'].includes(stored)) {
        return stored as PaletteId;
      }
    }
    return 'teal';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.style.backgroundColor = '#07090e';
      document.body.style.color = '#f1f5f9';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('portfolio-palette', palette);
  }, [palette]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDark ? 'bg-[#07090e] text-slate-100' : 'bg-[#f8fafc] text-slate-900'}`}>
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        currentPalette={palette}
        onSelectPalette={setPalette}
      />
      
      <main>
        <Hero />
        <AboutSection />
        <SentryXSection />
        <NowSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
