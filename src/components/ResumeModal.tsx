import React from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div role="dialog" aria-modal="true" aria-labelledby="resume-dialog-title" className="portfolio-dialog bg-[#121318] border border-white/[0.12] rounded-2xl w-full max-w-3xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="shrink-0 bg-[#1e1f25] border-b border-white/[0.08] px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-[color:var(--accent)] text-[20px]">
              description
            </span>
            <span id="resume-dialog-title" className="font-sans font-semibold text-[#e3e1e9] text-sm sm:text-base">
              Curriculum Vitae — Sukhpal Singh
            </span>
            <span className="hidden sm:block shrink-0 font-mono text-[10px] bg-[#292a2f] text-[color:var(--accent-soft)] px-2 py-0.5 rounded">
              v2025.1
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 bg-[var(--accent)] text-[#071722] font-semibold text-xs px-3 py-1.5 rounded hover:bg-[var(--accent-soft)] transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">
                print
              </span>
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close résumé dialog"
              className="p-1.5 text-[#bbcabf] hover:text-white rounded hover:bg-[#292a2f] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>
          </div>
        </div>

        {/* Content body */}
        <div className="min-h-0 p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-6 text-[#bbcabf] text-xs leading-relaxed">
          {/* Header CV info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/[0.06] pb-5 gap-3">
            <div>
              <h1 className="text-2xl font-bold text-[#e3e1e9]">
                Sukhpal Singh
              </h1>
              <p className="text-sm text-[color:var(--accent)] font-medium">
                Full-Stack Developer & AI Systems Engineer
              </p>
            </div>
            <div className="font-mono text-[11px] text-[#bbcabf] flex flex-col md:items-end">
              <span>Email: sukhpalsingh0333@gmail.com</span>
              <span>Location: Punjab, India (Remote Available)</span>
              <span>Timezone: IST (UTC+5:30)</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="font-mono text-[11px] font-semibold text-[color:var(--accent-soft)] uppercase tracking-wider mb-1.5">
              Professional Summary
            </h3>
            <p className="text-[#e3e1e9]">
              Full-Stack Developer with 2+ years of production experience
              building high-performance web applications and autonomous AI
              agent systems. Proven track record in orchestrating multi-agent
              LangGraph workflows, architecting hybrid vector search RAG
              pipelines with pgVector and Redis, and implementing enterprise
              SaaS platforms with strict RBAC security.
            </p>
          </div>

          {/* Work Experience */}
          <div className="flex flex-col gap-3">
            <h3 className="font-mono text-[11px] font-semibold text-[color:var(--accent-soft)] uppercase tracking-wider">
              Experience
            </h3>

            <div className="bg-[#1e1f25] border border-white/[0.04] p-4 rounded-xl flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-[#e3e1e9]">
                  Full-Stack Developer — Aerin IT Services Pvt. Ltd.
                </span>
                <span className="font-mono text-[10px] text-[color:var(--accent)]">
                  August 2024 – Present
                </span>
              </div>
              <ul className="list-disc list-inside flex flex-col gap-1 text-[#bbcabf]">
                <li>
                  Engineered autonomous multi-agent workflows using LangGraph and
                  LangChain, integrating checkpoint recovery and structured output schemas.
                </li>
                <li>
                  Implemented enterprise RAG pipelines with PostgreSQL/pgVector
                  and Redis caching, achieving a 30% reduction in average semantic query latency.
                </li>
                <li>
                  Developed full-stack modules for core HRMS applications including
                  attendance tracking, automated payroll engines, and granular RBAC.
                </li>
                <li>
                  Authored automated test suites with Playwright, decreasing manual
                  verification overhead by 40–60%.
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-[11px] font-semibold text-[color:var(--accent-soft)] uppercase tracking-wider mb-2">
              Technical Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-[#1e1f25] p-3 rounded">
                <span className="font-semibold text-[#e3e1e9] block mb-1">
                  Frontend & Architecture
                </span>
                <span>
                  React 19, Next.js 15, TypeScript, Tailwind CSS, SSR & Client Hydration.
                </span>
              </div>
              <div className="bg-[#1e1f25] p-3 rounded">
                <span className="font-semibold text-[#e3e1e9] block mb-1">
                  Backend & APIs
                </span>
                <span>
                  FastAPI, Node.js, Express.js, Pydantic v2, RESTful Microservices, JWT RBAC.
                </span>
              </div>
              <div className="bg-[#1e1f25] p-3 rounded">
                <span className="font-semibold text-[#e3e1e9] block mb-1">
                  AI Systems & RAG
                </span>
                <span>
                  LangGraph, LangChain, RAG Pipelines, pgVector HNSW, Embeddings, Reciprocal Rank Fusion.
                </span>
              </div>
              <div className="bg-[#1e1f25] p-3 rounded">
                <span className="font-semibold text-[#e3e1e9] block mb-1">
                  Databases & DevOps
                </span>
                <span>
                  PostgreSQL, Redis, AWS (S3, EC2, Cognito), Playwright, Docker, CI/CD.
                </span>
              </div>
            </div>
          </div>

          {/* Education & Honors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-mono text-[11px] font-semibold text-[color:var(--accent-soft)] uppercase tracking-wider mb-1.5">
                Education
              </h3>
              <div className="flex flex-col gap-1.5">
                <div>
                  <span className="font-semibold text-[#e3e1e9] block">
                    Master of Computer Applications (MCA)
                  </span>
                  <span>Chandigarh University (2022 – 2024)</span>
                </div>
                <div>
                  <span className="font-semibold text-[#e3e1e9] block">
                    Bachelor of Computer Applications (BCA)
                  </span>
                  <span>Baba Farid Group of Institutions (2018 – 2021)</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-[11px] font-semibold text-[color:var(--accent-soft)] uppercase tracking-wider mb-1.5">
                Key Honors
              </h3>
              <div className="flex flex-col gap-1.5">
                <div>
                  <span className="font-semibold text-[color:var(--accent)] block">
                    🏆 Rising Star Award
                  </span>
                  <span>Aerin IT Services Pvt. Ltd.</span>
                </div>
                <div>
                  <span className="font-semibold text-[color:var(--accent)] block">
                    🥇 1st Prize — Tech Expo
                  </span>
                  <span>IoT Smart Pill Dispensing Machine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
