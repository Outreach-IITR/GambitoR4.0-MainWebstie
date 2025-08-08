import Image from "next/image";



export default function AboutSection(){
    return(
        <section id="ABOUT" className="flex flex-col lg:justify-between lg:text-black text-white lg:flex-row relative z-[1] max-w-[1380px] mx-auto">
            <div className="lg:w-[50%] order-2 lg:order-1 flex flex-col justify-center lg:mt-0 mt-[12rem] gap-4">
                <h1 className="text-[36px] leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">ABOUT GAMBITOR</h1>
                <p className="text-[20px] font-overpass leading-[25px]  font-medium text-justify mb-8 text-[#FAF4BE]">
                GambitoR is a prestigious national-level exam tailored specifically for students from classes 9th to 12th who strive for excellence and have a passion for tackling and conquering challenges. This unique competition evaluates students' logical and analytical skills through questions designed by our student community, all within the exciting and adventurous theme of Harry Potter. Organized by the Outreach Cell of IIT Roorkee, this year marks the fourth edition of GambitoR, promising to bring out the best in each participant. Get ready to sail on this adventure and discover what you’re truly capable of!                </p>
                <a href="/signup">
                <button className="mt-4 transition ease-out duration-300 bg-[#C9A454] border-4 border-[#C37227] rounded-full xl:w-[261px] w-[20vw] text-[20px] leading-[25px] text-[#A50034] font-bold h-[60px] cursor-pointer hover:bg-[#C49B44] hover:border-[#BC6E26] hover:shadow-[-1px_1px_4px_5px_rgba(188,110,38,0.30)] active:bg-[#B28B38] active:shadow-[-1px_1px_4px_5px_rgba(188,110,38,0.30)] active:border-[#AA6322] font-dragon tracking-wider	">REGISTER NOW !</button>

                </a>
                
            </div>
            <div className=" pl-[10vw] flex relative order-1 flex-col items-center lg:it lg:w-[50%]  top-[2rem] justify-center">
                 
                    {/* <div className="relative -left-[10rem] top-2 ">

                        <h1 className="text-[1.5rem] text-blue-900 ">Registrations</h1>
                        <h1 className="text-[2rem]">12000+</h1>

                    </div> */}
                    <div className="">
                        <Image alt="" className="relative " loading="eager" width={500} height={330} src="/aboutimg.svg"></Image>
                    </div>
                    {/* <div className="relative -top-[5rem] ">
                        <h1 className="text-[1.5rem] text-blue-900 ">Cities</h1>
                        <h1 className="text-[2rem] ">900+</h1>
                    </div> */}
                
            </div>
            

        </section>
    )
}