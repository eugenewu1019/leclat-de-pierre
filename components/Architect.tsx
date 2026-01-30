import React, { useEffect, useRef } from 'react';
import { CHEF_PROFILE } from '../constants';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const Architect: React.FC<Props> = ({ lang }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bigTextRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = (rect.top - windowHeight / 2);

        // "LIN" text moves horizontally and vertically slightly
        if (bigTextRef.current) {
          bigTextRef.current.style.transform = `translate3d(${offset * 0.1}px, ${offset * 0.2}px, 0)`;
        }

        // Content block moves vertically opposite to create "floating" feel
        if (contentRef.current) {
          contentRef.current.style.transform = `translate3d(0, ${offset * -0.05}px, 0)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="architect"
      ref={sectionRef}
      className="min-h-screen bg-zinc-900 flex items-center justify-center px-6 py-40 overflow-hidden relative"
    >

      {/* Background large text - Parallax Target */}
      <div
        ref={bigTextRef}
        className="absolute right-0 bottom-0 text-[15vw] font-serif-display text-zinc-800/20 leading-none select-none pointer-events-none translate-y-1/4 translate-x-1/4 will-change-transform transition-transform duration-75 ease-out"
      >
        LIN
      </div>

      <div ref={contentRef} className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10 will-change-transform transition-transform duration-75 ease-out">

        {/* Text Side */}
        <div className="order-2 md:order-1 flex flex-col justify-center md:pl-12 relative z-20">
          <div className="mb-12">
            <h2 className="text-[10px] text-amber-600 uppercase tracking-[0.4em] mb-6 flex items-center gap-4 font-bold">
              <span className="w-8 h-[1px] bg-amber-600"></span>
              {CHEF_PROFILE.title[lang]}
            </h2>
            <h1 className={`text-5xl md:text-7xl text-zinc-100 ${lang === 'zh' ? 'font-serif-cn' : 'font-serif-display'} tracking-widest leading-tight`}>
              {CHEF_PROFILE.name[lang].split(' ')[0]}<br />
              <span className="text-zinc-600">{CHEF_PROFILE.name[lang].split(' ')[1]}</span>
            </h1>
          </div>

          <div className="space-y-8 max-w-md bg-zinc-950/90 backdrop-blur-sm p-8 border-l-2 border-amber-700/50 md:-mr-20 shadow-2xl">
            {CHEF_PROFILE.bio.map((p, idx) => (
              <p key={idx} className={`text-zinc-300 font-light leading-8 text-sm tracking-wide ${idx === 1 ? 'italic text-zinc-500' : ''}`}>
                {p[lang]}
              </p>
            ))}

            <div className="pt-8 mt-8 border-t border-zinc-800">
              <p className="text-lg font-serif-display text-zinc-200 tracking-[0.1em]">
                "{CHEF_PROFILE.philosophy[lang]}"
              </p>
            </div>
          </div>
        </div>

        {/* Image Side - Overlapping */}
        <div className="order-1 md:order-2 relative h-[80vh] w-full">
          <div className="absolute inset-0 bg-zinc-800 transform md:translate-x-12 md:translate-y-12 transition-transform duration-700" />
          <div className="absolute inset-0 overflow-hidden grayscale contrast-125 md:mr-12 md:mb-12">
            <img
              src="/assets/images/architect-portrait.png"
              alt="Chef Pierre Lin"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          {/* Accent corner */}
          <div className="absolute top-0 right-12 w-12 h-12 border-t-2 border-r-2 border-amber-600/50" />
        </div>

      </div>
    </section>
  );
};

export default Architect;