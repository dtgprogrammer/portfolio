import Navbar from "./Navbar"
import 'app/globals.css'
import { FaLinkedin, FaInstagram, FaMailBulk, FaHeart } from "react-icons/fa";
import {BiLogoGmail} from "react-icons/bi"
import About from "./About";
import Link from "next/link";
import Projects from "./Projects";
import { motion, useScroll, useSpring } from "framer-motion";
import './style.css'

function Home() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="scroll-smooth">
            <motion.div className="progress-bar" style={{ scaleX }} />

            <Navbar />
            <div className="min-h-screen flex flex-col justify-center  items-center">
                <h1 className=" font-sans font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">Devansh</h1>
                <h1 className=" text-xl mt-10">Full-Stack Web Developer</h1>
                <p className=" mx-6 lg:mx-64 mt-6 text-center ">
                    Full-stack developer with expertise in the MERN stack, building scalable and user-friendly web applications from end to end. I have a passion for creating innovative and intuitive solutions that meet the needs of my users. I am also a team player and I am always eager to learn new things.
                </p>

                <div className="flex justify-between w-40 m-10">
                    <FaLinkedin color="grey" size={"2em"} />
                    <FaInstagram color="grey" size={"2em"} />
                    <BiLogoGmail color="grey" size={"2em"} />
                </div>
                <button>Get in Touch</button>
            </div>

            <About />
            <Projects />

            <div className="items-center  ">
                <h1 className="text-center border-t-2" ></h1>
                <Link href={'/'}><h1 className=" text-center ">Got to Top</h1></Link>

                <div className="flex justify-center">Made with <div className=" mx-2 align-middle"><FaHeart color="red" /></div> by Devansh Awasthi</div>
            </div>
        </div>
    )
}

export default Home