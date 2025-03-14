import React from 'react'
import SubHeadLine from './SubHeadLine'
function FeaturedMugs() {
  return (
    <>
      <div className='featured-mugs w-[95%] lg:w-[66%] mx-auto mb-24'>
        <div className='grid grid-col-1 mx-8 lg:grid-cols-2 gap-9 lg:gap-6'>
          <div className='lcn-product-card'>
            <div className='h-[540px] bg-[url(./img/featured-mugs-01.jpg)] bg-cover bg-center bg-no-repeat mb-9'>
              <a href="#" alt="">
                <div className='group relative w-full h-full hover:bg-opacity-10 hover:bg-gray-900 hover:transition-all hover:ease-in-out hover:duration-300'>
                  <div className='lcn-button absolute hidden group-hover:block group-hover:animate-fadeIn  left-1/2 -translate-x-1/2 bg-white uppercase w-11/12 bottom-4 text-gray-900 '>
                    Explore Mug</div>
                </div>
              </a>
            </div>
            <div className='text-center'>
              <a href="#"><div className='mb-1 text-xl leading-8'>Pink Premium Ceramic</div></a>
              <span className='text-[#1d1f2eb3] leading-7'>$ 99.00 USD</span>
            </div>
          </div>
          <div className='lcn-product-card'>
            <div className='h-[540px] bg-[url(./img/featured-mugs-02.jpg)] bg-cover bg-center bg-no-repeat mb-9'>
              <a href="#" alt="">
                <div className='group relative w-full h-full hover:bg-opacity-10 hover:bg-gray-900 hover:transition-all hover:ease-in-out hover:duration-300'>
                  <div className='absolute right-3 top-3 bg-white text-coffee-400 py-2 px-4 leading-7 font-bold'>On Sale.</div>
                  <div className='lcn-button absolute hidden group-hover:block group-hover:animate-fadeIn  left-1/2 -translate-x-1/2 bg-white uppercase w-11/12 bottom-4 text-gray-900 '>
                    Explore Mug</div>
                </div>
              </a>
            </div>
            <div className='text-center'>
              <a href="#"><div className='mb-1 text-xl leading-8'>Golden Designers Mug</div></a>
              <span className='text-coffee-400 text-xl leading-8 mr-3'>$50.00</span>
              <span className='text-[#1d1f2e66] leading-7 line-through'>$ 69.00 USD</span>
            </div>
          </div>
        </div>
      </div>
      <SubHeadLine>More Products</SubHeadLine>
    </>
  )
}

export default FeaturedMugs
