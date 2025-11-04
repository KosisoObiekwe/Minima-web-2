import { navLinks } from "../../../constants"
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";


export default function NavBar () {
    return (
        <main className="sticky">
            <nav className="sticky bg-black outline outline-white px-5 py-3 sm:px-10 sm:py-5 md:px-15 md:py-5 lg:px-15 lg:py-8 xl:px-20 xl:py-8 2xl:px-30 2xl:py-8 outline-none">
                <div className="flex justify-between items-center lg:flex-row lg:justify-between">
                    <div>
                        <a><p className="font-normal text-[20px] sm:text-[25px] md:text-[30px] lg:text-[30px] cursor-pointer">KXSI.</p></a>
                    </div>

                    <div>
                        <ul className="hidden lg:block lg:flex lg:space-x-12 xl:space-x-20 2xl:space-x-20 ">
                            {navLinks.map((link, index) => (
                                <li key={link.id} className={`text-[18px] font-light tracking-[-1px] transform duration-300 hover:-translate-y-0.5`}>
                                    <a href={`/${link.id}`}>{link.label}</a>
                                </li>
                            ))}
                        </ul>

                        <div className="lg:hidden">
                            <FaBarsStaggered className="text-[25px] sm:text-[30px] md:text-[30px]" />
                        </div>
                    </div>

                    <div className="hidden lg:block font-normal bg-white text-black w-fit px-6 py-1 rounded-[50px] cursor-pointer transform hover:bg-gray-100">
                        <Link href="#">Contact us</Link>
                    </div>
                </div>
           </nav>
        </main>
    );
}