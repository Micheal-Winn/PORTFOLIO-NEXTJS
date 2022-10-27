import Image from 'next/image'

import React from 'react'
import netflixImg from '../public/assets/projects/netflix.jpg'
import ProjectItems from './ProjectItems'
const Projects = () => {
  return (
    <section id='projects'>
        <div className=' max-w-[1240px] mx-auto px-2 py-16'>
            <p className='tracking-widest uppercase text-[#5651e5] text-xl'>Projects</p>
            <h2 className=' py-4'>what I've Built</h2>
            <div className=' grid md:grid-cols-2 gap-8'>

               <ProjectItems title='NetFlix' backgroundImg={netflixImg} projectUrl='/netflix'/>
            </div>
        </div>
    </section>
  )
}

export default Projects