import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

const ExperienceView = ({ data }) => (
    <div className="max-w-4xl mx-auto pt-8 md:pt-20">
        <SectionTitle
            title="Career Roadmap"
            subtitle="Executing product strategy across the AI stack."
        />

        <div className="relative border-l border-blue-500/30 ml-4 md:ml-8 space-y-20 mt-20">
            {/* Glowing Line Effect */}
            <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>

            {data.experience.map((job, i) => (
                <div key={i} className="relative pl-12 md:pl-20 group">
                    {/* Mission Checkpoint Node */}
                    <div className="absolute -left-[9px] top-2 w-5 h-5 bg-[#000] border-2 border-blue-500 rounded-full group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>

                    <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-4">
                        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{job.role}</h3>
                        <span className="text-lg text-blue-400 font-mono tracking-widest uppercase">{job.company}</span>
                    </div>

                    <div className="mb-8">
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] border border-gray-800 px-3 py-1 rounded-full">
                            {job.dates}
                        </span>
                    </div>

                    {/* Data Points (Metrics) */}
                    <div className="flex flex-wrap gap-6 mb-8">
                        {job.metrics.map((metric, m) => (
                            <div key={m} className="flex items-center gap-3">
                                <span className="text-blue-500 font-mono text-xl font-bold">
                                    {metric.split(' ')[0]}
                                </span>
                                <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">
                                    {metric.split(' ').slice(1).join(' ')}
                                </span>
                            </div>
                        ))}
                    </div>

                    <ul className="space-y-4 border-l-2 border-gray-900 pl-6">
                        {job.bullets.map((bullet, b) => (
                            <li key={b} className="text-gray-400 leading-relaxed font-light text-lg">
                                {bullet}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </div>
);

export default ExperienceView;
