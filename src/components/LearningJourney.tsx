import React, { useState } from 'react';
import { portfolioContent, type LearningItem } from '../content';
import { CheckCircle2, Circle, Clock, CheckSquare, Sparkles } from 'lucide-react';

export const LearningJourney: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'DSA in C++' | 'Cybersecurity & IoT'>('all');
  const [items, setItems] = useState<LearningItem[]>(portfolioContent.learningJourney.items);

  const toggleItemStatus = (id: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const nextStatus =
            item.status === 'completed'
              ? 'in-progress'
              : item.status === 'in-progress'
              ? 'planned'
              : 'completed';
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
  };

  const filteredItems = filter === 'all'
    ? items
    : items.filter((item) => item.category === filter);

  const completedCount = items.filter((i) => i.status === 'completed').length;
  const inProgressCount = items.filter((i) => i.status === 'in-progress').length;
  const progressPercent = Math.round((completedCount / items.length) * 100);

  return (
    <section id="learning" className="py-20 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-mono text-teal-400">
              Active Milestones · Daily Growth
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">
              Learning Journey &amp; DSA Checklist
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              {portfolioContent.learningJourney.tagline}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121821] border border-white/10 rounded-lg shrink-0">
            {(['all', 'DSA in C++', 'Cybersecurity & IoT'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  filter === cat
                    ? 'bg-teal-400/20 text-teal-300 border border-teal-400/30'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat === 'all' ? 'All Milestones' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Progress summary bar */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#121821] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">Foundational Milestones Completed:</span>
              <span className="text-teal-300 font-bold tabular-nums">
                {completedCount} / {items.length} ({progressPercent}%)
              </span>
            </div>
            {/* Progress track */}
            <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-400 to-violet-400 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-400 shrink-0">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              {completedCount} Mastered
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              {inProgressCount} In Progress
            </span>
          </div>
        </div>

        {/* Checklist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleItemStatus(item.id)}
              className={`p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 cursor-pointer select-none group ${
                item.status === 'completed'
                  ? 'bg-teal-500/[0.04] border-teal-500/20 hover:border-teal-500/40'
                  : item.status === 'in-progress'
                  ? 'bg-amber-500/[0.04] border-amber-500/20 hover:border-amber-500/40'
                  : 'bg-[#121821] border-white/10 hover:border-white/20'
              }`}
              title="Click to toggle status (Completed -> In Progress -> Planned)"
            >
              <div className="mt-0.5 shrink-0">
                {item.status === 'completed' ? (
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                ) : item.status === 'in-progress' ? (
                  <Clock className="w-4 h-4 text-amber-400" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition-colors" />
                )}
              </div>

              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4
                    className={`text-sm font-medium transition-colors ${
                      item.status === 'completed'
                        ? 'text-slate-200 line-through decoration-teal-500/50'
                        : 'text-white'
                    }`}
                  >
                    {item.title}
                  </h4>
                  <span
                    className={`text-[10px] font-mono shrink-0 uppercase tracking-wider ${
                      item.status === 'completed'
                        ? 'text-teal-400'
                        : item.status === 'in-progress'
                        ? 'text-amber-400'
                        : 'text-slate-500'
                    }`}
                  >
                    {item.status.replace('-', ' ')}
                  </span>
                </div>

                {item.notes && (
                  <p className="text-xs text-slate-400 leading-normal">
                    {item.notes}
                  </p>
                )}

                <div className="text-[10px] font-mono text-slate-500">
                  {item.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-xs text-slate-500 font-mono text-center">
          Tip: You can add new DSA topics or coursework milestones directly in <code className="text-teal-300">src/content.ts</code>.
        </div>

      </div>
    </section>
  );
};
