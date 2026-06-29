import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#030712] text-gray-400 py-12 px-6 sm:px-16 font-sans antialiased">
            <div className="mx-auto max-w-6xl">

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-left mb-10">

                    <div>
                        <h4 className="text-white font-bold text-sm tracking-wide mb-4">
                            About JobPortal
                        </h4>
                        <p className="text-[13px] leading-relaxed text-gray-400 max-w-xs">
                            Your trusted platform for connecting with career opportunities.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm tracking-wide mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-[13px]">
                            <li>
                                <a href="/jobs" className="hover:text-amber-700 transition-colors">
                                    Browse Jobs
                                </a>
                            </li>
                            <li>
                                <a href="/admin" className="hover:text-amber-700 transition-colors">
                                    Post a Job
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-sm tracking-wide mb-4">
                            Contact
                        </h4>
                        <p className="text-[13px] text-gray-400">
                            <a href="mailto:support@jobportal.com" className="hover:text-white transition-colors">
                                support@jobportal.com
                            </a>
                        </p>
                    </div>

                </div>

                <div className="border-t border-gray-800/60 my-6"></div>

                <div className="text-center pt-2">
                    <p className="text-[13px] text-gray-400">
                        &copy; 2024 JobPortal. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer