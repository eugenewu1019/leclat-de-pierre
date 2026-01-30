import React, { useEffect, useState } from 'react';
import { NAV_ITEMS, APP_NAME } from '../constants';
import { Language } from '../types';

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
}

const Navbar: React.FC<Props> = ({ lang, setLang }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Navbar (Top Fixed) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 md:hidden flex justify-between items-center px-6 py-4">
        <span className="font-serif-display text-zinc-200 tracking-widest">{APP_NAME.split(' ')[0]}</span>
        <button onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} className="text-xs text-amber-600 font-bold uppercase">
           {lang === 'zh' ? 'EN' : '中文'}
        </button>
      </nav>

      {/* Desktop Sidebar (Left Fixed) */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-24 flex-col justify-between items-center py-12 z-50 bg-zinc-950 border-r border-zinc-900 shadow-2xl">
        
        {/* Top: Brand Monogram */}
        <div className="flex flex-col items-center gap-2">
            <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-800 to-amber-900/50"></div>
            <span className="font-serif-display text-2xl text-amber-600 font-bold tracking-widest shadow-amber-900/20 drop-shadow-lg">L'É</span>
        </div>

        {/* Middle: Navigation Items */}
        <div className="flex flex-col gap-12 items-center w-full">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="group relative flex items-center justify-center w-full focus:outline-none"
            >
              {/* Tooltip / Label - Hidden by default, slides out on hover */}
              <div 
                className={`absolute left-16 bg-zinc-900/90 backdrop-blur border border-zinc-800 text-amber-500 px-4 py-2 text-[10px] uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none
                  opacity-0 -translate-x-4 scale-95 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100
                `}
              >
                {item.label[lang]}
                {/* Decorative triangle */}
                <div className="absolute top-1/2 -left-1 -mt-1 border-4 border-transparent border-r-zinc-800/90" />
              </div>

              {/* Icon / Indicator */}
              <div 
                className={`
                  transition-all duration-500 ease-out border 
                  ${activeSection === item.id 
                    ? 'bg-amber-600 border-amber-600 rotate-45 w-3 h-3 shadow-[0_0_15px_rgba(217,119,6,0.5)]' 
                    : 'bg-transparent border-zinc-700 w-2 h-2 group-hover:border-amber-500/50 group-hover:bg-amber-500/20'}
                `} 
              />
            </button>
          ))}
        </div>

        {/* Bottom: Language Switch */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-3 text-[10px] font-mono text-zinc-600">
            <button 
                onClick={() => setLang('zh')}
                className={`transition-all duration-300 hover:text-amber-500 ${lang === 'zh' ? 'text-amber-600 font-bold scale-110' : ''}`}
            >
                ZH
            </button>
            <button 
                onClick={() => setLang('en')}
                className={`transition-all duration-300 hover:text-amber-500 ${lang === 'en' ? 'text-amber-600 font-bold scale-110' : ''}`}
            >
                EN
            </button>
          </div>
          <div className="w-[1px] h-12 bg-gradient-to-t from-zinc-800 to-amber-900/50"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;