import Image from 'next/image'
import harry from './assets/aboutimg.svg'

const OpenPage = () => {
  return (
    <div className=' h-screen w-full flex flex-col justify-center items-center'>
      <Image src={harry} alt="" className='h-[400px] mx-4' />
    </div>
  )
}

export default OpenPage
