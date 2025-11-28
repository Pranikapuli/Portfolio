import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, MessageCircle } from 'lucide-react';
import ProjectContent from './ProjectContent';

const CaseStudyModal = ({ isOpen, onClose, project }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!project) return null;

    // --- DYNAMIC BRAND COLORS (Synced with ProjectCard) ---
    const getBrandColors = (brand) => {
        // BROWNFIELD OVERRIDE (Green to match images)
        if (project.id === 'brownfield') return {
            border: 'border-[#34d399]/30',
            glow: 'shadow-[0_0_50px_rgba(52,211,153,0.1)]',
            text: 'text-[#34d399]',
            bg: 'bg-[#34d399]/10',
            hover: 'hover:text-[#34d399]'
        };

        const b = brand?.toLowerCase() || '';
        if (b.includes('amd')) return {
            border: 'border-[#fb7185]/30',
            glow: 'shadow-[0_0_50px_rgba(251,113,133,0.1)]',
            text: 'text-[#fb7185]',
            bg: 'bg-[#fb7185]/10',
            hover: 'hover:text-[#fb7185]'
        };
        if (b.includes('nvidia')) return {
            border: 'border-[#2dd4bf]/30',
            glow: 'shadow-[0_0_50px_rgba(45,212,191,0.1)]',
            text: 'text-[#2dd4bf]',
            bg: 'bg-[#2dd4bf]/10',
            hover: 'hover:text-[#2dd4bf]'
        };
        if (b.includes('google')) return {
            border: 'border-[#fcd34d]/30',
            glow: 'shadow-[0_0_50px_rgba(252,211,77,0.1)]',
            text: 'text-[#fcd34d]',
            bg: 'bg-[#fcd34d]/10',
            hover: 'hover:text-[#fcd34d]'
        };
        if (b.includes('meta')) return {
            border: 'border-[#7dd3fc]/30',
            glow: 'shadow-[0_0_50px_rgba(125,211,252,0.1)]',
            text: 'text-[#7dd3fc]',
            bg: 'bg-[#7dd3fc]/10',
            hover: 'hover:text-[#7dd3fc]'
        };
        if (b.includes('hardware') || b.includes('apple')) return {
            border: 'border-[#c084fc]/30',
            glow: 'shadow-[0_0_50px_rgba(192,132,252,0.1)]',
            text: 'text-[#c084fc]',
            bg: 'bg-[#c084fc]/10',
            hover: 'hover:text-[#c084fc]'
        };
        // Default
        return {
            border: 'border-slate-500/30',
            glow: 'shadow-[0_0_50px_rgba(255,255,255,0.05)]',
            text: 'text-slate-300',
            bg: 'bg-slate-500/10',
            hover: 'hover:text-white'
        };
    };

    const colors = getBrandColors(project.brand);

    // --- SMOOTH IMAGE COMPONENT ---
    const SmoothImage = ({ src, alt, className }) => {
        const [isLoading, setIsLoading] = React.useState(true);

        return (
            <div className="relative block w-full">
                {isLoading && (
                    <div className="absolute inset-0 bg-white/5 animate-pulse rounded-lg z-10" />
                )}
                <img
                    src={src}
                    alt={alt}
                    className={`${className} transition-opacity duration-700 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => setIsLoading(false)}
                    onError={(e) => {
                        console.error("Image failed to load:", src);
                        setIsLoading(false);
                    }}
                />
            </div>
        );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* ... (rest of modal structure) ... */}
                    {/* BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    {/* MODAL CONTAINER - UNIFIED SCROLL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-6xl h-[90vh] bg-[#0a0a0a] rounded-3xl overflow-hidden ${colors.glow} overflow-y-auto custom-scrollbar`}
                    >
                        {/* HEADER - SCROLLS WITH CONTENT */}
                        <div className="p-8 md:p-12 flex justify-between items-start">
                            <div className="w-full">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/10 ${colors.bg} ${colors.text}`}>
                                    {project.type}
                                </div>
                                <h2 className="text-5xl md:text-7xl font-light text-white mb-4 leading-tight tracking-wide">{project.title}</h2>
                                <p className="text-xl text-slate-400 font-light max-w-3xl">{project.hook}</p>

                                <hr className="border-white/10 my-12" />
                            </div>

                            <button
                                onClick={onClose}
                                className="sticky top-8 p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-slate-400 hover:text-white transition-colors ml-4 hover:bg-white/10 z-50"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* CONTENT - CONTINUOUS FLOW */}
                        <div className="px-8 md:px-12 pb-12 w-full">

                            {/* Project Metadata - EDITORIAL STYLE (No Boxes) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
                                <div>
                                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${colors.text}`}>Challenge</h4>
                                    <p className="text-xl text-slate-300 leading-relaxed font-light">{project.description}</p>
                                </div>
                                <div>
                                    <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${colors.text}`}>Tech Stack</h4>
                                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                                        {project.techStack?.map((tech, i) => (
                                            <span key={i} className="text-lg text-slate-300 font-light border-b border-white/10 pb-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* DYNAMIC CONTENT LAYOUT: Problem -> Images -> Rest */}
                            {(() => {
                                // Split content at the second header (usually "Process" or "Solution")
                                const splitIndex = project.content?.findIndex((item, i) => i > 0 && item.type === 'header');
                                const part1 = splitIndex !== -1 ? project.content.slice(0, splitIndex) : project.content;
                                const part2 = splitIndex !== -1 ? project.content.slice(splitIndex) : [];

                                return (
                                    <>
                                        {/* PART 1: The Problem */}
                                        <ProjectContent content={part1} brandColors={colors} />

                                        {/* IMAGES: Injected after Problem */}
                                        {project.images && project.images.length > 0 && (
                                            <div className={`my-12 ${project.id === 'carbon' ? 'grid grid-cols-1 md:grid-cols-2 gap-8' : 'space-y-12'}`}>
                                                {project.images.map((img, idx) => (
                                                    <div key={idx} className="w-full">
                                                        <div className={`w-full ${project.id === 'aether' ? 'overflow-hidden rounded-xl' : ''}`}>
                                                            <SmoothImage
                                                                src={img.src}
                                                                alt={img.caption || `Diagram ${idx + 1}`}
                                                                className={`w-full h-auto rounded-lg shadow-2xl ${project.id === 'aether' ? 'transform scale-110' : ''}`}
                                                            />
                                                        </div>
                                                        {img.caption && (
                                                            <p className="text-center text-sm text-gray-500 mt-4 font-mono uppercase tracking-wider">
                                                                {img.caption}
                                                            </p>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* PART 2: Process, Solution, Outcome */}
                                        <ProjectContent content={part2} brandColors={colors} />
                                    </>
                                );
                            })()}

                            {/* FOOTER ACTIONS */}
                            <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row gap-6 justify-between items-center">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform ${colors.glow}`}
                                >
                                    <span>View Full Project</span>
                                    <ArrowUpRight size={18} />
                                </a>

                                <a
                                    href="mailto:jagadeeshpuli.one@gmail.com"
                                    className={`flex items-center gap-2 text-slate-400 ${colors.hover} transition-colors`}
                                >
                                    <MessageCircle size={18} />
                                    <span>Ask me about this project</span>
                                </a>
                            </div>

                        </div >

                    </motion.div >
                </div >
            )}
        </AnimatePresence >
    );
};

export default CaseStudyModal;
