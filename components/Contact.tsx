"use client"

import { motion } from 'framer-motion';

export const Contact = () => {
    return(
        <section id="contact" className="py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16">

                <div className="space-y-12">
                    <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-7xl font-bold text-gray-300"
                    >

                    </motion.h2>

                </div>

            </motion.div>
        </section>
    );
};