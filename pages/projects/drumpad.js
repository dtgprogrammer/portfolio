import Link from "next/link";
import Navbar from "../Navbar";
import 'app/globals.css'
import music from "../drum.png"

function Drumpad() {

    return (
        <div>
            <Navbar />
            <div className=" flex flex-col">
                <div style={{
                    backgroundImage: `url('${music.src}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <h1 className=" h-32 lg:text-left text-white font-bold text-3xl text-center lg:pl-64 pt-8"
                        style={{
                            backdropFilter: 'brightness(60%)'

                        }}
                    >Drumpad</h1>
                </div>
                <h1 className=" text-center text-xl font-bold lg:text-left lg:ml-40 mt-10 mb-6">Overview:</h1>

                <div className="lg:flex  ">
                    <div>
                        <p className="mx-6 lg:mx-40 text-lg">This is a Frontend project for a Drumpad simlulator. It is completely based on React Js
                        and vanilla CSS. It produces sound when buttons are pressed on it and also when the corresponding letters are pressed on the keyboard. Also displays the name of the button pressed.
                        </p>
                        <div className="mx-8 justify-center lg:justify-start flex lg:ml-40 mt-8 ">

                            <div>
                                <Link href={'https://github.com/dtgprogrammer/DrumPad'}>
                                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Github Frontend</button>
                                </Link>
                            </div>

                            <Link href={'https://beamish-melomakarona-3a369d.netlify.app/'}>

                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Live Demo</button>

                            </Link>

                        </div>

                    </div>
                    <div className="flex flex-col shadow-xl rounded-sm p-4 lg:mr-10 bg-gray-300 lg:w-80 w-screen mt-10 lg:mt-0 text-center lg:text-left">
                        <h2 className=" font-bold text-center text-lg">Tech Stack Used:</h2>
                        <ul className=" pl-4 list-disc">
                            <li className=" mt-4">React</li>
                            <li className=" mt-4">CSS</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Drumpad;