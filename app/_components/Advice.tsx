import React from 'react'

function Advice() {
    return (
        <div className="bg-[#f8f8ef] min-h-screen py-20 px-6 font-sans antialiased">
            <div className="mx-auto max-w-5xl">

                {/* Feature Grid Container */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                    {/* Card 1: Powerful Search */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-[#0f3473] hover:bg-[#fafbfc] cursor-pointer">
                        <div className="text-3xl mb-5">🔍</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            Powerful Search
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-500 font-normal">
                            Advanced filtering by job title, category, and more. Find exactly what you're looking for in seconds.
                        </p>
                    </div>

                    {/* Card 2: Curated Opportunities */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-[#0f3473] hover:bg-[#fafbfc] cursor-pointer">
                        <div className="text-3xl mb-5">⭐</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            Curated Opportunities
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-500 font-normal">
                            Carefully selected job postings from verified companies across industries and experience levels.
                        </p>
                    </div>

                    {/* Card 3: User-Friendly Interface */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-[#0f3473] hover:bg-[#fafbfc] cursor-pointer">
                        <div className="text-3xl mb-5">✨</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            User-Friendly Interface
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-500 font-normal">
                            Intuitive design makes job hunting simple and enjoyable. Browse, filter, and explore with ease.
                        </p>
                    </div>

                    {/* Card 4: Real-Time Updates */}
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-200 hover:border-[#0f3473] hover:bg-[#fafbfc] cursor-pointer">
                        <div className="text-3xl mb-5">⚡</div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                            Real-Time Updates
                        </h3>
                        <p className="text-sm leading-relaxed text-gray-500 font-normal">
                            Instant notifications for new job postings. Never miss an opportunity that matches your profile.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Advice