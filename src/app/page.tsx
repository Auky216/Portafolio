import Image from "next/image";
import Profile from "./components/home/profile";
import Language from "./components/home/language";
import Experience from "./components/home/experience";
import Proyects from "./components/home/proyects";
import Header from "./components/home/header";

import { FaMedal } from "react-icons/fa";

export default function Home() {
  return (  
    <div>
      <Header />
      
    <div className="bg-[url('https://images4.alphacoders.com/138/thumb-1920-1383046.jpg')]
     bg-cover bg-center h-screen w-screen flex justify-center items-center ">
      
      <div className="bg-black/75 h-full w-1/2 p-5 flex flex-row" >

        <div className="w-3/4 flex flex-col gap-4 pr-5">
          <div className="flex">
            <Profile />
            <div className="p-2">
              <h1 className="text-white text-lm">Adrian Antonio Auqui Perez</h1>
              <p className="text-white text-xs">🇵🇪 Perú, Lima</p>
              <p className="text-white text-xs pt-5">This is a small description about me :D</p>
              </div>
          </div>

          <Language />
          <Experience />
          <Proyects />
          
        </div>

        <div className="w-1/4 p-2 border border-white">
        <div className="flex items-center gap-2">
            <h1 className="text-white">Level</h1>
            <FaMedal />

          </div>
        </div>
          
      </div>
    </div>
    <div className="h-16">
<h1>final           </h1>
    </div>
    </div>
  );
}
