import React, { useState } from 'react';

type Role = 'Admin' | 'Manager' | 'Staff';
type Module = 'attendance' | 'leave' | 'payroll' | 'access';
const employees = [
  { name: 'Alex Morgan', initials: 'AM', team: 'Engineering', time: '09:04', present: true },
  { name: 'Sam Rivera', initials: 'SR', team: 'Design', time: '09:12', present: true },
  { name: 'Jordan Lee', initials: 'JL', team: 'Operations', time: '—', present: false },
];
const requests = [
  { name: 'Sam Rivera', type: 'Personal leave', dates: '12–13 Oct', days: '2 days' },
  { name: 'Jordan Lee', type: 'Annual leave', dates: '16 Oct', days: '1 day' },
];
const currency = (value: number) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);

export function HRMSDemo() {
  const [module, setModule] = useState<Module>('attendance');
  const [role, setRole] = useState<Role>('Admin');
  const [attendance, setAttendance] = useState(employees);
  const [decisions, setDecisions] = useState<Record<string, string>>({});
  const [base, setBase] = useState(42000);
  const [bonus, setBonus] = useState(3000);
  const [deductions, setDeductions] = useState(4500);
  const [payslip, setPayslip] = useState(false);
  const [message, setMessage] = useState('Select a module and try a sample workflow.');
  const present = attendance.filter(person => person.present).length;
  const pending = requests.filter(request => !decisions[request.name]).length;
  const modules: { id: Module; label: string }[] = [
    { id: 'attendance', label: 'Attendance' }, { id: 'leave', label: 'Leave requests' },
    { id: 'payroll', label: 'Payroll' }, { id: 'access', label: 'Access roles' },
  ];
  const reset = () => { setModule('attendance'); setRole('Admin'); setAttendance(employees); setDecisions({}); setPayslip(false); setBase(42000); setBonus(3000); setDeductions(4500); setMessage('Sample workspace reset.'); };

  return (
    <div className="lab-demo">
      <div className="lab-demo-heading">
        <div><span className="lab-eyebrow">HRMS / TEAM WORKSPACE</span><h3>Workflows that respond to you.</h3><p>Check in a team member, review leave, or generate a fictional payslip.</p></div>
        <button className="lab-button" onClick={reset}>Reset demo</button>
      </div>
      <div className="lab-summary-grid">
        <div><span>Team members</span><strong>03</strong></div>
        <div><span>Checked in</span><strong>{present} / 3</strong></div>
        <div><span>Pending leave</span><strong>{pending.toString().padStart(2, '0')}</strong></div>
      </div>
      <div className="lab-toolbar">
        <div className="lab-module-switch" aria-label="HRMS modules">{modules.map(item => <button key={item.id} aria-pressed={module === item.id} onClick={() => setModule(item.id)}>{item.label}</button>)}</div>
        <label className="lab-select-label">Preview as <select aria-label="HRMS demo role" value={role} onChange={event => { setRole(event.target.value as Role); setMessage(`Previewing ${event.target.value} permissions.`); }}>{['Admin', 'Manager', 'Staff'].map(item => <option key={item}>{item}</option>)}</select></label>
      </div>
      <div className="lab-surface">
        {module === 'attendance' && <>
          <div className="lab-panel-title"><h4>Today's attendance</h4><span className="lab-badge">Sample team</span></div>
          <div className="lab-table-wrap"><table className="lab-table"><thead><tr><th>Team member</th><th>Check-in</th><th>Status</th><th>Action</th></tr></thead><tbody>
            {attendance.map((person, index) => <tr key={person.name}><td><div className="lab-person"><span className="lab-avatar">{person.initials}</span><div><strong>{person.name}</strong><small>{person.team}</small></div></div></td><td>{person.time}</td><td><span className={`lab-badge ${person.present ? 'lab-success' : 'lab-warning'}`}>{person.present ? 'Present' : 'Awaiting'}</span></td><td><button className="lab-button" disabled={person.present || (role === 'Staff' && index !== 0)} onClick={() => { setAttendance(previous => previous.map(item => item.name === person.name ? { ...item, present: true, time: '09:30' } : item)); setMessage(`${person.name} checked in. Attendance updated to 3 / 3.`); }}>{person.present ? 'Recorded' : 'Check in'}</button></td></tr>)}
          </tbody></table></div>
        </>}
        {module === 'leave' && <>
          <div className="lab-panel-title"><h4>Leave approval queue</h4><span className="lab-badge">{pending} pending</span></div>
          <div className="lab-request-list">{requests.map(request => <div key={request.name} className="lab-request"><div><strong>{request.name}</strong><p>{request.type} · {request.dates} · {request.days}</p></div>{decisions[request.name] ? <span className={`lab-badge ${decisions[request.name] === 'Approved' ? 'lab-success' : 'lab-warning'}`}>{decisions[request.name]}</span> : <div className="lab-action-group"><button className="lab-button lab-button-primary" disabled={role === 'Staff'} onClick={() => { setDecisions(previous => ({ ...previous, [request.name]: 'Approved' })); setMessage(`Approved ${request.name}'s sample leave request.`); }}>Approve</button><button className="lab-button" disabled={role === 'Staff'} onClick={() => { setDecisions(previous => ({ ...previous, [request.name]: 'Declined' })); setMessage(`Declined ${request.name}'s sample leave request.`); }}>Decline</button></div>}</div>)}</div>
          {role === 'Staff' && <p className="lab-muted">Staff can view requests. Switch to Manager or Admin to approve them.</p>}
        </>}
        {module === 'payroll' && <>
          <div className="lab-panel-title"><h4>Alex Morgan · Sample payslip</h4><span className="lab-badge">Fictional amounts</span></div>
          <div className="lab-payroll-grid">{([{ label: 'Base pay (INR)', value: base, setter: setBase }, { label: 'Bonus (INR)', value: bonus, setter: setBonus }, { label: 'Deductions (INR)', value: deductions, setter: setDeductions }]).map(field => <label key={field.label}>{field.label}<input type="number" min="0" max="1000000" disabled={role !== 'Admin'} value={field.value} onChange={event => { field.setter(Math.min(1000000, Math.max(0, Number(event.target.value) || 0))); setPayslip(false); }} /></label>)}</div>
          <div className="lab-total"><div><span>Estimated net pay</span><strong>{currency(Math.max(0, base + bonus - deductions))}</strong></div><button className="lab-button lab-button-primary" disabled={role !== 'Admin'} onClick={() => { setPayslip(true); setMessage('Sample payslip generated. No payment is made.'); }}>{payslip ? 'Payslip generated ✓' : 'Generate sample payslip'}</button></div>
          <p className="lab-muted">{role !== 'Admin' ? 'Payroll editing is available to the Admin role in this demo.' : payslip ? `Gross ${currency(base + bonus)} − deductions ${currency(deductions)}. Sample calculation only.` : 'Change the sample amounts to see net pay update.'}</p>
        </>}
        {module === 'access' && <>
          <div className="lab-panel-title"><h4>Permission matrix</h4><span className="lab-badge">Current role: {role}</span></div>
          <div className="lab-table-wrap"><table className="lab-table"><thead><tr><th>Capability</th><th>Admin</th><th>Manager</th><th>Staff</th></tr></thead><tbody>{[['View attendance', 'Allowed', 'Allowed', 'Own record'], ['Approve leave', 'Allowed', 'Allowed', 'View only'], ['Edit payroll', 'Allowed', 'View only', 'View only'], ['Manage roles', 'Allowed', 'Restricted', 'Restricted']].map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={index}>{cell}</th> : <td key={index} className={cell === 'Allowed' ? 'lab-permission-allowed' : ''}>{cell}</td>)}</tr>)}</tbody></table></div>
          <p className="lab-muted">Change “Preview as” to see the matching controls enabled or disabled across modules.</p>
        </>}
      </div>
      <p className="lab-feedback" role="status" aria-live="polite">{message}</p>
    </div>
  );
}