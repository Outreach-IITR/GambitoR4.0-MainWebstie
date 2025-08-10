"use client";
import Image from 'next/image'
import Animations from './assets/AnimatedButton'
//import './Res.css'
//import Navbar from './NavBar1'
//import CatDiv from "./CatDiv";

export default function Categories() {
    return (
        <div className="text-white relative z-10 flex flex-col py-10 space-y-20 max-w-[1380px] mx-auto" id="CATEGORIES">
            <div className="mb-12 text-center space-y-12">
                <h1 className="text-[48px] sm:text-[48px] leading-[36px] sm:leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">
                    Categories
                </h1>

               
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-32 px-4 sm:px-12 md:px-24 lg:px-32">

                    
                  <div 
                   className="
                             absolute left-1/2 transform -translate-x-1/2 pointer-events-none z-10
                            top-[60%] sm:top-1/2 sm:-translate-y-1/2 ">
                         <Image
                            src="/categoriesH.svg"
                            alt="Badge"
                            loading="eager"
                            width={250}
                            height={250} />
                   </div>


                    <Animations
                    hoverEffect={{scale:1.025}}
                    tapEffect={{scale:1.025}}
                    >
                        <div className="bg-[#701100] bg-no-repeat bg-center border-4 border-[#F3E193] rounded-3xl"
                        style={{ backgroundImage: "url('/IXsvg.svg')", backgroundSize: '50%' }}>
                        <div className="px-6 py-8 sm:p-10 md:p-12 lg:p-16">
                            <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold">CLASS IX</h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">ARETEOX</h3>
                        </div>
                    </div>
                    </Animations>
                    

                  <Animations
                  hoverEffect={{scale:1.025}}
                    tapEffect={{scale:1.025}}>
                    <div className="bg-[#3D8B57] bg-no-repeat bg-center border-4 border-[#F3E193] rounded-3xl"
                        style={{ backgroundImage: "url('/X.svg')", backgroundSize: '50%' }}>
                        <div className="px-6 py-8 sm:p-10 md:p-12 lg:p-16">
                            <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold">CLASS X</h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">METIOX</h3>
                        </div>
                    </div>
                  </Animations>
                    

                   <Animations
                   hoverEffect={{scale:1.025}}
                    tapEffect={{scale:1.025}}>
                    <div className="bg-[#FF7C04] bg-no-repeat bg-center border-4 border-[#F3E193] rounded-3xl"
                        style={{ backgroundImage: "url('/XI.svg')", backgroundSize: '50%' }}>
                        <div className="px-6 py-8 sm:p-10 md:p-12 lg:p-16">
                            <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold">CLASS XI</h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">APOLLOX</h3>
                        </div>
                    </div>
                   </Animations>
                    

                    <Animations
                    hoverEffect={{scale:1.025
                        
                    }}
                    tapEffect={{scale:1.025}}>
                        <div className="bg-[#06345B] bg-no-repeat bg-center border-4 border-[#F3E193] rounded-3xl"
                        style={{ backgroundImage: "url('/XII.svg')", backgroundSize: '50%' }}>
                        <div className="px-6 py-8 sm:p-10 md:p-12 lg:p-16">
                            <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl font-semibold">CLASS XII</h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">ATHENOX</h3>
                        </div>
                    </div>
                    </Animations>
                    

                </div>
            </div>
        </div>
    );
}
