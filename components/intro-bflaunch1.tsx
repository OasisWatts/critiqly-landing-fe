'use client'

import { useEffect, useState } from "react";
import { PIAZZA_DOMAIN } from "./env";
import axios from "axios";
import ButtonRouteWaitlistBfLaunch1 from "./buttons/button-routeWaitlist_bfLaunch1";
import Image from "next/image";
import BottomBarImg from "@/public/images/bottom-bar.png"
import JoinWaitlist from "./join-waitlist";


export default function IntroBfLanch1() {
    const [emptyNum, setEmptyNum] = useState<number>(100)
    const [totalNum, setTotalNum] = useState<number>(100)
    useEffect(() => {
        axios.get(PIAZZA_DOMAIN + "/api/visit")
        axios.get(PIAZZA_DOMAIN + "/api/countWaitlist").then((res) => {
            const waitlistNum = res.data.count + 30
            let totalNum, emptyNum
            if (waitlistNum < 1000) {
                totalNum = Math.floor(waitlistNum / 100) * 100 + 100
                emptyNum = totalNum - waitlistNum
            } else {
                totalNum = Math.floor(waitlistNum / 1000) * 1000 + 1000
                emptyNum = totalNum - waitlistNum
            }
            console.log(res, waitlistNum, totalNum, emptyNum)
            setEmptyNum(emptyNum)
            setTotalNum(totalNum)
        })
    }, [])

    return (
        <>
            <section className="relative mt-[5rem] sm:mt-[7rem] ">
                {/* Intro content */}
                <div className="mx-auto max-w-6xl flex flex-col items-center align-center text-center px-5 md:px-10">
                    <div className="md:mb-[3rem] max-md:mt-[5rem]">
                        <h1 className="text-white max-sm:text-2xl md:text-6xl max-md:text-4xl font-extrabold leading-tighter tracking-tighter mb-[3rem] text-black" data-aos="zoom-y-out">
                            If you upload your artwork,<br />
                            <p className="inline text-darkpink">certified experts </p> provide reliable feedback
                        </h1>
                        <div className="max-sm:text-base md:text-3xl max-md:text-2xl text-white mb-[2rem] md:mb-[4rem]" data-aos="zoom-y-out">
                            Enhance your artistic abilities with<br className="md:hidden" /> expert feedback on your creations
                        </div>
                    </div>
                </div>
            </section >
            <JoinWaitlist />
        </>
    )
}