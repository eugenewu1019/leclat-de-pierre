import React, { useEffect, useRef } from 'react';
import { APP_NAME, HERO_TEXT } from '../constants';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const Hero: React.FC<Props> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrolled = window.scrollY;

      // Parallax calculations
      if (bgRef.current) {
        // Background moves slower (0.4 speed)
        bgRef.current.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
      }
      if (textRef.current) {
        // Text moves slightly faster than background but slower than scroll (0.2 speed) creating depth
        textRef.current.style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
        textRef.current.style.opacity = `${1 - scrolled / 700}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-zinc-950">
      {/* Background Image - High Res Dark Texture - Parallax Layer */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-[-10%] bg-cover bg-center w-[120%] h-[120%] opacity-50 grayscale contrast-125 will-change-transform"
          style={{ backgroundImage: `url('/assets/images/hero-bg.png')` }}
        />
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30 z-0" />

      {/* Content Container - Parallax Layer */}
      <div ref={textRef} className="relative z-10 w-full px-8 md:px-24 flex flex-col items-start will-change-transform">

        {/* Decorative Lines & Amber Accent */}
        <div className="flex items-center gap-4 mb-12 opacity-80">
          <span className="text-[10px] tracking-[0.3em] text-amber-600 font-bold">EST. 2023</span>
          <div className="w-16 h-[1px] bg-zinc-700"></div>
          <span className="text-[10px] tracking-[0.3em] text-zinc-400">TAIPEI</span>
        </div>

        {/* Main Title */}
        <h1 className="flex flex-col font-serif-display text-zinc-200 tracking-[0.05em] uppercase font-thin leading-none select-none">
          <span className="text-[12vw] md:text-[9vw] mix-blend-overlay opacity-80">{APP_NAME.split(' ')[0]}</span>
          <span className="text-[12vw] md:text-[9vw] ml-8 md:ml-32 text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 to-zinc-600">{APP_NAME.split(' ')[1]} {APP_NAME.split(' ')[2]}</span>
        </h1>

        <div className="mt-16 md:ml-40 max-w-lg border-l-2 border-amber-700/50 pl-8 space-y-6">
          <p className={`text-xl md:text-3xl text-zinc-200 font-light tracking-[0.1em] leading-relaxed ${lang === 'zh' ? 'font-serif-cn' : 'font-serif-display'}`}>
            {HERO_TEXT.title[lang]}
          </p>

          <p className="text-[10px] md:text-xs text-amber-600/80 uppercase tracking-[0.4em]">
            {HERO_TEXT.subtitle[lang]}
          </p>
        </div>
      </div>

      {/* Scroll Indicator with Accent */}
      <div className="absolute bottom-0 right-0 p-12 hidden md:block z-20">
        <div className="relative w-24 h-24 border border-zinc-800/50 rounded-full flex items-center justify-center animate-spin-slow group cursor-pointer hover:border-amber-700/50 transition-colors duration-500">
          <svg className="w-full h-full absolute inset-0 text-zinc-600 group-hover:text-amber-600 transition-colors duration-500" viewBox="0 0 100 100">
            <path id="curve" d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" fill="transparent" />
            <text className="text-[8px] uppercase tracking-[0.3em]" fill="currentColor">
              <textPath href="#curve">
                Scroll Down • Scroll Down •
              </textPath>
            </text>
          </svg>
          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full shadow-[0_0_10px_rgba(217,119,6,0.8)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;