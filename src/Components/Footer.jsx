import React from "react";
import {VscGithub} from 'react-icons/vsc'
import {FaLinkedin} from 'react-icons/fa'
import {SiGmail} from "react-icons/si"
import {BsFillPersonFill} from "react-icons/bs"
const Footer = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                <FaLinkedin size={30} color = "#0CAFFF"/>
                </>
            ),
            href:  'https://linkedin.com/in/atharva-phatak',
            download: false,
        },
        {
            id: 2,
            child: (
                <>
                <VscGithub size={30}/>
                </>
            ),
            href:  'https://github.com/Atharva-Phatak',
            download: false,
        },
        {
            id: 3,
            child: (
                <>
                <SiGmail size={30} color="#E32636"/>
                </>
            ),
            href:  'mailto:athp456@gmail.com',
            download: false,
        },
        {
            id: 4,
            child: (
                <>
                <BsFillPersonFill size={30} color =  "#32de84"/>
                </>
            ),
            href:  '../Assets/MyResume.pdf',
            download: true,
        }
    ]

    return (
        <div className="border-t border-white">
            <div className="my-6 max-w-screen-xl mx-auto">
            <h1 className="mt-12 text-center text-3xl">
                Atharva Phatak
            </h1>
            <p className="my-8 text-center text-2xl italic font-bold">
                "Nothing is Impossible"
            </p>
            <div className="flex flex-wrap justify-center">
                {
                    links.map(({id, child, href, download}) => (
                        <li
                            key = {id}  
                            className={"flex mx-4 justify-between items-center hover:scale-110 duration-300"}> 
                                <a href={href} 
                                className='flex justify-between items-center w-full
                                text-white'
                                download={download}
                                target="_blank"
                                rel="noreferrer">
                                    {child}
                                </a>
                            
                            </li>
                        
                    ))}
                
            </div>
                <p className="my-12 text-center text-sm text-white">
                    © Copyright MyPortfolio
                </p>
            </div>
        </div>
    );
};

export default Footer;