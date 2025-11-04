import Link from "next/link";
import {FaArrowRight} from "react-icons/fa6";

export default function AboutPage () {
    return(
        <section className="mt-30 sm:mt-40 md:mt-50 lg:mt-80 xl:mt-100 2xl:mt-140">
            <div>
                <div className="ml-5 md:ml-25">
                    <p className="font-light lg:text-left text-[50px] xl:text-[104px] tracking-[-5px]">ABOUT</p>
                    <p className="hidden mt-5 sm:block font-light xl:text-[18px]">The Social is a forward-thinking web development company dedicated to transforming<br/>
                        your digital vision into reality, With a focus on a creativity and innovation, we specialize in <br/>
                        creating bespoke websites that captivates audiences and drive results, Whether you’re <br/>
                        a startup or an established business, we’re here to elevate your online presence and <br/>
                        help you succeed in the digital world.</p>

                    {/*MOBILE*/}

                    <p className="sm:hidden font-light text-[10px] text-left mt-3">The Social is a forward-thinking web development company dedicated to transforming
                        your digital vision into reality, With a focus on a creativity and innovation, we specialize in
                        creating bespoke websites that captivates <br/> audiences and drive results, Whether you’re
                        a startup or an established<br/>business, we’re here to elevate your online presence and
                        help you <br/>succeed in the digital world.</p>

                    <div className="mt-2 lg:mt-4 flex space-x-2 items-center">
                        <p className="text-[10px] lg:text-[18px]">more</p>

                        <div className="px-1 py-1 text-[10px] lg:text-[18px] bg-white w-fit text-black rounded-full">
                            <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}