import Image from "next/image";

import firstPrize from "../../../public/firstPrize.svg";
import secondPrize from "../../../public/secondPrize.svg";
import thirdPrize from "../../../public/thirdPrize.svg";


function Prizes(){

    return (
        <section id='PRIZES' className=" relative z-[2] flex flex-col items-center justify-center py-[5vw] space-y-12">
<h1 className="text-[36px] leading-[45px] my-2 font-normal font-dragon text-2xl bg-gradient-to-b from-[#5A3E17] via-[#FFF5B6] to-[#D4AF37] bg-clip-text text-transparent leading-60px">PRIZES</h1>
            <div className="flex space-x-14 justify-items-center">
                 <div className="mt-20">
                    <a  target="_blank" rel="noreferrer" className="flex flex-col items-center">
                        <Image alt="img" src={secondPrize} className="w-[18vw] "/>
                    </a>
            </div>
            <div className="flex flex-col items-center">
                    <a  target="_blank" rel="noreferrer" className="flex flex-col items-center">
                        <Image alt="img" src={firstPrize} className="w-[20vw] "/>
                    </a>
                </div>  

            <div className="mt-20">
                    <a target="_blank" rel="noreferrer" className="flex flex-col items-center">
                     <Image alt="img" src={thirdPrize} className="w-[15vw]" />
                    </a>
            </div>
                
            </div>
  
        </section>
    );
}


export default Prizes ;