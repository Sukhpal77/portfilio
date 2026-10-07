import React, { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  id: string;
  type: 'cmd' | 'output' | 'error' | 'sys';
  text: string;
}

export const TerminalSection: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    {
      id: '1',
      type: 'sys',
      text: 'Sukhpal Singh OS [Version 4.8.2-prod] (x86_64-pc-linux-gnu)',
    },
    {
      id: '2',
      type: 'sys',
      text: "Type 'help' to view all available commands or tap the quick pills above.",
    },
    {
      id: '3',
      type: 'cmd',
      text: 'whoami',
    },
    {
      id: '4',
      type: 'output',
      text: 'Sukhpal Singh — Full-Stack Developer & AI Systems Engineer. Specializing in high-performance web systems, LangGraph agent workflows, and deterministic RAG infrastructure.',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>(['whoami']);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [copied, setCopied] = useState(false);

  const screenRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commandsMap: Record<string, string> = {
    whoami:
      'Sukhpal Singh — Full-Stack Developer & AI Systems Engineer. Building deterministic production systems.',
    role: 'Full-Stack Developer | AI Agents & RAG Architect | Backend Systems (FastAPI / Node)',
    stack:
      'React 19, Next.js, Node.js, FastAPI, LangGraph, LangChain, RAG, pgVector, PostgreSQL, Redis, Playwright, AWS.',
    projects:
      '01. AI-Powered LMS (FastAPI + LangGraph) | 02. Enterprise HRMS (React + Express) | 03. LogIQ (AI Observability SaaS: Next.js + FastAPI + pgVector) | 04. AWS Cloud Manager | 05. IoT Pill Dispenser (Exhibition Winner)',
    status:
      '🟢 Available for select senior & founding engineer opportunities. Production systems operational.',
    help: 'Available commands: whoami, role, stack, projects, status, contact, quote, clear, help',
    contact:
      'Email: sukhpalsingh0333@gmail.com | LinkedIn: /in/sukhpalsingh | GitHub: https://github.com/sukhpal77',
    quote:
      '"First make it work, then make it right, then make it deterministic."',
  };

  const handleRunCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    const newCmdEntry: TerminalLine = {
      id: Math.random().toString(),
      type: 'cmd',
      text: trimmed,
    };

    const cmdLower = trimmed.toLowerCase();
    let responseEntry: TerminalLine;

    if (commandsMap[cmdLower]) {
      responseEntry = {
        id: Math.random().toString(),
        type: 'output',
        text: commandsMap[cmdLower],
      };
    } else {
      responseEntry = {
        id: Math.random().toString(),
        type: 'error',
        text: `zsh: command not found: ${trimmed}. Type 'help' for available commands.`,
      };
    }

    setHistory((prev) => [...prev, newCmdEntry, responseEntry]);
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx =
          historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx >= cmdHistory.length) {
          setHistoryIdx(-1);
          setInputVal('');
        } else {
          setHistoryIdx(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        }
      }
    }
  };

  // Auto scroll terminal
  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = screenRef.current.scrollHeight;
    }
  }, [history]);

  const handleCopy = () => {
    const textToCopy = history
      .map((item) => (item.type === 'cmd' ? `➜ ~ ${item.text}` : item.text))
      .join('\n');
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const quickCommands = [
    'whoami',
    'role',
    'stack',
    'projects',
    'status',
    'help',
    'clear',
  ];

  return (
    <section id="terminal" className="py-16">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-semibold text-[color:var(--accent)] uppercase tracking-wider">
            INTERACTIVE CLI
          </span>
          <span className="w-8 h-px bg-[var(--accent)]/40"></span>
        </div>
        <h2 className="font-sans text-3xl sm:text-4xl font-semibold text-[#e3e1e9] tracking-tight">
          Developer Terminal
        </h2>
        <p className="text-base text-[#bbcabf] max-w-2xl leading-relaxed">
          Execute shell commands directly in the virtual environment or click
          shortcuts below.
        </p>
      </div>

      <div className="bg-[#0d0e13] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
        {/* Terminal Header Bar */}
        <div className="bg-[#1e1f25] border-b border-white/[0.06] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
            <span className="font-mono text-xs text-[#bbcabf] ml-2">
              sukhpal@arch-node:~ (bash)
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="text-[#bbcabf] hover:text-[color:var(--accent)] transition-colors text-xs font-mono flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-[#292a2f]"
          >
            <span className="material-symbols-outlined text-[14px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Command Shortcut Chips */}
        <div className="bg-[#181920] border-b border-white/[0.04] px-4 py-2 flex flex-wrap gap-2 items-center">
          <span className="font-mono text-[10px] text-[#bbcabf] uppercase tracking-wider">
            QUICK COMMANDS:
          </span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleRunCommand(cmd)}
              className={`font-mono text-xs px-2.5 py-0.5 rounded transition-all ${
                cmd === 'whoami'
                  ? 'bg-[#292a2f] text-[color:var(--accent)] hover:bg-[#34343a]'
                  : cmd === 'status'
                  ? 'bg-[#292a2f] text-[color:var(--accent-soft)] hover:bg-[#34343a]'
                  : 'bg-[#1e1f25] text-[#e3e1e9] hover:bg-[#292a2f]'
              }`}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Screen */}
        <div
          ref={screenRef}
          onClick={() => inputRef.current?.focus()}
          className="p-4 font-mono text-xs text-[#e3e1e9] flex flex-col gap-2 min-h-[280px] max-h-[380px] overflow-y-auto custom-scrollbar cursor-text"
        >
          {history.map((line) => {
            if (line.type === 'sys') {
              return (
                <div key={line.id} className="text-[#bbcabf]">
                  {line.text}
                </div>
              );
            }
            if (line.type === 'cmd') {
              return (
                <div key={line.id} className="mt-1 text-[color:var(--accent)]">
                  <span>➜  ~ </span>
                  <span className="text-[#e3e1e9]">{line.text}</span>
                </div>
              );
            }
            if (line.type === 'error') {
              return (
                <div key={line.id} className="text-[#ffb4ab] pl-4">
                  {line.text}
                </div>
              );
            }
            return (
              <div key={line.id} className="text-[#bbcabf] pl-4 leading-relaxed">
                {line.text}
              </div>
            );
          })}
        </div>

        {/* Terminal Interactive Input Line */}
        <div className="bg-[#1e1f25] border-t border-white/[0.06] px-4 py-2.5 flex items-center gap-2">
          <span className="font-mono text-xs text-[color:var(--accent)] font-bold">➜ ~</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type command (e.g. stack, projects, status)..."
            className="w-full bg-transparent font-mono text-xs text-[#e3e1e9] focus:outline-none"
          />
          <span className="font-mono text-[10px] text-[#bbcabf] uppercase bg-[#292a2f] px-1.5 py-0.5 rounded">
            ↵ ENTER
          </span>
        </div>
      </div>
    </section>
  );
};
