import React from 'react';
import { DemoId } from '../data/demos';
import { PipelineConnector } from './PipelineConnector';
import { LogIQProject } from './LogIQProject';

interface ProjectsSectionProps {
  onOpenDemo: (demo: DemoId) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenDemo,
}) => {

  return (
    <section id="projects" className="py-16">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
            PRODUCTION PORTFOLIO
          </span>
          <span className="w-8 h-px bg-[var(--accent)]/40"></span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#e3e1e9] tracking-tight">
          Things I've Built
        </h2>
        <p className="text-base text-[#bbcabf] max-w-2xl leading-relaxed">
          Engineered for scale, determinism, and real operational utility across
          distributed software systems.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Project 01 — AI-Powered LMS (Hero Project) */}
        <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-8 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[color:var(--accent)] font-bold">
                  PROJECT 01
                </span>
                <span className="font-mono text-[11px] bg-[#292a2f] px-2 py-0.5 rounded text-[color:var(--accent-soft)] uppercase">
                  HERO ARCHITECTURE
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#e3e1e9] tracking-tight">
                AI-Powered LMS
              </h3>

              <p className="text-sm text-[#bbcabf] leading-relaxed">
                Adaptive learning management platform powered by autonomous AI
                agents, FastAPI microservices, LangChain, and dense vector search.
                Tailors dynamic quizzes and pedagogical pathways in real-time
                based on student comprehension vectors.
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent)]">
                  FastAPI
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                  LangChain
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent-soft)]">
                  LangGraph
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                  RAG
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent)]">
                  pgVector
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                  PostgreSQL
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                  Next.js
                </span>
              </div>

              {/* Metrics Mini Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="bg-[#1e1f25] border border-white/[0.04] p-3 rounded">
                  <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                    Retrieval Precision
                  </span>
                  <p className="font-mono text-lg text-[color:var(--accent)] font-semibold mt-0.5">
                    94.8% mAP@5
                  </p>
                </div>
                <div className="bg-[#1e1f25] border border-white/[0.04] p-3 rounded">
                  <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                    Pipeline Response
                  </span>
                  <p className="font-mono text-lg text-[color:var(--accent-soft)] font-semibold mt-0.5">
                    &lt; 380ms
                  </p>
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onOpenDemo('pipeline')}
                  className="inline-flex items-center gap-1.5 bg-[var(--accent)] text-[#071722] text-xs font-semibold px-4 py-2 rounded shadow-[0_0_16px_color-mix(in_srgb,var(--accent)_25%,transparent)] hover:bg-[var(--accent-soft)] hover:text-[#071722] transition-all"
                >
                  <span>Interactive Pipeline Demo</span>
                  <span className="font-mono text-xs">→</span>
                </button>
                <a
                  href="https://github.com/sukhpal77"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#bbcabf] hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    terminal
                  </span>
                  <span>View Codebase</span>
                </a>
              </div>
            </div>

            {/* Project Visual Flow Card */}
            <div className="lg:col-span-6 bg-[#1e1f25] border border-white/[0.06] p-5 rounded-xl flex flex-col gap-3">
              <div className="flex items-center justify-between pb-1 border-b border-white/[0.06]">
                <span className="font-mono text-xs text-[#bbcabf]">
                  lms_agent_flow.diag
                </span>
                <span className="font-mono text-[10px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                  EXECUTION TRACE
                </span>
              </div>

              <div className="project-pipeline pipeline-flow flex flex-col gap-2 font-mono text-xs">
                <div className="project-stage bg-[#292a2f] p-2.5 rounded flex flex-wrap gap-2 items-center justify-between border border-white/[0.04]">
                  <span className="text-[#e3e1e9]">
                    1. User Assessment Request
                  </span>
                  <span className="text-[#bbcabf]">JSON Payload</span>
                </div>
                <PipelineConnector />
                <div className="project-stage bg-[#292a2f] p-2.5 rounded flex flex-wrap gap-2 items-center justify-between border border-[var(--accent)]/30">
                  <span className="text-[color:var(--accent)] font-medium">
                    2. LangGraph Evaluator Agent
                  </span>
                  <span className="text-[color:var(--accent-soft)]">State Machine</span>
                </div>
                <PipelineConnector />
                <div className="project-stage bg-[#292a2f] p-2.5 rounded flex flex-wrap gap-2 items-center justify-between border border-white/[0.04]">
                  <span className="text-[#e3e1e9]">
                    3. pgVector Context Retrieval
                  </span>
                  <span className="text-[#bbcabf]">1536-dim Cosine</span>
                </div>
                <PipelineConnector />
                <div className="project-stage bg-[#292a2f] p-2.5 rounded flex flex-wrap gap-2 items-center justify-between border border-[var(--accent)]/40">
                  <span className="text-[color:var(--accent)] font-medium">
                    4. Adaptive Course & Quiz Output
                  </span>
                  <span className="text-[color:var(--accent)] font-bold">
                    Validated Token Stream
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 02 — HRMS Portal */}
        <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 order-2 lg:order-1">
              {['Attendance tracking', 'Leave approvals', 'Payroll workflows', 'Role-based access'].map((feature, index) => (
                <div key={feature} className="bg-[#1e1f25] border border-white/[0.06] p-4 rounded-xl">
                  <span className="font-mono text-xs text-[color:var(--accent)]">0{index + 1}</span>
                  <p className="text-sm font-medium mt-3">{feature}</p>
                </div>
              ))}
              <button onClick={() => onOpenDemo('hrms')} className="col-span-2 bg-[var(--accent)] text-[#071722] text-sm font-semibold p-3 rounded-lg">Explore HRMS in the Systems Lab →</button>
            </div>
            {/* HRMS Narrative */}
            <div className="lg:col-span-6 flex flex-col gap-4 order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[color:var(--accent)] font-bold">
                  PROJECT 02
                </span>
                <span className="font-mono text-[11px] bg-[#292a2f] px-2 py-0.5 rounded text-[#e3e1e9] uppercase">
                  ENTERPRISE SAAS
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#e3e1e9] tracking-tight">
                Enterprise HRMS Portal
              </h3>

              <p className="text-sm text-[#bbcabf] leading-relaxed">
                Comprehensive human resource management system handling attendance
                tracking, multi-tier leave approval pipelines, automated payroll
                logic, and strict Role-Based Access Control (RBAC). Built with
                React, Express, and high-concurrency PostgreSQL.
              </p>

              <div className="flex flex-wrap gap-1.5">
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                  React
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent)]">
                  Node.js
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                  Express.js
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent-soft)]">
                  PostgreSQL
                </span>
                <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                  JWT RBAC
                </span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <span className="font-mono text-xs text-[#bbcabf]">
                  Arch: React → REST API → Express → PostgreSQL
                </span>
              </div>
            </div>
          </div>
        </div>

        <LogIQProject onOpenDemo={() => onOpenDemo('logiq')} />

        {/* Project 04 & 05 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 04: AWS Cloud Resource Manager */}
          <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[color:var(--accent)] font-bold">
                  PROJECT 04
                </span>
                <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  AWS CLOUD
                </span>
              </div>

              <h3 className="font-sans text-xl font-semibold text-[#e3e1e9]">
                AWS Cloud Resource Manager
              </h3>

              <p className="text-sm text-[#bbcabf] leading-relaxed">
                Centralized dashboard providing cloud infrastructure visibility.
                Uses temporary scoped IAM access credentials without storing
                permanent sensitive keys.
              </p>

              {/* Console preview card */}
              <div className="bg-[#1e1f25] border border-white/[0.04] p-3 rounded font-mono text-xs flex flex-col gap-2 mt-1">
                <div className="flex justify-between text-[#bbcabf] text-[10px]">
                  <span>REGION: ap-south-1</span>
                  <span className="text-[color:var(--accent-soft)]">COGNITO AUTHENTICATED</span>
                </div>
                <div className="flex justify-between items-center py-1.5 bg-[#292a2f] px-2.5 rounded">
                  <span className="text-[#e3e1e9]">
                    S3 Buckets (Prod Asset Cache)
                  </span>
                  <span className="text-[color:var(--accent)] font-semibold">14 ACTIVE</span>
                </div>
                <div className="flex justify-between items-center py-1.5 bg-[#292a2f] px-2.5 rounded">
                  <span className="text-[#e3e1e9]">
                    EC2 Worker Nodes (FastAPI)
                  </span>
                  <span className="text-[color:var(--accent)] font-semibold">8 RUNNING</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-5">
              <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                AWS Cognito
              </span>
              <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                AWS S3
              </span>
              <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                AWS EC2
              </span>
              <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent)]">
                IAM STS
              </span>
            </div>
            <button className="lab-button mt-4" onClick={() => onOpenDemo('aws')}>Explore AWS in the Systems Lab →</button>
          </div>

          {/* Project 05: IoT Pill Dispensing Machine */}
          <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between shadow-xl">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[color:var(--accent)] font-bold">
                    PROJECT 05
                  </span>
                  <span className="font-mono text-[10px] bg-[#1e1f25] text-[color:var(--accent-soft)] px-2 py-0.5 rounded">
                    🏆 1ST PRIZE EXHIBITION
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  HARDWARE / IoT
                </span>
              </div>

              <h3 className="font-sans text-xl font-semibold text-[#e3e1e9]">
                IoT Smart Pill Dispensing Machine
              </h3>

              <p className="text-sm text-[#bbcabf] leading-relaxed">
                Award-winning physical IoT healthcare system. Synchronizes patient
                dosage schedules via real-time cloud triggers and mechanical
                dispenser feedback.
              </p>

              {/* IoT Flow */}
              <div className="bg-[#1e1f25] border border-white/[0.04] p-3 rounded font-mono text-xs flex flex-col gap-2 mt-1">
                <div className="flex items-center justify-between text-[#e3e1e9]">
                  <span>Physical Flow:</span>
                  <span className="text-[color:var(--accent)]">Microcontroller Sync</span>
                </div>
                <div className="flex items-center justify-between text-[#bbcabf] text-[11px] pt-1">
                  <span>IR Sensor</span>
                  <span>→</span>
                  <span>ESP32</span>
                  <span>→</span>
                  <span>Firebase</span>
                  <span>→</span>
                  <span>Buzzer/Motor</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-5">
              <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                Embedded C++
              </span>
              <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[#e3e1e9]">
                Firebase RTDB
              </span>
              <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent)]">
                Microcontroller
              </span>
              <span className="font-mono text-xs bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent-soft)]">
                Hardware Prototyping
              </span>
            </div>
            <button className="lab-button mt-4" onClick={() => onOpenDemo('iot')}>Explore IoT in the Systems Lab →</button>
          </div>
        </div>
      </div>
    </section>
  );
};
