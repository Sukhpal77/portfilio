import React, { useState } from 'react';

const initialResources = [
  { id: 'api-worker-01', type: 'EC2', region: 'ap-south-1', state: 'Running', detail: 't3.small · API worker · private subnet' },
  { id: 'api-worker-02', type: 'EC2', region: 'ap-south-1', state: 'Stopped', detail: 't3.small · standby worker · private subnet' },
  { id: 'portfolio-assets', type: 'S3', region: 'ap-south-1', state: 'Available', detail: '128 objects · 2.4 GB · private bucket' },
  { id: 'daily-backups', type: 'S3', region: 'us-east-1', state: 'Available', detail: '32 objects · 1.1 GB · versioning enabled' },
  { id: 'edge-worker-01', type: 'EC2', region: 'us-east-1', state: 'Running', detail: 't3.micro · edge worker · private subnet' },
];

export function AWSDemo() {
  const [resources, setResources] = useState(initialResources);
  const [region, setRegion] = useState('ap-south-1');
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState('api-worker-01');
  const [role, setRole] = useState('Operator');
  const [message, setMessage] = useState('Select a resource to inspect its configuration.');
  const visible = resources.filter(resource => resource.region === region && (filter === 'All' || resource.type === filter));
  const resource = visible.find(item => item.id === selected) ?? visible[0];
  const scoped = resources.filter(item => item.region === region);

  return (
    <div className="lab-demo">
      <div className="lab-demo-heading"><div><span className="lab-eyebrow">AWS / RESOURCE CONSOLE</span><h3>A cloud console you can explore.</h3><p>Filter sample resources, inspect storage, and change a simulated worker's state.</p></div><button className="lab-button" onClick={() => { setResources(initialResources); setRegion('ap-south-1'); setFilter('All'); setSelected('api-worker-01'); setRole('Operator'); setMessage('Sample infrastructure reset.'); }}>Reset demo</button></div>
      <div className="lab-summary-grid"><div><span>Resources in region</span><strong>{scoped.length}</strong></div><div><span>Workers running</span><strong>{scoped.filter(item => item.state === 'Running').length}</strong></div><div><span>Storage buckets</span><strong>{scoped.filter(item => item.type === 'S3').length}</strong></div></div>
      <div className="lab-toolbar"><div className="lab-module-switch" aria-label="AWS resource filters">{['All', 'EC2', 'S3'].map(type => <button key={type} aria-pressed={filter === type} onClick={() => setFilter(type)}>{type === 'All' ? 'All resources' : type}</button>)}</div><div className="lab-action-group"><label className="lab-select-label">Region<select aria-label="AWS demo region" value={region} onChange={event => setRegion(event.target.value)}><option value="ap-south-1">Mumbai</option><option value="us-east-1">N. Virginia</option></select></label><label className="lab-select-label">Access<select aria-label="AWS demo access" value={role} onChange={event => setRole(event.target.value)}><option>Operator</option><option>Reader</option></select></label></div></div>
      <div className="lab-resource-grid">
        <div className="lab-surface"><div className="lab-panel-title"><h4>Resource inventory</h4><span className="lab-badge">{region}</span></div><div className="lab-resource-list">{visible.map(item => <button key={item.id} aria-pressed={resource?.id === item.id} className="lab-resource" onClick={() => setSelected(item.id)}><span className="lab-resource-icon material-symbols-outlined" aria-hidden="true">{item.type === 'EC2' ? 'dns' : 'storage'}</span><span><strong>{item.id}</strong><small>{item.type}</small></span><span className={`lab-badge ${item.state === 'Stopped' ? 'lab-warning' : 'lab-success'}`}>{item.state}</span></button>)}</div></div>
        {resource && <div className="lab-surface"><div className="lab-panel-title"><h4>{resource.id}</h4><span className="lab-badge">{resource.type}</span></div><p className="lab-muted">{resource.detail}</p><dl className="lab-detail-list"><div><dt>Region</dt><dd>{resource.region}</dd></div><div><dt>State</dt><dd>{resource.state}</dd></div><div><dt>Access</dt><dd>{role} · scoped session</dd></div></dl>{resource.type === 'EC2' ? <><button className="lab-button lab-button-primary" disabled={role === 'Reader'} onClick={() => { const next = resource.state === 'Running' ? 'Stopped' : 'Running'; setResources(previous => previous.map(item => item.id === resource.id ? { ...item, state: next } : item)); setMessage(`${resource.id}: simulated state changed to ${next.toLowerCase()}.`); }}>{resource.state === 'Running' ? 'Stop sample worker' : 'Start sample worker'}</button>{role === 'Reader' && <p className="lab-muted mt-3">Reader can inspect resources. Select Operator to change sample worker states.</p>}</> : <><h5 className="text-sm font-medium mb-2">Sample objects</h5><ul className="lab-object-list">{(resource.id === 'portfolio-assets' ? ['assets/hero.webp', 'assets/project-cover.webp', 'documents/resume.pdf'] : ['daily/database-snapshot.gz', 'weekly/application-archive.zip']).map(object => <li key={object}><span className="material-symbols-outlined text-[16px]" aria-hidden="true">description</span>{object}</li>)}</ul></>}</div>}
      </div>
      <p className="lab-feedback" role="status" aria-live="polite">{message}</p>
    </div>
  );
}
