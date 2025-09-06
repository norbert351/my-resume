
import Image from "next/image"
import Link from "next/link"
import { PiLineVertical, PiLineVerticalLight } from "react-icons/pi"

const  Navbar = () =>{
    return (
        <div className="flex items-center justify-between h-16 py-10">
        
            <div className="justify-center flex gap-2 ml-3 flex-row " >
            <Link href="/" className="flex flex-row items-center ml-4">
                <Image src="/zubby.jpg"
              alt="Zubby Tech Logo"
              width={50}
              height={40}
              className="rounded-lg"
              priority/>
                <h1 className="flex ml-3">
                    ZUBBY TECH
                </h1></Link>
            </div>

         <div className="hidden md:block ">
            <div  className="ml-10 flex items-center grid-cols-1 md:grid-cols-3 gap-4 ">
                <Link href="/resume" className="px-3 py-2">Resume</Link>
                <PiLineVerticalLight />
                <Link href="/projects" className="px-3 py-2">Projects</Link>
                <PiLineVertical />
                <Link href="/contact" className="px-3 py-2">Contacts</Link>
            </div>
        </div> 
     </div>
    )
}
export default Navbar