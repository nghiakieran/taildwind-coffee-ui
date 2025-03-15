import React from 'react'
import ProductCard from '../../components/ProductCard'
import SubHeadLine from '../../components/SubHeadLine'
function LifeStories() {
  const stories = [
    {
      id: 1,
      title: 'Health Check: why do I get a headache when I haven’t had my coffee?',
      description: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      day: 'October 9, 2018',
      contentButton: 'Read The Full Story',
      imgUrl: './img/life-story-01.jpg'
    },
    {
      id: 2,
      title: 'How long does a cup of coffee keep you awake?',
      description: 'It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.',
      day: 'October 9, 2018',
      contentButton: 'Read The Full Story',
      imgUrl: './img/life-story-02.jpg'
    },
    {
      id: 3,
      title: 'Recent research suggests that heavy coffee drinkers may reap health benefits.',
      description: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      day: 'October 9, 2018',
      contentButton: 'Read The Full Story',
      imgUrl: './img/life-story-03.jpg'
    },
  ]
  return (
    <>
      <div className='life-stories w-[95%] xl:w-[66%] mx-auto mb-24'>
        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 mx-8 md:gap-4'>
          {
            stories.map(story => {
              return (
                <ProductCard key={story.id} story={story} imgUrl={story.imgUrl} contentButton={story.contentButton} extraHeight />
              )
            })
          }
        </div>
      </div>
      <SubHeadLine>Buy 2 mugs and get a coffee magazine free</SubHeadLine>
    </>
  )
}

export default LifeStories
