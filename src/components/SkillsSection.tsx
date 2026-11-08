import React, { useState } from 'react';
import { portfolioContent, type SkillItem } from '../content';
import { Terminal, Shield, Cpu, Sparkles, Code2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'core' | 'ai-mcp' | 'systems' | 'security'>('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'security', label: 'Cybersecurity & Zero-Trust' },
    { id: 'ai-mcp', label: 'AI & MCP Protocols' },
    { id: 'systems', label: 'Systems & IoT (Learning)' },
    { id: 'core', label: 'Languages & Backend' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? portfolioContent.skills
    : portfolioContent.skills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (category: SkillItem['category']) => {
    switch (category) {
      case 'security':
        return <Shield className="w-4 h-4 text-teal-400" />;
      case 'ai-mcp':
        return <Sparkles className="w-4 h-4 text-violet-400" />;
      case 'systems':
        return <Cpu className="w-4 h-4 text-teal-300" />;
      case 'core':
      default:
        return <Code2 className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-xs font-mono text-teal-400">
              Technical Arsenal · Verified Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Skills &amp; Technologies
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              From backend development with Python and FastAPI to zero-trust AI protocols, with dedicated focus on C++ DSA and IoT hardware.
            </p>
          </div>

          {/* Interactive Filter Control (Functional button tabs) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121821] border border-white/10 rounded-lg shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-teal-400/15 text-teal-300 border border-teal-400/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-[#121821] border border-white/10 hover:border-teal-500/30 transition-all duration-150 flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-teal-500/10 transition-colors">
                  {getCategoryIcon(skill.category)}
                </div>
                <div className="space-y-0.5">
                  <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                  <div className="text-[11px] font-mono text-slate-500 capitalize">
                    {skill.category === 'ai-mcp' ? 'AI & MCP' : skill.category}
                  </div>
                </div>
              </div>

              {/* Learning Tag (clean unboxed monospace indicator) */}
              {skill.isLearning && (
                <span className="font-mono text-[10px] text-amber-300/90 tracking-wide border-b border-amber-400/40 pb-0.5">
                  Learning
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Learning Focus Banner */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-teal-500/5 via-violet-500/5 to-transparent border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
            <div className="text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">Active Focus:</span> Data Structures &amp; Algorithms in C++, plus coursework in IoT &amp; Cybersecurity.
            </div>
          </div>
          <a
            href="#learning"
            className="text-xs font-mono text-teal-300 hover:text-teal-200 flex items-center gap-1 shrink-0"
          >
            <span>View Learning Checklist</span>
            <span>&rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
};
