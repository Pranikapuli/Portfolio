import React from 'react';
import { Brain, Cpu, TrendingUp } from 'lucide-react';
import { DoodleBox } from '../ui/Doodle';

const TheBridge = () => (
    <div className="w-full max-w-4xl mx-auto my-24 relative font-handwriting select-none px-4 z-10">
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-24 items-center justify-items-center">
            {/* Top Left: Software */}
            <div className="relative group w-full max-w-xs md:col-start-1 md:row-start-1 flex flex-col items-center">
                <svg className="absolute -bottom-12 -right-12 w-32 h-32 pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="#60A5FA" strokeWidth="2" strokeDasharray="6 4">
                    <path d="M0 0 Q 50 50 100 100" />
                    <rect x="30" y="30" width="10" height="8" fill="#111" stroke="#60A5FA" strokeWidth="1" transform="rotate(-10)" />
                    <rect x="60" y="60" width="10" height="8" fill="#111" stroke="#60A5FA" strokeWidth="1" transform="rotate(10)" />
                </svg>
                <div className="absolute -top-12 -left-16 text-blue-300/80 rotate-[-12deg] text-lg font-bold hidden md:block">
                    <span className="block">User Stories</span>
                    <span className="block ml-4">PRDs & Specs</span>
                </div>
                <DoodleBox color="text-blue-400" className="p-6 w-full text-center bg-[#0a0a0a] border-2 border-transparent hover:border-blue-500/30 rounded-xl transition-all z-10">
                    <Brain className="mx-auto text-blue-400 mb-3 animate-pulse" size={40} />
                    <h3 className="text-2xl text-blue-400 font-bold mb-2">Software</h3>
                    <p className="text-lg text-gray-300 font-bold leading-tight">User Needs &<br />Engagement</p>
                </DoodleBox>
            </div>

            {/* Top Right: Hardware */}
            <div className="relative group w-full max-w-xs md:col-start-3 md:row-start-1 flex flex-col items-center">
                <svg className="absolute -bottom-12 -left-12 w-32 h-32 pointer-events-none z-0 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="#C084FC" strokeWidth="2">
                    <path d="M100 0 L 100 50 L 0 100" strokeDasharray="0" />
                    <rect x="80" y="30" width="10" height="10" fill="#111" stroke="#C084FC" strokeWidth="1" />
                    <circle cx="100" cy="50" r="3" fill="#C084FC" />
                </svg>
                <div className="absolute -top-14 -right-20 text-purple-300/80 rotate-[8deg] text-lg font-bold hidden md:block text-right w-48">
                    <span className="block">Latency limits</span>
                    <span className="block mr-2">Memory (VRAM)</span>
                </div>
                <DoodleBox color="text-purple-400" className="p-6 w-full text-center bg-[#0a0a0a] border-2 border-transparent hover:border-purple-500/30 rounded-xl transition-all z-10">
                    <Cpu className="mx-auto text-purple-400 mb-3 animate-pulse" size={40} />
                    <h3 className="text-2xl text-purple-400 font-bold mb-2">Hardware</h3>
                    <p className="text-lg text-gray-300 font-bold leading-tight">Constraints &<br />Physics</p>
                </DoodleBox>
            </div>

            {/* Center: ME */}
            <div className="md:col-start-2 md:row-start-1 md:row-span-2 z-20 my-8 md:my-0 flex justify-center mt-24 md:mt-0">
                <div className="relative transform hover:rotate-0 transition-transform duration-300 cursor-default group">
                    <div className="bg-[#FCD34D] text-black p-6 w-48 shadow-[8px_8px_0px_rgba(255,255,255,0.1)] border-4 border-black rounded-sm text-center relative transform rotate-[-2deg]">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-8 bg-white/40 backdrop-blur-sm rotate-[2deg] z-10"></div>
                        <h2 className="text-5xl font-black leading-none tracking-tighter mb-1">ME</h2>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-800">The Bridge</p>
                    </div>
                </div>
            </div>

            {/* Bottom Center: Business */}
            <div className="relative group w-full max-w-xs md:col-start-2 md:row-start-2 flex flex-col items-center mt-4 md:mt-16">
                <svg className="absolute -top-24 left-1/2 -translate-x-1/2 w-16 h-24 pointer-events-none z-0 hidden md:block" viewBox="0 0 50 100" fill="none" stroke="#4ADE80" strokeWidth="2">
                    <path d="M25 100 L 25 0" strokeDasharray="4 4" />
                    <text x="30" y="30" fill="#4ADE80" fontSize="20" fontFamily="font-handwriting">$</text>
                    <text x="10" y="60" fill="#4ADE80" fontSize="14" fontFamily="font-handwriting">$</text>
                </svg>
                <div className="absolute top-4 -left-48 text-green-300/80 rotate-[5deg] text-lg font-bold hidden md:block w-44 text-right font-handwriting">
                    <span className="block">Unit Economics</span>
                    <span className="block">CAC / LTV</span>
                </div>
                <div className="absolute top-4 -right-32 text-green-300/60 rotate-[-4deg] text-sm hidden md:block w-32 text-left font-handwriting">
                    ROI Models
                </div>
                <DoodleBox color="text-green-400" className="p-6 w-full text-center bg-[#0a0a0a] border-2 border-transparent hover:border-green-500/30 rounded-xl transition-all z-10">
                    <TrendingUp className="mx-auto text-green-400 mb-3 animate-pulse" size={40} />
                    <h3 className="text-2xl text-green-400 font-bold mb-2">Business</h3>
                    <p className="text-lg text-gray-300 font-bold leading-tight">Viability &<br />Profitability</p>
                </DoodleBox>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-green-300/60 text-sm font-sans hidden md:block w-full text-center">
                    <span className="font-handwriting">Go-To-Market Strategy</span>
                </div>
            </div>
        </div>
    </div>
);

export default TheBridge;
