import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0d0e13] border-t border-white/[0.06] mt-16">
      <div className="page-container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <span className="font-mono text-sm text-[color:var(--accent)] font-semibold">
              ~/sukhpal.dev
            </span>
            <span className="font-mono text-[10px] bg-[#292a2f] border border-white/[0.04] text-[color:var(--accent)] px-2.5 py-0.5 rounded-full uppercase">
              System Active · Latency 12ms
            </span>
          </div>
          <p className="text-xs text-[#bbcabf] mt-1">
            Engineered for deterministic execution, high-concurrency systems, and
            scalable intelligence.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#bbcabf]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#6ffbbe]"></span>
            <span>Core: v4.8.2-prod</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-soft)]"></span>
            <span>Inference: Online</span>
          </div>

          <span>© 2025 Sukhpal Singh. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            title="Scroll to top"
            className="p-1.5 bg-[#1e1f25] hover:bg-[#292a2f] hover:text-[color:var(--accent)] rounded transition-colors ml-2"
          >
            <span className="material-symbols-outlined text-[16px]">
              arrow_upward
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
