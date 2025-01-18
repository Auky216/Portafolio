"use client";
import { FaRegWindowMinimize } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useGlitch } from 'react-powerglitch'

export default function Profile() {
    const glitch = useGlitch();
  return (
    <div className="w-36 p-2 border border-white">
      <div className="flex flex-between justify-between py-1">
        <img
          className="h-4"
          src="https://cdn2.steamgriddb.com/icon_thumb/a0a6d7cc839b1db0f0d06c7e0c74594f.png"
          alt="Steam icon"
        />
        <div className="flex items-center space-x-2">
          <FaRegWindowMinimize className="text-white  border p-1 border-white" />
          <IoMdClose className="text-white border p-1 border-white" />
        </div>
      </div>
      <img
        ref={glitch.ref}
        className=""
        src="https://avatars.githubusercontent.com/u/91244347?v=4"
        alt="GitHub avatar"
      />
    </div>
  );
}
