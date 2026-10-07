import React, { useState } from 'react';

export function IoTDemo() {
  const [container, setContainer] = useState(true);
  const [connected, setConnected] = useState(true);
  const [stock, setStock] = useState(3);
  const [event, setEvent] = useState(1);
  const [delivered, setDelivered] = useState(false);
  const [stage, setStage] = useState(0);
  const [message, setMessage] = useState('A sample schedule is ready. Trigger it to test the dispenser.');
  const [history, setHistory] = useState<string[]>([]);
  const record = (text: string) => { setMessage(text); setHistory(previous => [text, ...previous].slice(0, 4)); };
  const dispense = () => {
    if (delivered) { record(`Event ${event}: duplicate ignored. Stock unchanged.`); return; }
    if (!connected) { setStage(0); record('Cloud sync unavailable. Restore the sample connection and retry.'); return; }
    if (!container) { setStage(1); record('IR sensor: no container detected. Dispensing paused.'); return; }
    if (!stock) { setStage(1); record('Reservoir empty. Refill the sample dispenser before retrying.'); return; }
    setStock(previous => previous - 1); setDelivered(true); setStage(4);
    record(`Event ${event}: sample dose dispensed and confirmation recorded.`);
  };
  const reset = () => { setStock(3); setEvent(1); setDelivered(false); setStage(0); setContainer(true); setConnected(true); setHistory([]); setMessage('Sample device reset. Ready to test.'); };

  return (
    <div className="lab-demo">
      <div className="lab-demo-heading"><div><span className="lab-eyebrow">IOT / SMART DISPENSER</span><h3>Test the device workflow.</h3><p>Try a sample schedule, sensor interlock, and duplicate-event protection. This is a virtual device.</p></div><button className="lab-button" onClick={reset}>Reset demo</button></div>
      <div className="lab-iot-grid">
        <div className="lab-surface"><div className="lab-panel-title"><h4>Device controls</h4><span className={`lab-badge ${connected ? 'lab-success' : 'lab-warning'}`}>{connected ? 'Connected' : 'Offline'}</span></div><div className="lab-device-display"><span className="material-symbols-outlined" aria-hidden="true">medication</span><div><span>Sample reservoir</span><strong>{stock} / 3</strong><small>Virtual doses remaining</small></div></div><label className="lab-toggle-row"><span><strong>IR container sensor</strong><small>Container is positioned below the dispenser</small></span><input type="checkbox" checked={container} onChange={change => setContainer(change.target.checked)} /></label><label className="lab-toggle-row"><span><strong>Cloud connection</strong><small>Sample Firebase schedule sync</small></span><input type="checkbox" checked={connected} onChange={change => setConnected(change.target.checked)} /></label><div className="lab-action-group mt-4"><button className="lab-button" disabled={stock === 3} onClick={() => { setStock(3); record('Sample reservoir refilled to 3 doses.'); }}>Refill reservoir</button></div></div>
        <div className="lab-surface"><div className="lab-panel-title"><h4>Schedule event #{event}</h4><span className={`lab-badge ${delivered ? 'lab-success' : ''}`}>{delivered ? 'Confirmed' : 'Ready'}</span></div><ol className="lab-device-flow">{[{title:'Schedule received', detail:'Cloud event → ESP32'}, {title:'Sensor verified', detail:'IR interlock → container present'}, {title:'Dispense', detail:'Motor command → sample dose'}, {title:'Confirmation saved', detail:'Device feedback → cloud record'}].map((item,index) => <li key={item.title} className={stage > index ? 'lab-flow-done' : ''}><span>{stage > index ? '✓' : `0${index + 1}`}</span><div><strong>{item.title}</strong><small>{item.detail}</small></div></li>)}</ol><div className="lab-action-group"><button className="lab-button lab-button-primary" onClick={dispense}>{delivered ? 'Replay same event' : 'Trigger sample schedule'}</button><button className="lab-button" disabled={!delivered} onClick={() => { setEvent(previous => previous + 1); setDelivered(false); setStage(0); setMessage('Next sample event queued.'); }}>Next event</button></div></div>
      </div>
      <p className="lab-feedback" role="status" aria-live="polite">{message}</p>
      {history.length > 0 && <div className="lab-event-history"><h4>Device event log</h4>{history.map((entry,index) => <p key={`${entry}-${index}`}><span>{index === 0 ? 'Latest' : 'Earlier'}</span>{entry}</p>)}</div>}
    </div>
  );
}
