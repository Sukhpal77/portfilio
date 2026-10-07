export type DemoId = 'pipeline' | 'logiq' | 'hrms' | 'aws' | 'iot';

export const DEMOS: { id: DemoId; label: string; icon: string }[] = [
  { id: 'pipeline', label: 'AI Request Pipeline', icon: 'schema' },
  { id: 'logiq', label: 'LogIQ Incident Analysis', icon: 'query_stats' },
  { id: 'hrms', label: 'HRMS Workspace', icon: 'badge' },
  { id: 'aws', label: 'AWS Cloud Console', icon: 'cloud' },
  { id: 'iot', label: 'IoT Smart Dispenser', icon: 'memory' },
];
