"use client";
import { useState } from "react";
import Image from "next/image";





const Categories = () => {
    const [cat, setCat] = useState("ARETEOX")
   // const buttoncss = "flex-1 p-16 transition-colors duration-300 border border-white cursor-pointer rounded-3xl hover:text-blue-900  hover:bg-yellow-100  hover:border-yellow-300";


    return (
        <div className="text-white relative z-10 flex flex-col py-[10vw] space-y-20 max-w-[1380px] mx-auto" id="CATEGORIES">
            <div className="mb-12 text-center space-y-12">
                <h1 className="text-[36px] leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">Categories</h1>
                <div className="relative grid xl:grid-cols-2 xl:grid-rows-2 gap-32 mx-[20rem]" 
                // onClick ={(event)=>{
                // //scroll to section
                // event.preventDefault();
                // const target = event.target as HTMLAnchorElement;
                // const id = target.getAttribute('href')?.replace('#','')
                // const element = document.getElementById(String(id))
                // element?.scrollIntoView({
                //     behavior: 'smooth'
                // })}}
                >
                    <div className="absolute justify-self-center top-1/4">
                    <Image src="/categoriesH.svg" alt="" loading="eager" width={250} height={250}></Image>
                    </div>
                    <div className="bg-[#701100] bg-no-repeat border-4 border-[#F3E193] p-16 rounded-3xl bg-center" style={{backgroundImage: "url('/IXsvg.svg')", backgroundSize: '50%'}}>
                        <h2 className="mb-4 text-3xl font-semibold">CLASS IX</h2>
                        <h3 className="text-4xl font-semibold">ARETEOX</h3>
                    </div>
                    
                                          
                    <div className="bg-[#3D8B57] bg-no-repeat bg-center border-4 border-[#F3E193] p-16 rounded-3xl" style={{backgroundImage: "url('/X.svg')", backgroundSize: '50%'}}>
                        <h2 className="mb-4 text-3xl font-semibold">CLASS X</h2>
                        <h3 className="text-4xl font-semibold">METIOX</h3>
                    </div>
                  
                                       
                    <div className="bg-[#FF7C04] bg-no-repeat bg-center border-4 border-[#F3E193] p-16 rounded-3xl" style={{backgroundImage: "url('/XI.svg')", backgroundSize: '50%'}} >
                        <h2 className="mb-4 text-3xl font-semibold">CLASS XI</h2>
                        <h3 className="text-4xl font-semibold">APOLLOX</h3>
                    </div>
                    
                       
                    <div className="bg-[#06345B] bg-no-repeat bg-center border-4 border-[#F3E193] p-16 rounded-3xl" style={{backgroundImage: "url('/XII.svg')", backgroundSize: '50%'}}>
                        <h2 className="mb-4 text-3xl font-semibold">CLASS XII</h2>
                        <h3 className="text-4xl font-semibold">ATHENOX</h3>
                    </div>
                    
                </div>

            </div>

            {/* <div className="flex flex-wrap justify-between relative">
                <div className="w-full text-left  lg:w-6/12 rounded-[100%] bg-[#FFF8DB] text-black flex flex-col justify-center p-[6em]" id="ARETEOX">
                    <h2 className="text-[36px] font-semibold leading-[45px]">ARETEOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, 
                        nec laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget 
                        fringilla tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam 
                        tellus. Integer placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci 
                        luctus et ultrices posuere cubilia curae; In id aliquet quam, vel aliquam tellus. Integer placerat purus in magna pharetra, vel ultricies risus fringilla.
                        Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In id aliquet quam, vel aliquam tellus. 
                        Integer placerat purus in magna pharetra, vel ultricies
                    </p>
                </div>
                <Image src={light} alt="" className="absolute ml-[27rem] mt-[14px] z-[-1]"/>
                <Image src={sub} alt="" className="mt-[120px] mr-[2rem]"/>
            </div>
            <div className="flex justify-end w-full text-left text-white bg-transparent rounded-lg" id="METIOX" >
                <div className="w-full lg:w-6/12">
                    <h2 className="text-[36px] font-semibold leading-[45px]">METIOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, nec 
                        laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget fringilla 
                        tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam tellus. Integer 
                        placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuere cubilia curae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuerecurae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                </div>
            </div>
            <div className="flex flex-wrap justify-between" id="APOLLOX">
                <div className="w-full text-left text-white bg-transparent rounded-lg lg:w-6/12">
                    <h2 className="text-[36px] font-semibold leading-[45px]">APOLLOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, nec 
                        laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget fringilla 
                        tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam tellus. 
                        Integer placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus 
                        et ultrices posuere cubilia curaevel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuere cubilia ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                </div>
            </div>
            <div className="flex justify-end w-full text-left text-white bg-transparent rounded-lg" id="ATHENOX">
                <div className="w-full lg:w-6/12">
                    <h2 className="text-[36px] font-semibold leading-[45px]">ATHENOX</h2>
                    <p className="text-[20px] font-overpass leading-[25px] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut blandit nibh, nec 
                        laoreet augue. Aliquam ultrices gravida cursus. Aenean id pretium neque, eget vulputate dolor. Integer dignissim nibh id erat lobortis, eget fringilla 
                        tortor posuere. Nulla tempus erat eros, a luctus neque lobortis sit amet. Mauris ornare tristique accumsan. In id aliquet quam, vel aliquam tellus. Integer 
                        placerat purus in magna pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuere cubilia curae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
                        posuerecurae;pharetra, vel ultricies risus fringilla. Nullam vitae ex nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; </p>
                </div>
            </div> */}


        </div>
    );
};

export default Categories;