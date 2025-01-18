import Image from "next/image";
import Profile from "./components/home/profile";



export default function Home() {
  return (
    <div className="bg-[url('https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/546560/ss_fcc7a64234b8b26cac3d69dfc4779dd438582f15.jpg')]
     bg-cover bg-center h-screen w-screen flex justify-center items-center ">
      <div className="bg-black/75 h-full w-1/2 p-5" >
        <Profile  / >
      </div>
    </div>
  );
}
