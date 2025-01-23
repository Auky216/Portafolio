"use client";

import { useState } from "react";
import Header from "./components/home/header";
import { FaMedal } from "react-icons/fa";
import Window from "./components/window/windows";
import Navbar from "./components/home/navbar";

export default function Page() {
  // Estado para la aplicación seleccionada y si está abierta
  const [selectedAplication, setSelectedAplication] = useState({
    app: "",
    isOpen: false,
  });

  // Función para manejar el clic en los íconos del Navbar
  const handleAplicationClick = (app: string) => {
    setSelectedAplication((prevState) => ({
      app,
      isOpen: prevState.app === app ? !prevState.isOpen : true,  // Cambia el estado de isOpen correctamente
    }));
  };

  return (
    <div className="bg-cover bg-center bg-[url('https://applescoop.org/image/wallpapers/mac/macos-11-big-sur-stock-22-09-2024-1727045363-hd-wallpaper.jpg')] min-h-screen flex flex-col overflow-hidden">
      {/* Componente Header */}
      <Header />

      <div className="flex flex-1 items-center justify-center w-full p-4">
      <Window app={selectedAplication.app} isOpen={selectedAplication.isOpen} />
      </div>

      
        
     
        

      {/* Navbar en la parte inferior, pasando la función correcta */}
      <Navbar onAplicationClick={handleAplicationClick} />
    </div>
  );
}
