import React, { useEffect, useState } from 'react';
import { DessertItem } from '../types';
import { X, Thermometer, Activity, Layers, PenTool, Cpu, ChevronRight } from 'lucide-react';

interface Props {
    item: DessertItem | null;
    onClose: () => void;
    lang: 'zh' | 'en';
}

const StructureModal: React.FC<Props> = ({ item, onClose, lang }) => {
    const [activeTab, setActiveTab] = useState<'blueprint' | 'scent'>('blueprint');
    const [isClosing, setIsClosing] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (item) {
            setMounted(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [item]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            setMounted(false);
            onClose();
        }, 500);
    };

    if (!item && !mounted) return null;

    // Animation states
    const backdropClass = isClosing ? 'opacity-0' : 'opacity-100';
    const contentClass = isClosing ? 'scale-95 opacity-0 translate-y-4' : 'scale-100 opacity-100 translate-y-0';

    // Safe accessor for structure data (in case some items don't have it yet)
    const structure = item?.structure;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ${backdropClass} ${!item ? 'pointer-events-none' : ''}`}>

            {/* Backdrop: Dark Blueprint Grid */}
            <div
                className="absolute inset-0 bg-[#0a192f]/95 backdrop-blur-xl"
                onClick={handleClose}
            >
                {/* Grid Pattern */}
                <div className="absolute inset-0"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                        backgroundSize: '40px 40px'
                    }}
                />
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0a192f] opacity-80" />
            </div>

            {/* Main Modal Content */}
            <div className={`relative w-full h-full md:w-[95vw] md:h-[90vh] bg-[#0a192f] border border-blue-500/30 shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${contentClass}`}>

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 z-50 p-2 text-blue-200 hover:text-white hover:rotate-90 transition-all duration-300 border border-blue-500/30 rounded-full bg-[#0a192f]"
                >
                    <X size={20} />
                </button>

                {/* Left Column: Visual Blueprint (The "AI" Generation effect) */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative border-b md:border-b-0 md:border-r border-blue-500/30 overflow-hidden group">
                    {/* The Image with CSS Blueprint Filter */}
                    <div className="absolute inset-0 bg-[#0a192f]">
                        {item?.imageUrl && (
                            <img
                                src={item.imageUrl}
                                alt="Blueprint"
                                className="w-full h-full object-cover opacity-60 md:opacity-40 mix-blend-luminosity filter contrast-125 grayscale hover:grayscale-0 transition-all duration-[2s]"
                            />
                        )}
                        {/* Blueprint Overlay Color */}
                        <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay pointer-events-none" />

                        {/* SVG Technical Lines Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-60">
                            <svg width="100%" height="100%">
                                <line x1="10%" y1="10%" x2="15%" y2="10%" stroke="rgba(100,200,255,0.5)" strokeWidth="1" />
                                <line x1="10%" y1="10%" x2="10%" y2="90%" stroke="rgba(100,200,255,0.5)" strokeWidth="1" />
                                <circle cx="50%" cy="50%" r="30%" fill="none" stroke="rgba(100,200,255,0.2)" strokeWidth="1" strokeDasharray="5,5" />
                                <line x1="50%" y1="20%" x2="80%" y2="20%" stroke="rgba(100,200,255,0.3)" strokeWidth="1" />
                                <text x="82%" y="21%" fill="rgba(100,200,255,0.6)" fontSize="10" fontFamily="monospace">CROSS_SECTION_A</text>
                            </svg>
                        </div>
                    </div>

                    {/* Scanning Effect */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-[scan_4s_ease-in-out_infinite]" />

                    {/* Labels floating on the visual */}
                    <div className="absolute bottom-8 left-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] text-blue-400 font-mono tracking-widest bg-blue-900/30 px-2 py-1 w-fit border border-blue-500/30">
                                FIG 1.1 — {item?.year}
                            </span>
                            <h2 className="text-3xl md:text-5xl text-blue-100 font-serif-display mt-2">
                                {item?.name[lang].split('：')[1]}
                            </h2>
                            <span className="text-xs text-blue-300/60 font-mono">
                                ID: {item?.id.toUpperCase()} // REV.02
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Technical Specs */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto bg-[#0b1221] text-blue-100 relative">
                    <div className="p-8 md:p-12 space-y-12">

                        {/* Header Section */}
                        <div className="flex justify-between items-start border-b border-blue-500/20 pb-6">
                            <div>
                                <h3 className="text-xs text-blue-500 uppercase tracking-[0.2em] mb-2 font-mono">
                                    {lang === 'zh' ? '結構分析' : 'STRUCTURAL ANALYSIS'}
                                </h3>
                                <p className="text-sm text-blue-200/80 leading-relaxed max-w-md">
                                    {structure?.mechanics[lang]}
                                </p>
                            </div>
                        </div>

                        {/* 1. Layers (Material Board) */}
                        <div className="space-y-6">
                            <h4 className="flex items-center gap-3 text-sm text-blue-100 font-bold uppercase tracking-widest">
                                <Layers size={14} className="text-blue-500" />
                                {lang === 'zh' ? '材質分層' : 'MATERIAL LAYERS'}
                            </h4>

                            <div className="grid gap-4">
                                {structure?.layers.map((layer, idx) => (
                                    <div key={idx} className="group flex items-center justify-between p-4 border border-blue-500/10 hover:border-blue-500/40 bg-blue-500/5 hover:bg-blue-500/10 transition-all rounded-sm">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-blue-300 font-mono mb-1">{layer.thickness}</span>
                                            <span className="text-sm text-white font-medium">{layer.name[lang]}</span>
                                        </div>
                                        <div className="flex gap-4 text-right">
                                            <div className="flex flex-col items-end">
                                                <span className="text-[10px] text-blue-500 uppercase">TEX.</span>
                                                <span className="text-xs text-blue-200">{layer.texture[lang]}</span>
                                            </div>
                                            <div className="flex flex-col items-end border-l border-blue-500/20 pl-4 w-16">
                                                <span className="text-[10px] text-blue-500 uppercase">TEMP.</span>
                                                <span className="text-xs text-blue-200">{layer.temperature}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 2. Construction Process */}
                        <div className="space-y-6">
                            <h4 className="flex items-center gap-3 text-sm text-blue-100 font-bold uppercase tracking-widest">
                                <Cpu size={14} className="text-blue-500" />
                                {lang === 'zh' ? '施工流程' : 'CONSTRUCTION PROCESS'}
                            </h4>

                            <div className="relative border-l border-blue-500/20 ml-3 space-y-8 py-2">
                                {structure?.construction.map((step, idx) => (
                                    <div key={idx} className="relative pl-8">
                                        {/* Dot */}
                                        <div className="absolute -left-[5px] top-1 w-[9px] h-[9px] rounded-full bg-[#0b1221] border border-blue-500" />

                                        <div className="flex flex-col">
                                            <div className="flex items-baseline justify-between mb-1">
                                                <span className="text-xs text-blue-500 font-mono tracking-wider">STEP {step.step}</span>
                                                <span className="text-[10px] text-blue-400/60 font-mono border border-blue-500/20 px-1">{step.time}</span>
                                            </div>
                                            <h5 className="text-sm text-white font-bold mb-1">{step.action[lang]}</h5>
                                            <p className="text-xs text-blue-300/70 leading-relaxed">
                                                {step.details[lang]}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Flavor Profile Details (Footer) */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-blue-500/20">
                            <div className="bg-blue-900/20 p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] text-blue-400 uppercase tracking-wider">SWEETNESS</span>
                                    <span className="text-xs font-mono text-blue-200">{structure?.flavor.sweetness}%</span>
                                </div>
                                <div className="h-1 w-full bg-blue-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: `${structure?.flavor.sweetness}%` }} />
                                </div>
                            </div>
                            <div className="bg-blue-900/20 p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] text-blue-400 uppercase tracking-wider">TEXTURE</span>
                                    <span className="text-xs font-mono text-blue-200">{structure?.flavor.texture}%</span>
                                </div>
                                <div className="h-1 w-full bg-blue-900 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500" style={{ width: `${structure?.flavor.texture}%` }} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default StructureModal;
