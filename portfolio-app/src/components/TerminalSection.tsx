const TerminalSection = () => {
  return (
    <div className="mt-24 p-6 bg-surface-container-lowest border border-outline-variant/20 font-mono text-[11px] text-on-surface-variant leading-tight">
      <div className="flex justify-between border-b border-outline-variant/20 pb-2 mb-4">
        <span>TERMINAL_SESSION: EXPERIENCE_LOG</span>
        <span className="text-primary-container">RUNNING...</span>
      </div>
      <p>&gt; fetch system.stack_efficiency</p>
      <p className="text-primary-container">Calculating metrics for Agentic AI workflows...</p>
      <p>&gt; status: 100% operational</p>
      <p>&gt; last_commit: "Integrated autonomous memory module V4.2"</p>
      <div className="mt-4 flex gap-1">
        <span className="w-2 h-4 bg-primary-container"></span>
      </div>
    </div>
  );
};

export default TerminalSection;