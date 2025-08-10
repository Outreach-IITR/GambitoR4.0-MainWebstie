"use client"
import Image from 'next/image'
import { useState } from "react";
import './Res.css'
import Logo from './assets/Navbar/logo.svg'
import Cross from './assets/Navbar/cross.svg'
import Box from './assets/Navbar/box.svg'
import Toggler from './assets/Navbar/toggler.svg'
import Link from 'next/link';
import { useDispatch,useSelector} from "react-redux";
import axios from "../https/api"
import {useRouter} from 'next/navigation'
import { deleteUserFailure,deleteUserStart,deleteUserSuccess } from "@/redux/user/userSlice";
import Animations from './assets/AnimatedButton';

interface UserState {
  currentUser: any;
  loading: boolean;
  error: boolean | string;
}
interface RootState {
  user: UserState
}

interface abc{
    text:string,
    ico: string,
    path: string,
    onClick?: (e: React.MouseEvent<HTMLLIElement>) => Promise<void> | void;
}

function Buttons({text, ico , path,onClick }:abc){
    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        if (onClick) {
            onClick(e); // Call the onClick function if provided
        }
    };
    return(
        <li key={text} className="w-[231px] h-[56px] py-[16px] pl-[28px] rounded-[12px] hover:bg-white text-white hover:text-[#222934]" onClick={handleClick}>
                {/* <i className={`${ico}`}></i> */}
                <Link href={path} className= "py-4 pl-3 cursor-pointer">{text}</Link>
        </li>
    )
        
}



