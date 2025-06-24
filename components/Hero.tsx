import React from 'react'
import TopCard from './ui/TopCard'
import SideCard from './ui/SideCard'


function Hero() {
  return (
    <section className="container pt-[15px] pb-[30px] lg:pt-[60px] flex flex-col lg:flex-row justify-between ">
        <TopCard />
        <div className="mt-[30px] lg:mt-0">
            <h2 className="mb-[30px] w-fit">Recent News</h2>
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
        </div>
    </section>
  )
}

export default Hero
