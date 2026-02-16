import Education from '@/components/Section/Education'
import WorkExperience from '@/components/Section/WorkExperience'
import React from 'react'

const page = () => {
  return (
    <div className='container flex flex-col gap-10 mt-10'>
       <WorkExperience/>
       <Education/>
    </div>
  )
}

export default page