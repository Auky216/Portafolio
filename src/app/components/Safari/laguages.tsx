import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { JSX } from "react";

import { FaPython, FaCss3, FaHtml5, FaAws, FaReact, FaDocker, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiCplusplus, SiTailwindcss, SiFlask, SiServerless } from "react-icons/si";

const icons = [
  {
    icon: <FaPython className="text-black text-4xl" />,
  },
  {
    icon: <FaCss3 className="text-black  text-4xl" />,
  },
  {
    icon: <FaHtml5 className="text-black  text-4xl" />,
  },
  {
    icon: <FaAws className="text-black  text-4xl" />,
  },
  {
    icon: <FaReact className="text-black  text-4xl" />,
  },
  {
    icon: <FaDocker className="text-black  text-4xl" />,
  },
  {
    icon: <FaGitAlt className="text-black  text-4xl" />,
  },
  {
    icon: <FaJsSquare className="text-black  text-4xl" />,
  },
  {
    icon: <SiCplusplus className="text-black  text-4xl" />,
  },
  {
    icon: <SiTailwindcss className="text-black  text-4xl" />,
  },
  {
    icon: <SiFlask className="text-black  text-4xl" />,
  },
  {
    icon: <SiServerless className="text-black  text-4xl" />,
  },
];

const firstRow = icons.slice(0, icons.length / 2);
const secondRow = icons.slice(icons.length / 2);

const ReviewCard = ({
  icon,
}: {
  icon: JSX.Element; // JSX.Element es un tipo de TypeScript que representa cualquier elemento de React
}) => {
  return (
    <figure
      className={cn(
        "relative w-16 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-950/[.1] dark:bg-gray-50/[.10]">
        {icon}
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} icon={review.icon} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
