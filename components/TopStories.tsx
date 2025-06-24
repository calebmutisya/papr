import React from 'react'
import ShadowCard from './ui/ShadowCard'

function TopStories() {
  return (
    <div className='bg-mylightgrey pt-[46px] pb-[30px]'>
        <div className='container'>
            <h1 className='mb-[30px]'>Top Stories</h1>
            <div>
                <ShadowCard/>
            </div>
        </div>
    </div>
  )
}

export default TopStories
