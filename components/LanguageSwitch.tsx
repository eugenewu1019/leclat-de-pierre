import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
}

const LanguageSwitch: React.FC<Props> = ({ lang, setLang }) => {
  return (
    <div className="fixed top-8 right-8 z-50 flex items-center gap-4 mix-blend-difference text-white">
      <button 
        onClick={() => setLang('zh')}
        className={`text-xs tracking-widest uppercase transition-opacity duration-500 ${lang === 'zh' ? 'opacity-100 font-bold border-b border-white' : 'opacity-40 hover:opacity-80'}`}
      >
        中文
      </button>
      <span className="opacity-20">/</span>
      <button 
        onClick={() => setLang('en')}
        className={`text-xs tracking-widest uppercase transition-opacity duration-500 ${lang === 'en' ? 'opacity-100 font-bold border-b border-white' : 'opacity-40 hover:opacity-80'}`}
      >
        ENG
      </button>
    </div>
  );
};

export default LanguageSwitch;
