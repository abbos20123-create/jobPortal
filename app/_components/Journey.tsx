"use client"

import { useRouter } from 'next/navigation'

function Journey() {
    const router = useRouter()
    return (
        <div className="relative bg-[#93a9ce] bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.8)_0%,rgba(15,52,115,1)_100%)] text-white py-24 px-6 font-sans antialiased overflow-hidden">
            <div className="mx-auto max-w-4xl text-center relative z-10">

                <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white leading-tight">
                    Ready to Advance<br />Your Career?
                </h2>

                <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-blue-100/80">
                    Discover hundreds of job opportunities from leading companies. Start<br className="hidden sm:inline" /> your journey to your next role today.
                </p>

                <div className="mt-10 flex items-center justify-center gap-4">
                    <button onClick={()=>router.push("/jobs")} className="rounded-md cursor-pointer bg-blue-50 px-6 py-3 text-sm font-semibold text-[#0f3473] transition hover:bg-blue-100 shadow-sm">
                        Explore Jobs
                    </button>
                    <button onClick={()=>router.push("/admin")} className="rounded-md border cursor-pointer border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 shadow-sm backdrop-blur-xs">
                        Post a Job
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Journey