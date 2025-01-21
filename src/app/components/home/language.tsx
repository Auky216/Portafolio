import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaJs } from "react-icons/fa";




export default function Language() {
    return (
        <div className="border border-white">
            <div className="border border-white p-2">
              <h1 className="text-white text-xs">Lenguajes de Programacion</h1>
            </div>
            <div className="boder border-white flex flex-row gap-4 p-2">
            <FaReact />
            <FaPython />
            <SiCplusplus />
            <FaHtml5 />
            <FaCss3Alt />
            <FaVuejs />
            <FaAws />
            <FaJs />



            </div>
          </div>
    );

}