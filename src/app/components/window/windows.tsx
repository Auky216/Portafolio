"use client";

import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import Safari from "../Safari/Safari";

type DraggableWindowProps = {
  app: string;
  isOpen: boolean;
};

// Defining the types for the position state
type Position = {
  x: number;
  y: number;
  offsetX?: number; // Optional properties for the offset
  offsetY?: number;
};

export default function DraggableWindow({ app, isOpen }: DraggableWindowProps) {
  // Default size of the window
  const windowWidth = 800;
  const windowHeight = 600;

  // Initialize the position and size state
  const [position, setPosition] = useState<Position>({
    x: -370, // Start at the top-left corner (0, 0)
    y: -370,
  });

  const [isDragging, setIsDragging] = useState(false); // State to track if dragging is active
  const [isMinimized, setIsMinimized] = useState(false); // State to track if window is minimized
  const [isMaximized, setIsMaximized] = useState(false); // State to track if window is maximized
  const [size, setSize] = useState({
    width: windowWidth,
    height: windowHeight,
  }); // Default large size of the window

  // Handle the mouse down event to begin dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);

    setPosition((prevPosition) => ({
      ...prevPosition,
      offsetX: e.clientX - prevPosition.x,
      offsetY: e.clientY - prevPosition.y,
    }));
  };

  // Handle the mouse move event to update the position while dragging
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    setPosition((prevPosition) => ({
      ...prevPosition,
      x: e.clientX - (prevPosition.offsetX || 0),
      y: e.clientY - (prevPosition.offsetY || 0),
    }));
  };

  // Handle the mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Minimize the window
  const handleMinimize = () => {
    setIsMinimized(true);
  };

  // Maximize or restore the window size
  const handleMaximize = () => {
    if (isMaximized) {
      setSize({ width: windowWidth, height: windowHeight }); // Restore original size
    } else {
      setSize({ width: window.innerWidth, height: window.innerHeight }); // Maximize to full screen
    }
    setIsMaximized(!isMaximized);
  };

  // Close (delete) the window
  const handleClose = () => {
    alert("Window closed");
  };

  // Effect to center the window when it is opened
  useEffect(() => {
    if (isOpen && position.x === -370 && position.y === -370) {
      // Solo centra la ventana si está en su posición inicial
      const centerX = window.innerWidth / 2 - windowWidth / 2;
      const centerY = window.innerHeight / 2 - windowHeight / 2;
      setPosition({ x: centerX, y: centerY });
    }
  }, [isOpen]);
  

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Ensures the window stops dragging if the mouse leaves
      className="relative"
    >
      {!isMinimized && (
        <div
          className="absolute text-white rounded-lg shadow-xl cursor-grab active:cursor-grabbing"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: `${size.width}px`,
            height: `${size.height}px`,
          }}
        >
          {/* Window title bar */}
          <div
            onMouseDown={handleMouseDown}
            className="flex items-center justify-between p-1 bg-white cursor-grab w-full rounded-t-lg"
          >
            <div className="flex gap-1">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="text-xs rounded px-2 py-1"
              >
                <FaCircle className="text-red-500" />
              </button>

              {/* Minimize button */}
              <button
                onClick={handleMinimize}
                className="text-xs rounded px-2 py-1"
              >
                <FaCircle className="text-yellow-500" />
              </button>

              {/* Maximize button */}
              <button
                onClick={handleMaximize}
                className="text-xs rounded px-2 py-1"
              >
                <FaCircle className="text-green-500" />
              </button>
            </div>

            {/* Window title */}
            <p className="text-gray-500">{app}</p>

            {/* Espacio vacío para centrar */}
            <div className="w-12"></div>
          </div>

          {/* Window content */}
            {app === "Safari" && <Safari />}
          
        </div>
      )}
    </div>
  );
}
