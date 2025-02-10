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
                        Get in <span className="text-gray-500">Touch</span>
                    </motion.h2>

                    <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="glass p-8 rounded-2xl space-y-8"
                    >
                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Phone</p>
                            <a href="tel:+9999999" className="text-2xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2">
                                +62 812-2926-6853
                                <span className="text-gray-500">/</span>
                            </a>

                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Email</p>
                            <a href="mailto:dik@gmail.com" className="text-3xl lg:text-3-xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2">
                                dikabangkok21@gmail.com
                                <span className="text-gray-500">/</span>
                            </a>

                        </div>

                        <div className="space-y-2">
                            <p className="text-lg text-gray-300">Office</p>
                            <address className="text-xl not-italic leading-relaxed">
                                Muncangela Jl. H Ebo Bahar, 45592 <br />
                                Kuningan - Jawa Barat <br />
                                Indonesia
                            </address>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden"
                >
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3285.661427734567!2d108.54550723486811!3d-6.967837799575692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1739160569031!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    ></iframe>

                </motion.div>
            </motion.div>
        </section>
    );
};