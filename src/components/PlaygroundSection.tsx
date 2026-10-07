import React, { useState, useRef, useEffect } from 'react';

interface TraceLog {
  id: number;
  text: string;
  tag: string;
}

export const PlaygroundSection: React.FC = () => {
  const [query, setQuery] = useState(
    "What is the company's leave policy for medical emergencies?"
  );
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING TRACE...' | 'DONE in 410ms'>('IDLE');
  const [logs, setLogs] = useState<TraceLog[]>([]);
  const [showResponse, setShowResponse] = useState(false);
  const [responseAnswer, setResponseAnswer] = useState('');
  const [topK, setTopK] = useState(3);
  const [vectorDim, setVectorDim] = useState('1536');
  const [agentSteps, setAgentSteps] = useState(5);

  const timerRef = useRef<NodeJS.Timeout[]>([]);
  useEffect(() => () => { timerRef.current.forEach(clearTimeout); }, []);

  const sampleQueries = [
    "What is the company's leave policy for medical emergencies?",
    "How does LangGraph handle cyclic state rollback on validation failure?",
    "Show pgVector indexing benchmark with HNSW vs IVFFlat",
  ];

  const handleRunPipeline = () => {
    // Clear previous timers
    timerRef.current.forEach((t) => clearTimeout(t));
    timerRef.current = [];

    setIsRunning(true);
    setStatus('PROCESSING TRACE...');
    setShowResponse(false);
    setLogs([]);

    const steps = [
      {
        tag: '01',
        text: `[✓ 01] User Query Received & Tokenized (${Math.floor(query.split(' ').length * 1.35)} tokens)`,
        delay: 250,
      },
      {
        tag: '02',
        text: `[✓ 02] text-embedding-3-small generated (${vectorDim} dim dense vector)`,
        delay: 550,
      },
      {
        tag: '03',
        text: `[✓ 03] pgVector cosine similarity top-${topK} retrieved (cosine score: 0.942, latency: 14ms)`,
        delay: 850,
      },
      {
        tag: '04',
        text: `[✓ 04] LangGraph agent reasoning workflow executed (${Math.min(agentSteps, 2)} cycles, guardrails passed)`,
        delay: 1200,
      },
      {
        tag: '05',
        text: '[✓ 05] Streamed synthesized response verified & schema validated',
        delay: 1500,
      },
    ];

    steps.forEach((step, index) => {
      const t = setTimeout(() => {
        setLogs((prev) => [
          ...prev,
          { id: index, text: step.text, tag: step.tag },
        ]);

        if (index === steps.length - 1) {
          setStatus('DONE in 410ms');
          setIsRunning(false);
          setShowResponse(true);

          if (query.toLowerCase().includes('leave') || query.toLowerCase().includes('medical')) {
            setResponseAnswer(
              '"According to Section 4.2 of the Enterprise Operations Handbook: Employees are entitled to up to 14 consecutive medical leave days with manager notification and medical certification within 48 hours."'
            );
          } else if (query.toLowerCase().includes('langgraph') || query.toLowerCase().includes('cyclic')) {
            setResponseAnswer(
              '"LangGraph maintains a thread-safe PostgresSaver checkpoint on each state node transition. When a tool schema validation throws a ValidationError, the graph transitions to the \'replan\' node, rewinding state to t-1 and augmenting the prompt with compiler diagnostics."'
            );
          } else {
            setResponseAnswer(
              '"pgVector HNSW (m=16, ef_construction=64) yields 99.4% recall at 16ms query latency for 1536-dim OpenAI embeddings, outperforming IVFFlat by 3.2x without requiring background re-clustering."'
            );
          }
        }
      }, step.delay);
      timerRef.current.push(t);
    });
  };

  return (
    <div>
      <div>
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                INTERACTIVE RUNTIME
              </span>
              <span className="w-6 h-px bg-[var(--accent)]/40"></span>
              <span className="font-mono text-[11px] text-[#bbcabf] uppercase tracking-wider">
                INSIDE AN AI REQUEST
              </span>
            </div>
            <span className="font-mono text-[10px] text-[color:var(--accent-soft)] bg-[#1e1f25] border border-white/[0.06] px-2 py-0.5 rounded">
              SIMULATION ENGINE v1.2
            </span>
          </div>

          <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#e3e1e9]">
            AI Request Pipeline
          </h3>
          <p className="text-sm text-[#bbcabf] leading-relaxed">
            Execute the request below to simulate tokenization, vector retrieval,
            agent reasoning, and response generation in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Input Control */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <label className="font-mono text-[11px] text-[#bbcabf] uppercase tracking-wider">
              Input Prompt Query
            </label>
            <div className="bg-[#1e1f25] border border-white/[0.08] p-3 rounded focus-within:border-[var(--accent)]/60 transition-colors">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-[#e3e1e9] font-mono text-xs focus:outline-none"
                placeholder="Type query to trace through RAG pipeline..."
              />
            </div>

            {/* Quick Prompt Presets */}
            <div className="flex flex-col gap-1.5 pt-1">
              <span className="font-mono text-[10px] text-[#bbcabf] uppercase">
                Presets:
              </span>
              <div className="flex flex-col gap-1">
                {sampleQueries.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => setQuery(q)}
                    className="text-left font-mono text-[11px] text-[#bbcabf] hover:text-[color:var(--accent)] bg-[#1e1f25]/60 hover:bg-[#292a2f] p-1.5 rounded truncate transition-colors"
                  >
                    › {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 items-center justify-between pt-2">
              <span className="font-mono text-xs text-[#bbcabf]">
                Model: GPT-4o / Claude 3.5
              </span>
              <button
                disabled={isRunning}
                onClick={handleRunPipeline}
                className="inline-flex items-center gap-1.5 bg-[var(--accent)] text-[#071722] text-xs font-semibold px-4 py-2 rounded shadow-[0_0_16px_color-mix(in_srgb,var(--accent)_30%,transparent)] hover:bg-[var(--accent-soft)] transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              >
                <span className="material-symbols-outlined text-[16px]">
                  play_arrow
                </span>
                <span>{isRunning ? 'Tracing...' : 'Execute Pipeline'}</span>
              </button>
            </div>

            {/* Parameters Matrix */}
            <div className="bg-[#1e1f25] border border-white/[0.04] p-3 rounded flex flex-col gap-1.5 mt-1 font-mono text-xs">
              <div className="flex justify-between text-[#bbcabf]">
                <span>Vector Dimension:</span>
                <span className="text-[#e3e1e9]">{vectorDim} (Float32)</span>
              </div>
              <div className="flex justify-between text-[#bbcabf]">
                <span>Distance Metric:</span>
                <span className="text-[#e3e1e9]">Cosine (pgVector)</span>
              </div>
              <div className="flex justify-between text-[#bbcabf]">
                <span>Agent Max Steps:</span>
                <span className="text-[#e3e1e9]">{agentSteps} Iterations</span>
              </div>
              <div className="flex justify-between text-[#bbcabf]">
                <span>Context Top-K:</span>
                <span className="text-[color:var(--accent)]">{topK} Chunks</span>
              </div>
            </div>
          </div>

          {/* Right: Animated Trace Output Window */}
          <div className="lg:col-span-7 bg-[#1e1f25] border border-white/[0.08] p-5 rounded-xl flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span className="font-mono text-xs text-[color:var(--accent)] font-semibold">
                ~/runtime/execution.log
              </span>
              <span
                className={`font-mono text-[10px] font-semibold ${
                  status === 'IDLE'
                    ? 'text-[#bbcabf]'
                    : status.includes('DONE')
                    ? 'text-[color:var(--accent-soft)]'
                    : 'text-[color:var(--accent)] animate-pulse'
                }`}
              >
                {status}
              </span>
            </div>

            {/* Trace Steps List */}
            <div className="flex flex-col gap-2 font-mono text-xs">
              {logs.length === 0 ? (
                <div className="text-[#bbcabf] flex items-center gap-2 py-4">
                  <span className="text-[color:var(--accent)] font-bold">●</span>
                  <span>
                    System standby. Click "Execute Pipeline" to inspect
                    step-by-step resolution.
                  </span>
                </div>
              ) : (
                logs.map((log) => (
                  <div
                    key={log.id}
                    className="text-[color:var(--accent)] flex items-center gap-2 font-mono animate-fade-in"
                  >
                    <span className="text-[color:var(--accent-soft)]">▶</span>
                    <span>{log.text}</span>
                  </div>
                ))
              )}
            </div>

            {/* Synthesized Response Container */}
            {showResponse && (
              <div className="bg-[#292a2f] p-3 rounded border-l-2 border-[var(--accent)] flex flex-col gap-1.5 mt-2 animate-fade-in">
                <span className="font-mono text-[10px] text-[color:var(--accent)] uppercase font-bold tracking-wider">
                  Synthesized Answer (Streamed in 410ms)
                </span>
                <p className="text-xs text-[#e3e1e9] leading-relaxed">
                  {responseAnswer}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
