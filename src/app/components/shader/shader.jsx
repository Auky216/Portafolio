// src/app/components/shader/Shader.jsx
"use client"; // Asegura que este archivo se ejecute solo en el cliente

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { WebGLRenderer } from 'three';

const Shader = () => {
  const mountRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new Glitch());

    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();
    };

    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, [isClient]);

  return <div ref={mountRef} className="absolute top-0 left-0 w-full h-full"></div>;
};

export default Shader;