export default function Navbar() {
    const [isTogglerVisible, setIsTogglerVisible] = useState(Toggler);
    const [modal, setModal] = useState(false);
    const user = useSelector(((state:RootState) => state.user.currentUser))
    console.log(user)
    const handleLogoutClick = async (e: any) => {
        try{
            dispatch(deleteUserStart())
            const response = axios.get('/logout');
            console.log(response)
            console.log('User Logged Out Successfully');
            dispatch(deleteUserSuccess());
            console.log('User Logged Out Successfully');
            router.push('/');
        }catch(error)
        {
            deleteUserFailure(error);
        }
      };

    function childClick(event:any) {
        event.stopPropagation();
        
    }

    function toggleIcons(event:any) {
        event.preventDefault();
        setIsTogglerVisible((prevSrc:any) => (prevSrc === Toggler ? Cross : Toggler));
    }
    const toggleModal = ()=>{
        setModal(!modal);
    }
    let backgroundImageStyle = {
        backgroundImage: `url("popbg.svg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        
        
      };

      const pages = [{text:"Dashboard", ico:'bx bxs-home-alt-2', path:"/dashboard"}, 
        {text:"Logout", ico:"bx bxs-bell", path:"", onClick: handleLogoutClick}, 
   
     ]
     const { currentUser } = useSelector((state: any) => state.user);
    console.log(currentUser)
    const dispatch = useDispatch()
    const router = useRouter()
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
    const handleClick = async (e: any) => {
        try{
            dispatch(deleteUserStart())
            const response = axios.get('/logout');
            console.log('User Logged Out Successfully');
            dispatch(deleteUserSuccess());
            console.log('User Logged Out Successfully');
            router.push('/');
        }catch(error)
        {
            deleteUserFailure(error);
        }
      };
    

    return (
            <div>
            <div className="bg-transparent backdrop-blur-md h-[10vh] w-[100%] flex justify-between z-20 items-center fixed top-0 p-2">
            <div>
                <a href="/"><Image src={Logo} alt="Logo" className="h-12" /></a>
            </div>
            <div className="flex space-x-6 mr-2">
            {currentUser?(<a href="/dashboard">
                <Animations>
                    <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-slate-200 rounded-xl bg-white w-[120px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Dashboard</button>
                </Animations>
                    
                </a>):(null)}
                <a href="/results">
                <Animations>
                    <button className="transition ease-out duration-300 text-[16px] font-overpass leading-[25px] font-semibold rounded-2xl bg-[#C49B44] w-[70px]  text-[#3D1800]  p-2 h-[45px] hover:bg-[#C49B44] hover:shadow-[-1px_0px_4px_0px_rgba(255,180,0,0.89)] active:bg-[#BA913B] active:shadow-[-1px_0px_4px_0px_rgba(224,158,0,0.89)] cursor-pointer">Results</button>
                </Animations>
                
                </a>
                {/* <a href="/signup">
                <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-blue-500 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Sign up</button>
                </a> */}
                {!currentUser?(<a href="/login">
                <Animations>
                    <button className="transition ease-out duration-300 p-2 text-[16px] font-overpass leading-[25px] font-semibold rounded-2xl bg-[#C49B44] w-[70px]  text-[#3D1800]  h-[45px] hover:bg-[#C49B44] hover:shadow-[-1px_0px_4px_0px_rgba(255,180,0,0.89)] active:bg-[#BA913B] active:shadow-[-1px_0px_4px_0px_rgba(224,158,0,0.89)] cursor-pointer">Log in</button>
                </Animations>
                
                </a>):(<a href="#">
                    <Animations>
                        <button className="transition ease-out duration-300 p-2 text-[16px] font-overpass leading-[25px] font-semibold rounded-2xl bg-[#C49B44] w-[70px]  text-[#3D1800]  h-[45px] hover:bg-[#C49B44] hover:shadow-[-1px_0px_4px_0px_rgba(255,180,0,0.89)] active:bg-[#BA913B] active:shadow-[-1px_0px_4px_0px_rgba(224,158,0,0.89)] cursor-pointer"  onClick={() => setShowLogoutConfirm(true)}>Logout</button>
                    </Animations>
                
                {showLogoutConfirm && (
                            <div className="fixed inset-x-0 top-0 mt-16 bg-black bg-opacity-50 flex justify-center items-start ">
                                <div className="bg-gray p-6 rounded-lg">
                                    <p className="mb-4">Are you sure you want to log out?</p>
                                    <div className="flex justify-end space-x-4">
                                        <button
                                            className="bg-gray-300 text-black px-4 py-2 rounded-lg"
                                            onClick={() => setShowLogoutConfirm(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                            onClick={handleClick}
                                        >
                                            Logout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                </a>)}

           </div>
            </div>
            {modal &&  
            <div className='fixed z-50 top-0 w-[100%] h-[100vh] bg-transparent backdrop-blur-sm  flex justify-center items-center flex-col' onClick={toggleModal}>
                <div className="max-w-[360px] h-[370px] p-[2rem] flex flex-col justify-center items-center space-y-5" style={backgroundImageStyle} onClick={childClick}>
                    <h1 style={{fontFamily:'Cooper Black'}} className='text-[32px] leading-[37px] text-[#4C2D04] font-normal'>Results are Out !!</h1>
                    <p className='text-center font-overpass font-normal leading-[25.32px] text-[20px]'></p>
                    <a href="/results">
                    <button className="w-[144px] h-[36px] rounded-[12px] bg-[#4C2D04] text-[20px] leading-[23px] text-[#FEFEFE] text-center " style={{fontFamily:'Cooper Black'}}>Results</button>
                    </a>
                    <p className='font-overpass font-normal text-lg leading-[28px] text-white text-center'><span className='text-[#4C2D04]'></span><a href="/login" className='cursor-pointer'> Click here to Login</a> </p>
                </div>
                <Image src="/chest.svg" alt="" height={250} width={347} onClick={childClick}></Image>
            </div>
            }
            {isTogglerVisible==Cross && user &&
                <div className="lg:hidden fixed top-0 right-0 w-[250px] h-[213px] rounded-bl-[8px] border-[1px] z-[20] border-[#222934] bg-[#222934]">
                    <div className="w-full h-[10vh] bg-white rounded-br-[8px] mb-[10px] rounded-bl-[8px] relative flex justify-end px-5 items-center">
                    <Image  src={Box} alt="Box" className="mr-1 h-16 w-16  " onClick={toggleModal} />    
                    <Image src={isTogglerVisible} alt="Toggle Icon" onClick={toggleIcons} className="relative w-8 z-50" />
                      <div>
                            <h1 className="font-medium leading-normal text-[14px]">{user.name}</h1>
                            <p className="font-normal text-[12px] opacity-60">{user.category}</p>
                    </div>
                    </div>
                        <ul onClick={()=>(setIsTogglerVisible(Toggler))} className="mx-[10px]">
                            {pages.map(({text, ico, path,onClick})=>(
                                <Buttons key={text} text={text} ico={ico} path={path} onClick={onClick}/>
                            ))}
                        </ul>
                    
            </div>
            }
            </div>
            

        
    );
}
