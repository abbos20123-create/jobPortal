"use client"

import { createClient } from "@/supabase/utilis/clientComponents";
import React, { useEffect, useState } from "react";
import { Info } from "../types";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";

// Clean, explicit variants type definitions
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

const bottomUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 100, damping: 15 }
    }
};

function Main() {
    const [stats, setStats] = useState<Info[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const supabase = createClient()
    const router = useRouter()

    useEffect(() => {
        getStats();
    }, []);

    async function getStats() {
        const { data, error } = await supabase.from("company-info").select("*");
        if (error) {
            console.log(error);
        } else {
            setStats(data || []);
        }
    }

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/jobs?query=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            router.push("/jobs");
        }
    };

    return (
        <div className="bg-[#f8f8ef] min-h-screen font-sans overflow-x-hidden">
            <motion.main
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto max-w-5xl px-6 pt-24 pb-20 text-center"
            >
                {/* Overline */}
                <motion.p
                    variants={itemVariants}
                    className="text-xs font-bold tracking-widest text-[#c25e28] uppercase mb-5"
                >
                    Career Opportunities
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl font-extrabold tracking-tight text-[#0f172a] sm:text-[64px] leading-tight"
                >
                    Find Your Perfect <span className="text-[#0f3473]">Career</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg"
                >
                    Discover career opportunities from top companies. Search, filter,
                    and
                    <br className="hidden sm:inline" />
                    apply to roles that match your skills and aspirations.
                </motion.p>

                <motion.div
                    variants={bottomUpVariants}
                    className="mx-auto mt-12 max-w-161"
                >
                    <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 rounded-lg bg-white p-1.5 border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                        <input
                            type="text"
                            placeholder="Search by job title, company, or keyword..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent  px-4 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none"
                        />
                        <button
                            type="submit"
                            className="rounded-md bg-[#0f3473] px-7 py-2.5 text-sm font-semibold text-white hover:bg-[#0b2859]"
                        >
                            Search
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    variants={bottomUpVariants}
                    className="mt-12 flex items-center justify-center gap-4"
                >
                    <button onClick={() => router.push("/jobs")} className="rounded-md cursor-pointer duration-150 transition bg-[#0f3473] px-10 py-3 text-sm font-semibold text-white hover:bg-[#25457b]">
                        Browse All Jobs
                    </button>

                    <button onClick={() => router.push("/admin")} className="rounded-md cursor-pointer border transition duration-150 border-gray-300 bg-white px-9 py-2.5 text-sm font-medium text-gray-700 hover:bg-amber-700 hover:text-white">
                        Post a Job
                    </button>
                </motion.div>

                <motion.div
                    variants={bottomUpVariants}
                    className="mt-20 flex justify-center items-center gap-14 sm:gap-20"
                >
                    {stats.slice(0, -1).map((item: Info) => (
                        <div key={item.id} className="flex flex-col items-center">
                            <span className="text-4xl font-bold text-[#0f3473] tracking-tight">
                                {item.count}+
                            </span>
                            <span className="mt-2 text-[13px] font-medium text-gray-500">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </motion.main>
        </div>
    );
}

export default Main;