import React, { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

export type PaletteId = 'teal' | 'crimson' | 'amber' | 'cobalt' | 'emerald';

export interface PaletteOption {
  id: PaletteId;
  name: string;
  colorHex: string;
  secondaryHex: string;
}

export const PALETTES: PaletteOption[] = [
  { id: 'teal', name: 'Cyber Teal', colorHex: '#5eead4', secondaryHex: '#a78bfa' },
  { id: 'crimson', name: 'Crimson Iris', colorHex: '#ff3366', secondaryHex: '#fb923c' },
  { id: 'amber', name: 'Gold Matrix', colorHex: '#fbbf24', secondaryHex: '#f97316' },
  { id: 'cobalt', name: 'Ice Cobalt', colorHex: '#38bdf8', secondaryHex: '#818cf8' },
  { id: 'emerald', name: 'Zero-Trust', colorHex: '#10b981', secondaryHex: '#34d399' },
];

interface PaletteSwitcherProps {
  currentPalette: PaletteId;
  onSelectPalette: (id: PaletteId) => void;
}

export const PaletteSwitcher: React.FC<PaletteSwitcherProps> = ({
  currentPalette,
  onSelectPalette,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Palette Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change UI color combo"
        title="Change UI color combo"
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-mono text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
      >
        <span
          className="w-2.5 h-2.5 rounded-full inline-block shadow-sm"
          style={{
            backgroundColor:
              PALETTES.find((p) => p.id === currentPalette)?.colorHex || '#5eead4',
          }}
        />
        <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
          {PALETTES.find((p) => p.id === currentPalette)?.name.split(' ')[0]}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0b0f16] border border-white/15 p-2 shadow-2xl z-50 font-mono text-xs space-y-1 animate-in fade-in zoom-in-95 duration-150">
            <div className="px-2.5 py-1 text-[10px] uppercase tracking-widest text-slate-500 border-b border-white/5 mb-1">
              Select Accent Palette
            </div>
            {PALETTES.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSelectPalette(p.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg transition-colors text-left ${
                  currentPalette === p.id
                    ? 'bg-white/10 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full border border-white/20"
                    style={{ backgroundColor: p.colorHex }}
                  />
                  <span>{p.name}</span>
                </div>
                {currentPalette === p.id && (
                  <Check className="w-3.5 h-3.5 text-teal-300" style={{ color: p.colorHex }} />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
