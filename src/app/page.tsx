import Header from "./components/home/header";
import { FaMedal } from "react-icons/fa";

export default function Page() {
  return (
    <div className="bg-cover bg-center bg-[url('https://applescoop.org/image/wallpapers/mac/macos-11-big-sur-stock-22-09-2024-1727045363-hd-wallpaper.jpg')] h-screen w-screen overflow-hidden">

      <Header />
      <h1 className="text-white text-4xl flex justify-center items-center h-screen">
        hola
      </h1>
    </div>
  );
}
