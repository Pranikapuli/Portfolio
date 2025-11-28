import React from 'react';

const ImpactCard = ({ role, company, dates, bullets, win, metrics }) => (
    <div className="bg-[#111] border border-gray-800 p-8 rounded-2xl hover:border-gray-600 transition-all duration-300 group relative mb-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
                <h3 className="text-2xl font-bold text-white mb-1">{role}</h3>
                <div className="flex items-center text-blue-400 font-medium text-sm">
                    <span>{company}</span>
                    <span className="mx-2">•</span>
                    <span className="font-mono text-gray-500">{dates}</span>
                </div>
            </div>
        </div>

        {/* Metrics - Business Impact First */}
        <div className="flex flex-wrap gap-3 mb-8">
            {metrics.map((m, i) => (
                <div key={i} className="px-3 py-1.5 bg-blue-900/20 border border-blue-800/50 rounded text-blue-200 text-xs font-bold tracking-wide">
                    {m}
                </div>
            ))}
        </div>

        {/* Resume Style Bullet Points - Use bullets array primarily */}
        <ul className="space-y-3 text-sm text-gray-400 leading-relaxed list-disc pl-5 marker:text-gray-600">
            {bullets ? (
                bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                ))
            ) : (
                // Fallback for legacy data structure
                <>
                    <li>{story}</li>
                    <li>{win}</li>
                </>
            )}
        </ul>
    </div>
);

export default ImpactCard;
