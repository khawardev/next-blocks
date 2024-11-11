export const Feature01Code = `import { Badge } from "@/components/ui/badge";
import Image from "next/image";
export const Feature01 = () => (
    <div className="container-c h-screen flex-center">
        <section className='md-flex-between space-y10  gap-28 md:mx-28'>
            <div className=' w-full'>
                <Image height={1000} className='  h-[300px]  object-cover aspect-video rounded-lg w-full' width={1000} src={'https://res.cloudinary.com/denajbnh4/image/upload/v1729011280/Next%20Blocks/ldmflnaug8fsdduzpbug.svg'} alt={'name'} />
            </div>
            <div className='w-full space-y-5'>
                <Badge>Plateform</Badge>
                <h1 className=' '>This is the start of something new</h1>
                <h6 className=' text-muted-foreground'>Managing a small business today is already
                    tough. Avoid further complications by ditching
                    outdated, tedious trade methods. Our goal is to
                    streamline SMB trade, making it easier and
                    faster than ever,</h6>
            </div>
        </section>
    </div>
);`;

export const Hero01Code = `import Image from 'next/image'
import React from 'react'
const Hero01 = () => {
    return (
        <div className="bg-white">
            <header className="bg-[#FCF8F1] bg-opacity-30">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <Image width={1000} height={1000} className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                            </svg>

                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Features </a>
                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Solutions </a>
                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>
                            <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a>
                        </div>

                        <a href="#" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full" role="button"> Join Now </a>
                    </div>
                </div>
            </header>

            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <p className="text-base font-bold tracking-wider text-blue-600 uppercase ">A social media for learners</p>
                            <h1 className="mt-4 text-4xl font-extrabold text-black tracking-tight  lg:mt-8 sm:text-6xl xl:text-8xl">Connect & learn from the experts</h1>
                            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Grow your career fast with right mentor.</p>
                            <a href="#" title="" className="inline-flex items-center md:px-6 px-5 py-3 md:py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                                Join for free
                                <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                            <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p>
                        </div>
                        <div>
                            <Image width={500} height={500} className="md:w-[80%] ml-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero01`;

export const Hero02Code = `import Image from 'next/image'
import React from 'react'

const Hero02 = () => {
    return (
        <div className="bg-gradient-to-b from-green-50 to-green-100">
            <header className="">
                <div className="px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <div className="flex-shrink-0">
                            <a href="#" title="" className="flex">
                                <Image width={1000} height={1000} className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg" alt="" />
                            </a>
                        </div>

                        <button type="button" className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100">
                            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Features </a>

                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Solutions </a>

                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>

                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a>

                            <div className="w-px h-5 bg-black/20"></div>

                            <a href="#" title="" className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Log in </a>

                            <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Try for free </a>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-10 sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                                Collaborate remotely, with
                                <div className="relative inline-flex">
                                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Postcrafts.</h1>
                                </div>
                            </h1>

                            <p className="mt-8 text-base text-black sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                            <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                                <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </a>

                                <a href="#" title="" className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                                    <svg className="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Watch video
                                </a>
                            </div>
                        </div>

                        <div>
                            <Image width={1000} height={1000} className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Hero02`;
