import Header from "./components/home/header";
import { FaMedal } from "react-icons/fa";
import Window from "./components/window/windows";
import Navbar from "./components/home/navbar";

export default function Page() {
  return (
    <div className="bg-cover bg-center bg-[url('https://applescoop.org/image/wallpapers/mac/macos-11-big-sur-stock-22-09-2024-1727045363-hd-wallpaper.jpg')] min-h-screen flex flex-col overflow-hidden">
      {/* Componente Header */}
      <Header />
      
      {/* Contenido de la página */}
      <div className="flex-1">
        hola
        <Window />
      </div>

      {/* Navbar en la parte inferior */}
      <Navbar />
    </div>
  );
}
