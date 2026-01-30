import React, { useEffect, useState } from 'react';

interface Props {
  onComplete: () => void;
}

const LoadingScreen: React.FC<Props> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Determine increment speed based on current progress to simulate realistic loading
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 1000); // Wait for slide up animation
          }, 200);
          return 100;
        }
        
        // Random increment for organic feel
        const jump = Math.floor(Math.random() * 5) + 1;
        return Math.min(prev + jump, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#09090b] flex flex-col justify-between p-6 md:p-12 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] ${isFinished ? '-translate-y-full' : 'translate-y-0'}`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-start text-zinc-500 text-[10px] uppercase tracking-[0.3em]">
        <span>L'ÉCLAT DE PIERRE</span>
        <span>Est. 2023</span>
      </div>

      {/* Center Percentage - Brutalist Style */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center mix-blend-difference">
         <span className="text-[15vw] md:text-[20vw] font-serif-display leading-none text-zinc-200 block tabular-nums tracking-tighter">
            {count}%
         </span>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-2">
           <div className="w-24 h-[1px] bg-zinc-800 overflow-hidden">
              <div 
                className="h-full bg-amber-600 transition-all duration-100" 
                style={{ width: `${count}%` }} 
              />
           </div>
           <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Loading Resources</span>
        </div>
        <span className="text-[10px] text-zinc-600 font-mono">
             Taipei / Paris
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;