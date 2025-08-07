"use client";


interface content{
    text: string;
}


function NavButton({text}:content){
    return (
       
        
           <button id={`b${text}`} className="transition ease-out duration-300 font-overpass leading-[25px] font-medium border-2 xl:w-[210px] w-[20vw] text-[20px] border-[#FFE016] rounded-full text-[#FAF4BE] h-[60px] hover:bg-[#A96104] active:bg-[#A96104]">{text}</button>
       
    );
}

export default function NavButtons() {
    

    const buttons = ['ROUNDS','CATEGORIES','PRIZES','SYLLABUS','DATE/VENUE','TESTIMONIAL']
    return (
        <div className="pb-[4rem] pt-[15rem] z-[1] relative hidden lg:block max-w-[1380px] mx-auto" >
            <ul className="flex flex-row justify-between "
            onClick ={(event)=>{
                //scroll to section
                event.preventDefault();
                const target = event.target as HTMLAnchorElement;
                const id = target.getAttribute('href')?.replace('#','')
                const element = document.getElementById(String(id))
                element?.scrollIntoView({
                    behavior: 'smooth'
                })
            }}>
                {buttons.map((text)=>(
                    <a href={`#${text}`} className="" onClick={(event)=>{ console.log(event.target)}} key={text}><NavButton text={text}/></a>
                ))}
            </ul>
        </div>
    );
}