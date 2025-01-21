import { FaChalkboardTeacher } from "react-icons/fa";
import { LuUniversity } from "react-icons/lu";
import { GoOrganization } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";

export default function Experience() {
    return (
        <div className="border border-white">
            <div className="border border-white p-2">
                <h1 className="text-white text-xs">My Experience</h1>
            </div>
            <div className="border-b border-white flex flex-row gap-2 p-2">

                <LuUniversity />

                <h1 className="text-white text-xs">Join UTEC Collage    </h1>
                <h1 className="text-white text-xs ml-auto">September 2021 - At present</h1>

            </div>

            <div className="border-b border-white flex flex-row gap-2 p-2">

                <FaChalkboardTeacher />
                <h1 className="text-white text-xs">Python Mentor   </h1>
                <h1 className="text-white text-xs ml-auto">March 2022 - July 2022</h1>

            </div>

            <div className="border-b border-white flex flex-row gap-2 p-2">

            <GoOrganization />

                <h1 className="text-white text-xs">President Cachimbo Organization   </h1>
                <h1 className="text-white text-xs ml-auto">January 2024 - December 2024</h1>

            </div>

            <div className="border-b border-white flex flex-row gap-2 p-2">

            <FaLaptopCode />

                <h1 className="text-white text-xs">EnMancha Software Developer   </h1>
                <h1 className="text-white text-xs ml-auto">July 2024 - December 2024</h1>

            </div>

            


        </div>
    );
}