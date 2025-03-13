import React from 'react'

function Slider() {
  return (
    <div className='h-[530px] mx-8 bg-[url(./img/slider-bg.jpg)] bg-cover bg-bottom bg-no-repeat'>
      <div className='bg-opacity-40 bg-gray-900 w-full h-full flex items-center justify-center'>
        <div className='text-white text-center'>
          <div className=''>
            <div className='text-xs font-bold uppercase tracking-[0.125rem] opacity-85'>Best place to buy design</div>
            <div className='my-3 text-5xl font-medium leading-[60px]'>Coffee Mugs</div>
            <div className='text-lg mb-8 opacity-95'>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</div>
          </div>
          <a className='flex justify-center' href='#'><span className='bg-white uppercase w-max text-gray-900 px-8 py-4 font-bold tracking-[0.125rem] text-xs hover:bg-opacity-95'>Explore Our Product</span></a>
        </div>
      </div>
    </div>
  )
}

export default Slider