import Image from "next/image";
import {useDispatch, useSelector } from "react-redux";
import Animations from './assets/AnimatedButton'
import { useState } from "react";
import axios from "../https/api"
import {useRouter} from 'next/navigation'
import { deleteUserFailure,deleteUserStart,deleteUserSuccess } from "@/redux/user/userSlice";
import {motion} from 'motion/react'

interface UserState {
    currentUser: any;
    loading: boolean;
    error: boolean | string;
  }
  interface RootState {
    user: UserState
  }

export default function Header(){
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
    return(
        <div className="py-[2rem] pb-[4rem] relative z-1 max-w-[1380px] pt-[3rem] mx-auto flex justify-between items-center">
           <a href="/"><Image alt="" src="/logo.svg" width={261} height={196} className="w-[261px]"/></a>
           <div className="flex space-x-6">
            {currentUser?(<a href="/dashboard">
                    <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-slate-200 rounded-xl bg-white w-[120px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Dashboard</button>
                </a>):(null)}
                <a href="/results">
                <button className="transition ease-out duration-300 text-[20px] font-overpass leading-[25px] font-semibold rounded-2xl bg-[#C49B44] w-[100px]  text-[#3D1800]  h-[45px] hover:bg-[#C49B44] hover:shadow-[-1px_0px_4px_0px_rgba(255,180,0,0.89)] active:bg-[#BA913B] active:shadow-[-1px_0px_4px_0px_rgba(224,158,0,0.89)] cursor-pointer">Results</button>
                </a>
                {/* <a href="/signup">
                <button className="text-[20px] font-overpass leading-[25px] font-medium  border border-blue-500 rounded-xl bg-white w-[100px]  text-black  h-[45px] active:bg-slate-200 cursor-pointer">Sign up</button>
                </a> */}
                {!currentUser?(<a href="/login">
                <Animations>
                    <button className="transition ease-out duration-300 text-[20px] font-overpass leading-[25px] font-semibold rounded-2xl bg-[#C49B44] w-[100px]  text-[#3D1800]  h-[45px] hover:bg-[#C49B44] hover:shadow-[-1px_0px_4px_0px_rgba(255,180,0,0.89)] active:bg-[#BA913B] active:shadow-[-1px_0px_4px_0px_rgba(224,158,0,0.89)] cursor-pointer">Log in</button>
                </Animations>
                
                </a>):(<a href="#">
                    <Animations>
                        <button className="transition ease-out duration-300 text-[20px] font-overpass leading-[25px] font-semibold rounded-2xl bg-[#C49B44] w-[100px]  text-[#3D1800]  h-[45px] hover:bg-[#C49B44] hover:shadow-[-1px_0px_4px_0px_rgba(255,180,0,0.89)] active:bg-[#BA913B] active:shadow-[-1px_0px_4px_0px_rgba(224,158,0,0.89)] cursor-pointer"  onClick={() => setShowLogoutConfirm(true)}>Logout</button>
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
            

        
    )
}