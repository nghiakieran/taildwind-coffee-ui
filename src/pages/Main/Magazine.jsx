import React from 'react'
import SubHeadLine from '../../components/SubHeadLine'

function Magazine() {
  return (
    <div className='magazine w-[95%] xl:w-[66%] mx-auto mb-32'>
      <div className='flex-col-reverse flex md:flex-row items-center justify-center gap-5 mx-8'>
        <div className='basis-1/2 text-center md:text-left'>
          <div>
            <div className='text-xs tracking-[2px] text-gray-500 font-bold uppercase'>Premium Offer</div>
            <h2 className='mt-4 mb-3 text-4xl'>Get our Coffee Magazine</h2>
            <p className='text-[#1d1f2eb3] leading-7 mb-4 max-w-[420px]'>The most versatile furniture system ever created. Designed to fit your life.</p>
          </div>
          <a href="#">
            <div className='lcn-button bg-gray-900 text-white w-max uppercase mx-auto md:mx-0'>
              Start Shopping
            </div>
          </a>
        </div>
        <div className='basis-1/2 md:flex gap-5 w-full h-full mb-5 md:mb-0'>
          <div className='h-[280px] basis-2/3 bg-[url(./img/magazine-01.jpg)] mb-3 xs:mb-5 md:mb-0 bg-cover bg-center bg-no-repeat'></div>
          <div className='basis-1/3 flex md:flex-col gap-3 xs:gap-5'>
            <div className='h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url(./img/magazine-02.jpg)] bg-cover bg-center bg-no-repeat'></div>
            <div className='h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url(./img/magazine-03.jpg)] bg-cover bg-center bg-no-repeat'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Magazine
