import React from 'react';

const SkillMatrix = ({ skills, onSkillHover, onSkillLeave }) => {
    const categories = [
        { id: 'strategic', label: 'Product & Strategy', color: 'text-red-500 dark:text-red-400' },
        { id: 'technical', label: 'Technical Stack', color: 'text-blue-500 dark:text-blue-400' },
        { id: 'tools', label: 'Toolkit', color: 'text-purple-500 dark:text-purple-400' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {categories.map((cat) => (
                <div key={cat.id} className="space-y-6">
                    <h3 className={`text-sm font-bold uppercase tracking-[0.2em] ${cat.color} border-b border-slate-200 dark:border-gray-800 pb-2`}>
                        {cat.label}
                    </h3>
                    <div className="flex flex-col gap-3">
                        {skills[cat.id].map((s, i) => (
                            <span
                                key={i}
                                className="text-slate-300 hover:text-white text-lg font-light transition-colors cursor-pointer hover:translate-x-1 transform duration-200"
                                onMouseEnter={() => onSkillHover(s)}
                                onMouseLeave={onSkillLeave}
                            >
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillMatrix;
