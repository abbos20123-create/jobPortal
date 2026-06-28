'use client'

import React from 'react'
import { motion } from 'framer-motion'

function Advice() {
    // Parent container variant to handle staggered arrivals
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 2,
            transition: {
                staggerChildren: 1
            }
        }
    }

    // Individual card variant - drops DOWN from -50px to 0px
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: -50 // Starts 50px higher up
        },
        visible: {
            opacity: 1,
            y: 0, // Animates downward to its natural position
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        }
    }

    const features = [
        { icon: "🔍", title: "Powerful Search", desc: "Advanced filtering by job title, category, and more. Find exactly what you're looking for in seconds." },
        { icon: "⭐", title: "Curated Opportunities", desc: "Carefully selected job postings from verified companies across industries and experience levels." },
        { icon: "✨", title: "User-Friendly Interface", desc: "Intuitive design makes job hunting simple and enjoyable. Browse, filter, and explore with ease." },
        { icon: "⚡", title: "Real-Time Updates", desc: "Instant notifications for new job postings. Never miss an opportunity that matches your profile." }
    ]

    return (
        <div className="bg-[#f8f8ef] min-h-screen py-40 px-6 font-sans antialiased">
            <div className="mx-auto max-w-5xl">

                {/* Headers also slide down when scrolled into view */}
                <motion.p
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-[55px] font-bold text-center'
                >
                    Why Choose Job Portal?
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className='text-center mb-20 text-gray-700 text-[20px] max-w-2xl mx-auto'
                >
                    We've designed the most intuitive job search platform to help you find opportunities that align with your career goals.
                </motion.p>

                {/* Grid container tracks scroll trigger */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the grid is visible on screen
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: 4, scale: 0.99 }} // Micro-interaction when mousing over
                            className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-md hover:border-[#0f3473] hover:bg-[#fafbfc] cursor-pointer"
                        >
                            <div className="text-3xl mb-5">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500 font-normal">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Advice