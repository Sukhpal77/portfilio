import React, { useState } from 'react';
import { TECH_ITEMS } from '../data/portfolioData';
import { TechItem } from '../types';

export const TechUniverseSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechItem>(
    TECH_ITEMS.find((t) => t.id === 'langgraph') || TECH_ITEMS[0]
  );

  const frontendItems = TECH_ITEMS.filter((t) => t.category === 'frontend');
  const backendItems = TECH_ITEMS.filter((t) => t.category === 'backend');
  const aiItems = TECH_ITEMS.filter((t) => t.category === 'ai');
  const infraItems = TECH_ITEMS.filter((t) => t.category === 'infra');

  const renderChip = (item: TechItem) => {
    const isSelected = selectedTech.id === item.id;
    return (
      <button
        key={item.id}
        onClick={() => setSelectedTech(item)}
        onMouseEnter={() => setSelectedTech(item)}
        className={`group flex items-center gap-2 px-3 py-1.5 rounded transition-all text-left border ${
          isSelected
            ? 'bg-[#292a2f] border-[var(--accent)] shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_20%,transparent)]'
            : 'bg-[#1e1f25] border-white/[0.04] hover:bg-[#292a2f] hover:border-white/[0.1]'
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            item.category === 'ai' ? 'animate-pulse' : ''
          }`}
          style={{ backgroundColor: item.statusColor || 'var(--accent)' }}
        ></span>
        <span
          className={`font-mono text-xs ${
            isSelected || item.category === 'ai'
              ? 'text-[color:var(--accent)] font-medium'
              : 'text-[#e3e1e9]'
          }`}
        >
          {item.name}
        </span>
      </button>
    );
  };

  return (
    <section id="tech-universe" className="py-16">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
            ENGINEERING ECOSYSTEM
          </span>
          <span className="w-8 h-px bg-[var(--accent)]/40"></span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#e3e1e9] tracking-tight">
          Technology Universe
        </h2>
        <p className="text-base text-[#bbcabf] max-w-2xl leading-relaxed">
          Hover over or tap any runtime component to inspect its architecture utility,
          library role, and production implementation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Tech Stacks Groups */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* Frontend */}
          <div className="bg-[#0d0e13] border border-white/[0.07] p-5 rounded-xl">
            <span className="font-mono text-[11px] text-[#bbcabf] uppercase tracking-wider mb-3 block">
              Frontend Engineering
            </span>
            <div className="flex flex-wrap gap-2.5">
              {frontendItems.map(renderChip)}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-[#0d0e13] border border-white/[0.07] p-5 rounded-xl">
            <span className="font-mono text-[11px] text-[#bbcabf] uppercase tracking-wider mb-3 block">
              Backend & Runtime Systems
            </span>
            <div className="flex flex-wrap gap-2.5">
              {backendItems.map(renderChip)}
            </div>
          </div>

          {/* AI Engineering */}
          <div className="bg-[#0d0e13] border border-white/[0.07] p-5 rounded-xl">
            <span className="font-mono text-[11px] text-[color:var(--accent)] uppercase tracking-wider mb-3 block">
              AI Engineering & Agentic Systems
            </span>
            <div className="flex flex-wrap gap-2.5">
              {aiItems.map(renderChip)}
            </div>
          </div>

          {/* Databases & Automation */}
          <div className="bg-[#0d0e13] border border-white/[0.07] p-5 rounded-xl">
            <span className="font-mono text-[11px] text-[#bbcabf] uppercase tracking-wider mb-3 block">
              Databases, DevOps & Automation
            </span>
            <div className="flex flex-wrap gap-2.5">
              {infraItems.map(renderChip)}
            </div>
          </div>
        </div>

        {/* Live Floating Inspector HUD */}
        <div className="lg:col-span-4 flex flex-col">
          <div className="bg-[#0d0e13] border border-white/[0.08] p-5 rounded-xl sticky top-24 flex flex-col gap-4 shadow-2xl">
            <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
              <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                INSPECTOR HUD
              </span>
              <span className="font-mono text-[10px] text-[#bbcabf] bg-[#1e1f25] px-2 py-0.5 rounded">
                LIVE PROBE
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                SELECTED NODE
              </span>
              <h4 className="font-sans text-2xl text-[#e3e1e9] font-semibold">
                {selectedTech.name}
              </h4>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                WHAT I USE IT FOR
              </span>
              <p className="text-sm text-[#bbcabf] leading-relaxed">
                {selectedTech.use}
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                EXAMPLE PRODUCTION IMPLEMENTATION
              </span>
              <div className="bg-[#1e1f25] border border-white/[0.06] p-3 rounded">
                <span className="font-mono text-xs text-[color:var(--accent)] font-medium">
                  {selectedTech.project}
                </span>
              </div>
            </div>

            <div className="pt-1">
              <span className="font-mono text-[11px] text-[#bbcabf] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]">
                  touch_app
                </span>
                Tap any technology badge to update inspector
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
