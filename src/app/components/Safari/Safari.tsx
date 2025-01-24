import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { MarqueeDemo } from "./laguages";

export default function Safari() {
  return (
    <div className="w-full min-h-screen bg-white p-6 flex justify-center">
      {/* Contenedor principal centrado */}
      <div className="max-w-screen-lg w-full">
        {/* Banner de imagen */}
        <img
          className="w-full h-48 object-cover overflow-hidden rounded-lg mb-6"
          src="https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Profile banner"
        />

        {/* Encabezado del perfil */}
        <div className="flex flex-col md:flex-row gap-4 items-center p-4 bg-gray-100 rounded-lg">
          <img
            src="https://avatars.githubusercontent.com/u/91244347?v=4"
            alt="Safari"
            className="h-36 w-36 rounded-full object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="text-black text-4xl font-bold">Hi, I'm Adrian Auqui!</h1>
            <TextAnimate
              className="text-black text-xl mt-2"
              animation="blurInUp"
              by="character"
            >
              Software Developer
            </TextAnimate>
          </div>
        </div>

        {/* Sección "Skills" 
        <div className="mt-10 text-center">
          <TypingAnimation className="text-black text-2xl mb-6">Skills</TypingAnimation>
          <MarqueeDemo />
        </div>

        */}

        {/* Sección "About" */}
        <div className="mt-10 text-center">
          <TypingAnimation className="text-black text-2xl mb-4">About</TypingAnimation>
          <TextAnimate
            className="text-black text-lg leading-relaxed mb-5"
            animation="blurInUp"
            by="character"
          >
            I am passionate about continuous learning and helping others succeed by sharing my
            knowledge and skills. I believe that growth comes from collaboration and always strive
            to contribute positively to every team I work with.
          </TextAnimate>

          <img
            src="https://i.pinimg.com/736x/35/71/b1/3571b15c9243c3d32ac7db9fff150641.jpg"
            alt="Safari"
            className="justify-center h-full w-full rounded-lg"
          />
        </div>

        
      </div>
    </div>
  );
}
