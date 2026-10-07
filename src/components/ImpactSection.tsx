import React from 'react';
import { METRIC_CARDS } from '../data/portfolioData';
import { AnimatedMetric } from './AnimatedMetric';

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-16">
      <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-8 shadow-2xl">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
              TELEMETRY & METRICS
            </span>
            <span className="w-8 h-px bg-[var(--accent)]/40"></span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#e3e1e9] tracking-tight">
            Engineering Impact
          </h2>
          <p className="text-base text-[#bbcabf] max-w-2xl leading-relaxed">
            Empirical telemetry recorded across production deployments and
            automated test pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRIC_CARDS.map((card) => {
            const isPrimary = card.color === 'primary';
            return (
              <div
                key={card.number}
                className="bg-[#1e1f25] border border-white/[0.06] p-5 rounded-xl flex flex-col gap-3 hover:border-[var(--accent)]/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#bbcabf]">
                    {card.number} // {card.category}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[20px] ${
                      isPrimary ? 'text-[color:var(--accent)]' : 'text-[color:var(--accent-soft)]'
                    }`}
                  >
                    {card.icon}
                  </span>
                </div>

                <span
                  className={`text-4xl lg:text-5xl font-bold font-mono ${
                    isPrimary ? 'text-[color:var(--accent)]' : 'text-[color:var(--accent-soft)]'
                  }`}
                >
                  <AnimatedMetric value={card.value} />
                </span>

                <span className="text-sm font-semibold text-[#e3e1e9]">
                  {card.title}
                </span>

                <p className="font-mono text-xs text-[#bbcabf] leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
