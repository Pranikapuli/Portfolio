import React from 'react';
import { Home, Briefcase, Folder, User, Mail, Lock } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen, profile, onAdminClick }) => {
    const navItems = [
        { id: 'home', label: 'Mission', icon: Home },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'case-studies', label: 'Case Studies', icon: Folder },
        { id: 'projects', label: 'Projects', icon: Folder },
        { id: 'about', label: 'About', icon: User },
    ];

    return (
        <>
            {isMobileOpen && <div className="fixed inset-0 bg-black/90 z-40 md:hidden" onClick={() => setIsMobileOpen(false)} />}
            <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 
        bg-black/50 backdrop-blur-xl border-r border-white/5
        transform transition-transform duration-300 ease-in-out flex flex-col justify-between
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 shadow-2xl
    `}>
                <div className="p-8">
                    <div className="mb-12 pt-4">
                        <h1 className="text-white font-black text-3xl tracking-tighter mb-1 leading-none">
                            JAGADEESH<br />
                            <span className="text-gray-600">PULI.</span>
                        </h1>
                        <p className="text-[10px] font-bold text-blue-500/80 uppercase tracking-[0.25em] mt-2">AI Product Manager</p>
                    </div>
                    <nav className="space-y-3">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setActiveTab(item.id); setIsMobileOpen(false);
                                        // Scroll to top when switching tabs
                                        window.scrollTo(0, 0);
                                    }}
                                    className={`
                    w-full flex items-center space-x-4 px-4 py-3 rounded-full text-sm font-bold transition-all duration-300
                    ${isActive
                                            ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] translate-x-2'
                                            : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 hover:translate-x-1'
                                        }
                `}
                                >
                                    <Icon size={18} className={isActive ? 'text-blue-400' : ''} />
                                    <span className="uppercase tracking-wider">{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
                <div className="p-8">
                    <div className="flex items-center justify-between text-[10px] text-gray-700 font-mono">
                        <span>{profile.footer}</span>
                        <button onClick={onAdminClick} className="text-gray-800 hover:text-gray-600 transition-colors">
                            <Lock size={10} />
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
