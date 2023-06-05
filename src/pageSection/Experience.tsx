import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import typescript from "../assets/typescript.png";
import github from "../assets/github.png";

type ExperienceCardType = {
  id?: number;
  src: string;
  alt: string;
  shadowColor: string;
};

const Experience = () => {
  const experienceCardData: ExperienceCardType[] = [
    {
      id: 1,
      src: html,
      alt: "html",
      shadowColor: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      alt: "css",
      shadowColor: "shadow-sky-500",
    },
    {
      id: 3,
      src: javascript,
      alt: "javascript",
      shadowColor: "shadow-yellow-400",
    },
    {
      id: 4,
      src: node,
      alt: "node js",
      shadowColor: "shadow-lime-400",
    },
    {
      id: 5,
      src: react,
      alt: "react js",
      shadowColor: "shadow-cyan-400",
    },
    {
      id: 6,
      src: redux,
      alt: "redux",
      shadowColor: "shadow-purple-700",
    },
    {
      id: 7,
      src: tailwind,
      alt: "tailwind",
      shadowColor: "shadow-cyan-600",
    },
    {
      id: 8,
      src: nextjs,
      alt: "next js",
      shadowColor: "shadow-white",
    },
    {
      id: 9,
      src: typescript,
      alt: "typescript",
      shadowColor: "shadow-[#3178c6]",
    },
    {
      id: 11,
      src: github,
      alt: "github",
      shadowColor: "shadow-zinc-100",
    },
  ];
  return (
    <section
      id="experience"
      className="my_container flex min-h-screen flex-col justify-center gap-8 bg-gradient-to-b from-gray-800 to-black pb-20 pt-4 text-white md:h-screen md:py-0"
    >
      <div>
        <h2 className="mb-2 max-w-screen-md border-b-2 pb-1 pl-1 text-4xl font-semibold md:text-5xl">
          Experience
        </h2>
        <p>These are the technologies I've worked with</p>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-8 px-12 sm:grid-cols-3 sm:px-0 md:grid-cols-4 lg:grid-cols-5">
        {experienceCardData.map((card) => (
          <ExperienceCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

function ExperienceCard({ src, alt, shadowColor }: ExperienceCardType) {
  return (
    <div className={`rounded-lg px-8 py-4 shadow-md ${shadowColor}`}>
      <img
        src={src}
        alt={alt}
        className="rounded-md duration-200 hover:scale-105"
      />
      <p className="pt-3 text-center text-xs font-semibold">
        {alt.toUpperCase()}
      </p>
    </div>
  );
}

export default Experience;
