import Image from "next/image";
import Profile from "./components/home/profile";
import Language from "./components/home/language";


export default function Home() {
  return (
    <div className="bg-[url('https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/546560/ss_fcc7a64234b8b26cac3d69dfc4779dd438582f15.jpg')]
     bg-cover bg-center h-screen w-screen flex justify-center items-center ">
      <div className="bg-black/75 h-full w-1/2 p-5 flex flex-row" >

        <div className="w-3/4 flex flex-col gap-4">
          <div className="flex">
            <Profile />
            <div className="p-2">
              <h1 className="text-white text-lm">Adrian Antonio Auqui Perez</h1>
              <p className="text-white text-xs">🇵🇪 Perú, Lima</p>
              <p className="text-white text-xs pt-5">Este es una descripcion momentaria</p>
              </div>
          </div>

          <Language />
          
        </div>

        <div className="w-1/4">
          <h1 className="text-white">222a</h1>
        </div>

      </div>
    </div>
  );
}
