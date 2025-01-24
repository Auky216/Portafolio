"use client";

import { useState } from "react";
import Header from "./components/home/header";
import { FaMedal } from "react-icons/fa";
import Window from "./components/window/windows";
import Navbar from "./components/home/navbar";

export default function Page() {
  const [selectedAplication, setSelectedAplication] = useState({
    app: "",
    isOpen: false,
  });

  const handleAplicationClick = (app: string) => {
    setSelectedAplication((prevState) => ({
      app,
      isOpen: prevState.app === app ? !prevState.isOpen : true,
    }));
  };

  const handleCloseWindow = () => {
    setSelectedAplication((prevState) => ({
      ...prevState,
      isOpen: false,
    }));
  };

  return (
    <div className="bg-cover bg-center bg-[url('https://applescoop.org/image/wallpapers/mac/macos-11-big-sur-stock-22-09-2024-1727045363-hd-wallpaper.jpg')] h-screen flex flex-col overflow-hidden">
      <Header />

      <div className="flex flex-1 items-center justify-center w-full p-4 overflow-hidden">
        <Window
          app={selectedAplication.app}
          isOpen={selectedAplication.isOpen}
          onClose={handleCloseWindow}
        />
      </div>

      <Navbar onAplicationClick={handleAplicationClick} />
    </div>
  );
}
