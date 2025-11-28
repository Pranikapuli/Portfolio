import React from 'react';
import { motion } from 'framer-motion';
import { Home, Briefcase, Folder, User, Mail, BookOpen } from 'lucide-react';

const FloatingDock = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'projects', label: 'Projects', icon: Folder },
        { id: 'case-studies', label: 'Case Studies', icon: BookOpen },
        { id: 'about', label: 'About', icon: User },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 px-4 py-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => {
                                setActiveTab(item.id);
                                window.scrollTo(0, 0);
                            }}
                            className={`
                                relative group p-3 rounded-full transition-all duration-300
                                ${isActive ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}
                            `}
                        >
                            <Icon size={20} />

                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black border border-gray-800 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {item.label}
                            </span>

                            {/* Active Glow */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-blue-500/20 rounded-full blur-md -z-10"
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default FloatingDock;
