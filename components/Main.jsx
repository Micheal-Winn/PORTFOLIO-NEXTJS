import React from 'react'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

const Main = () => {
  return (
    <section className=' w-full h-screen text-center'>
        <div className=' max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className=' uppercase text-sm tracking-widest text-gray-600'>Let's build something together</p>
                <h1 className='py-4 text-gray-700'>Hi,I'm <spa className='text-[#5651e5] uppercase block'>Thant Zin Win</spa></h1>
                <h1 className='py-2 text-gray-700'>
                    A Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a front-end web developer specializing in building ( and occasionally designing) exceptional digital experiences.Currently,I'm focused on building responsive front-end web applications while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition-all ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition-all ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition-all ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className=' rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 transition-all ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Main