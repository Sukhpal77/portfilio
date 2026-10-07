import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const entries = [
  { level: 'INFO', text: 'api-service · Request completed · 42ms' },
  { level: 'WARN', text: 'api-service · Latency spike · 1,840ms' },
  { level: 'ERROR', text: 'api-service · Database connection timed out' },
];

export function LogIQDemo() {
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!running) return;
    if (reduced) { setStep(3); setRunning(false); return; }
    const timers = [1, 2, 3].map((next) => setTimeout(() => {
      setStep(next);
      if (next === 3) setRunning(false);
    }, next * 900));
    return () => timers.forEach(clearTimeout);
  }, [running, reduced]);

  return (
    <div className="logiq-demo bg-[#121318] border border-white/[0.08] rounded-xl p-4">
      <div className="flex flex-wrap gap-3 items-center justify-between mb-3">
        <div>
          <h4 className="text-sm font-semibold">Watch an incident unfold</h4>
          <p className="font-mono text-[10px] text-[#bbcabf] mt-1">INTERACTIVE DEMO · FICTIONAL SAMPLE DATA</p>
        </div>
        <button type="button" disabled={running} onClick={() => { setStep(0); setRunning(true); }} className="demo-run-button rounded-lg px-3 py-2 text-xs font-semibold bg-[var(--accent)] text-[#071722] disabled:opacity-60 disabled:cursor-wait">
          {running ? 'Analyzing…' : step === 3 ? 'Replay demo ↻' : 'Run demo →'}
        </button>
      </div>
      <div className="demo-log-window font-mono text-[11px] flex flex-col gap-2">
        {step < 0 ? <p className="text-[#bbcabf] py-2">Run the demo to follow telemetry → anomaly → insight.</p> : entries.slice(0, Math.min(step + 1, 3)).map(({ level, text }) => (
          <div key={level} className={`demo-log-row flex flex-wrap gap-2 ${level === 'ERROR' ? 'text-[#ffb4ab]' : level === 'WARN' ? 'text-[#f5c66f]' : 'text-[#bbcabf]'}`}>
            <span className="font-semibold">[{level}]</span><span>{text}</span>
          </div>
        ))}
      </div>
      <div className={`demo-insight mt-3 p-3 rounded-lg border text-xs leading-relaxed ${step === 3 ? 'demo-insight-ready' : ''}`} role="status" aria-live="polite">
        {step === 3 ? <><strong className="text-[color:var(--accent)]">Sample insight:</strong> Connection pool saturation may explain the latency spike. Inspect pool limits and slow queries before changing infrastructure.</> : <span className="text-[#bbcabf]">{running ? 'Collecting evidence and investigating the sample incident…' : 'Sample insight will appear here.'}</span>}
      </div>
    </div>
  );
}
