import {FaArrowRight} from "react-icons/fa6";
import Link from "next/link";

export default function OurServices () {
    return (
        <section>
             <div className="relative z-20 md:flex md:space-x-40 lg:space-x-90 xl:space-x-120 2xl:space-x-160 md: sm:ml-10 ml-5 md:ml-15 lg:ml-15 xl:ml-15 2xl:ml-25">
                 <div className="mt-50 sm:mt-50 md:mt-30 lg:mt-30 xl:mt-30 2xl:mt-40">
                     <p className="font-light text-[50px] lg:text-left lg:text-[70px] xl:text-[90px] tracking-[-5px]">OUR SERVICES</p>
                     <p className="hidden text-[12px] mt-5 sm:block font-light lg:text-[14px] xl:text-[18px] lg:whitespace-nowrap xl:whitespace-nowrap 2xl:whitespace-normal">Explore our array of services, from web-development to e-commerce<br />
                         solutions, designed to elevate your online presence and drive success in <br/>
                         the digital landscape.</p>

                     {/*MOBILE*/}

                     <p className="sm:hidden font-light text-[10px] text-left mt-3">Explore our array of services, from web-development to e-commerce<br />
                         solutions, designed to elevate your online presence and drive success in <br/>
                         the digital landscape.</p>
                 </div>

                 <div className="mt-5 flex items-center space-x-2 md:mt-58 lg:mt-68 xl:mt-80 2xl:mt-90">
                     <div className="font-light px-4 py-2 bg-white text-black text-[10px] lg:text-[14px] w-fit sm:text-[12px] sm:px-6 sm:py-1 rounded-[50px] cursor-pointer transform hover:bg-gray-100">
                         <Link href="#">Contact Us</Link>
                     </div>

                     <div className="px-2 py-2 bg-white w-fit text-black rounded-full">
                         <FaArrowRight />
                     </div>
                 </div>
             </div>
        </section>
    );
}