import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-10 relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text Intro */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                PHILOSOPHY
              </span>
              <span className="w-6 h-px bg-[var(--accent)]/40"></span>
              <span className="font-mono text-[11px] text-[#bbcabf] uppercase tracking-wider">
                ENGINEERING WITH PURPOSE
              </span>
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#e3e1e9] tracking-tight leading-tight">
              Turning complex requirements into reliable, deterministic products.
            </h2>

            <p className="text-base text-[#bbcabf] leading-relaxed">
              Results-driven Full-Stack Developer with experience building
              scalable web applications and AI-powered systems. I work across
              frontend, backend, databases and AI infrastructure, ensuring every
              token, query, and microservice runs with maximum performance and
              minimal latency.
            </p>

            {/* Competency Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="font-mono text-xs bg-[#292a2f] border border-white/[0.06] text-[color:var(--accent)] px-3 py-1 rounded">
                Full-Stack Development
              </span>
              <span className="font-mono text-xs bg-[#292a2f] border border-white/[0.06] text-[color:var(--accent-soft)] px-3 py-1 rounded">
                AI Agents & LangGraph
              </span>
              <span className="font-mono text-xs bg-[#292a2f] border border-white/[0.06] text-[#e3e1e9] px-3 py-1 rounded">
                RAG Systems
              </span>
              <span className="font-mono text-xs bg-[#292a2f] border border-white/[0.06] text-[#e3e1e9] px-3 py-1 rounded">
                REST & Fast APIs
              </span>
              <span className="font-mono text-xs bg-[#292a2f] border border-white/[0.06] text-[#e3e1e9] px-3 py-1 rounded">
                Database Tuning (pgVector)
              </span>
              <span className="font-mono text-xs bg-[#292a2f] border border-white/[0.06] text-[color:var(--accent)] px-3 py-1 rounded">
                Playwright CI/CD
              </span>
            </div>
          </div>

          {/* Animated Metric Counters Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="bg-[#1e1f25] border border-white/[0.06] p-4 rounded-xl flex flex-col hover:border-[var(--accent)]/40 transition-colors">
              <span className="text-3xl lg:text-4xl font-bold text-[color:var(--accent)] font-mono">
                2+
              </span>
              <span className="font-mono text-xs text-[#e3e1e9] font-medium mt-1">
                Years Production
              </span>
              <span className="text-xs text-[#bbcabf] mt-0.5">
                Live enterprise systems
              </span>
            </div>

            <div className="bg-[#1e1f25] border border-white/[0.06] p-4 rounded-xl flex flex-col hover:border-[var(--accent-soft)]/40 transition-colors">
              <span className="text-3xl lg:text-4xl font-bold text-[color:var(--accent-soft)] font-mono">
                3–5
              </span>
              <span className="font-mono text-xs text-[#e3e1e9] font-medium mt-1">
                Enterprise Apps
              </span>
              <span className="text-xs text-[#bbcabf] mt-0.5">
                Built from scratch
              </span>
            </div>

            <div className="bg-[#1e1f25] border border-white/[0.06] p-4 rounded-xl flex flex-col hover:border-[var(--accent)]/40 transition-colors">
              <span className="text-3xl lg:text-4xl font-bold text-[color:var(--accent)] font-mono">
                40%
              </span>
              <span className="font-mono text-xs text-[#e3e1e9] font-medium mt-1">
                RAG Accuracy Boost
              </span>
              <span className="text-xs text-[#bbcabf] mt-0.5">
                Hybrid vector rerank
              </span>
            </div>

            <div className="bg-[#1e1f25] border border-white/[0.06] p-4 rounded-xl flex flex-col hover:border-[var(--accent-soft)]/40 transition-colors">
              <span className="text-3xl lg:text-4xl font-bold text-[color:var(--accent-soft)] font-mono">
                30%
              </span>
              <span className="font-mono text-xs text-[#e3e1e9] font-medium mt-1">
                Faster Response
              </span>
              <span className="text-xs text-[#bbcabf] mt-0.5">
                Redis semantic cache
              </span>
            </div>

            <div className="col-span-2 bg-[#1e1f25] border border-white/[0.06] p-4 rounded-xl flex items-center justify-between hover:border-[var(--accent)]/40 transition-colors">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-[color:var(--accent)] font-mono">
                  40–60%
                </span>
                <span className="font-mono text-xs text-[#e3e1e9]">
                  Automation Efficiency Gain
                </span>
              </div>
              <span className="material-symbols-outlined text-[color:var(--accent)] text-[32px]">
                speed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
