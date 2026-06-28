"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/supabase/utilis/clientComponents";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const supabase = createClient()

    const handleLogout = async () => {
        setLoading(true);
        try {
            const { error } = await  supabase.auth.signOut();

            if (error) throw error;

            router.push("/admin/login");
            router.refresh(); 
        } catch (error: any) {
            console.error("Error logging out:", error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-white flex font-sans">
            <aside className="w-64 bg-black text-white flex flex-col justify-between p-4 shrink-0 h-screen sticky top-0">
                <div>
                    <div onClick={()=>router.push("/")} className="flex cursor-pointer items-center space-x-3 mb-10 mt-2 px-2">
                        <div className="bg-white text-black font-bold px-2.5 py-1 rounded text-md tracking-wider">
                            JP
                        </div>
                        <span className="text-lg font-bold tracking-wide">JobPortal</span>
                    </div>

                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest px-2 mb-4">
                            Admin Menu
                        </p>
                        <nav className="space-y-1">
                            <Link
                                href="/admin"
                                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-300 font-semibold hover:bg-zinc-900 transition-colors"
                            >
                                <span className="text-lg">📋</span>
                                <span>Jobs</span>
                            </Link>
                            <Link
                                href="/admin/createJob"
                                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-300 font-semibold hover:bg-zinc-900 transition-colors"
                            >
                                <span className="text-purple-400 text-lg">➕</span>
                                <span>Create Job</span>
                            </Link>
                            <Link
                                href="/admin/applications"
                                className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-slate-300 font-semibold hover:bg-zinc-900 transition-colors"
                            >
                                <span className="text-blue-400 text-lg">📇</span>
                                <span>Applications</span>
                            </Link>
                        </nav>
                    </div>
                </div>

                <div className="px-2 mb-2">
                    <button onClick={handleLogout} className="w-full bg-[#ef4444] hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            <main className="flex-1 min-h-screen p-3 px-10 overflow-y-auto">

                {children}

            </main>
        </div>
    );
}