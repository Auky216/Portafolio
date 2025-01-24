import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Safari from '@/app/components/Safari/Safari';
import { FaCircle, FaWindowMinimize, FaWindowMaximize, FaTimes } from 'react-icons/fa';
import 'animate.css/animate.min.css'; // Agrega esta línea

type WindowProps = {
  app: string;
  isOpen: boolean;
};

const DraggableResizableWindow = ({ app, isOpen }: WindowProps) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const width = window.innerWidth * 0.5;  // 50% del ancho de la pantalla
  const height = window.innerHeight * 0.6;  // 60% de la altura de la pantalla

  // Calcula la posición centrada en la pantalla
  const x = (window.innerWidth - width) / 2;
  const y = (window.innerHeight - height) / 4;

  const handleMinimize = () => setIsMinimized(!isMinimized);

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    setIsMinimized(true); // Simula el cierre como minimizar
  };

  // Define las dimensiones de la ventana cuando está maximizada
  const maxSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return (
    <Rnd
      default={{
        x: x,
        y: y,
        width: width,
        height: height,
      }}
      minWidth={100}
      minHeight={100}
      bounds="parent"
      enableResizing={true}
      size={isMaximized ? maxSize : undefined} // Ajusta el tamaño si está maximizada
      style={{
        display: isMinimized ? 'none' : 'block',
      }}
      className="animate__animated animate__fadeIn" // Agrega la clase de animación
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'lightgray',
          borderRadius: '8px',
          overflow: 'auto',
        }}
      >
        {/* Barra de título */}
        <div className="flex items-center justify-between p-2 bg-gray-200 cursor-move">
          <div className="flex gap-2">
            <button
              onClick={handleMinimize}
              className="w-6 h-6 rounded-full bg-yellow-500 hover:bg-yellow-700 flex items-center justify-center"
            >
              <FaCircle className="text-white" />
            </button>
            <button
              onClick={handleMaximize}
              className="w-6 h-6 rounded-full bg-green-500 hover:bg-green-700 flex items-center justify-center"
            >
              <FaCircle className="text-white" />
            </button>
            <button
              onClick={handleClose}
              className="w-6 h-6 rounded-full bg-red-500 hover:bg-red-700 flex items-center justify-center"
            >
              <FaCircle className="text-white" />
            </button>
          </div>
          <p className="text-gray-500 mx-auto font-medium">Mi Ventana</p>
        </div>

        {/* Contenido de la ventana */}
        <div>
          {app === 'Safari' && <Safari />}
        </div>
      </div>
    </Rnd>
  );
};

export default DraggableResizableWindow;
