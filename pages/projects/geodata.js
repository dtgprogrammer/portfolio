import Link from "next/link";
import Navbar from "../Navbar";
import 'app/globals.css'
import geomap from "../geomap.png"

function Harmony() {

    return (
        <div>
            <Navbar />
            <div className=" flex flex-col">
                <div style={{
                    backgroundImage: `url('${geomap.src}')`,
                    backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                }}>
                    <h1 className=" h-32 lg:text-left text-white font-bold text-3xl text-center lg:pl-64 pt-8"
                        style={{
                            backdropFilter: 'brightness(60%)'

                        }}
                    >Geo-Map</h1>
                </div>
                <h1 className=" text-center text-xl font-bold lg:text-left lg:ml-40 mt-10 mb-6">Overview:</h1>

                <div className="lg:flex  ">
                    <div>
                        <p className="mx-6 lg:ml-40 text-lg">A Wep application for storing, analyzing and sharing geotechnical data.
                            Developed the website using React to store and visualize geotechnical data collected by our institute, enhancing
                            data accessibility and analysis for various locations. Used Microsoft Bing Maps API to display interactive maps of specific locations andgoogle-react-charts package to
                            generate visually compelling pie charts and bar graphs.


                        </p>
                        <div className="mx-8 justify-center lg:justify-start flex lg:ml-40 mt-8 ">

                            <div>
                                <Link href={'https://github.com/dtgprogrammer/geotech'}>
                                    <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Github</button>
                                </Link>

                            </div>

                            <Link href={'https://geotech2020.netlify.app/'}>

                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">Live Demo</button>

                            </Link>

                        </div>

                    </div>
                    <div className="flex flex-col shadow-xl rounded-sm p-4 lg:mr-10 bg-gray-300 lg:w-80 w-screen mt-10 lg:mt-0 text-center lg:text-left">
                        <h2 className=" font-bold text-center text-lg">Tech Stack Used:</h2>
                        <ul className=" pl-4 list-disc">
                            <li className=" mt-4">React</li>
                            <li className=" mt-4">Json Files</li>
                            <li className=" mt-4">Microsoft BingMaps API</li>
                            {/* <li className=" mt-4">Google React Charts</li> */}
                            <li className=" mt-4 mb-7">Google React Charts</li>
                        </ul>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Harmony;