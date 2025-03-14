import React from 'react'

function ProductCard({ sale, featuredHeight, imgUrl, name, price, saleOff }) {

  const saleClasses = sale ? 'absolute right-3 top-3 bg-white text-coffee-400 py-2 px-4 leading-7 font-bold' : ''
  const featuredHeightClasses = featuredHeight ? 'h-[340px] sm:h-[540px]' : 'h-[380px]'

  return (
    <div className='lcn-product-card mb-12'>
      <div className={`${featuredHeightClasses} bg-cover bg-center bg-no-repeat mb-9`}
        style={{ backgroundImage: `url(${imgUrl})`}}>
        <a href="#" alt="">
          <div className='group relative w-full h-full hover:bg-opacity-10 hover:bg-gray-900 hover:transition-all hover:ease-in-out hover:duration-300'>
            {sale && <div className={saleClasses}>On Sale.</div>}
            <div className='lcn-button absolute hidden group-hover:block group-hover:animate-fadeIn  left-1/2 
            -translate-x-1/2 bg-white uppercase w-11/12 bottom-4 text-gray-900 '>
              Explore Mug
            </div>
          </div>
        </a>
      </div>
      <div className='text-center'>
        <a href="#"><div className='mb-1 text-xl leading-8'>{name}</div></a>
        { saleOff ?
          <>
            <span className='text-coffee-400 text-xl leading-8 mr-3'>{saleOff.price}</span>
            <span className='text-[#1d1f2e66] leading-7 line-through'>{saleOff.sale}</span>
          </> : 
          <span className='text-[#1d1f2eb3] leading-7'>{price}</span>
        }
      </div>
    </div>
  )
}

export default ProductCard
