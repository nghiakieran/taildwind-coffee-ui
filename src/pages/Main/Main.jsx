import React from 'react'
import Slider from './Slider'
import Story from './Story'
import FeaturedMugs from './FeaturedMugs'
import ListProduct from './ListProduct'
import Magazine from './Magazine'

function Main() {
  return (
    <div className='main'>
      <Slider />
      <Story />
      <FeaturedMugs />
      <ListProduct />
      <Magazine />
    </div>
  )
}

export default Main
