
<style>
  @import url('https://fonts.cdnfonts.com/css/cooper-black');
</style> 

interface ButtongpProps {
  text: string;
}


export default function Buttongp({text}: ButtongpProps) {
  return (
    <a href={`#${text}`} className="w-full justify-items-center">
<div className="w-1/2">
  <button className="pointer-events-none transition ease-out duration-300 font-overpass font-medium border-2 xl:w-[210px] w-full text-[20px] border-[#FFE016] rounded-full text-[#FAF4BE] h-[60px] hover:bg-[#A96104] active:bg-[#A96104] p-2" 
    >
      {text.replace(/'/g, '&apos;')}
    </button>
</div>
    
    </a>
  );
}
