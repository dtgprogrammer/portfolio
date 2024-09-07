import { SiNextdotjs,SiReact,SiHtml5,SiTailwindcss,SiCss3,SiExpress,SiMongodb,SiJavascript } from "react-icons/si"
import { DiNodejs} from "react-icons/di"


function About() {
    
    return (
        <div id="About"  >
            <div className="min-h-screen flex flex-col ">
                <h1 className="mt-16 font-sans font-semibold text-4xl text-slate-600 text-center ">About Me</h1>
                <p className=" text-center lg:mx-40 m-10">
                    I am a full-stack developer with a passion for building innovative and user-friendly web applications. I have a strong foundation in both front-end and back-end development, and I am proficient in a wide range of technologies, including:
                </p>
                <div class="lg:grid lg:grid-cols-4 gap-4 lg:mx-40 mx-10 grid grid-cols-1">
                    <div className="flex bg-amber-200  m-3 justify-center items-center h-16 rounded-md"><SiHtml5 size={'2em'}/> HTML</div>
                    <div className="flex bg-amber-200 m-3 justify-center items-center  h-16 rounded-md"><SiCss3  size={'2em'}/>CSS</div>
                    <div className="flex bg-amber-200 m-3 justify-center items-center  h-16 rounded-md"><SiJavascript size={'2em'}/>JavaScript</div>
                    <div className="flex bg-amber-200 m-3 justify-center items-center  h-16 rounded-md"><SiReact size={'2em'}/>React</div>
                    <div className="flex bg-amber-200 m-3 justify-center items-center  h-16 rounded-md"><SiNextdotjs  size={'2em'}/>Next js</div>
                    <div className="flex bg-amber-200 m-3 justify-center items-center  h-16 rounded-md"><SiTailwindcss size={'2em'}/>Tailwind</div>
                    <div className="flex bg-amber-200 m-3 justify-center items-center  h-16 rounded-md"><DiNodejs size={'2em'}/>Node Js</div>
                    <div className="flex bg-amber-200 m-3 justify-center items-center  h-16 rounded-md"><SiExpress size={'2em'}/>Express</div>
                    <div className="flex bg-amber-200 m-3 justify-center items-center  h-16 rounded-md"><SiMongodb size={'2em'}/>MongoDB</div>
                </div>
            </div>
        </div>
    )
}
export default About