import React from 'react'
import Slider from './Slider'
import Story from './Story'
import FeaturedMugs from './FeaturedMugs'
import ListProduct from './ListProduct'
import Magazine from './Magazine'
import LifeStories from './LifeStories'

function Main() {
  return (
    <div className='main'>
      <Slider />
      <Story />
      <FeaturedMugs />
      <ListProduct />
      <Magazine />
      <LifeStories />
    </div>
  )
}

export default Main
