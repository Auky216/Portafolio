"use client";

import { useState } from "react";

import Header from "./components/home/header";
import { FaMedal } from "react-icons/fa";
import Window from "./components/window/windows";
import Navbar from "./components/home/navbar";

export default function Page() {
  // Estado para almacenar el nombre del icono seleccionado
  const [selectedAplication, setSelectedAplication] = useState<string>("");

  // Función para actualizar el estado con el nombre del icono
  const handleAplicationClick = (iconName: string) => {
    setSelectedAplication(iconName);
  };

  return (
    <div className="bg-cover bg-center bg-[url('https://applescoop.org/image/wallpapers/mac/macos-11-big-sur-stock-22-09-2024-1727045363-hd-wallpaper.jpg')] min-h-screen flex flex-col overflow-hidden">
      {/* Componente Header */}
      <Header />
      
      {/* Contenido de la página */}
      <div className="flex-1">
        <p>hola {selectedAplication}</p>
        <Window />
      </div>

      {/* Navbar en la parte inferior, pasando la función correcta */}
      <Navbar onAplicationClick={handleAplicationClick} />
    </div>
  );
}
