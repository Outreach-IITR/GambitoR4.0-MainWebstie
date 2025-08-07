"use client";
import Image from "next/image";
import Header from "./_components/Header";
import AboutSection from "./_components/AboutSection";
import RoundDescription from "./_components/RoundDescription";
import NavButtons from "./_components/Navbuttons";
import Syllabus from "./_components/Syllabus";
import Prizes from "./_components/Prizes";
import Categories from "./_components/Categories";
import Footer from "./_components/Footer";
import HomePageCarousel from "./_components/HomePageCarousel";
import Timeline from "./_components/Timeline";
import { useMediaQuery } from "react-responsive";
import Mobile from "./mobile/Mobile";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  let backgroundImageStyle = {
    backgroundImage: `url("homebg.svg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',

    
    
  };
    const isMobile = useMediaQuery({query: '(max-width: 900px)'})
    if (isMobile) return <Mobile />;
  return (
    <div>
      {isMobile ? (
        <Mobile />
      ) : (
        <div
          className="bg-no-repeat bg-top bg-[length:100%_auto]"
          style={{
        
   backgroundImage: `url('/fullbg.svg')`,
    backgroundSize: '100% auto', 
           }}
        >
          
          <div className="">
            <Header />
            <AboutSection />
            <NavButtons />
            <RoundDescription />
            <Categories />
            <Syllabus />
            <Prizes />
            <Timeline />
            <Testimonials />
            <HomePageCarousel />
          </div>
          <Footer />
        </div>
      )}
    </div>
    
  );
}