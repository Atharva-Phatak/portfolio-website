import React from 'react'
import {VscGithub} from 'react-icons/vsc'
import {FaLinkedin} from 'react-icons/fa'
import {SiGmail} from "react-icons/si"
import {BsFillPersonFill} from "react-icons/bs"
const Social = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={35} color="#0CAFFF"/>
                </>
            ),
            href:  'https://linkedin.com/in/atharva-phatak',
            style: 'rounder-tr-md',
            download: false,
        },
        {
            id: 2,
            child: (
                <>
                Github <VscGithub size={35}/>
                </>
            ),
            href:  'https://github.com/Atharva-Phatak',
            download:false,
        },
        {
            id: 3,
            child: (
                <>
                Mail <SiGmail size={35} color = "#E32636"/>
                </>
            ),
            href:  'mailto:athp456@gmail.com',
            download: false,
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonFill size={35} color = "#32de84"/>
                </>
            ),
            href:  '../Assets/MyResume.pdf',
            download: true,
        }
    ]
    return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
            <li
            key = {id}  
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-black`+ 
            + " " + style}> 
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

                
        </ul>
    </div>

    )
}

export default Social