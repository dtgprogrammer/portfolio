import Link from "next/link"
import Navbar from "./Navbar"
import 'app/globals.css'

function Contact() {
    return (
        <div className="  ">
            <Navbar />
            <div className="min-h-screen flex flex-col justify-center  items-center">
                <h1 className=" font-sans font-semibold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-600">Devansh</h1>
                <h1 className=" text-xl mt-10">Contact Here!</h1>
                <p className=" mx-64 mt-6 ">
                    Mail: devawasthi2020@gmail.com
                </p>
            </div>
        </div>
    )
}
export default Contact