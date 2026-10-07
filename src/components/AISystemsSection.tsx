import React from 'react';

export const AISystemsSection: React.FC = () => {
  return (
    <section id="ai-systems" className="py-16">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
            INTELLIGENCE INFRASTRUCTURE
          </span>
          <span className="w-8 h-px bg-[var(--accent)]/40"></span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#e3e1e9] tracking-tight">
          AI Systems I Build
        </h2>
        <p className="text-base text-[#bbcabf] max-w-2xl leading-relaxed">
          Engineered for cognitive determinism, high grounding accuracy, and
          production resilience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 1. Autonomous Agents */}
        <div className="bg-[#0d0e13] border border-white/[0.07] p-5 rounded-xl flex flex-col justify-between hover:border-[var(--accent)]/50 hover:bg-[#1a1b21] transition-all">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded bg-[#1e1f25] border border-white/[0.06] flex items-center justify-center text-[color:var(--accent)]">
              <span className="material-symbols-outlined text-[20px]">
                smart_toy
              </span>
            </div>
            <h3 className="font-sans text-lg font-semibold text-[#e3e1e9]">
              Autonomous Agents
            </h3>
            <p className="text-xs text-[#bbcabf] leading-relaxed">
              Multi-step, cyclical reasoning loops engineered with LangGraph.
              Incorporates memory buffers, reflection, and rollback state recovery.
            </p>
          </div>
          <div className="bg-[#1e1f25] border border-white/[0.04] p-2.5 rounded mt-5 font-mono text-xs text-[color:var(--accent)]">
            Plan → Act → Observe → Refine
          </div>
        </div>

        {/* 2. Production RAG */}
        <div className="bg-[#0d0e13] border border-white/[0.07] p-5 rounded-xl flex flex-col justify-between hover:border-[var(--accent-soft)]/50 hover:bg-[#1a1b21] transition-all">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded bg-[#1e1f25] border border-white/[0.06] flex items-center justify-center text-[color:var(--accent-soft)]">
              <span className="material-symbols-outlined text-[20px]">
                menu_book
              </span>
            </div>
            <h3 className="font-sans text-lg font-semibold text-[#e3e1e9]">
              Production RAG
            </h3>
            <p className="text-xs text-[#bbcabf] leading-relaxed">
              Document parsing, chunk deduplication, context injection, and
              reciprocal rank fusion to eliminate hallucinations in enterprise data.
            </p>
          </div>
          <div className="bg-[#1e1f25] border border-white/[0.04] p-2.5 rounded mt-5 font-mono text-xs text-[color:var(--accent-soft)]">
            Docs → Chunks → Vector → Synth
          </div>
        </div>

        {/* 3. Vector Search */}
        <div className="bg-[#0d0e13] border border-white/[0.07] p-5 rounded-xl flex flex-col justify-between hover:border-[var(--accent)]/50 hover:bg-[#1a1b21] transition-all">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded bg-[#1e1f25] border border-white/[0.06] flex items-center justify-center text-[color:var(--accent)]">
              <span className="material-symbols-outlined text-[20px]">grain</span>
            </div>
            <h3 className="font-sans text-lg font-semibold text-[#e3e1e9]">
              Vector Search
            </h3>
            <p className="text-xs text-[#bbcabf] leading-relaxed">
              High-speed similarity indexing with pgVector and HNSW graphs.
              Tuned distance metrics and indexing parameters for sub-20ms queries.
            </p>
          </div>
          <div className="bg-[#1e1f25] border border-white/[0.04] p-2.5 rounded mt-5 font-mono text-xs text-[color:var(--accent)]">
            pgVector HNSW (m=16, ef=64)
          </div>
        </div>

        {/* 4. End-to-End Pipelines */}
        <div className="bg-[#0d0e13] border border-white/[0.07] p-5 rounded-xl flex flex-col justify-between hover:border-[var(--accent-soft)]/50 hover:bg-[#1a1b21] transition-all">
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded bg-[#1e1f25] border border-white/[0.06] flex items-center justify-center text-[color:var(--accent-soft)]">
              <span className="material-symbols-outlined text-[20px]">
                linear_scale
              </span>
            </div>
            <h3 className="font-sans text-lg font-semibold text-[#e3e1e9]">
              End-to-End Pipelines
            </h3>
            <p className="text-xs text-[#bbcabf] leading-relaxed">
              Complete automated pipelines from continuous document ingestion to
              model deployment, structured output validation, and telemetry.
            </p>
          </div>
          <div className="bg-[#1e1f25] border border-white/[0.04] p-2.5 rounded mt-5 font-mono text-xs text-[color:var(--accent-soft)]">
            Ingest → Embed → Stream → Log
          </div>
        </div>
      </div>
    </section>
  );
};
