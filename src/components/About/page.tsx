import Link from "next/link";
import {FaArrowRight} from "react-icons/fa6";

export default function AboutPage () {
    return(
        <section className="mt-30 sm:mt-40 md:mt-50 lg:mt-70 xl:mt-100 2xl:mt-140">
            <div>

                <div className="relative z-20 sm:ml-10 ml-5 md:ml-15 lg:ml-15 xl:ml-15 2xl:ml-25 lg:flex lg:space-x-20 xl:space-x-25 2xl:space-x-45">
                    <div>
                        <p className="font-light text-[50px] lg:text-left lg:text-[80px] xl:text-[104px] tracking-[-5px]">ABOUT</p>
                        <p className="hidden text-[12px] mt-5 sm:block font-light lg:text-[14px] xl:text-[18px] lg:whitespace-nowrap xl:whitespace-nowrap 2xl:whitespace-normal">The Social is a forward-thinking web development company dedicated to transforming<br/>
                            your digital vision into reality, With a focus on a creativity and innovation, we specialize in <br />
                            creating bespoke websites that captivates audiences and drive results, Whether you’re <br />
                            a startup or an established business, we’re here to elevate your online presence and <br />
                            help you succeed in the digital world.</p>

                        {/*MOBILE*/}

                        <p className="sm:hidden font-light text-[10px] text-left mt-3">The Social is a forward-thinking web development company dedicated to transforming
                            your digital vision into reality, With a focus on a creativity and innovation, we specialize in
                            creating bespoke websites that captivates <br/> audiences and drive results, Whether you’re
                            a startup or an established<br/>business, we’re here to elevate your online presence and
                            help you <br/>succeed in the digital world.</p>

                        <div className="mt-2 lg:mt-4 flex space-x-2 items-center">
                            <p className="text-[10px] md:text-[12px] lg:text-[18px]">more</p>

                            <div className="px-1 py-1 text-[10px] lg:text-[14px] bg-white w-fit text-black rounded-full">
                                <FaArrowRight />
                            </div>
                        </div>
                    </div>

                    <div className="flex space-x-5 mt-7 lg:space-x-15 xl:space-x-15 2xl:space-x-20 lg:mt-35 xl:mt-45 2xl:mt-45">
                        <div className="text-center sm:text-left">
                            <p className="font-light text-[30px] lg:text-[35px] xl:text-[40px] 2xl:[65px]">100+</p>
                            <p className="font-light text-[10px] lg:text-[15px] xl:text-[25px] 2xl:[25px] md:-mt-2">Projects</p>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="font-light text-[30px] lg:text-[35px] xl:text-[40px] 2xl:[65px]">32+</p>
                            <p className="font-light text-[10px] lg:text-[15px] xl:text-[25px] 2xl:[25px] md:-mt-2">Partners</p>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="font-light text-[30px] lg:text-[35px] xl:text-[40px] 2xl:[65px]">3</p>
                            <p className="font-light text-[10px] lg:text-[15px] xl:text-[25px] 2xl:[25px] md:-mt-2">Offices</p>
                        </div>
                    </div>
                </div>

                <div className="relative z-5 overflow-x-clip">
                    <div className="absolute left-15 -top-15 w-25 md:left-20 lg:w-30 lg:left-180 lg:-top-40 xl:w-40 xl:left-220 xl:-top-45 2xl:w-50 2xl:left-250 2xl:-top-45">
                        <img src="/diamond-2.png" alt="Diamond 2" className="w-full object-cover" />
                    </div>

                    <div className="absolute left-60 -top-10 w-50 sm:left-130 md:left-165 lg:w-80 lg:left-220 lg:-top-40 xl:w-100 xl:left-270 xl:-top-50 2xl:w-120 2xl:left-320 2xl:-top-60">
                        <img src="/diamond-1.png" alt="Diamond 2" className="w-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}