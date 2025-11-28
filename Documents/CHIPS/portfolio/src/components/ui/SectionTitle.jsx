import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
    >
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">
            {title}
        </h2>
        {subtitle && (
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6" />
        )}
        <p className="text-gray-400 max-w-2xl text-lg font-light">
            {subtitle}
        </p>
    </motion.div>
);

export default SectionTitle;
