import React, { useState } from 'react';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenContactModal,
}) => {
  const [copied, setCopied] = useState(false);
  const email = 'sukhpalsingh0333@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-16 mb-12">
      <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl p-6 lg:p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[var(--accent)]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
                GET IN TOUCH
              </span>
              <span className="w-8 h-px bg-[var(--accent)]/40"></span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#e3e1e9] tracking-tight">
              Let's Build Something Intelligent.
            </h2>

            <p className="text-base text-[#bbcabf] leading-relaxed">
              Have an idea, product, or engineering challenge? Looking for a
              full-stack engineer who understands low-latency AI orchestration?
              Let's turn it into deterministic reality.
            </p>

            {/* Copyable Clipboard Chip */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleCopyEmail}
                className="inline-flex flex-wrap max-w-full items-center gap-2 bg-[#1e1f25] hover:bg-[#292a2f] border border-white/[0.06] px-3 sm:px-4 py-2 rounded-xl sm:rounded-full transition-all group cursor-pointer"
              >
                <span className="material-symbols-outlined text-[color:var(--accent)] text-[18px]">
                  mail
                </span>
                <span className="font-mono text-xs text-[#e3e1e9] font-medium break-all">
                  {email}
                </span>
                <span
                  className={`font-mono text-[10px] px-2 py-0.5 rounded transition-colors ${
                    copied
                      ? 'bg-[var(--accent-strong)] text-[#071722] font-bold'
                      : 'bg-[#34343a] text-[#bbcabf] group-hover:text-[color:var(--accent)]'
                  }`}
                >
                  {copied ? 'COPIED!' : 'COPY'}
                </span>
              </button>
            </div>
          </div>

          {/* Contact Actions Box */}
          <div className="lg:col-span-5 bg-[#1e1f25] border border-white/[0.06] p-6 rounded-xl flex flex-col gap-3">
            <span className="font-mono text-[11px] font-semibold text-[color:var(--accent-soft)] uppercase tracking-wider">
              FAST INQUIRY
            </span>

            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${email}?subject=Collaboration%20Inquiry%20-%20Sukhpal%20Singh`}
                className="inline-flex items-center justify-between bg-[var(--accent)] text-[#071722] text-xs font-semibold px-4 py-2.5 rounded shadow-[0_0_16px_color-mix(in_srgb,var(--accent)_25%,transparent)] hover:bg-[var(--accent-soft)] transition-all"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    send
                  </span>
                  <span>Email Directly</span>
                </span>
                <span className="font-mono text-xs">→</span>
              </a>

              <button
                onClick={onOpenContactModal}
                className="inline-flex items-center justify-between bg-[#292a2f] hover:bg-[#34343a] border border-white/[0.04] text-[#e3e1e9] text-xs px-4 py-2.5 rounded transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    chat
                  </span>
                  <span>Send Direct Message (Instant)</span>
                </span>
                <span className="font-mono text-xs text-[color:var(--accent)]">↗</span>
              </button>

              <a
                href="https://linkedin.com/in/sukhpalsingh"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between bg-[#292a2f] hover:bg-[#34343a] border border-white/[0.04] text-[#e3e1e9] text-xs px-4 py-2.5 rounded transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    share
                  </span>
                  <span>Connect on LinkedIn</span>
                </span>
                <span className="font-mono text-xs">↗</span>
              </a>

              <a
                href="https://github.com/sukhpal77"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between bg-[#292a2f] hover:bg-[#34343a] border border-white/[0.04] text-[#e3e1e9] text-xs px-4 py-2.5 rounded transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">
                    code
                  </span>
                  <span>Inspect GitHub Repositories</span>
                </span>
                <span className="font-mono text-xs">↗</span>
              </a>
            </div>

            <div className="pt-2 border-t border-white/[0.04] font-mono text-xs text-[#bbcabf] flex flex-wrap gap-2 items-center justify-between">
              <span>Timezone: IST (UTC+5:30)</span>
              <span className="text-[color:var(--accent)]">Response: &lt; 12h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
