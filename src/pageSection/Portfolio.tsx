import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

type PortfolioCardType = {
  id?: number;
  src: string;
  alt: string;
  demoLink: string;
  codeLink: string;
};

const Portfolio = () => {
  const portfolioCardData: PortfolioCardType[] = [
    {
      id: 1,
      src: arrayDestruct,
      alt: "array Destruct",
      demoLink: "/",
      codeLink: "/",
    },
    {
      id: 2,
      src: installNode,
      alt: "install Node",
      demoLink: "/",
      codeLink: "/",
    },
    {
      id: 3,
      src: navbar,
      alt: "navbar",
      demoLink: "/",
      codeLink: "/",
    },
    {
      id: 4,
      src: reactParallax,
      alt: "react Parallax",
      demoLink: "/",
      codeLink: "/",
    },
    {
      id: 5,
      src: reactSmooth,
      alt: "react Smooth",
      demoLink: "/",
      codeLink: "/",
    },
    {
      id: 6,
      src: reactWeather,
      alt: "react Weather",
      demoLink: "/",
      codeLink: "/",
    },
  ];
  return (
    <section
      id="portfolio"
      className="my_container flex min-h-screen flex-col justify-center gap-8 bg-gradient-to-b from-black to-gray-800 pb-20 pt-4 text-white md:h-screen md:py-0"
    >
      <div>
        <h2 className="mb-2 max-w-screen-md border-b-2 pb-1 pl-1 text-4xl font-semibold md:text-5xl">
          Portfolio
        </h2>
        <p>Check out some of my work right here</p>
      </div>

      <div className="grid gap-8 px-6 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
        {portfolioCardData.map((card) => (
          <PortfolioCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

function PortfolioCard({ src, alt, demoLink, codeLink }: PortfolioCardType) {
  return (
    <div className="rounded-lg shadow-md shadow-gray-600">
      <img
        src={src}
        alt={alt}
        className="rounded-md duration-200 hover:scale-105"
      />
      <div className="grid grid-cols-2 place-items-center">
        <a
          target="_blank"
          rel="noreferrer"
          href={demoLink}
          className="py-3 duration-200 hover:text-cyan-500"
        >
          Demo
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={codeLink}
          className=" py-3 duration-200 hover:text-cyan-500"
        >
          Code
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
