import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-scroll";

type LinkType = {
  id: number;
  text: string;
};

type NavBarProps = {
  target: number;
};

const NavBar = ({ target }: NavBarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);

  useEffect(() => {
    setActive(target);
  }, [target]);

  const links: LinkType[] = [
    {
      id: 1,
      text: "home",
    },
    {
      id: 2,
      text: "about",
    },
    {
      id: 3,
      text: "portfolio",
    },
    {
      id: 4,
      text: "experience",
    },
    {
      id: 5,
      text: "contact",
    },
  ];
  return (
    <div className="nav_container fixed top-0 z-50 flex w-full items-center justify-between bg-black py-3 text-white sm:py-4">
      <div>
        <Link
          smooth
          duration={500}
          to="home"
          className="relative z-10 cursor-pointer font-signature text-4xl sm:text-5xl"
          onClick={() => setActive(1)}
        >
          Jeet
        </Link>
      </div>

      <nav>
        <ul className="hidden space-x-3 sm:flex">
          {links.map((link) => (
            <li
              key={link.id}
              className="transition-transform duration-200 hover:scale-105"
            >
              <Link
                smooth
                duration={400}
                to={link.text}
                offset={-40}
                className={`cursor-pointer text-lg capitalize text-gray-500 hover:text-gray-300 ${
                  active === link.id && "active"
                }`}
                onClick={() => setActive(link.id)}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="relative z-10 text-gray-500 sm:hidden"
          aria-label="Toggle Navbar"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </button>

        {isOpen && (
          <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-y-3 bg-gradient-to-b from-black to-gray-800 text-gray-500 sm:hidden">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  smooth
                  duration={500}
                  to={link.text}
                  activeClass="border-b-2 border-gray-500"
                  className={`cursor-pointer text-2xl capitalize ${
                    active === link.id && "active"
                  }`}
                  onClick={() => {
                    setActive(link.id);
                    setIsOpen(false);
                  }}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
