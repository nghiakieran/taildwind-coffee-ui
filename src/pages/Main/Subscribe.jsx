import React from 'react'
import SubHeadLine from '../../components/SubHeadLine'

function Subscribe() {
  return (
    <div className='subscribe-us h-[370px] bg-[#1d1f2e] flex flex-col justify-center items-center mx-8 mb-24 '>
      <SubHeadLine>Sign up and get free coffee bags</SubHeadLine>
      <div className='-mt-20 mb-6 text-white text-4xl leading-[50px]'>Coffee Updates</div>
      <div className='lcn-form'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
          <div className='text-center'><input type="email" placeholder='Customer@coffeestyle.io' className='px-6 py-4 w-[350px] max-w-[80%] xs:max-w-full bg-inherit border-gray-700 outline-none border-[1px]
         text-white leading-5 hover:border-gray-300 duration-500 placeholder:uppercase placeholder:tracking-widest placeholder:text-xs placeholder:font-semibold
         focus:border-gray-300'/></div>
          <div><button type='submit' className='lcn-button bg-white h-[53px] uppercase'>Subscribe</button></div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
