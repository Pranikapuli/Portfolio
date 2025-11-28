import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import SkillMatrix from '../components/features/SkillMatrix';
import { PERSONAL_ICONS } from '../data/initialData';

const AboutView = ({ data, onSkillHover, onSkillLeave }) => (
    <div className="max-w-6xl mx-auto pt-8 md:pt-20 flex flex-col min-h-[80vh]">
        <SectionTitle title="Competency Matrix" subtitle="Mapping technical competence to product strategy." />

        <div className="text-2xl md:text-3xl text-gray-200 font-light mb-16 leading-relaxed border-l-4 border-blue-500 pl-8 py-2 font-sans tracking-wide max-w-4xl">
            "I believe building products is about connecting dots others don't see. Here is a glimpse into my world—both at work and away from the keyboard."
        </div>

        {/* SKILL MATRIX - HERO */}
        <div className="mb-24 flex-grow">
            <SkillMatrix
                skills={data.skills}
                onSkillHover={onSkillHover}
                onSkillLeave={onSkillLeave}
            />
        </div>

        {/* PERSONAL / SYSTEM STATUS FOOTER */}
        <div className="border-t border-slate-200 dark:border-gray-900 pt-12 mt-auto">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-[0.3em] mb-8">Beyond Work</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {data.personal.map((item, i) => {
                    const Icon = PERSONAL_ICONS[item.icon];
                    return (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                            <div className={`p-3 rounded-lg border transition-colors ${item.color.replace('text-', 'bg-').replace('400', '100')} dark:bg-gray-900 border-slate-200 dark:border-gray-800`}>
                                <Icon size={18} className={`${item.color} dark:opacity-100`} />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-300 uppercase tracking-widest mb-0.5">{item.label}</p>
                                <h4 className="text-sm font-bold text-white font-mono">{item.value}</h4>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
);

export default AboutView;
