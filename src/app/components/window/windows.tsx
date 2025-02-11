import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import Safari from '@/app/components/Safari/Safari';
import AppStore from '../AppStore/AppStore';
import { FaTimes, FaWindowMaximize } from 'react-icons/fa';
import 'animate.css/animate.min.css';

type WindowProps = {
  app: string;
  isOpen: boolean;
  onClose: () => void;  // Aquí se pasa la prop onClose
};

const DraggableResizableWindow = ({ app, isOpen, onClose }: WindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const width = window.innerWidth * 0.5;
  const height = window.innerHeight * 0.6;

  const x = (window.innerWidth - width) / 2;
  const y = (window.innerHeight - height) / 4;

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    onClose();  // Llama a la función onClose recibida
  };

  const maxSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return (
    <>
      {isOpen && (  // Solo mostrar la ventana si isOpen es true
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
          size={isMaximized ? maxSize : undefined}
          className="animate__animated animate__fadeIn"
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
                  onClick={handleMaximize}
                  className="w-6 h-6 rounded-full bg-green-500 hover:bg-green-700 flex items-center justify-center"
                >
                  <FaWindowMaximize className="text-white" />
                </button>
                <button
                  onClick={handleClose}  // Llama a handleClose cuando se hace clic en el botón de cerrar
                  className="w-6 h-6 rounded-full bg-red-500 hover:bg-red-700 flex items-center justify-center"
                >
                  <FaTimes className="text-white" />
                </button>
              </div>
              <p className="text-gray-500 mx-auto font-medium">{app}</p>
            </div>

            {/* Contenido de la ventana */}
            <div>
              {app === 'Safari' && <Safari />}
              {app === 'App Store' && <AppStore />}
            </div>
          </div>
        </Rnd>
      )}
    </>
  );
};

export default DraggableResizableWindow;
