import React from 'react';

export function PipelineConnector({ paths = ['M12 0 L12 20'], branched = false, delay = 0 }: {
  paths?: string[];
  branched?: boolean;
  delay?: number;
}) {
  return (
    <div className="flex justify-center -my-1" aria-hidden="true">
      <svg className="pipeline-connector" height={branched ? 22 : 20} width={branched ? 120 : 24} viewBox={branched ? '0 0 120 22' : '0 0 24 20'}>
        {paths.map((path, index) => (
          <React.Fragment key={path}>
            <path className="pipeline-track" d={path} fill="none" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5" />
            <circle className="pipeline-packet" r="2.5" style={{ offsetPath: `path('${path}')`, animationDelay: `${delay + index * 0.15}s` }} />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
}
