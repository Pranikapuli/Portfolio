import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ id, title, type, hook, description, tags, onClick, isDimmed, brand }) => {
    const getBrandColors = (brand) => {
        // BROWNFIELD OVERRIDE (Green to match images)
        if (id === 'brownfield') return {
            border: 'hover:border-[#34d399]/50',
            shadow: 'hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]',
            text: 'text-[#34d399]',
            tagText: 'text-[#34d399]',
            tagBorder: 'border-[#34d399]/20',
            titleHover: 'group-hover:text-[#34d399]'
        };

        const b = brand?.toLowerCase() || '';
        if (b.includes('amd')) return {
            border: 'hover:border-[#fb7185]/50',
            shadow: 'hover:shadow-[0_0_20px_rgba(251,113,133,0.3)]',
            text: 'text-[#fb7185]',
            tagText: 'text-[#fb7185]',
            tagBorder: 'border-[#fb7185]/20',
            titleHover: 'group-hover:text-[#fb7185]'
        };
        if (b.includes('nvidia')) return {
            border: 'hover:border-[#2dd4bf]/50',
            shadow: 'hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]',
            text: 'text-[#2dd4bf]',
            tagText: 'text-[#2dd4bf]',
            tagBorder: 'border-[#2dd4bf]/20',
            titleHover: 'group-hover:text-[#2dd4bf]'
        };
        if (b.includes('google')) return {
            border: 'hover:border-[#fcd34d]/50',
            shadow: 'hover:shadow-[0_0_20px_rgba(252,211,77,0.3)]',
            text: 'text-[#fcd34d]',
            tagText: 'text-[#fcd34d]',
            tagBorder: 'border-[#fcd34d]/20',
            titleHover: 'group-hover:text-[#fcd34d]'
        };
        if (b.includes('meta')) return {
            border: 'hover:border-[#7dd3fc]/50',
            shadow: 'hover:shadow-[0_0_20px_rgba(125,211,252,0.3)]',
            text: 'text-[#7dd3fc]',
            tagText: 'text-[#7dd3fc]',
            tagBorder: 'border-[#7dd3fc]/20',
            titleHover: 'group-hover:text-[#7dd3fc]'
        };
        if (b.includes('hardware') || b.includes('apple')) return {
            border: 'hover:border-[#c084fc]/50',
            shadow: 'hover:shadow-[0_0_20px_rgba(192,132,252,0.3)]',
            text: 'text-[#c084fc]',
            tagText: 'text-[#c084fc]',
            tagBorder: 'border-[#c084fc]/20',
            titleHover: 'group-hover:text-[#c084fc]'
        };
        // Default -> Platinum
        return {
            border: 'hover:border-slate-300/50',
            shadow: 'hover:shadow-[0_0_20px_rgba(203,213,225,0.3)]',
            text: 'text-slate-300',
            tagText: 'text-slate-300',
            tagBorder: 'border-slate-300/20',
            titleHover: 'group-hover:text-slate-300'
        };
    };

    const colors = getBrandColors(brand);

    return (
        <div
            onClick={onClick}
            className={`
        group relative bg-gradient-to-br from-white/5 to-transparent p-8 rounded-2xl 
        border border-transparent ${colors.border} ${colors.shadow} hover:scale-105
        transition-all duration-500 cursor-pointer
        flex flex-col h-full backdrop-blur-sm
        ${isDimmed ? 'opacity-20 grayscale' : 'opacity-100'}
      `}
        >
            <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold tracking-widest uppercase ${colors.text}`}>{type}</span>
                    <ArrowUpRight size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className={`text-2xl font-bold text-white mb-2 ${colors.titleHover} transition-colors`}>{title}</h3>
                <p className="text-sm text-gray-500 font-mono italic mb-4">{hook}</p>
                <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
                    {description}
                </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag, i) => (
                    <span key={i} className={`text-[10px] uppercase font-bold ${colors.tagText} bg-black/40 backdrop-blur-md border ${colors.tagBorder} px-2 py-1 rounded`}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;
