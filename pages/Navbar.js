import Link from "next/link";
import { FaAddressBook, FaHome, FaInfoCircle } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md"
import { CgNotes } from "react-icons/cg"
import { GrMail } from "react-icons/gr"
import { IoReorderThreeOutline } from 'react-icons/io5'
import { IoClose } from "react-icons/io5";

import { useState } from "react";
export default function Navbar() {

    const [display, setDisplay] = useState(true);

    console.log(display);

    return (
        <>
            <div className=" w-14 transition-all  fixed bg-teal-500 top-1/3 z-50 ml-2 rounded-3xl hover:drop-shadow-2xl duration-500 ease-in-out  hover:bg-cyan-500 flex">
                <nav className=" hover:visible">
                    <ul className="justify-center lg:justify-end hidden lg:flex flex-col">
                        <li className=" m-4 hover:opacity-50 "><Link href={'/'}><FaHome size={"1.5em"} /></Link></li>
                        <li className=" m-4 hover:opacity-50  " ><Link href={'/#About'}><FaInfoCircle size={"1.5em"} /></Link></li>
                        <li className=" m-4 hover:opacity-50  " ><Link href={'/#Projects'}><MdOutlineWork size={"1.5em"} /></Link></li>
                        <li className=" m-4 hover:opacity-50  "><Link href={'/Resume'}><CgNotes size={"1.5em"} />   </Link></li>
                        <li className=" m-4 hover:opacity-50"  ><Link href={'/Contact'}><GrMail size={"1.5em"} /></Link></li>
                    </ul>
                </nav>

                {/* <nav className=" ">
                <ul className="justify-center lg:justify-end lg:flex flex-col ">
                    <li className="mx-2 my-4 hover:opacity-50"><Link href={'/'}>Home</Link></li>
                    <li className="mx-2 my-4 hover:opacity-50" ><Link href={'/#About'}>About</Link></li>
                    <li className="mx-2 my-4 hover:opacity-50" ><Link href={'/#Projects'}>Projects</Link></li>
                    <li className="mx-2 my-4 hover:opacity-50">Resume</li>
                    <li className="mx-2 my-4 hover:opacity-50"><Link href={'/Contact'}>Contact</Link></li>
                </ul>
            </nav> */}
            </div>

            <div className=" fixed right-0.5 p-5 cursor-pointer lg:hidden z-50">
                <IoReorderThreeOutline size={"2em"} style={{ display: !display?"none":"" }} onClick={() => { setDisplay(!display) }} />
                <IoClose size={"2em"} style={{ display: display?"none":"" }} onClick={() => { setDisplay(!display) }}/>
            </div>
            <div style={{ display: display?"none":"" }} className=" fixed w-full bg-teal-500 bg-opacity-95 pt-10 px-5 transition-all duration-500 ease-in-out">
                <ul className="justify-center lg:hidden flex-col">
                    <li className=" m-4 hover:opacity-50 flex-row"><Link href={'/'}><FaHome size={"1.5em"} /> Home</Link></li>
                    <li className=" m-4 hover:opacity-50  " ><Link href={'/#About'}><FaInfoCircle size={"1.5em"} /> About</Link></li>
                    <li className=" m-4 hover:opacity-50  " ><Link href={'/#Projects'}><MdOutlineWork size={"1.5em"} />Projects</Link></li>
                    <li className=" m-4 hover:opacity-50  "><Link href={'/Resume'}><CgNotes size={"1.5em"} />Resume</Link></li>
                    <li className=" m-4 hover:opacity-50"  ><Link href={'/Contact'}><GrMail size={"1.5em"} />Contact</Link></li>
                </ul>
            </div>

        </>

    )
}