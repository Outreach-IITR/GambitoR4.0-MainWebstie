import Image from "next/image";



export default function Timeline(){
    return(
        <div className="flex items-center justify-center flex-col mt-[5vw] relative z-1 space-y-12" id="DATE/VENUE">
<h1 className="text-[36px] leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent">TIMELINE</h1>
           <Image src="map1.svg"   width="997" height="1036" alt=""></Image>
         
        </div>
            

        
    )
}