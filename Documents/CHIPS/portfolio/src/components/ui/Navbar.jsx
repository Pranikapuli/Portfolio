import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, FolderGit2, BookOpen, GraduationCap, User, Mail } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
    const [hoveredTab, setHoveredTab] = useState(null);

    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'projects', label: 'Projects', icon: FolderGit2 },
        { id: 'case-studies', label: 'Case Studies', icon: BookOpen },
        { id: 'credentials', label: 'Credentials', icon: GraduationCap },
        { id: 'about', label: 'About', icon: User },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    return (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 p-2 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                {navItems.map((item) => {
                    const isActive = activeTab === item.id;
                    const isHovered = hoveredTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            onMouseEnter={() => setHoveredTab(item.id)}
                            onMouseLeave={() => setHoveredTab(null)}
                            className={`relative flex items-center justify-center h-10 px-3 rounded-full transition-all duration-300 ${isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <item.icon size={18} />

                            <AnimatePresence>
                                {(isHovered || isActive) && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0, marginLeft: 0 }}
                                        animate={{ opacity: 1, width: 'auto', marginLeft: 8 }}
                                        exit={{ opacity: 0, width: 0, marginLeft: 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="text-sm font-medium whitespace-nowrap overflow-hidden"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {isActive && (
                                <motion.div
                                    layoutId="activeTabIndicator"
                                    className="absolute inset-0 border border-white/20 rounded-full"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default Navbar;
