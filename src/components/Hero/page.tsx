import Image from "next/image";
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6";

export default  function Hero () {
    return (
        <main className="mt-20">
            <section className="border-2 border-white border-none w-full h-full flex flex-col">

                <div className="relative">
                    <div className="absolute z-10 -top-5 sm:w-120 sm:left-15 sm:-top-10 md:w-150 md:-top-10 md:left-10 lg:left-20 lg:-top-12 xl:left-45 xl:-top-10 lg:w-180 xl:w-200 2xl:w-200 2xl:left-75">
                        <img src="/star.png" alt="star" className="h-full w-full relative" />
                    </div>

                    <div className="relative z-20 ">
                        <div className="lg:-space-y-10 xl:-space-y-10 relative">
                            <div className="absolute left-5 sm:left-10 md:left-20 lg:left-35 xl:left-40 2xl:left-50">
                                <p className="text-[50px] sm:text-[80px] md:text-[90px] lg:text-[105px] xl:text-[130px] 2xl:text-[150px] font-light">THE SOCIAL</p>
                            </div>

                            <div className="absolute left-32 top-15 sm:left-55 sm:top-20 md:left-70 md:top-20 lg:left-93 lg:top-22 xl:left-113 xl:top-28 2xl:left-131 2xl:top-31">
                                <p className="text-[50px] sm:text-[80px] md:text-[90px] lg:text-[105px] xl:text-[130px] 2xl:text-[150px] font-light">WEB</p>
                            </div>

                            <div className="absolute left-8 top-30 sm:left-15 sm:top-40 md:left-35 md:top-40 lg:left-45 lg:top-44 xl:left-60 xl:top-56 2xl:left-75 2xl:top-61">
                                <p className="text-[50px] sm:text-[80px] md:text-[90px] lg:text-[105px] xl:text-[130px] 2xl:text-[150px] font-light">PRODUCTION</p>
                            </div>

                            <div className="absolute left-37 top-45 sm:left-70 sm:top-60 md:left-92 md:top-60 lg:left-130 lg:top-66 xl:left-160 xl:top-83 2xl:left-200 2xl:top-93">
                                <p className="text-[50px] sm:text-[80px] md:text-[90px] lg:text-[105px] xl:text-[130px] 2xl:text-[150px] font-light">AGENCY</p>
                            </div>

                            <div className="hidden sm:block absolute font-light top-90 left-4 sm:left-70 sm:top-90 md:left-85 lg:top-105 lg:left-130 xl:top-130 xl:left-160 2xl:top-150 2xl:left-200">
                                <p className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px] text-center sm:text-left md:text-left lg:text-left">Unlock your digital potential with The Social production agency. We offer<br/>
                                    bespoke solution in web development, digital marketing, and creative design<br/>
                                    to elevate your online presence and drive measurable results.</p>

                                <div className="mt-5 flex justify-center items-center space-x-2 sm:absolute">
                                    <div className="font-light px-4 py-2 bg-white text-black text-[10px] lg:text-[14px] w-fit sm:text-[12px] sm:px-6 sm:py-1 rounded-[50px] cursor-pointer transform hover:bg-gray-100">
                                        <Link href="#">Check services</Link>
                                    </div>

                                    <div className="px-2 py-2 bg-white w-fit text-black rounded-full">
                                        <FaArrowRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*MOBILE*/}

                <div className="mt-100 mr-5">
                    <div className="font-light sm:hidden">
                        <p className="text-[10px] text-right">Unlock your digital potential with The Social production agency. We offer<br/>
                            bespoke solution in web development, digital marketing, and creative <br/>
                            design to elevate your online presence and drive measurable results.</p>

                        <div className="mt-5 flex items-center space-x-2 ml-50">
                            <div className="font-light px-4 py-2 bg-white text-black text-[10px] w-fit rounded-[50px] cursor-pointer transform hover:bg-gray-100">
                                <Link href="#">Check services</Link>
                            </div>

                            <div className="px-2 py-2 bg-white w-fit text-black rounded-full">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}