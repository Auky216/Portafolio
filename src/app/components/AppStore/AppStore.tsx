import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaCrow } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import App from "./app-block";

const app = [
    {
        name: "Cachinbo",
        description: "Cachimbo is an educational platform that many college students can access to read, comment on, and share educational material",
        icon: "/cachimbo-icon.jpg",
        link: "https://cachimbo-auky216s-projects.vercel.app/",
        tecnologies: [<FaReact />, <RiTailwindCssFill />, <BiLogoTypescript />, <FaAws />, <SiNextdotjs />]
    },
    {
        name: "Red Black Tree Visualization",
        description: "This is a visualization of the Red Black Tree data structure, where you can see how the tree is built step by step",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/c8452e1d068bef3da7eadd87e1f04b52_ewAy5QGEqS.png",
        link: "https://github.com/Auky216/Red-Black-Tree-2024",
        tecnologies: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />, <SiCplusplus />, <FaCrow />]
    },
    {
        name: "Simulator Pascal Compiler",
        description: "This is a simulator of a Pascal compiler, where you can write code and see the tokens, the syntax tree, and the symbol table",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/d927955688ba18a5c9f5a3726ece3553_2SKJCaKpi2.png",
        link: "https://github.com/Auky216/Pascal-Compiler",
        tecnologies: [<FaReact />, <RiTailwindCssFill />, <BiLogoTypescript />, <SiNextdotjs />, <FaCrow />]
    },
    {
        name: "Data Structures and Algorithms",
        description: "Some data structures and algorithms implemented in C++",
        icon: "https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/b1f56992177818385421190fc9294f25_NldqyNDnIa.png",
        link: "https://github.com/Auky216/Algoritmos-las-Fijas-",
        tecnologies: [<SiCplusplus />]
    }
];

export default function AppStore() {
    return (
        <div className="w-full min-h-screen bg-white p-6">
            <div className="flex flex-wrap justify-start gap-6">
                {app.map((appItem, index) => (
                    <div key={index} className="flex flex-col items-stretch w-full sm:w-80 md:w-96 lg:w-1/4">
                        <App 
                            name={appItem.name}
                            description={appItem.description}
                            icon={appItem.icon}
                            link={appItem.link}
                            tecnologies={appItem.tecnologies}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
