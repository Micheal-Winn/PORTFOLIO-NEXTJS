import React from 'react'
import Image from 'next/image'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import contactImg from '../public/assets/contact.jpg'
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <section id='contact' className=' w-full lg:h-screen'>
        <div className=' max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className=' text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className=' py-4'>Get In Touch</h2>
            <div className=' grid lg:grid-cols-5 gap-8'>
                <div className=' col-span-3 lg:col-span-2 w-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className=' lg:p-4 h-full'>
                       <div>
                            <Image className=' rounded-xl hover:scale-105 transition-all ease-in duration-300' src={contactImg} alt='/'/>
                       </div>
                       <div>
                            <h2 className=' py-2'>Thant Zin Win</h2>
                            <p>Web Developer</p>
                            <p className=' py-4'>I am avaliable for freelance or full-time positions.Contact me and let's talk</p>
                       </div>
                       <div>
                            <p>Connect With Me</p>
                            <div className=' flex justify-between items-center py-4'>
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
                </div>

                <div className=' col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className=' p-4'>
                        <form>
                            <div className=' grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className=' flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' type={'text'}/>
                                </div>
                                <div className=' flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number</label>
                                    <input className=' border-2 rounded-lg p-3 flex border-gray-300' type={'text'}/>
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className=' border-2 rounded-lg p-3 flex border-gray-300' type={'email'}/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className=' border-2 rounded-lg p-3 flex border-gray-300' type={'text'}/>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className=' border-2 rounded-lg p-3 border-gray-300' rows={'10'}/>
                            </div>
                            <button className=' w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className=' flex justify-center py-12'>
                <Link href={'/'}>
                <div className=' rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 transition-all ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Contact