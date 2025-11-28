import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const CredentialsView = ({ data }) => {
    const { education, certifications } = data;

    return (
        <div className="max-w-4xl mx-auto space-y-24">

            {/* EDUCATION SECTION */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 mb-12"
                >
                    <GraduationCap className="text-violet-400" size={28} />
                    <h2 className="text-2xl font-bold text-white tracking-wide">Academic Base</h2>
                </motion.div>

                <div className="relative border-l border-white/10 ml-3 space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                                    <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm bg-black/30 px-3 py-1 rounded-full border border-white/5">
                                        <Calendar size={14} />
                                        <span>{edu.date}</span>
                                    </div>
                                </div>

                                <p className="text-violet-300 font-medium text-lg mb-4">{edu.degree}</p>

                                <div className="flex items-center gap-2 text-sm text-slate-500">
                                    <MapPin size={14} />
                                    <span>{edu.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CERTIFICATIONS SECTION */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-12"
                >
                    <Award className="text-teal-400" size={28} />
                    <h2 className="text-2xl font-bold text-white tracking-wide">Certifications</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-xl border border-white/10 bg-black/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <div className="p-4">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    onError={(e) => e.target.style.display = 'none'}
                                    className="w-full h-auto object-contain rounded-lg shadow-lg"
                                />
                                <div className="mt-4">
                                    <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                                    <p className="text-teal-400 text-sm">{cert.issuer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default CredentialsView;
