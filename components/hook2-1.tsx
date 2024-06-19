'use client'

import Image from 'next/image'
import BrowserMemoImg from '@/public/images/browser-memo.png'

export default function Hook2() {
    return (
        <section className="relative">
            {/* Section content */}
            <div className="mt-[5rem] md:mt-[10rem] px-5 md:mx-auto max-w-5xl" >
                <div className="text-gray-800 font-extrabold leading-tighter tracking-tighter md:text-center text-2xl md:text-4xl mb-[1.5rem] md:mb-[3rem]" data-aos="zoom-y-out">
                    {/*Write memos immediately while browsing*/}
                    The fastest way to write memos while browsing
                </div>
                <div className="text-gray-700 text-base md:text-lg mb-[1rem] md:mb-[5rem] md:text-center" data-aos="zoom-y-out">
                    While browsing, have you ever had an idea or something to jot down in a memo?<p className="round-underline round-underline-lightviolet text-black"> Do you use a separate app </p>to take notes about web pages?
                </div>
                <div className='md:flex md:flex-row-reverse md:items-center'>
                    <div className="md:w-full mx-auto text-gray-700 text-base md:text-lg text-gray-600 max-md:mb-[3rem]" data-aos="zoom-y-out" data-aos-delay="300">
                        <p className="font-bold text-lg">Leave memos right on the web page! </p>
                        no need to switch to another app.
                    </div>
                    < div className="md:w-full" data-aos="zoom-y-out" data-aos-delay="300">
                        <Image className='md:w-img w-smimg max-md:mx-auto' src={BrowserMemoImg} alt="Community Post Image" />
                    </div >
                </div>
            </div >
        </section >
    )
}