import React from 'react';

interface EducationAndResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const EducationAndResumeSection: React.FC<EducationAndResumeSectionProps> = ({
  onOpenResumeModal,
}) => {
  return (
    <section id="education" className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Education & Recognition Left */}
        <div className="lg:col-span-7 bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-2xl">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                ACADEMIC & HONORS
              </span>
              <span className="w-8 h-px bg-[var(--accent)]/40"></span>
            </div>

            <h3 className="font-sans text-2xl text-[#e3e1e9] font-semibold">
              Education & Recognition
            </h3>

            {/* Education List */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#1e1f25] border border-white/[0.04] p-3.5 rounded-xl flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#e3e1e9] font-semibold">
                    Master of Computer Applications (MCA)
                  </span>
                  <span className="text-xs text-[#bbcabf]">
                    Chandigarh University
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[color:var(--accent)] bg-[#292a2f] px-2.5 py-1 rounded">
                  2022 – 2024
                </span>
              </div>

              <div className="bg-[#1e1f25] border border-white/[0.04] p-3.5 rounded-xl flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[#e3e1e9] font-semibold">
                    Bachelor of Computer Applications (BCA)
                  </span>
                  <span className="text-xs text-[#bbcabf]">
                    Baba Farid Group of Institutions
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#bbcabf] bg-[#292a2f] px-2.5 py-1 rounded">
                  2018 – 2021
                </span>
              </div>
            </div>

            {/* Honors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              <div className="bg-[#1e1f25] border border-white/[0.04] p-3.5 rounded-xl flex items-center gap-3">
                <span className="text-2xl">🏆</span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[color:var(--accent-soft)] font-semibold">
                    Rising Star Award
                  </span>
                  <span className="font-mono text-[10px] text-[#bbcabf]">
                    Aerin IT Services Pvt. Ltd.
                  </span>
                </div>
              </div>

              <div className="bg-[#1e1f25] border border-white/[0.04] p-3.5 rounded-xl flex items-center gap-3">
                <span className="text-2xl">🥇</span>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-[color:var(--accent)] font-semibold">
                    1st Prize — Tech Expo
                  </span>
                  <span className="font-mono text-[10px] text-[#bbcabf]">
                    IoT Pill Dispenser System
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Download Card Right */}
        <div
          id="resume-card"
          className="lg:col-span-5 bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold text-[color:var(--accent-soft)] uppercase tracking-wider">
                ENGINEERING RESUME
              </span>
              <span className="font-mono text-[10px] bg-[#1e1f25] border border-white/[0.04] px-2 py-0.5 rounded text-[color:var(--accent)]">
                v2025.1
              </span>
            </div>

            <h3 className="font-sans text-2xl text-[#e3e1e9] font-semibold">
              Curriculum Vitae
            </h3>

            <p className="text-sm text-[#bbcabf] leading-relaxed">
              Complete documentation covering production metrics, full-stack
              tech stacks, agent architectures, and verifiable credentials.
            </p>

            <div className="bg-[#1e1f25] border border-white/[0.06] p-4 rounded-xl flex items-center gap-3 font-mono text-xs mt-1">
              <span className="material-symbols-outlined text-[color:var(--accent)] text-[28px]">
                picture_as_pdf
              </span>
              <div className="flex flex-col">
                <span className="text-[#e3e1e9] font-medium">
                  Sukhpal_Singh_Resume.pdf
                </span>
                <span className="text-[#bbcabf] text-[10px]">
                  2.4 MB · Updated for Senior & AI Roles
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-6">
            <button
              onClick={onOpenResumeModal}
              className="w-full inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-[#071722] text-sm font-semibold py-2.5 rounded shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_30%,transparent)] hover:bg-[var(--accent-soft)] hover:text-[#071722] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
              <span>View & Download Official Resume</span>
            </button>
            <span className="font-mono text-[10px] text-center text-[#bbcabf]">
              Confidential verification references available upon request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
