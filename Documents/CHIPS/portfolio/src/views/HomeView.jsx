import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Ghost, Link, Database, Layout, ListTodo, Trello, Terminal, BarChart, Split, Users, Target, Zap, Award } from 'lucide-react';

const HomeView = ({ setActiveTab }) => {
    const btnRef = useRef(null);
    const [btnPosition, setBtnPosition] = useState({ x: 0, y: 0 });

    // Handle Button Magnetic Effect
    const handleBtnMouseMove = (e) => {
        if (!btnRef.current) return;
        const { left, top, width, height } = btnRef.current.getBoundingClientRect();
        const x = (e.clientX - (left + width / 2)) * 0.3;
        const y = (e.clientY - (top + height / 2)) * 0.3;
        setBtnPosition({ x, y });
    };

    const handleBtnMouseLeave = () => {
        setBtnPosition({ x: 0, y: 0 });
    };

    const tickerItems = [
        { label: "Architecture", icon: Layout },
        { label: "AI/ML", icon: Brain },
        { label: "UI/UX", icon: Users },
        { label: "Roadmaps", icon: Split },
        { label: "PRDs", icon: ListTodo },
        { label: "User Research", icon: Users },
        { label: "Product Strategy", icon: Target },
        { label: "Execution", icon: Zap },
        { label: "Metrics", icon: BarChart },
        { label: "Leadership", icon: Award },
    ];

    return (
        <div className="relative min-h-[85vh] flex flex-col justify-center items-center max-w-[95vw] mx-auto px-6 md:px-12 overflow-hidden">

            {/* BACKGROUND: Starfield / Space Window */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
                {/* Stars */}
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: Math.random() * 0.5 + 0.1,
                            scale: Math.random() * 0.5 + 0.5
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [null, Math.random() * 0.8 + 0.2, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            width: Math.random() * 2 + 'px',
                            height: Math.random() * 2 + 'px',
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center flex-grow justify-center">

                {/* GREETING - Subtle, Welcoming */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-lg md:text-xl mb-6 font-light"
                >
                    <span className="bg-gradient-to-r from-slate-300 to-violet-400 bg-clip-text text-transparent font-medium">Hi, I'm Jagadeesh Puli.</span>
                </motion.p>

                {/* ROLE - Clear Label */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-sm md:text-base font-bold text-white tracking-[0.3em] uppercase mb-12"
                >
                    AI Product Manager
                </motion.h2>

                {/* MANIFESTO - The Hero */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight mb-16 text-slate-200"
                >
                    I bridge the gap between <br className="hidden md:block" />
                    <span className="text-white">Model Performance</span>,
                    <span className="text-white"> User Experience</span>, and
                    <span className="text-white"> Business Viability</span>.
                </motion.h1>

                {/* MAGNETIC CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <motion.button
                        ref={btnRef}
                        onClick={() => setActiveTab('case-studies')}
                        onMouseMove={handleBtnMouseMove}
                        onMouseLeave={handleBtnMouseLeave}
                        animate={{ x: btnPosition.x, y: btnPosition.y }}
                        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white font-medium tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                        <span>Read Case Studies</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-white/70" />

                        {/* Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </motion.button>
                </motion.div>

            </div>

            {/* TRUST TICKER */}
            <div className="w-full overflow-hidden py-8 border-t border-white/5 bg-black/20 backdrop-blur-sm mt-auto">
                <motion.div
                    className="flex gap-16 items-center whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-400">
                            <item.icon size={20} />
                            <span className="text-sm font-bold tracking-wider uppercase">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

        </div>
    );
};

export default HomeView;
