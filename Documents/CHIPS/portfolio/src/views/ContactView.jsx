import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const ContactView = ({ data }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(data.contact.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto pt-20 md:pt-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                {data.contact.cta}
            </h1>
            <p className="text-xl text-slate-300 font-light mb-16 max-w-2xl mx-auto">
                You have the vision and the data. I have the strategy to turn it into a scalable, user-centric product.
            </p>

            <div className="inline-flex items-center gap-4 bg-white dark:bg-[#111] border border-slate-200 dark:border-gray-800 rounded-full px-8 py-4 mb-20 group hover:border-violet-500 transition-colors cursor-pointer shadow-lg dark:shadow-none" onClick={handleCopy}>
                <span className="text-xl md:text-2xl text-slate-900 dark:text-white font-mono">{data.contact.email}</span>
                <button className="text-slate-400 dark:text-gray-500 group-hover:text-violet-500 transition-colors">
                    {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                </button>
            </div>

            <div className="flex justify-center gap-12">
                {data.socials.map((social, i) => (
                    <a
                        key={i}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-300 hover:text-violet-400 transition-colors text-sm uppercase tracking-widest font-bold flex items-center gap-2"
                    >
                        {social.name}
                    </a>
                ))}
            </div>

            <div className="mt-20 mb-8">
                <h2 className="text-2xl font-bold tracking-[0.2em] uppercase text-white select-none">
                    JAGADEESH PULI
                </h2>
            </div>
        </div>
    );
};

export default ContactView;
