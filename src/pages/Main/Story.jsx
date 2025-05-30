import React from 'react'
import SubHeadLine from '../../components/SubHeadLine'

function Story() {
  return (
    <>
      <div className='story lg:max-w-[940px] mx-auto'>
          <div className='px-10 md:px-20 lg:px-28 xl:px-36 mb-24 text-center'>
            <h2 className='mt-5 mb-4 text-[28px] leading-10'>Even the all-powerful Pointing has no control about the blind texts.</h2>
            <p className='mb-4 text-[#1d1f2eb3] leading-7 text-justify md:text-center'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic 
              life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <a href="#" className='mt-3 text-coffee-400 relative after:absolute after:-bottom-2 after:bg-coffee-50
             hover:after:bg-coffee-200 after:left-0 after:w-full after:h-0.5 after:transition-all after:ease-in-out after:duration-300
            '>Read the full Story</a>
          </div>
      </div>
      <SubHeadLine>Featured Mugs</SubHeadLine>
    </>
  )
}

export default Story