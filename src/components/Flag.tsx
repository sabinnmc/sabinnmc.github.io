import React from 'react';

export const Flag: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto select-none animate-float-badge">
      <div className="relative group">
        {/* Glowing aura under flag */}
        <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-blue-600 to-red-500 rounded-full blur opacity-30 group-hover:opacity-80 transition duration-500" />
        
        {/* Floating Flag Badge Container */}
        <div className="relative flex items-center gap-2 bg-slate-950/80 border border-white/10 backdrop-blur-md px-3.5 py-2 rounded-full shadow-2xl hover:border-primary/40 hover:scale-105 active:scale-95 transition-all duration-300">
          <span className="text-xs font-semibold tracking-wide text-slate-200 group-hover:text-primary transition-colors duration-300">
            Nepal
          </span>
          <span className="text-2xl animate-pulse" style={{ animationDuration: '3s' }}>
            🇳🇵
          </span>
        </div>

        {/* Hover Tooltip */}
        <div className="absolute bottom-12 right-0 bg-slate-950/95 border border-white/15 backdrop-blur-md text-slate-100 text-[11px] font-medium px-3 py-1.5 rounded-lg shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
          Proudly Nepali 🇳🇵
        </div>
      </div>
    </div>
  );
};
