import React, { useState } from 'react';
import { BLUEPRINT_TIERS } from '../data/portfolioData';
import { BlueprintTier } from '../types';

export const ArchitectureSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  return (
    <section id="architecture" className="py-16">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
            ARCHITECTURAL BLUEPRINT
          </span>
          <span className="w-8 h-px bg-[var(--accent)]/40"></span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#e3e1e9] tracking-tight">
          How I Build
        </h2>
        <p className="text-base text-[#bbcabf] max-w-3xl leading-relaxed">
          Architected for high throughput, sub-100ms vector latency, and
          fault-tolerant agent execution across heterogeneous stacks.
        </p>
      </div>

      {/* Multi-tier Blueprint Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BLUEPRINT_TIERS.map((tier: BlueprintTier, idx: number) => {
          const isSelected = selectedTier === idx;
          return (
            <div
              key={tier.tierNumber}
              onClick={() => setSelectedTier(isSelected ? null : idx)}
              className={`bg-[#0d0e13] border p-5 rounded-xl flex flex-col justify-between transition-all cursor-pointer relative overflow-hidden group ${
                isSelected
                  ? 'border-[var(--accent)] shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_15%,transparent)] bg-[#1a1b21]'
                  : 'border-white/[0.07] hover:border-white/[0.15] hover:bg-[#1a1b21]'
              }`}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${
                      tier.metricColor === 'primary'
                        ? 'text-[color:var(--accent)]'
                        : 'text-[color:var(--accent-soft)]'
                    }`}
                  >
                    {tier.tierNumber}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      tier.metricColor === 'primary'
                        ? 'bg-[var(--accent)]'
                        : 'bg-[var(--accent-soft)]'
                    } ${idx === 2 ? 'animate-pulse' : ''}`}
                  ></span>
                </div>

                <h3 className="font-sans text-lg font-semibold text-[#e3e1e9]">
                  {tier.title}
                </h3>

                <p className="text-xs text-[#bbcabf] leading-relaxed">
                  {tier.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {tier.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Metric Pill */}
              <div className="mt-5 pt-3 bg-[#292a2f]/40 border border-white/[0.04] p-2.5 rounded flex justify-between items-center font-mono text-xs text-[#bbcabf]">
                <span>{tier.metricLabel}</span>
                <span
                  className={`font-semibold ${
                    tier.metricColor === 'primary'
                      ? 'text-[color:var(--accent)]'
                      : 'text-[color:var(--accent-soft)]'
                  }`}
                >
                  {tier.metricValue}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
