import React from 'react';
import { DEMOS, DemoId } from '../data/demos';
import { PlaygroundSection } from './PlaygroundSection';
import { LogIQDemo } from './LogIQDemo';
import { HRMSDemo } from './HRMSDemo';
import { AWSDemo } from './AWSDemo';
import { IoTDemo } from './IoTDemo';

interface SystemsLabProps {
  activeDemo: DemoId;
  onSelectDemo: (demo: DemoId) => void;
}

export function SystemsLabSection({ activeDemo, onSelectDemo }: SystemsLabProps) {
  const handleTabKey = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % DEMOS.length;
    else if (event.key === 'ArrowLeft') next = (index + DEMOS.length - 1) % DEMOS.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = DEMOS.length - 1;
    else return;
    event.preventDefault();
    onSelectDemo(DEMOS[next].id);
    event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(`#lab-tab-${DEMOS[next].id}`)?.focus();
  };

  return (
    <section id="playground" className="py-16">
      <div className="flex flex-col gap-3 mb-8">
        <span className="font-mono text-[11px] text-[color:var(--accent)] uppercase tracking-wider">INTERACTIVE SHOWCASE / EXPLORE THE BUILD</span>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">The Systems Lab</h2>
        <p className="text-[#bbcabf] max-w-2xl leading-relaxed">Go beyond the project cards. Trace an AI request, investigate an incident, manage a sample team, or explore cloud and device workflows.</p>
      </div>
      <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-4 sm:p-6 border-b border-white/[0.08]">
          <div role="tablist" aria-label="Project demos" className="lab-tabs flex gap-2 overflow-x-auto pb-1 xl:grid xl:grid-cols-5">
            {DEMOS.map(({ id, label, icon }, index) => (
              <button key={id} id={`lab-tab-${id}`} type="button" role="tab" aria-selected={activeDemo === id} aria-controls={`lab-panel-${id}`} tabIndex={activeDemo === id ? 0 : -1} onKeyDown={(event) => handleTabKey(event, index)} onClick={() => onSelectDemo(id)}
                className={`flex shrink-0 items-center gap-2 text-left px-3 py-3 rounded-xl border ${activeDemo === id ? 'bg-[var(--accent)]/10 border-[var(--accent)]/40 text-[color:var(--accent)]' : 'bg-[#1e1f25] border-white/[0.06] text-[#bbcabf] hover:text-white'}`}>
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{icon}</span>
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
          <p className="font-mono text-[10px] text-[#bbcabf] mt-4">BROWSER SIMULATIONS · FICTIONAL SAMPLE DATA</p>
        </div>
        <div id={`lab-panel-${activeDemo}`} role="tabpanel" aria-labelledby={`lab-tab-${activeDemo}`} tabIndex={0} className="p-4 sm:p-6">
          {activeDemo === 'pipeline' && <PlaygroundSection />}
          {activeDemo === 'logiq' && <LogIQDemo />}
          {activeDemo === 'hrms' && <HRMSDemo />}
          {activeDemo === 'aws' && <AWSDemo />}
          {activeDemo === 'iot' && <IoTDemo />}
        </div>
      </div>
    </section>
  );
}
