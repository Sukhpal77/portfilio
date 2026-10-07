import React, { useState, useEffect } from 'react';
import { ROLES, SYSTEM_NODES } from '../data/portfolioData';
import { SystemNode } from '../types';
import { PipelineConnector } from './PipelineConnector';

interface HeroSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResume,
  onOpenContact,
  onSelectProject,
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeNode, setActiveNode] = useState<SystemNode>(SYSTEM_NODES[0]);
  const [isHoveringNode, setIsHoveringNode] = useState(false);

  // Ticker cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Trace the pipeline automatically, pausing while a visitor inspects a node.
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setInterval> | undefined;
    const updateAnimation = () => {
      clearInterval(timer);
      if (isHoveringNode || preference.matches) return;
      timer = setInterval(() => {
        setActiveNode((previous) => SYSTEM_NODES[(SYSTEM_NODES.findIndex((node) => node.id === previous.id) + 1) % SYSTEM_NODES.length]);
      }, 1800);
    };
    updateAnimation();
    preference.addEventListener('change', updateAnimation);
    return () => { clearInterval(timer); preference.removeEventListener('change', updateAnimation); };
  }, [isHoveringNode]);

  return (
    <div className="chromatic-hero relative w-full overflow-hidden">
      {/* Top Ambient Glow Aura */}
      <div className="chromatic-glow-primary absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[var(--accent)]/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="chromatic-glow-secondary absolute top-60 right-0 w-[420px] h-[320px] bg-[var(--accent-soft)]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <section id="home" className="relative pt-8 pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Availability Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 bg-[#292a2f] border border-white/[0.06] px-3 py-1 rounded-xl sm:rounded-full self-start shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-soft)] shadow-[0_0_10px_2px_color-mix(in_srgb,var(--accent)_50%,transparent)] animate-pulse"></span>
              <span className="font-mono text-[10px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                Available for opportunities
              </span>
              <span className="font-mono text-xs text-[#bbcabf]">
                · Remote & Onsite
              </span>
            </div>

            {/* Rotating Role Ticker */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase bg-[#34343a] px-2 py-0.5 rounded tracking-wider">
                ROLE:
              </span>
              <div className="h-6 overflow-hidden relative">
                <div
                  className="transition-transform duration-500 ease-out flex flex-col font-mono text-xs text-[#bbcabf]"
                  style={{ transform: `translateY(-${roleIndex * 24}px)` }}
                >
                  {ROLES.map((role, idx) => (
                    <span
                      key={idx}
                      className={`h-6 flex items-center font-medium ${
                        idx === roleIndex ? 'text-[color:var(--accent)]' : 'text-[#e3e1e9]'
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#e3e1e9] leading-[1.12] tracking-tight">
              I build Full-Stack &{' '}
              <span className="chromatic-text text-[color:var(--accent)] drop-shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_35%,transparent)]">
                AI systems
              </span>{' '}
              that solve real problems.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#bbcabf] max-w-2xl leading-relaxed">
              Full-Stack Developer specializing in React, Next.js, Node.js,
              FastAPI, multi-agent LangGraph orchestration, production RAG
              pipelines, and deterministic, low-latency infrastructure.
            </p>

            {/* CTAs & Quick Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  onSelectProject('projects');
                }}
                className="chromatic-button inline-flex items-center gap-2 bg-[var(--accent)] text-[#071722] font-medium text-sm px-6 py-2.5 rounded shadow-[0_0_24px_color-mix(in_srgb,var(--accent)_30%,transparent)] hover:bg-[var(--accent-soft)] hover:text-[#071722] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>View My Work</span>
                <span className="font-mono text-xs">→</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 bg-[#292a2f] text-[#e3e1e9] hover:text-[color:var(--accent)] border border-white/[0.08] hover:border-[var(--accent)]/40 text-sm px-4 py-2.5 rounded transition-all hover:bg-[#34343a]"
              >
                <span className="material-symbols-outlined text-[18px]">description</span>
                <span>Download Resume</span>
                <span className="font-mono text-[11px] bg-[#1e1f25] px-1.5 py-0.5 rounded text-[#bbcabf]">
                  PDF
                </span>
              </button>

              <div className="flex items-center gap-1 pl-1">
                <a
                  href="https://github.com/sukhpal77"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub Profile"
                  className="p-2 text-[#bbcabf] hover:text-[color:var(--accent)] hover:bg-[#292a2f] rounded transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">code</span>
                </a>
                <a
                  href="https://linkedin.com/in/sukhpalsingh"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn Profile"
                  className="p-2 text-[#bbcabf] hover:text-[color:var(--accent)] hover:bg-[#292a2f] rounded transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </a>
                <button
                  onClick={onOpenContact}
                  title="Direct Message"
                  className="p-2 text-[#bbcabf] hover:text-[color:var(--accent)] hover:bg-[#292a2f] rounded transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </button>
              </div>
            </div>

            {/* Micro Telemetry Strip */}
            <div className="telemetry-grid grid grid-cols-1 min-[480px]:grid-cols-3 gap-2.5 pt-3 max-w-lg">
              <div className="bg-[#0d0e13] border border-white/[0.06] p-2.5 rounded flex flex-col">
                <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  p99 Inference
                </span>
                <span className="font-mono text-sm text-[color:var(--accent)] font-semibold mt-0.5">
                  &lt; 420ms
                </span>
              </div>
              <div className="bg-[#0d0e13] border border-white/[0.06] p-2.5 rounded flex flex-col">
                <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  Vector Accuracy
                </span>
                <span className="font-mono text-sm text-[color:var(--accent-soft)] font-semibold mt-0.5">
                  99.4% Cosine
                </span>
              </div>
              <div className="bg-[#0d0e13] border border-white/[0.06] p-2.5 rounded flex flex-col">
                <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  Engine Health
                </span>
                <span className="font-mono text-sm text-[color:var(--accent)] font-semibold mt-0.5">
                  Deterministic
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Interactive System Architecture */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#0d0e13] border border-white/[0.08] rounded-xl p-4 shadow-2xl relative overflow-hidden">
              {/* Header bar */}
              <div className="flex flex-wrap gap-2 items-center justify-between pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34343a]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34343a]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34343a]"></span>
                  <span className="font-mono text-xs text-[#bbcabf] ml-1.5">
                    sys_arch::realtime_flow
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] font-semibold text-[color:var(--accent)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping"></span>
                  <span>TELEMETRY ACTIVE</span>
                </div>
              </div>

              {/* Pipeline Interactive Nodes */}
              <div className="pipeline-flow relative py-3 flex flex-col gap-2" onMouseEnter={() => setIsHoveringNode(true)} onMouseLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) setIsHoveringNode(false); }} onFocusCapture={() => setIsHoveringNode(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsHoveringNode(false); }}>
                {/* Node 1: Client Interface */}
                <div
                  onMouseEnter={() => {
                    setActiveNode(SYSTEM_NODES[0]);
                    setIsHoveringNode(true);
                  }}
                  
                  onClick={() => setActiveNode(SYSTEM_NODES[0])}
                  role="button" tabIndex={0}
                  aria-pressed={activeNode.id === 'client'}
                  style={{ '--node-color': '#67d9f5' } as React.CSSProperties}
                  onFocus={() => setActiveNode(SYSTEM_NODES[0])}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveNode(SYSTEM_NODES[0]); } }}
                  className={`pipeline-node group relative p-2.5 rounded flex items-center justify-between transition-all cursor-pointer border ${
                    activeNode.id === 'client'
                      ? 'bg-[#292a2f] border-[var(--accent)]/60 shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_15%,transparent)]'
                      : 'bg-[#1e1f25] border-white/[0.04] hover:bg-[#292a2f]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#121318] flex items-center justify-center text-[color:var(--accent)]">
                      <span className="material-symbols-outlined text-[16px]">
                        devices
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-[#e3e1e9] font-semibold">
                        Client Interface
                      </span>
                      <span className="font-mono text-[10px] text-[#bbcabf]">
                        React 19 · Next.js · SSR
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-[color:var(--accent)] bg-[#121318] px-2 py-0.5 rounded border border-[var(--accent)]/30">
                    INITIATE
                  </span>
                </div>

                {/* Stream connector SVG 1 */}
                <PipelineConnector />

                {/* Node 2: API Gateway */}
                <div
                  onMouseEnter={() => {
                    setActiveNode(SYSTEM_NODES[1]);
                    setIsHoveringNode(true);
                  }}
                  
                  onClick={() => setActiveNode(SYSTEM_NODES[1])}
                  role="button" tabIndex={0}
                  aria-pressed={activeNode.id === 'gateway'}
                  style={{ '--node-color': '#f5c66f' } as React.CSSProperties}
                  onFocus={() => setActiveNode(SYSTEM_NODES[1])}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveNode(SYSTEM_NODES[1]); } }}
                  className={`pipeline-node group relative p-2.5 rounded flex items-center justify-between transition-all cursor-pointer border ${
                    activeNode.id === 'gateway'
                      ? 'bg-[#292a2f] border-[var(--accent)]/60 shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_15%,transparent)]'
                      : 'bg-[#1e1f25] border-white/[0.04] hover:bg-[#292a2f]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#121318] flex items-center justify-center text-[color:var(--accent)]">
                      <span className="material-symbols-outlined text-[16px]">hub</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-[#e3e1e9] font-semibold">
                        API Gateway
                      </span>
                      <span className="font-mono text-[10px] text-[#bbcabf]">
                        FastAPI · Node.js · Uvicorn
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[color:var(--accent-soft)] font-medium">
                    p99 ~ 14ms
                  </span>
                </div>

                {/* Stream connector SVG 2 */}
                <PipelineConnector delay={0.45} />

                {/* Node 3: LangGraph Agent */}
                <div
                  onMouseEnter={() => {
                    setActiveNode(SYSTEM_NODES[2]);
                    setIsHoveringNode(true);
                  }}
                  
                  onClick={() => setActiveNode(SYSTEM_NODES[2])}
                  role="button" tabIndex={0}
                  aria-pressed={activeNode.id === 'agent'}
                  style={{ '--node-color': '#c4a5ff' } as React.CSSProperties}
                  onFocus={() => setActiveNode(SYSTEM_NODES[2])}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveNode(SYSTEM_NODES[2]); } }}
                  className={`pipeline-node group relative p-2.5 rounded flex items-center justify-between transition-all cursor-pointer border ${
                    activeNode.id === 'agent'
                      ? 'bg-[#292a2f] border-[var(--accent)]/60 shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_15%,transparent)]'
                      : 'bg-[#1e1f25] border-white/[0.04] hover:bg-[#292a2f]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[var(--accent-strong)] flex items-center justify-center text-[#071722]">
                      <span className="material-symbols-outlined text-[16px]">
                        schema
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-[#e3e1e9] font-semibold">
                        LangGraph Agent
                      </span>
                      <span className="font-mono text-[10px] text-[color:var(--accent)] font-medium">
                        State Graph · Multi-Step Cycles
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[#071722] bg-[var(--accent)] px-2 py-0.5 rounded font-bold">
                    STATEFUL
                  </span>
                </div>

                {/* Stream connector SVG 3 (Branching) */}
                <PipelineConnector branched paths={["M60 0 L60 6 L20 16 L20 22", "M60 0 L60 6 L100 16 L100 22"]} delay={0.9} />

                {/* Branch: RAG Engine & Vector DB */}
                <div className="grid grid-cols-2 gap-2">
                  <div
                    onMouseEnter={() => {
                      setActiveNode(SYSTEM_NODES[3]);
                      setIsHoveringNode(true);
                    }}
                    
                    onClick={() => setActiveNode(SYSTEM_NODES[3])}
                  role="button" tabIndex={0}
                  aria-pressed={activeNode.id === 'rag'}
                  style={{ '--node-color': '#4edea3' } as React.CSSProperties}
                  onFocus={() => setActiveNode(SYSTEM_NODES[3])}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveNode(SYSTEM_NODES[3]); } }}
                    className={`pipeline-node group relative p-2.5 rounded flex flex-col transition-all cursor-pointer border ${
                      activeNode.id === 'rag'
                        ? 'bg-[#292a2f] border-[var(--accent)]/60 shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_15%,transparent)]'
                        : 'bg-[#1e1f25] border-white/[0.04] hover:bg-[#292a2f]'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[#bbcabf] uppercase">
                      RAG Engine
                    </span>
                    <span className="font-mono text-xs text-[color:var(--accent)] font-semibold">
                      Chunk & Hybrid Rank
                    </span>
                    <span className="font-mono text-[10px] text-[color:var(--accent-soft)] mt-1">
                      HNSW Index
                    </span>
                  </div>

                  <div
                    onMouseEnter={() => {
                      setActiveNode(SYSTEM_NODES[4]);
                      setIsHoveringNode(true);
                    }}
                    
                    onClick={() => setActiveNode(SYSTEM_NODES[4])}
                  role="button" tabIndex={0}
                  aria-pressed={activeNode.id === 'vectordb'}
                  style={{ '--node-color': '#73dded' } as React.CSSProperties}
                  onFocus={() => setActiveNode(SYSTEM_NODES[4])}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveNode(SYSTEM_NODES[4]); } }}
                    className={`pipeline-node group relative p-2.5 rounded flex flex-col transition-all cursor-pointer border ${
                      activeNode.id === 'vectordb'
                        ? 'bg-[#292a2f] border-[var(--accent)]/60 shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_15%,transparent)]'
                        : 'bg-[#1e1f25] border-white/[0.04] hover:bg-[#292a2f]'
                    }`}
                  >
                    <span className="font-mono text-[10px] text-[#bbcabf] uppercase">
                      Vector DB
                    </span>
                    <span className="font-mono text-xs text-[#e3e1e9] font-semibold">
                      pgVector + Redis
                    </span>
                    <span className="font-mono text-[10px] text-[color:var(--accent)] mt-1">
                      &lt; 18ms Query
                    </span>
                  </div>
                </div>

                {/* Stream connector SVG 4 (Convergence to LLM) */}
                <PipelineConnector branched paths={["M20 0 L20 6 L60 16 L60 22", "M100 0 L100 6 L60 16 L60 22"]} delay={1.35} />

                {/* Node 4: LLM Inference Node */}
                <div
                  onMouseEnter={() => {
                    setActiveNode(SYSTEM_NODES[5]);
                    setIsHoveringNode(true);
                  }}
                  
                  onClick={() => setActiveNode(SYSTEM_NODES[5])}
                  role="button" tabIndex={0}
                  aria-pressed={activeNode.id === 'llm'}
                  style={{ '--node-color': '#c4a5ff' } as React.CSSProperties}
                  onFocus={() => setActiveNode(SYSTEM_NODES[5])}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveNode(SYSTEM_NODES[5]); } }}
                  className={`pipeline-node group relative p-2.5 rounded flex items-center justify-between transition-all cursor-pointer border ${
                    activeNode.id === 'llm'
                      ? 'bg-[#292a2f] border-[var(--accent)]/60 shadow-[0_0_12px_color-mix(in_srgb,var(--accent)_15%,transparent)]'
                      : 'bg-[#1e1f25] border-white/[0.04] hover:bg-[#292a2f]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#121318] flex items-center justify-center text-[color:var(--accent-soft)]">
                      <span className="material-symbols-outlined text-[16px]">
                        psychology
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-[#e3e1e9] font-semibold">
                        LLM Inference Node
                      </span>
                      <span className="font-mono text-[10px] text-[#bbcabf]">
                        Validated Stream Output
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-[color:var(--accent)] bg-[#34343a] px-2 py-0.5 rounded font-mono border border-white/[0.06]">
                    STREAMING
                  </span>
                </div>
              </div>

              {/* Dynamic Node Inspect Bar */}
              <div className="mt-2.5 p-3 h-40 overflow-y-auto custom-scrollbar bg-[#1e1f25] border border-white/[0.06] rounded flex flex-col gap-1.5 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[color:var(--accent)]">
                    <span>▶</span>
                    <span>{activeNode.name}</span>
                  </div>
                  {activeNode.latency && (
                    <span className="font-mono text-[10px] text-[color:var(--accent-soft)] bg-[#121318] px-1.5 py-0.5 rounded">
                      {activeNode.latency}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#bbcabf] leading-snug">
                  {activeNode.info}
                </p>
                {activeNode.runtimeParams && (
                  <div className="mt-1 pt-1.5 border-t border-white/[0.04] grid grid-cols-2 gap-1 font-mono text-[10px] text-[#bbcabf]">
                    {Object.entries(activeNode.runtimeParams).map(([key, val]) => (
                      <div key={key} className="truncate">
                        <span className="text-white/40 uppercase">{key}:</span>{' '}
                        <span className="text-[#e3e1e9]">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
