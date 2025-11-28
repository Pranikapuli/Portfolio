import React from 'react';

const ProjectContent = ({ content, brandColors }) => {
    if (!content) return null;

    const headerColor = brandColors?.text || 'text-white';

    return (
        <div className="space-y-16 w-full max-w-5xl mx-auto">
            {content.map((block, i) => {
                switch (block.type) {
                    case 'header':
                        return (
                            <div key={i} className="max-w-3xl mx-auto">
                                <h3 className={`text-3xl md:text-4xl font-bold mt-16 mb-8 leading-tight ${headerColor}`}>
                                    {block.value}
                                </h3>
                            </div>
                        );
                    case 'text':
                        return (
                            <div key={i} className="max-w-3xl mx-auto">
                                <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                                    {block.value}
                                </p>
                            </div>
                        );
                    case 'image':
                        return (
                            <div key={i} className="my-12">
                                <div className="w-full rounded-2xl overflow-hidden relative">
                                    <img
                                        src={block.src}
                                        alt={block.caption}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                {block.caption && (
                                    <p className="text-sm text-slate-500 font-mono text-center mt-4 uppercase tracking-wider">
                                        {block.caption}
                                    </p>
                                )}
                            </div>
                        );
                    case 'grid':
                        return (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                                {block.items.map((item, j) => (
                                    <div key={j}>
                                        <div className="rounded-2xl overflow-hidden relative">
                                            <img
                                                src={item.src}
                                                alt={item.caption}
                                                className="w-full h-auto object-cover"
                                            />
                                        </div>
                                        {item.caption && (
                                            <p className="text-xs text-slate-500 font-mono text-center mt-3 uppercase tracking-wider">
                                                {item.caption}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        );
                    case 'list':
                        return (
                            <div key={i} className="max-w-3xl mx-auto">
                                <ul className="list-disc pl-6 space-y-4 text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                                    {block.items.map((item, j) => (
                                        <li key={j}>
                                            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default ProjectContent;
