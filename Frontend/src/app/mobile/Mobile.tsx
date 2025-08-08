"use client"

import About from './About'
import Image from 'next/image'
import HomePageCarousel from '../_components/HomePageCarousel'
import Categories from './Categories'
import Rounds from './Rounds'
import Prize from './Prize'
import Syllabus from './Syllabus'
import Register from './Register'
import PostAbout from './PostAbout'
import bottomgp from './assets/bottomgp.svg';
import Timeline from './Timeline'

import NavBar1 from './NavBar1'
import NavBar from './NavBar'
import Footer from '../_components/Footer'

import OpenPage from './OpenPage'
import Testimonials from '../_components/Testimonials'
import bg from './assets/fullbg.svg'

const Mobile = () => {
   
  return (
    <div 
    className="bg-no-repeat bg-top bg-[length:100%_auto] overflow-x-hidden w-screen"
          style={{
    backgroundImage: `url(${bg.src})`,
    backgroundSize: '100% auto',
  }}>
      
      
      
      

      <OpenPage></OpenPage>
      
      <About></About>
      
      <PostAbout></PostAbout>
      
      
     
      <div id="Rounds"><Rounds></Rounds></div>
      {/* <NavBar1></NavBar1> */}
      
      <Categories></Categories>
       <Syllabus></Syllabus>
      <Prize></Prize>
      <Timeline></Timeline>
     
      <Testimonials></Testimonials>
      <div className=' relative z-20'>
      <HomePageCarousel></HomePageCarousel>
       <Footer></Footer>

      </div>
      <NavBar></NavBar>

      
      
      

       
    </div>
  )
}

export default Mobile
