import Link from "next/link"
import music from "./music.png"
import geomap from"./geomap.png"
import drum from "./drum.png"

function Projects() {
    const listing = [
        { title: "Harmony", link: "/projects/harmony", image: music.src },
        { title: "Geotech Data Website", link:"/projects/geodata", image: geomap.src},
        { title: "DrumPad", link: "/projects/drumpad", image:drum.src }
    ]

    const Box = ({ title, link, image }) => {
        return (
            <Link href={link}>
                <div className="flex m-3 justify-center items-center  h-60 rounded-md hover:drop-shadow-2xl hover:opacity-50"
                    style={{
                        background: `url('${image}')`,
                        backgroundSize: "cover",
                        // opacity:"0.5"
                    }}
                >
                    <div className=" bg-black">
                        <h2 className=" text-white text-xl m-3" >{title}</h2>
                    </div>
                </div>
            </Link >
        )
    }
    return (
        <div id="Projects">
            <div className="min-h-screen flex flex-col ">
                <h1 className="mt-16 font-sans font-semibold text-4xl text-slate-600 text-center ">Projects</h1>
                <p className=" text-center lg:mx-40 m-10">
                    I am a full-stack developer with a passion for building innovative and user-friendly web applications. I have a strong foundation in both front-end and back-end development, and I am proficient in a wide range of technologies, including:
                </p>

                <div class="lg:grid lg:grid-cols-3 gap-4 lg:mx-40 mx-10 grid grid-cols-1">
                    {listing.map((info) => {
                        return (
                            <Box key={`box ${info.title}`} title={info.title} link={info.link} image={info.image} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Projects