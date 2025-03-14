import React from 'react'
import SubHeadLine from '../../components/SubHeadLine'
import ProductCard from '../../components/ProductCard'
function FeaturedMugs() {

  return (
    <>
      <div className='featured-mugs w-[95%] lg:w-[66%] mx-auto mb-12'>
        <div className='grid grid-col-1 mx-8 lg:grid-cols-2 gap-9 lg:gap-4'>
          <ProductCard featuredHeight imgUrl='./img/featured-mugs-01.jpg' name='Pink Premium Ceramic'
            price='$ 99.00 USD' />
          <ProductCard sale featuredHeight imgUrl='./img/featured-mugs-02.jpg' name='Golden Designers Mug'  
            saleOff={{ price: '$50.00', sale: '$ 69.00 USD' }} />
        </div>
      </div>
      <SubHeadLine>More Products</SubHeadLine>
    </>
  )
}

export default FeaturedMugs
