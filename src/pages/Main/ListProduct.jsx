import React from 'react'
import ProductCard from '../../components/ProductCard'
import SubHeadLine from '../../components/SubHeadLine'

function ListProduct() {
  return (
    <>
      <div className='featured-mugs w-[95%] lg:w-[66%] mx-auto mb-24'>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-8 gap-9 md:gap-4'>
          <ProductCard sale imgUrl='./img/item-01.jpg' name='Red Love Cup' saleOff={{ price: '$25.00', sale: '$ 37.00 USD'}} />
          <ProductCard sale imgUrl='./img/item-02.jpg' name='Black Tea Cup' saleOff={{ price: '$15.00', sale: '$ 29.00 USD' }} />
          <ProductCard imgUrl='./img/item-03.jpg' name='B&W Essentials Mug' price='$ 19.00 USD'/>
          <ProductCard imgUrl='./img/item-04.jpg' name='Winter Style Mug' price='$ 25.00 USD' />
          <ProductCard imgUrl='./img/item-05.jpg' name='Ceramic Tea' price='$ 46.00 USD' />
          <ProductCard imgUrl='./img/item-06.jpg' name='No Handle Bar Cup' price='$ 34.00 USD' />
        </div>
      </div>
      <SubHeadLine>Buy 2 mugs and get a coffee magazine free</SubHeadLine>
    </>
  )
}
export default ListProduct
