import React, { useEffect, useRef, useState, useMemo } from 'react';
import { DESSERTS } from '../constants';
import { Language, DessertItem } from '../types';
import { ArrowRight, Plus } from 'lucide-react';
import StructureModal from './StructureModal';

interface Props {
  lang: Language;
}

// Improved scroll progress hook with snapping capability
const useSnapScroll = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  itemCount: number
) => {
  const [progress, setProgress] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalScrollDistance = height - windowHeight;
      const currentScroll = -top;

      let p = currentScroll / totalScrollDistance;
      p = Math.max(0, Math.min(1, p));

      setProgress(p);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      if (p > 0.05 && p < 0.95) {
        scrollTimeout.current = setTimeout(() => {
          const rawIndex = p * (itemCount - 1);
          const targetIndex = Math.round(rawIndex);

          const targetP = targetIndex / (itemCount - 1);
          const containerAbsTop = window.scrollY + top;
          const scrollOffset = targetP * totalScrollDistance;
          const targetScrollY = containerAbsTop + scrollOffset;

          window.scrollTo({
            top: targetScrollY,
            behavior: 'smooth'
          });
        }, 50); // 50ms debounce (faster snap)
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [containerRef, itemCount]);

  return progress;
};

const CollectionSlide = ({
  item,
  index,
  lang,
  slideProgress,
  onOpenStructure,
}: {
  item: DessertItem;
  index: number;
  lang: Language;
  slideProgress: number;
  onOpenStructure: (item: DessertItem) => void;
}) => {
  const isActive = Math.abs(slideProgress) < 0.5;

  const textTranslateY = slideProgress * 60;
  const textOpacity = Math.max(0, 1 - Math.abs(slideProgress) * 2);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-12 h-full items-center relative">

        {/* Left: Text Info */}
        <div className="md:col-span-5 relative z-20 order-2 md:order-1 flex flex-col justify-center h-full pointer-events-none md:pointer-events-auto pl-4 md:pl-0">
          <div
            className="space-y-6 md:space-y-8"
            style={{
              opacity: textOpacity,
              transform: `translateY(${textTranslateY}px)`,
              filter: isActive ? 'blur(0)' : `blur(${Math.abs(slideProgress) * 5}px)`,
              transition: 'opacity 0.1s linear, transform 0.1s linear, filter 0.2s linear'
            }}
          >
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-amber-600 border border-amber-600 px-2 py-1 tracking-widest uppercase bg-zinc-950/50 backdrop-blur">
                No. {String(index + 1).padStart(2, '0')}
              </span>
              <div className="h-[1px] w-12 bg-zinc-800" />
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest">{item.year}</span>
            </div>

            <h2 className={`text-4xl md:text-6xl text-zinc-100 leading-tight ${lang === 'zh' ? 'font-serif-cn' : 'font-serif-display'}`}>
              {item.name[lang].split('：')[1] || item.name[lang]}
            </h2>

            <p className="text-xs md:text-sm text-zinc-400 max-w-sm leading-loose font-light border-l border-zinc-800 pl-4">
              {item.description[lang]}
            </p>

            <div className="pt-4 md:pt-8 w-fit">
              <ul className="space-y-2">
                {item.ingredients[lang].split('/').map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                    <Plus size={10} className="text-amber-700" />
                    {ing.trim()}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onOpenStructure(item)}
              className="w-fit group flex items-center gap-3 mt-8 text-[10px] text-zinc-300 hover:text-white uppercase tracking-[0.3em] transition-colors pointer-events-auto cursor-pointer"
            >
              <span>{lang === 'zh' ? '檢視結構' : 'View Structure'}</span>
              <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform duration-300 text-amber-600" />
            </button>
          </div>
        </div>

        {/* Right: Visual Image */}
        <div className="md:col-span-7 relative z-10 h-[40vh] md:h-full flex items-center justify-center order-1 md:order-2">
          <div
            className="relative w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] transition-transform duration-300 ease-linear"
            style={{
              transform: `perspective(1000px) rotateY(${slideProgress * -10}deg) scale(${1 - Math.abs(slideProgress) * 0.1})`
            }}
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-amber-900/10 to-transparent blur-3xl opacity-50 rounded-full" />

            <div
              onClick={() => onOpenStructure(item)}
              className="w-full h-full rounded-2xl md:rounded-lg overflow-hidden relative shadow-2xl shadow-zinc-950/50 border border-white/5 group cursor-pointer pointer-events-auto"
            >
              <img
                src={item.imageUrl}
                alt={item.name[lang]}
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out brightness-90 group-hover:brightness-100"
              />

              <div className="absolute inset-0 bg-radial-gradient from-transparent to-zinc-950/40 pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-black/50 backdrop-blur-md text-white border border-white/20 px-4 py-2 text-xs uppercase tracking-widest">
                  {lang === 'zh' ? '掃描結構' : 'SCAN STRUCTURE'}
                </span>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-amber-600/30" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-amber-600/30" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Collection: React.FC<Props> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = DESSERTS.length;
  const [selectedItem, setSelectedItem] = useState<DessertItem | null>(null);

  const progress = useSnapScroll(containerRef, totalSlides);
  const rawFloatIndex = progress * (totalSlides - 1);

  return (
    <>
      <section
        ref={containerRef}
        id="collection"
        className="relative h-[200vh] bg-zinc-950"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#18181b_0%,#09090b_60%)] opacity-40 pointer-events-none" />

          <div className="absolute top-24 left-6 md:left-12 z-40 mix-blend-difference pointer-events-none">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-amber-500 tracking-[0.2em] font-mono">
                02 / EXHIBITION
              </span>
              <h2 className="text-xl text-zinc-300 font-serif-display tracking-widest opacity-50">
                COLLECTION
              </h2>
            </div>
          </div>

          <div className="relative w-full h-full max-w-[1920px] mx-auto">
            {DESSERTS.map((item, index) => {
              const slideProgress = rawFloatIndex - index;

              if (slideProgress < -1.5 || slideProgress > 1.5) return null;

              const zIndex = 50 - Math.abs(index - Math.round(rawFloatIndex));

              const containerOpacity = Math.max(0, 1 - Math.abs(slideProgress) * 0.8);

              return (
                <div
                  key={item.id}
                  className="absolute inset-0 w-full h-full transition-opacity duration-300"
                  style={{
                    opacity: containerOpacity,
                    zIndex,
                    pointerEvents: Math.abs(slideProgress) < 0.5 ? 'auto' : 'none'
                  }}
                >
                  <CollectionSlide
                    item={item}
                    index={index}
                    lang={lang}
                    slideProgress={slideProgress}
                    onOpenStructure={setSelectedItem}
                  />
                </div>
              );
            })}
          </div>

          <div className="absolute right-8 top-1/2 -translate-y-1/2 h-48 w-[1px] bg-zinc-800 hidden md:block z-40">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] bg-amber-600 transition-all duration-300 shadow-[0_0_10px_rgba(217,119,6,0.5)]"
              style={{
                height: `${100 / totalSlides}%`,
                top: `${Math.min(100 - (100 / totalSlides), (progress * 100))}%`
              }}
            />
          </div>

        </div>
      </section>

      <StructureModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        lang={lang}
      />
    </>
  );
};

export default Collection;