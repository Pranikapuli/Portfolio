import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, title, message, onConfirm, onCancel, showConfirm = true, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-[#111] p-6 md:p-8 rounded-xl max-w-sm w-full border border-gray-800 shadow-2xl"
                    >
                        {title && <h3 className="text-xl font-bold text-white mb-4">{title}</h3>}
                        {message && <p className="text-gray-400 mb-6">{message}</p>}
                        {children}
                        <div className="flex justify-end space-x-3 mt-4">
                            {onCancel && (
                                <button
                                    onClick={onCancel}
                                    className="px-4 py-2 text-gray-400 border border-gray-700 rounded-lg hover:border-white transition-colors text-sm"
                                >
                                    Cancel
                                </button>
                            )}
                            {showConfirm && onConfirm && (
                                <button
                                    onClick={onConfirm}
                                    className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors text-sm"
                                >
                                    Confirm
                                </button>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
