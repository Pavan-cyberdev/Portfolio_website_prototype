import React, { useState } from 'react';
import { portfolioContent, type LearningItem } from '../content';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

export const NowSection: React.FC = () => {
  const hackathon = portfolioContent.hackathon;
  const [learningFilter, setLearningFilter] = useState<'all' | 'DSA in C++' | 'Cybersecurity & IoT'>('all');
  const [checklist, setChecklist] = useState<LearningItem[]>(portfolioContent.learningJourney.items);

  const toggleStatus = (id: string) => {
    setChecklist((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const next =
            item.status === 'completed'
              ? 'in-progress'
              : item.status === 'in-progress'
              ? 'planned'
              : 'completed';
          return { ...item, status: next };
        }
        return item;
      })
    );
  };

  const filteredItems = learningFilter === 'all'
    ? checklist
    : checklist.filter((item) => item.category === learningFilter);

  const completedCount = checklist.filter((i) => i.status === 'completed').length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <section id="now" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Chapter 03 Header Lockup */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs uppercase tracking-widest text-slate-500">
            <span className="text-accent">CHAPTER 03 / MOMENTUM</span>
            <span>PS / 03</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
            <div className="lg:col-span-8 space-y-2">
              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block">
                LEARNING IN PUBLIC &amp; CURRENT MILESTONES
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                <span className="italic text-accent font-normal">Right </span>now.
              </h2>
            </div>
            <div className="lg:col-span-4 font-mono text-xs text-slate-400 uppercase tracking-wider space-y-1 self-end">
              <div>STRENGTHENING FOUNDATIONS.</div>
              <div className="text-accent">BUILDING DAILY MOMENTUM.</div>
            </div>
          </div>
        </div>

        {/* 2-Column Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Numbered Editorial Ledger */}
          <div className="lg:col-span-5 space-y-8">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-500">
              NOTES FROM THE JOURNEY / 2026
            </div>

            {/* Note 01: Hackurity 2026 */}
            <article className="border-b border-white/[0.08] pb-6 space-y-3 group">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent">01 / HACKATHON</span>
                <span className="text-slate-500">OCT 2026</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white group-hover:text-accent transition-colors">
                Hackurity 2026 at REVA University
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                {hackathon.honestReflection}
              </p>
              <div className="pt-2 flex items-center justify-between font-mono text-xs text-slate-500">
                <span>Team: Bro Code · Track A</span>
                <span className="text-accent font-semibold">Showcase Participant</span>
              </div>
            </article>

            {/* Note 02: Certifications Placeholders */}
            <article className="border-b border-white/[0.08] pb-6 space-y-3 group">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent-secondary">02 / CREDENTIALS</span>
                <span className="text-slate-500">2025–2026</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-white">
                Foundations Coursework
              </h3>
              <div className="space-y-3 font-mono text-xs">
                {portfolioContent.certifications.map((c) => (
                  <div key={c.id} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.08] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-200 font-semibold">{c.title}</span>
                      <span className="text-[10px] text-accent-secondary">[Placeholder]</span>
                    </div>
                    <div className="text-slate-500">Issuer: {c.issuer}</div>
                  </div>
                ))}
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Tip: Update your certificate links in <code className="text-accent">src/content.ts</code>.
              </div>
            </article>

            {/* Note 03: University Academics */}
            <article className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-accent">03 / ACADEMICS</span>
                <span className="text-slate-500">1ST YEAR</span>
              </div>
              <h3 className="font-display text-lg text-white">
                B.Tech in IoT &amp; Cybersecurity
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Coursework covering digital electronics, network protocols, Linux system administration, and C/C++ memory architectures.
              </p>
            </article>

          </div>

          {/* Right Column: Interactive DSA & Systems Checklist */}
          <div className="lg:col-span-7 space-y-6 rounded-2xl bg-[#0b0f16] border border-white/[0.12] p-6 sm:p-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-widest text-accent">
                  MILESTONE PROGRESS TRACKER
                </div>
                <h3 className="font-display text-2xl text-white">
                  DSA in C++ &amp; Security Syllabus
                </h3>
              </div>

              {/* Category Segmented Buttons */}
              <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-lg border border-white/5">
                {(['all', 'DSA in C++', 'Cybersecurity & IoT'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setLearningFilter(cat)}
                    className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
                      learningFilter === cat
                        ? 'bg-accent-soft text-accent border border-accent'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat === 'DSA in C++' ? 'DSA (C++)' : 'Cyber/IoT'}
                  </button>
                ))}
              </div>
            </div>

            {/* Progress summary bar */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Milestones Mastered:</span>
                <span className="text-accent font-bold tabular-nums">
                  {completedCount} of {checklist.length} ({progressPercent}%)
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Checklist items */}
            <div className="space-y-2.5">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleStatus(item.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                    item.status === 'completed'
                      ? 'bg-accent-soft border-accent'
                      : item.status === 'in-progress'
                      ? 'bg-white/[0.03] border-accent/40'
                      : 'bg-white/[0.01] border-white/5 hover:border-white/15'
                  }`}
                  title="Click to toggle status"
                >
                  <div className="mt-0.5 shrink-0">
                    {item.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                    ) : item.status === 'in-progress' ? (
                      <Clock className="w-4 h-4 text-accent-secondary" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-600" />
                    )}
                  </div>

                  <div className="space-y-1 flex-1 min-w-0 font-sans">
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-xs sm:text-sm font-medium ${item.status === 'completed' ? 'text-slate-200 line-through decoration-white/40' : 'text-white'}`}>
                        {item.title}
                      </span>
                      <span className={`text-[10px] font-mono uppercase tracking-wider shrink-0 ${item.status === 'completed' ? 'text-accent' : item.status === 'in-progress' ? 'text-accent-secondary' : 'text-slate-500'}`}>
                        {item.status.replace('-', ' ')}
                      </span>
                    </div>
                    {item.notes && (
                      <p className="text-xs text-slate-400 leading-normal">
                        {item.notes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-white/[0.05]">
              Click any item above to toggle status (Completed &rarr; In Progress &rarr; Planned).
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
