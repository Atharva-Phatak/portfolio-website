import React from "react";
import PageSection from "./PageSection"
import PersonalPhoto from "../Assets/personal_photo.JPEG"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {SiGmail} from "react-icons/si"
import {BsFillPersonFill} from "react-icons/bs"

const About = () => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer")
    }
    return (
        <PageSection
        name="About"
        title="About"
        subtitle={""}
    >
    
    <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {/* left */}
        <div className="w-full h-full p-4 flex items-center flex-col justify-center">
        <img
            src={PersonalPhoto}
            alt="contact us"
            className="rounded-full object-cover w-80 h-80 shadow-lg shadow-purple-500 hover:scale-105 duration-300"/>
        <p className="py-12 max-w-md text-center font-bold text-3xl underline animate-pulse">
            ML@<a href="https://www.odaia.ai/">ODAIA</a>
        </p>
        <div className="grid grid-cols-4 mx-auto gap-10">
            <button className="flex items-12enter justify-center rounded-full shadow-md  shadow-[#0CAFFF] hover:scale-110 duration-200 p-3 
            cursor-pointer" onClick={() => openInNewTab('https://linkedin.com/in/atharva-phatak')}>
                <FaLinkedin size={30} color = "#0CAFFF" />
            </button>
            <button className="flex items-center justify-center rounded-full shadow-md  shadow-[#E32636] hover:scale-110 duration-200 p-3 
            cursor-pointer" onClick={()=> openInNewTab('mailto:athp456@gmail.com')}>
                <SiGmail size={30} color = "#E32636"/>
            </button>
            <button className="flex items-center justify-center rounded-full shadow-md  shadow-gray-200 hover:scale-110 duration-200 p-3 
            cursor-pointer" onClick={() => openInNewTab('https://github.com/Atharva-Phatak')}>
                <FaGithub size={30} />
            </button>
            <button className="flex items-center justify-center rounded-full shadow-md  shadow-[#32de84] hover:scale-110 duration-200 p-3 
            cursor-pointer" onClick={() => openInNewTab('/resume.pdf')}>
                <BsFillPersonFill size={30} color = "#32de84"/>
            </button>
        </div>
        </div>
        <div className="w-full lg:w-1/2 h-full rounded-xl p-4">
            <ol className="list list-disc text-xl font-semibold tracking-wide" >
                <li className="text-justify py-1">
                    👋 Hi, my name is Atharva Phatak.
                </li>
                <li className="text-justify py-1">
                    🎓 I am currently working as a Machine Learning Engineer at ODAIA working in the pharma domain.
                </li>
                <li className="text-justify py-1">
                    👨‍💻 Previously I was Research Assistant at <>&nbsp;</> 
                    <a className = "underline text-blue-600" href="https://datalab.science/">DaTALab</a><>&nbsp;</> and my research is focused in applications of Text Simplification methods to empower medical research.
                </li>
                <li className="text-justify py-1">
                    🖥️ I aim to be a part of a dynamic team, where I can apply and enhance my skills and learnings to 
                    tackle complex problems and contribute in building something that makes the life of the user easier.
                </li>
                <li className="text-justify py-1">
                    🌐 During my free time, you can find me contributing to Open Source libraries or listening to music 🎵 or learning about the universe 🌌. 
                </li>
                <li className="text-justify py-1">
                    💡 I am lifelong learner and I love to learn and explore new technologies. 
                </li>
            </ol>
        </div>  

    </div>
    </PageSection>
    )
}
export default About;