"use client"

import { createClient } from '@/supabase/utilis/clientComponents'
import React, { useEffect, useState } from 'react'
import { Info } from '../types'

export default function Opportunity() {

    const [stat,setStat] = useState<Info[]>([])
    
    const supabase = createClient()

    useEffect(()=>{
        getStat()
    },[])

    const getStat=async()=>{
        const {data,error} = await supabase.from("company-info").select("*")
        if(error) {
            console.log(error);
            return;
        }
        setStat(data || [])
    }

    return (
        <div className="bg-[#0f3473] text-white py-33 px-6 font-sans antialiased">
            <div className="mx-auto max-w-6xl text-center">

                {/* Banner Heading */}
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-[40px] text-white">
                    Trusted by Job Seekers Worldwide
                </h2>

                {/* Banner Subtitle */}
                <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-blue-100/80">
                    Our platform has helped thousands of professionals find their ideal career<br className="hidden sm:inline" /> opportunities.
                </p>

                {/* 4-Column Stats Grid */}
                <div className="mt-16 grid grid-cols-2 gap-y-10 gap-x-4 sm:grid-cols-4 max-w-5xl mx-auto">
                    {stat.slice(0,-1).map((item:Info) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center"
                        >
                            <span className="text-4xl font-extrabold hover:scale-110 duration-150 transition tracking-tight sm:text-5xl">
                                {item.count}+
                            </span>

                            <span className="mt-3 text-[13px] font-medium text-blue-100/70">
                                {item.name}
                            </span>
                        </div>
                    ))}
                    {stat.slice(-1).map((item: Info) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center"
                        >
                            <span className="text-4xl hover:scale-110 duration-150 transition font-extrabold tracking-tight sm:text-5xl">
                                {item.count}%
                            </span>

                            <span className="mt-3 text-[13px] font-medium text-blue-100/70">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    )
}

