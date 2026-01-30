import React from 'react';
import { CRAFT_STEPS } from '../constants';
import { Language } from '../types';

interface Props {
  lang: Language;
}

// Sub-component for technical metrics
const MetricBar = ({ label, value, max, unit = '' }: { label: string, value: string, max?: number, unit?: string }) => (
  <div className="flex flex-col gap-1 w-full">
    <div className="flex justify-between text-[9px] uppercase tracking-widest text-zinc-500 font-mono">
      <span>{label}</span>
      <span className="text-amber-600">{value}{unit}</span>
    </div>
    <div className="w-full h-[1px] bg-zinc-800 relative overflow-hidden">
      {/* Animated Bar */}
      <div
        className="absolute top-0 left-0 h-full bg-zinc-400 animate-pulse"
        style={{ width: max ? `${max}%` : '100%' }}
      />
    </div>
  </div>
);

const Craft: React.FC<Props> = ({ lang }) => {
  return (
    <section id="craft" className="bg-zinc-950 py-48 px-6 relative border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline mb-32 border-b border-zinc-800 pb-4">
          <h2 className="text-zinc-600 uppercase tracking-[0.5em] text-xs">Process / Methodology</h2>
          <span className="text-zinc-800 font-serif-display text-4xl opacity-20 hidden md:block">STEPS</span>
        </div>

        <div className="grid md:grid-cols-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-zinc-800" />

          {CRAFT_STEPS.map((step, index) => (
            <div
              key={step.step}
              className={`group/step relative pt-12 md:pt-16 px-4 ${index !== 3 ? 'md:border-r border-zinc-900' : ''} hover:z-40 transition-all`}
            >
              {/* Vertical Tick - Turns Accent on Hover */}
              <div className="hidden md:block absolute top-0 left-0 w-[1px] h-4 bg-zinc-500 transition-all duration-500 group-hover/step:h-8 group-hover/step:bg-amber-600" />

              <span className="block text-[10px] font-mono text-zinc-600 mb-6 group-hover/step:text-amber-500 transition-colors">
                {step.step}
              </span>

              <h3 className={`text-xl text-zinc-300 mb-6 h-16 ${lang === 'zh' ? 'font-serif-cn' : 'font-serif-display'} tracking-widest group-hover/step:text-white transition-colors`}>
                {step.title[lang]}
              </h3>

              <div className="text-xs text-zinc-500 leading-relaxed font-light group-hover/step:text-zinc-400 transition-colors border-l border-transparent pl-0 group-hover/step:border-amber-800 group-hover/step:pl-4 duration-300">
                {step.desc[lang]}
              </div>
            </div>
          ))}
        </div>

        {/* 
           ENHANCED SECTION: Lab Interface / Limited Production
           Replaces the static image with a dynamic dashboard style
        */}
        <div className="mt-48 relative w-full h-[70vh] md:h-[60vh] overflow-hidden border border-zinc-800 bg-zinc-900 group/monitor select-none">

          {/* 1. Background Image with Slow Pan Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/assets/images/craft-lab.png"
              alt="Lab"
              className="w-full h-full object-cover grayscale opacity-30 scale-110 group-hover/monitor:scale-100 transition-transform duration-[20s] ease-linear"
            />
            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,11,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_4px,3px_100%] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 z-[2]" />
          </div>

          {/* 2. Grid Overlay Interface */}
          <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-between">

            {/* Top: Status Headers */}
            <div className="flex justify-between items-start border-b border-zinc-800/50 pb-4">
              <div className="flex flex-col">
                <span className="text-[10px] text-amber-600 font-mono animate-pulse">● LIVE MONITORING</span>
                <span className="text-xs text-zinc-400 tracking-widest mt-1">ATELIER TAIPEI — LAB 01</span>
              </div>
              <div className="text-right hidden md:block">
                <span className="text-[10px] text-zinc-600 font-mono block">SYS.STATUS: OPTIMAL</span>
                <span className="text-[10px] text-zinc-600 font-mono block">TEMP.CTRL: ACTIVE</span>
              </div>
            </div>

            {/* Middle: Content Split */}
            <div className="grid md:grid-cols-2 gap-12 items-end h-full pb-12">

              {/* Left: Technical Metrics (The "Progress Bar" feature) */}
              <div className="space-y-6 max-w-xs backdrop-blur-sm bg-zinc-950/30 p-6 border border-zinc-800/50">
                <h4 className="text-xs text-zinc-300 uppercase tracking-[0.2em] mb-4 border-l-2 border-amber-600 pl-3">
                  {lang === 'zh' ? '環境數據' : 'Env. Metrics'}
                </h4>

                <MetricBar label="Room Temperature" value="18.0" unit="°C" max={80} />
                <MetricBar label="Humidity" value="45" unit="%" max={45} />

                <div className="pt-4 mt-4 border-t border-zinc-800/50">
                  <MetricBar label="Daily Production Limit" value="24/30" unit=" Sets" max={75} />
                  <p className="text-[9px] text-zinc-500 mt-2 font-light italic">
                    * {lang === 'zh' ? '嚴格控制產量以確保品質結構' : 'Production capped for structural integrity'}
                  </p>
                </div>
              </div>

              {/* Right: Emotive Text */}
              <div className="text-right space-y-4">
                <div className="inline-block border border-amber-600/30 px-3 py-1 text-[9px] text-amber-600 tracking-[0.3em] uppercase mb-2">
                  {lang === 'zh' ? '預約制' : 'Appointment Only'}
                </div>
                <h2 className={`text-4xl md:text-5xl text-zinc-100 ${lang === 'zh' ? 'font-serif-cn' : 'font-serif-display'} tracking-widest leading-tight`}>
                  {lang === 'zh' ? '純手工製作' : 'Handcrafted'}
                  <br />
                  <span className="text-zinc-600">{lang === 'zh' ? '限量供應' : 'Limited Supply'}</span>
                </h2>
                <p className="text-xs text-zinc-400 max-w-md ml-auto leading-relaxed tracking-wide">
                  {lang === 'zh'
                    ? '我們不追求量產的效率，只在乎毫米之間的精準度。每日僅接待少量預約，確保每一件作品都是完美的建築型態。'
                    : 'Rejecting mass production efficiency for millimeter precision. Limited daily appointments ensure every piece maintains perfect architectural form.'}
                </p>
              </div>
            </div>
          </div>

          {/* 3. Bottom Ticker Tape (Animation) */}
          <div className="absolute bottom-0 left-0 w-full h-8 bg-zinc-900 border-t border-zinc-800 flex items-center overflow-hidden z-30">
            <div className="whitespace-nowrap flex animate-marquee">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="text-[9px] font-mono text-zinc-600 mx-8 uppercase tracking-[0.2em]">
                  LAT: 25.0330° N  LON: 121.5654° E  ///  ISO 9001 CERTIFIED  ///  TEMP: 18.0°C  ///  HUMIDITY: 45%  ///  BATCH: #2024-08-A  ///
                </span>
              ))}
            </div>
          </div>

          {/* Decorative Corner Lines */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-amber-600 z-30" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-amber-600 z-30" />
          <div className="absolute bottom-8 left-0 w-4 h-4 border-b border-l border-amber-600 z-30" />
          <div className="absolute bottom-8 right-0 w-4 h-4 border-b border-r border-amber-600 z-30" />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Craft;