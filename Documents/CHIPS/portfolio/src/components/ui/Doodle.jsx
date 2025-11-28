import React from 'react';

export const DoodleBox = ({ className, children, color = "text-white" }) => (
    <div className={`relative ${className} group`}>
        {/* Hand-drawn box effect */}
        <svg className={`absolute inset-0 w-full h-full -z-10 ${color} opacity-20 group-hover:opacity-40 transition-opacity`} fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 2 L 98 4 Q 96 50 98 96 L 4 98 Q 2 50 2 2 Z" vectorEffect="non-scaling-stroke" />
        </svg>
        {children}
    </div>
);

export const DoodleUnderline = ({ className }) => (
    <svg viewBox="0 0 200 20" className={`w-full h-3 ${className}`} preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3">
        <path d="M5 15 Q 100 0 195 15" className="opacity-70" />
    </svg>
);
