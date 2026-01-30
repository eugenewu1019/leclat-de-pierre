import React from 'react';
import { APP_NAME } from '../constants';
import { Language } from '../types';
import { Instagram, Facebook, Mail } from 'lucide-react';

interface Props {
  lang: Language;
}

const Footer: React.FC<Props> = ({ lang }) => {
  return (
    <footer className="bg-zinc-950 pt-32 pb-12 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-32">
        
        <div className="space-y-8 md:col-span-2">
          <h4 className="text-zinc-100 font-serif-display tracking-[0.2em] uppercase text-lg">{APP_NAME}</h4>
          <p className="text-zinc-500 text-xs leading-loose tracking-wide max-w-sm">
            {lang === 'zh' 
              ? '將建築語彙融入甜點工藝，在黑與白的維度中，尋找味覺的純粹。每一道甜點，都是獻給舌尖的微型建築。' 
              : 'Integrating architectural vocabulary into patisserie craft, seeking the purity of taste in the dimension of black and white. Every dessert is a miniature architecture dedicated to the palate.'}
          </p>
        </div>

        <div className="space-y-8">
          <h5 className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">Atelier</h5>
          <div className="space-y-3 text-xs text-zinc-400 font-light tracking-wide">
            <p>台北市大安區青田街 12 巷 11 號</p>
            <p>No. 11, Ln. 12, Qingtian St., Da’an Dist., Taipei City</p>
            <p className="pt-2 tracking-widest">+886 2 2396 1888</p>
            <p className="underline underline-offset-4 decoration-zinc-800 hover:text-white transition-colors cursor-pointer">atelier@leclatdepierre.com</p>
          </div>
        </div>

        <div className="space-y-8">
          <h5 className="text-[10px] text-zinc-600 uppercase tracking-[0.3em]">Opening</h5>
          <div className="space-y-3 text-xs text-zinc-400 font-light tracking-wide">
            <div className="flex justify-between max-w-[140px]">
               <span>Wed - Sun</span>
               <span>13:00 - 18:00</span>
            </div>
            <div className="flex justify-between max-w-[140px] text-zinc-600">
               <span>Mon - Tue</span>
               <span>Closed</span>
            </div>
            <div className="pt-2 text-zinc-600">
               {lang === 'zh' ? '* 僅接待預約客人' : '* Appointment Only'}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900">
        <p className="text-[9px] text-zinc-700 uppercase tracking-widest">
           © 2024 {APP_NAME}. Taipei.
        </p>
        <div className="flex gap-8 mt-6 md:mt-0">
           <a href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors"><Instagram size={14} /></a>
           <a href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors"><Facebook size={14} /></a>
           <a href="#" className="text-zinc-600 hover:text-zinc-300 transition-colors"><Mail size={14} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;