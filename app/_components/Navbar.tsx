"use client"

import { useRouter } from "next/navigation";


function Navbar() {

    let route = useRouter()
    return (

        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-[0_1px_3px_rgba(0,0,0,0.01)] font-sans antialiased">
            <nav className="px-6 py-4 sm:px-16">
                <div className="mx-auto flex max-w-7xl items-center justify-between">

                    <a onClick={()=>route.push("/")} className="group flex items-center gap-3 cursor-pointer">
                        <div className="flex h-9.5 w-9.5 items-center justify-center rounded-lg bg-[#0f3473] font-bold text-white text-xs tracking-wider transition-transform duration-200 ease-out group-hover:scale-105">
                            JP
                        </div>
                        <span className="text-lg font-bold tracking-tight text-[#0f3473] transition-colors duration-200 ease-out group-hover:text-[#0b2859]">
                            JobPortal
                        </span>
                    </a>

                    <div className="flex items-center gap-6 sm:gap-8">
                        <button onClick={()=>route.push("/")} className="text-[14px] cursor-pointer font-medium text-gray-700 hover:text-sky-700 transition-colors">
                            Home
                        </button>
                        <a onClick={()=>route.push("/jobs")} className="text-[14px] cursor-pointer font-medium text-gray-700 hover:text-sky-700 transition-colors">
                            Jobs
                        </a>
                        <button onClick={()=>route.push("/admin")} className="rounded-md cursor-pointer bg-[#0f3473] px-5 py-2.5 text-[14px] font-semibold text-white transition hover:bg-[#0b2859] shadow-sm">
                            Post a Job
                        </button>
                    </div>

                </div>
            </nav>
        </div>
    );
}

export default Navbar