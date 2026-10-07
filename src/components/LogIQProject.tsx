import React from 'react';

const stack = ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgVector', 'Redis', 'scikit-learn', 'Docker'];
const capabilities = [
  { icon: 'query_stats', title: 'Anomaly detection', detail: 'Rules, Z-score, EWMA, and Isolation Forest identify unusual service metrics.' },
  { icon: 'psychology', title: 'AI incident investigation', detail: 'OpenAI or Gemini analyzes evidence and retrieves similar incidents to suggest likely causes and fixes.' },
  { icon: 'shield', title: 'Multi-tenant SaaS', detail: 'Separate customer and admin portals with scoped ingestion keys, team roles, and usage limits.' },
  { icon: 'history', title: 'Durable collection & history', detail: 'An independent agent queues telemetry in SQLite, retries delivery, and supports incident feedback and historical summaries.' },
];

export function LogIQProject({ onOpenDemo }: { onOpenDemo: () => void }) {
  return (
    <article id="project-logiq" className="scroll-mt-[88px] bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-8 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
            <span className="text-[color:var(--accent)] font-bold">PROJECT 03</span>
            <span className="bg-[#292a2f] px-2 py-1 rounded text-[color:var(--accent-soft)]">AI OBSERVABILITY / SAAS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">LogIQ</h3>
          <p className="text-base text-[color:var(--accent)] font-medium">From raw telemetry to actionable incident insights.</p>
          <p className="text-sm text-[#bbcabf] leading-relaxed">
            An AI-powered observability platform that collects application logs and metrics,
            detects anomalies, and investigates likely root causes using service context
            and retrieval over past incidents. Customer workspaces bring telemetry,
            incident feedback, usage tracking, and historical insights into one place.
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stack.map((technology) => (
              <span key={technology} className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-1 rounded text-[#e3e1e9]">{technology}</span>
            ))}
          </div>
          <button onClick={onOpenDemo} className="self-start bg-[var(--accent)] text-[#071722] text-sm font-semibold px-4 py-2.5 rounded-lg">Try LogIQ in the Systems Lab →</button>
          <a href="https://github.com/sukhpal77" target="_blank" rel="noreferrer" className="self-start inline-flex items-center gap-2 text-sm text-[color:var(--accent)] hover:underline">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">code</span>
            GitHub Profile <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="lg:col-span-7 flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map(({ icon, title, detail }) => (
              <div key={title} className="bg-[#1e1f25] border border-white/[0.06] rounded-xl p-4">
                <span className="material-symbols-outlined text-[color:var(--accent)] text-[22px] mb-2 block" aria-hidden="true">{icon}</span>
                <h4 className="text-sm font-semibold mb-2">{title}</h4>
                <p className="text-xs text-[#bbcabf] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1e1f25] border border-white/[0.06] rounded-xl p-4">
            <p className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider mb-3">Investigation flow</p>
            <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Collect telemetry', 'Detect anomalies', 'Investigate causes', 'Review & learn'].map((stage, index) => (
                <li key={stage} className="font-mono text-[11px] rounded-lg bg-[#292a2f] p-3">
                  <span className="block text-[color:var(--accent)] mb-1">0{index + 1}</span>
                  <span className="text-[#e3e1e9]">{stage}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}
