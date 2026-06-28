"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, DollarSign, ChevronDown } from "lucide-react";
import Navbar from "../_components/Navbar";
import { createClient } from "@/supabase/utilis/clientComponents";




interface Job {
    id: string;
    title: string;
    company: string;
    description: string;
    category: string;
    job_type: string;
    location: string;
    salary: string;
    requirements: string[];
}

export default function JobPortal() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const supabase = createClient()
    const fetchJobs = async () => {
        let query = supabase.from("jobs").select("*");

        if (selectedCategory !== "All Categories") {
            query = query.eq("category", selectedCategory);
        }

        const { data, error } = await query;
        if (data) {
            const filtered = data.filter((job: Job) =>
                search === ""
                    ? true
                    : job.title.toLowerCase().includes(search.toLowerCase()) ||
                    job.company.toLowerCase().includes(search.toLowerCase()) ||
                    job.requirements.some(r => r.toLowerCase().includes(search.toLowerCase()))
            );
            setJobs(filtered);
        }
    }



    useEffect(() => {

        fetchJobs();
    }, [search, selectedCategory])

    const handleReset = () => {
        setSearch("");
        setSelectedCategory("All Categories");
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] font-sans flex flex-col">
            <Navbar />

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-8 py-10 grow w-full">
                {/* Hero Section */}
                <div className="mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Find Your Next Opportunity</h1>
                    <p className="text-slate-500 text-lg">Explore our curated list of job openings and find the perfect match for your career.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    {/* Filters Sidebar */}
                    <aside className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm sticky top-24">
                        <h2 className="text-lg font-bold text-slate-900 mb-6">Filter Jobs</h2>

                        {/* Search Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-slate-600 mb-2">Search by keyword</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Job title, company, or skills..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-3 pr-10 py-2.5 text-sm outline-none focus:border-slate-400 placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-slate-600 mb-2">Category</label>
                            <div className="relative">
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2.5 text-sm appearance-none outline-none focus:border-slate-400 text-slate-700 font-medium cursor-pointer"
                                >
                                    <option value="All Categories">All Categories</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Design">Design</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Finance">Finance</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Reset Button */}
                        <button
                            onClick={handleReset}
                            className="w-full bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 text-sm font-medium py-2.5 rounded-lg transition-colors mb-6"
                        >
                            Reset Filters
                        </button>

                        <div className="text-xs text-slate-400 font-medium">
                            Category: <span className="text-slate-500">{selectedCategory}</span>
                        </div>
                    </aside>

                    {/* Job Listings Column */}
                    <section className="lg:col-span-3 space-y-6">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-2xl font-bold text-slate-900">Available Jobs</h2>
                            <span className="text-slate-400 text-sm font-medium">{jobs.length} positions</span>
                        </div>

                        {jobs.map((job) => {
                            // Extract first letter for the placeholder icon
                            const firstLetter = job.title.charAt(0);
                            const visibleRequirements = job.requirements.slice(0, 3);
                            const extraCount = job.requirements.length - 3;

                            return (
                                <div key={job.id} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow relative">
                                    {/* Top Header Block */}
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">{job.title}</h3>
                                            <p className="text-slate-500 font-medium text-sm">{job.company}</p>
                                        </div>
                                        {/* Placeholder Brand Logo Badge */}
                                        <div className="bg-[#0f4c81] text-white font-bold w-10 h-10 rounded-md flex items-center justify-center text-md shadow-sm">
                                            {firstLetter}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-600 text-[15px] leading-relaxed mb-4 max-w-3xl">
                                        {job.description}
                                    </p>

                                    {/* Badges Row */}
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="bg-amber-50 text-amber-600 font-semibold text-xs px-2.5 py-1 rounded">
                                            {job.category}
                                        </span>
                                        <span className="bg-emerald-50 text-emerald-600 font-semibold text-xs px-2.5 py-1 rounded">
                                            {job.job_type}
                                        </span>
                                    </div>

                                    {/* Metadata Indicators */}
                                    <div className="flex items-center space-x-6 text-slate-400 text-sm font-medium mb-5">
                                        <div className="flex items-center space-x-1">
                                            <MapPin className="w-4 h-4 text-pink-400" />
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <DollarSign className="w-4 h-4 text-amber-500" />
                                            <span>{job.salary}</span>
                                        </div>
                                    </div>

                                    {/* Requirements Sub-tags */}
                                    <div className="border-t border-slate-50 pt-4 mb-6">
                                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Requirements:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {visibleRequirements.map((req, i) => (
                                                <span key={i} className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded font-medium">
                                                    {req}
                                                </span>
                                            ))}
                                            {extraCount > 0 && (
                                                <span className="bg-slate-50 border border-slate-200 text-slate-500 text-xs px-2.5 py-1 rounded font-medium">
                                                    +{extraCount} more
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Wide Action Button */}
                                    <button className="w-full bg-[#0f4c81] hover:bg-[#0c3e69] text-white font-semibold text-sm py-2.5 rounded-lg transition-colors text-center block">
                                        View Details
                                    </button>
                                </div>
                            );
                        })}

                        {jobs.length === 0 && (
                            <div className="bg-white rounded-xl border border-slate-100 p-12 text-center text-slate-400">
                                No job openings match your current search filters.
                            </div>
                        )}
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-[#0b0f19] text-slate-400 py-6 text-center text-sm border-t border-slate-800">
                <p>© 2024 JobPortal. All rights reserved.</p>
            </footer>
        </div>
    );
}