import heroImage from "./../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

type HomeProps = {
  setTarget: React.Dispatch<React.SetStateAction<number>>;
};

const Home = ({ setTarget }: HomeProps): JSX.Element => {
  return (
    <div
      id="home"
      className="my_container min-h-screen bg-gradient-to-b from-black via-black to-gray-800 sm:h-screen"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 pt-20 sm:flex-row">
        <div className="flex h-full flex-col justify-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            I'm a Full Stack Developer
          </h1>
          <p className="max-w-md py-4 text-gray-500">
            I am learning Web development and I think Its pretty interesting. I
            love to work on Front-End and my favorite technologies are React,
            Tailwind and Next JS. I just love <em>Coding</em>.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={400}
              offset={-40}
              className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-white"
              onClick={() => setTarget(3)}
            >
              Portfolio{" "}
              <span className="transition-transform group-hover:rotate-90">
                <MdOutlineKeyboardArrowRight size={24} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            className="m-auto w-2/3 overflow-hidden rounded-xl sm:w-[350px]"
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
