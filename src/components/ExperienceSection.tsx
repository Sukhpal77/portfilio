import React from 'react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
            PROFESSIONAL TRACK
          </span>
          <span className="w-8 h-px bg-[var(--accent)]/40"></span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#e3e1e9] tracking-tight">
          Experience
        </h2>
        <p className="text-base text-[#bbcabf] max-w-2xl leading-relaxed">
          Hands-on systems delivery in commercial production environments.
        </p>
      </div>

      <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-8 shadow-2xl flex flex-col gap-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-white/[0.06] pb-5">
          <div className="flex flex-col">
            <h3 className="font-sans text-2xl text-[#e3e1e9] font-semibold">
              Full-Stack Developer
            </h3>
            <span className="text-sm text-[color:var(--accent)] font-medium">
              Aerin IT Services Pvt. Ltd.
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] bg-[#1e1f25] border border-white/[0.04] text-[color:var(--accent-soft)] px-3 py-1 rounded">
              August 2024 – Present
            </span>
            <span className="font-mono text-[10px] bg-[#292a2f] text-[#bbcabf] px-3 py-1 rounded">
              Full-time
            </span>
          </div>
        </div>

        {/* Detailed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 flex flex-col gap-3">
            <p className="text-sm text-[#bbcabf] leading-relaxed">
              Spearheading the engineering of production AI agent systems,
              scalable web applications, and database optimizations across
              full-stack architectures.
            </p>

            <ul className="flex flex-col gap-2.5 text-xs text-[#bbcabf] pt-1">
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[color:var(--accent)] text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Engineered autonomous multi-agent workflows using LangGraph and
                  LangChain, integrating state recovery and structured output schemas.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[color:var(--accent)] text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Implemented enterprise RAG pipelines with PostgreSQL/pgVector
                  and Redis caching, cutting average semantic query latency by 30%.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[color:var(--accent)] text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Built robust full-stack modules for core HRMS applications
                  including RBAC, automated payroll engines, and real-time attendance streams.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[color:var(--accent)] text-[18px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>
                  Authored end-to-end automated test suites utilizing Playwright,
                  achieving a 40–60% reduction in manual verification overhead.
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 bg-[#1e1f25] border border-white/[0.06] p-5 rounded-xl flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-semibold text-[color:var(--accent-soft)] uppercase tracking-wider">
                KEY IMPACT DELIVERED
              </span>
              <div className="flex flex-col gap-3 pt-2 font-mono text-xs">
                <div>
                  <span className="text-[#bbcabf] block text-[11px]">
                    Accuracy Gain:
                  </span>
                  <span className="text-[color:var(--accent)] font-bold">
                    +40% Hybrid Retrieval
                  </span>
                </div>
                <div>
                  <span className="text-[#bbcabf] block text-[11px]">
                    Query Latency:
                  </span>
                  <span className="text-[color:var(--accent-soft)] font-bold">
                    -30% with Redis Caching
                  </span>
                </div>
                <div>
                  <span className="text-[#bbcabf] block text-[11px]">
                    Automation:
                  </span>
                  <span className="text-[#e3e1e9] font-bold">
                    40–60% Playwright Test Speed
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.04]">
              <span className="font-mono text-[10px] text-[color:var(--accent)] flex items-center gap-1.5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
                Active Production Role
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
