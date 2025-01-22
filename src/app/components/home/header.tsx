import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { FaEnvelopeOpen } from "react-icons/fa";
import { BsBadgeVrFill } from "react-icons/bs";
import { MdScreenshotMonitor } from "react-icons/md";


export default function Header() {

    return(
        <div className="bg-gradient-to-b from-[#151e2c] to-[#1e2530] h-14 ">
        <div className="flex flex-row gap-4 h-1/4 p-2">
          <p className="text-[#5d606e] text-[10px]">Steam</p>
          <p className="text-[#5d606e] text-[10px]">View</p>
          <p className="text-[#5d606e] text-[10px]">Friend</p>
          <p className="text-[#5d606e] text-[10px]">Games</p>
          <p className="text-[#5d606e] text-[10px]">Help</p>

          <div className="ml-auto flex flex-row gap-4 items-center p-3">
            <div className="bg-[#192b3a]">
            <AiFillNotification />

            </div>  
            <div className="bg-[#182b3c]">
            <FaEnvelopeOpen />
            </div>
            <div className="flex flex-row items-center bg-[#182b3c]">
                <img className="h-[20px] border-r-4 border-r-[#3e6983]" src="https://avatars.githubusercontent.com/u/91244347?v=4"/>
                <p className="text-[10px] px-2">Auky216</p>
            </div>
            <BsBadgeVrFill />
            <MdScreenshotMonitor />


          </div>
        </div>
        <div className="h-3/4 flex flex-row gap-4 items-center p-2">
        <FaArrowLeft />
        <FaArrowRight />
        <p className="text-white text-xl">STORE</p>
        <p className="text-white text-xl">LIBRARY</p>
        <p className="text-white text-xl">COMMUNITY</p>
        <p className="text-white text-xl">AUKY216</p>


        </div>
      </div>
    );
}