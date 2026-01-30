import React, { useEffect, useRef } from 'react';
import { PHILOSOPHY_CONTENT } from '../constants';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const Philosophy: React.FC<Props> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !imageRef.current || !textRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = (rect.top - windowHeight / 2);
        // Image moves slightly down as we scroll down
        imageRef.current.style.transform = `translate3d(0, ${offset * 0.08}px, 0)`;
        // Text moves slightly up (inverse)
        textRef.current.style.transform = `translate3d(0, ${offset * -0.05}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-zinc-950 px-6 py-32 relative overflow-hidden"
    >
      {/* Giant Watermark - Static or very subtle movement */}
      <div className="absolute top-20 -left-20 text-[20vw] font-serif-display text-zinc-900 leading-none select-none pointer-events-none opacity-50">
        EST.
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-12 gap-12 items-center relative z-10">

        {/* Image Section - Spans 5 columns */}
        <div ref={imageRef} className="md:col-span-5 relative group will-change-transform transition-transform duration-75 ease-out">
          <div className="aspect-[3/4] overflow-hidden bg-zinc-900 relative z-10">
            <img
              src="/assets/images/philosophy.png"
              alt="Philosophy"
              className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
          </div>
          {/* Offset Border - Accent Color */}
          <div className="absolute -top-4 -right-4 w-full h-full border border-amber-800/30 z-0 transition-all duration-700 group-hover:-top-2 group-hover:-right-2 group-hover:border-amber-600/50" />
        </div>

        {/* Text Section - Spans 6 columns with offset */}
        <div ref={textRef} className="md:col-span-6 md:col-start-7 space-y-16 pt-12 md:pt-0 will-change-transform transition-transform duration-75 ease-out">
          <h2 className={`text-4xl md:text-5xl text-zinc-200 tracking-[0.15em] leading-tight ${lang === 'zh' ? 'font-serif-cn' : 'font-serif-display'}`}>
            {PHILOSOPHY_CONTENT.title[lang]}
          </h2>

          <div className="space-y-12">
            {PHILOSOPHY_CONTENT.body.map((paragraph, idx) => (
              <div key={idx} className="relative pl-8 border-l border-zinc-800 hover:border-amber-700/50 transition-colors duration-500">
                <span className="absolute left-0 top-0 -ml-[1px] text-xs font-serif-display text-amber-600 bg-zinc-950 py-1">0{idx + 1}</span>
                <p className="text-zinc-400 leading-8 tracking-wide font-light text-sm text-justify pt-2">
                  {paragraph[lang]}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8 flex items-center gap-6">
            <div className="h-[1px] w-16 bg-amber-700"></div>
            <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
              {lang === 'zh' ? '台北 • 概念店' : 'Taipei • Concept Store'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;