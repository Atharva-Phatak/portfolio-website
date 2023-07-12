import React from 'react'
import astronaut from "../Assets/cute.png"
import flyingAstronaut from "../Assets/rocket-astronaut.png"
import headerimg from "../Assets/header-img (1).svg"
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    return (            
            <div className='flex bg-hero-background bg-cover bg-no-repeat w-full h-screen'>
                <div className='flex w-1/6 z-0'>
                    <img src={flyingAstronaut} alt = "" className = "select-none pointer-events-none object-scale-down w-48 h-96 ufoMotion"></img>
                </div>
                <div className='flex w-1/6 items-end'>
                    <img src={astronaut} alt = "" className = "select-none pointer-events-none spin"></img>
                </div>
                <div className='flex flex-col w-2/6 my-auto lg:z-10 justify-center'>
                    <div className='flex justify-center'>
                        <div className='select-none pointer-events-none 
                        tracking-normal border border-solid 
                        bg-gradient-to-r from-[#aa367c]/50 to-[#4a2fbd]/50 inline-block px-4 py-4 mb-4
                        font-extrabold
                        lg:text-3xl sm:text-xl'
                        id = "">
                            Welcome to my Portfolio
                        </div> 
                    </div>
                    <div className='flex py-2 justify-center font-extrabold lg:text-2xl sm:text-xl'>
                        <Typewriter
                        options={{
                            strings: ['I am Atharva Phatak', "Machine Learning Engineer"],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                </div>
                <div className='flex w-2/6 z-0'>
                    <img src={headerimg}  className = "select-none pointer-events-none updown" alt = ""></img>
                </div>
            </div>
    )
        
}

export default HeroSection