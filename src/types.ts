export interface SystemNode {
  id: string;
  name: string;
  subtitle: string;
  tag: string;
  tagType?: 'primary' | 'secondary' | 'accent' | 'default';
  icon: string;
  info: string;
  latency?: string;
  runtimeParams?: { [key: string]: string };
}

export interface BlueprintTier {
  tierNumber: string;
  tierName: string;
  title: string;
  description: string;
  tags: string[];
  metricLabel: string;
  metricValue: string;
  metricColor: 'primary' | 'secondary';
}

export interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'ai' | 'infra';
  use: string;
  project: string;
  statusColor?: string;
}

export interface TraceStep {
  step: number;
  text: string;
  detail: string;
  ms: number;
  type: 'info' | 'success' | 'agent' | 'vector';
}

export interface MetricCard {
  number: string;
  category: string;
  value: string;
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'secondary';
}
