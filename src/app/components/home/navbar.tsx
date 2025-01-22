"use client";
type NavbarProps = {
    onAplicationClick : (app : string) => void;
};

export default function Navbar({onAplicationClick} : NavbarProps) {
    return (
      <div className="flex items-center justify-center w-full p-4">
        {/* Contenedor con fondo blanco que envuelve los iconos */}
        <div className="bg-white bg-opacity-50 p-2 rounded-3xl flex space-x-4 transition-transform duration-300 transform hover:scale-110">
          <img
            className="size-16 transition-transform transform hover:scale-125"
            src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/8204ffaf2c6f9f46a1a803a96c91e7d5_low_res_Safari.png"
            onClick={() => onAplicationClick("Safari")}
          />
          <img
            className="size-16 transition-transform transform hover:scale-125"
            src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c042465c64b6c0c06ef0525e5a7bcb12_low_res_App_Store.png"
            onClick={() => onAplicationClick("App Store")}
          />
          <img
            className="size-16 transition-transform transform hover:scale-125"
            src="http://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a2b41bcb7e94def55c6cfa9ecf586b13_fCGMiEOWax.png"
            onClick={() => onAplicationClick("LinkedIn")}
          />
          <img
            className="size-16 transition-transform transform hover:scale-125"
            src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ba3ad96efac721276cee376c99b9388f_low_res_Spotify_black.png"
            onClick={() => onAplicationClick("Spotify")}
          />
          <img
            className="size-16 transition-transform transform hover:scale-125"
            src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b0eaa96aed8d965169a2b0c23f5dad04_low_res_Github_Desktop.png"
            onClick={() => onAplicationClick("GitHub")}
          />
          <img
            className="size-16 transition-transform transform hover:scale-125"
            src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7abc86d5d547522303785e02f3a49f43_low_res_Folder_Peek.png"
            onClick={() => onAplicationClick("Folder")}
          />
        </div>
      </div>
    );
  }
  