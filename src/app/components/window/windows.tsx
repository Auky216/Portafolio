import React, { useState, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import Safari from '@/app/components/Safari/Safari';
import { FaTimes, FaWindowMaximize } from 'react-icons/fa';
import 'animate.css/animate.min.css';

type WindowProps = {
  app: string;
  isOpen: boolean;
  onClose: () => void;
};

const DraggableResizableWindow = ({ app, isOpen, onClose }: WindowProps) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate__fadeInUpBig');
  const [isClosing, setIsClosing] = useState(false);

  const width = window.innerWidth * 0.5;
  const height = window.innerHeight * 0.6;

  const x = (window.innerWidth - width) / 2;
  const y = (window.innerHeight - height) / 4;

  const handleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const handleClose = () => {
    setAnimationClass('animate__fadeOutUpBig'); // Cambia la animación a la de salida
    setIsClosing(true); // Marca que la ventana está cerrándose

    // Espera 1 segundo para que la animación termine antes de cerrar la ventana
    setTimeout(() => {
      onClose();
    }, 1000); // Duración de la animación (1 segundo)
  };

  const maxSize = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Resetea la animación cuando la ventana se vuelve a abrir
  useEffect(() => {
    if (isOpen) {
      setAnimationClass('animate__fadeInUpBig');
      setIsClosing(false); // Reseteamos el estado de cierre
    }
  }, [isOpen]);

  // Cambia el estilo del contenedor para ocultar el scroll durante la animación de apertura y cierre
  useEffect(() => {
    if (isOpen || isClosing) {
      document.body.style.overflow = 'hidden'; // Oculta el scroll durante la animación de apertura y cierre
    } else {
      document.body.style.overflow = 'auto'; // Restaura el scroll después de la animación
    }

    // Limpia el estilo al desmontar el componente o después de la animación
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, isClosing]);

  return (
    <>
      {isOpen && (
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
        >
          <div
            className={`animate__animated ${animationClass}`}
            style={{
              width: '100%',
              height: '100%',
              background: 'lightgray',
              borderRadius: '8px',
              overflow: 'auto', // Este estilo controla el desbordamiento dentro de la ventana
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
                  onClick={handleClose}
                  className="w-6 h-6 rounded-full bg-red-500 hover:bg-red-700 flex items-center justify-center"
                >
                  <FaTimes className="text-white" />
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
      )}
    </>
  );
};

export default DraggableResizableWindow;
