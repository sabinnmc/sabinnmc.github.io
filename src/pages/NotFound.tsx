import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

interface TerminalLine {
  text: string;
  type: "system" | "error" | "input" | "output" | "success";
}

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Initial terminal simulation sequence
  useEffect(() => {
    console.error("404 Error: Unresolved Route Vector:", location.pathname);

    const initialBootLines: TerminalLine[] = [
      { text: "Initializing SABIN-BHANDARI-OS kernel loader...", type: "system" },
      { text: "CPU ID: Broadcom BCM2711, Quad core Cortex-A72 @ 1.5GHz", type: "system" },
      { text: "RAM Allocation: 4096MB LPDDR4 — [MEM OK]", type: "system" },
      { text: "Mounting partition: PORTFOLIO_V2_SECTOR_0... OK", type: "success" },
      { text: `Querying route descriptor: "${location.pathname}"...`, type: "system" },
      { text: "ERROR CODE: 0x00000404 (RESOURCE_NOT_FOUND)", type: "error" },
      { text: "CRITICAL: Requested memory sector is unreachable or unmapped.", type: "error" },
      { text: "System diagnostics offline. Command terminal unlocked.", type: "system" },
      { text: "Type 'help' for list of diagnostic kernel commands.", type: "success" }
    ];

    let timer: NodeJS.Timeout;
    const loadLinesOneByOne = (index: number) => {
      if (index < initialBootLines.length) {
        setHistory((prev) => [...prev, initialBootLines[index]]);
        timer = setTimeout(() => loadLinesOneByOne(index + 1), 180);
      }
    };

    loadLinesOneByOne(0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Keep terminal scrolled to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const command = inputVal.trim().toLowerCase();
    if (!command) return;

    // Append typed command to terminal history
    const updatedHistory: TerminalLine[] = [
      ...history,
      { text: `guest@sabin-portfolio:~ $ ${inputVal}`, type: "input" }
    ];

    switch (command) {
      case "help":
        updatedHistory.push(
          { text: "Available Core Commands:", type: "success" },
          { text: "  home / exit   — Redirect to core portfolio home coordinates.", type: "system" },
          { text: "  status        — Display system status register diagnostic.", type: "system" },
          { text: "  about         — Print engineer professional overview bio.", type: "system" },
          { text: "  clear         — Wipe terminal console display history.", type: "system" },
          { text: "  reboot        — Re-initialize boot sequence.", type: "system" }
        );
        break;
      case "home":
      case "exit":
        updatedHistory.push({ text: "Executing secure core reroute vector...", type: "success" });
        setTimeout(() => navigate("/"), 600);
        break;
      case "status":
        updatedHistory.push(
          { text: "--- DIAGNOSTIC STATUS REGISTER ---", type: "system" },
          { text: "OPERATIONAL PROFILE: Active, Looking for Opportunities", type: "success" },
          { text: "CURRENT LOCATION: Kobe, Japan", type: "system" },
          { text: "VECTORS: IoT, Embedded C, Microcontrollers, Analog Electronics", type: "success" },
          { text: "INTEGRITY STATE: 100% Operational", type: "system" }
        );
        break;
      case "about":
        updatedHistory.push(
          { text: "--- SABIN BHANDARI OVERVIEW ---", type: "success" },
          { text: "Graduated Electrical Engineer turned Embedded Systems Programmer.", type: "system" },
          { text: "Currently crafting telemetry, signal control, and firmware logic.", type: "system" },
          { text: "Specialized in translating physical circuits into high-performance software code.", type: "system" }
        );
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      case "reboot":
        setHistory([]);
        setInputVal("");
        // Trigger boot reload
        window.location.reload();
        return;
      default:
        updatedHistory.push({
          text: `Command not recognized: '${command}'. Type 'help' for options.`,
          type: "error"
        });
    }

    setHistory(updatedHistory);
    setInputVal("");
  };

  return (
    <div className="min-h-screen bg-[#010512] text-emerald-400 p-4 md:p-8 flex items-center justify-center font-mono selection:bg-emerald-500/20 selection:text-emerald-200">
      {/* Scanline CRT simulation overlay */}
      <div className="absolute inset-0 bg-scanlines pointer-events-none opacity-15 z-20" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40 z-10" />

      <div className="max-w-3xl w-full glass border-emerald-500/20 rounded-xl overflow-hidden shadow-2xl shadow-emerald-950/20 z-10 flex flex-col h-[550px] relative">
        
        {/* Terminal Header Bar */}
        <div className="bg-slate-950/90 border-b border-emerald-500/10 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-amber-500/60" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
            <span className="text-xs text-slate-400 ml-2">guest@sabin-portfolio: kernel_shell (404)</span>
          </div>
          <span className="text-xs text-emerald-500/50 animate-pulse">● SECURE PORT</span>
        </div>

        {/* Terminal Console Log */}
        <div className="flex-1 p-5 overflow-y-auto space-y-2.5 scrollbar-thin scrollbar-thumb-emerald-500/20">
          {history.map((line, i) => (
            <div
              key={i}
              className={`text-sm leading-relaxed ${
                line.type === "error"
                  ? "text-rose-400 font-bold"
                  : line.type === "success"
                  ? "text-amber-300 font-bold"
                  : line.type === "input"
                  ? "text-teal-300"
                  : "text-emerald-400/90"
              }`}
            >
              {line.text}
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Command Input */}
        <form
          onSubmit={handleCommandSubmit}
          className="bg-slate-950/90 border-t border-emerald-500/10 px-5 py-4 flex items-center gap-3"
        >
          <span className="text-sm text-teal-300 shrink-0">guest@sabin-portfolio:~ $</span>
          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-emerald-300 font-mono text-sm focus:ring-0 focus:outline-none p-0 caret-emerald-400"
            autoFocus
            autoComplete="off"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' and press Enter..."
          />
          <Button
            type="submit"
            className="bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/30 text-xs px-3.5 py-1 h-auto"
          >
            EXECUTE
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NotFound;
