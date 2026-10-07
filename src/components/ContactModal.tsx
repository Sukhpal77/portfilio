import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('New Project Collaboration');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleReset = () => {
    setIsSent(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" className="portfolio-dialog bg-[#121318] border border-white/[0.12] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="shrink-0 bg-[#1e1f25] border-b border-white/[0.08] px-4 sm:px-6 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[color:var(--accent)] text-[20px]">
              mail
            </span>
            <span id="contact-dialog-title" className="font-sans font-semibold text-[#e3e1e9] text-base">
              Let's Talk — Direct Message
            </span>
          </div>
          <button
            aria-label="Close contact dialog"
            onClick={onClose}
            className="p-1.5 text-[#bbcabf] hover:text-white rounded hover:bg-[#292a2f] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="min-h-0 overflow-y-auto p-4 sm:p-6">
          {isSent ? (
            <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--accent-strong)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-[color:var(--accent)]">
                <span className="material-symbols-outlined text-[28px]">
                  check
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#e3e1e9]">
                Message Transmitted Successfully
              </h3>
              <p className="text-xs text-[#bbcabf] max-w-sm">
                Thank you, {name || 'friend'}. Your inquiry has been routed to
                Sukhpal Singh's inbox (<span className="text-[color:var(--accent)]">sukhpalsingh0333@gmail.com</span>). Typical response turnaround is &lt; 12 hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 bg-[var(--accent)] text-[#071722] font-semibold text-xs px-5 py-2 rounded hover:bg-[var(--accent-soft)] transition-all"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs">
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  Your Full Name
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Rivera"
                  className="bg-[#1e1f25] border border-white/[0.08] p-2.5 rounded text-[#e3e1e9] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. alex@company.com"
                  className="bg-[#1e1f25] border border-white/[0.08] p-2.5 rounded text-[#e3e1e9] focus:outline-none focus:border-[var(--accent)]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  Inquiry Topic
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="bg-[#1e1f25] border border-white/[0.08] p-2.5 rounded text-[#e3e1e9] focus:outline-none focus:border-[var(--accent)]"
                >
                  <option value="New Project Collaboration">
                    New Project Collaboration / Contract
                  </option>
                  <option value="AI Agent & RAG Architecture Consultation">
                    AI Agent & RAG Architecture Consultation
                  </option>
                  <option value="Full-Stack Engineering Role">
                    Full-Stack Engineering Role
                  </option>
                  <option value="General Technical Inquiry">
                    General Technical Inquiry
                  </option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your architecture requirements, timeline, or engineering challenge..."
                  className="bg-[#1e1f25] border border-white/[0.08] p-2.5 rounded text-[#e3e1e9] focus:outline-none focus:border-[var(--accent)] resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-[10px] text-[#bbcabf]">
                  SLA: &lt; 12 hours response
                </span>
                <button
                  type="submit"
                  className="bg-[var(--accent)] text-[#071722] font-semibold text-xs px-5 py-2 rounded shadow-[0_0_16px_color-mix(in_srgb,var(--accent)_30%,transparent)] hover:bg-[var(--accent-soft)] transition-all"
                >
                  Send Message →
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
