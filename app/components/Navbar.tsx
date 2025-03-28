"use client"
import Link from "next/link";
import Image from 'next/image'
import logo from '../assets/3.png';
import { usePathname } from "next/navigation";

const links =[
    {name:"Home", href:"/"},
    {name:"Sticker", href:"/Sticker"},
    {name:"Pins", href:"/Pins"},
    {name:"Prints", href:"/Prints"}
];

export default function Navbar(){
    const pathname = usePathname();
    return(
        <header className="fixed pb-5 mb-8 border-b w-full bg-white z-90">
            <div className="flex items-center justify-between mx-auto max-w-9xl px-4 sm:px-6 lg:max-w-9xl">
                <Link href="/">
                    <Image
                        src={logo}
                        width={400}
                        height={200}
                        alt="anicypher logo"
                        className="ml-5"
                    />
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16 pr-5">
                {links.map((link, idx) => (
                    <div key={idx}>
                        {pathname === link.href ? (
                         <Link
                             className="text-lg font-semibold text-primary cursor-default"
                             href={link.href}
                        >
                            {link.name}
                        </Link>
                         ) : (
                        <Link
                            href={link.href}
                            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                        >
                             {link.name}
                         </Link>
                         )}
                    </div>
                 ))}
             </nav>
            </div>
        </header>
    );
}