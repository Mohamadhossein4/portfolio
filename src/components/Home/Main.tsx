import React from 'react'
import About from '../About'
import Experience from '../Experience'
import Project from '../Project'

const Main = () => {
  return (
    <div className='flex flex-col  gap-20 container h-1000 mt-40'>
      <About/>
      <Project/>
      <Experience/>
    </div>
  )
}

export default Main