"use client"

import { createClient } from '@/supabase/utilis/clientComponents'
import React, { useEffect, useState, useRef } from 'react'
import { Info } from '../types'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

// A small component to handle the number-counting trick
function Counter({ value }: { value: number }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    useEffect(() => {
        if (isInView) {
            // Animates the count from 0 to the target value over 2 seconds
            const controls = animate(count, value, { duration: 2, ease: "easeOut" })
            return () => controls.stop()
        }
    }, [value, isInView, count])

    return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function Opportunity() {
    const [stat, setStat] = useState<Info[]>([])
    const supabase = createClient()

    useEffect(() => {
        getStat()
    }, [])

    const getStat = async () => {
        const { data, error } = await supabase.from("company-info").select("*")
        if (error) {
            console.log(error);
            return;
        }
        setStat(data || [])
    }

    // Main grid container animation definitions
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 } // Spreads out card entries elegantly
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 40 }, // Starts invisible and 40px below final layout position
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 60, damping: 15 }
        }
    }

    return (
        <div className="bg-[#0f3473] text-white py-32 px-6 font-sans antialiased overflow-hidden">
            <div className="mx-auto max-w-6xl text-center">

                {/* Smooth header reveal */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-extrabold tracking-tight sm:text-[40px] text-white"
                >
                    Trusted by Job Seekers Worldwide
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                    className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-blue-100/80"
                >
                    Our platform has helped thousands of professionals find their ideal career
                    <br className="hidden sm:inline" /> opportunities.
                </motion.p>

                {/* Stats grid trigger */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="mt-16 grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-4 max-w-5xl mx-auto"
                >
                    {/* All items except the last one (+ suffix) */}
                    {stat.slice(0, -1).map((item: Info) => (
                        <motion.div
                            key={item.id}
                            className="flex flex-col items-center"
                        >
                            <span className="text-4xl font-extrabold hover:scale-110 duration-150 transition tracking-tight sm:text-5xl cursor-default">
                                <Counter value={item.count} />+
                            </span>

                            <span className="mt-3 text-[13px] font-medium text-blue-100/70">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}

                    {/* The final item (% suffix) */}
                    {stat.slice(-1).map((item: Info) => (
                        <motion.div
                            key={item.id}
                            className="flex flex-col items-center"
                        >
                            <span className="text-4xl hover:scale-110 duration-150 transition font-extrabold tracking-tight sm:text-5xl cursor-default">
                                <Counter value={item.count} />%
                            </span>

                            <span className="mt-3 text-[13px] font-medium text-blue-100/70">
                                {item.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}