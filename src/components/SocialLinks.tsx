import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

type SocialLinksType = {
  id: number;
  name: string;
  url: string;
  icon: JSX.Element;
  download?: boolean;
};

const SocialLinks = (): JSX.Element => {
  const socialLinks: SocialLinksType[] = [
    {
      id: 1,
      name: "Github",
      url: "https://github.com/i-amWin",
      icon: <FaGithub size={27} />,
    },
    {
      id: 2,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/jeet-gangwar-399369246",
      icon: <FaLinkedin size={27} />,
    },
    {
      id: 3,
      name: "Mail",
      url: "mailto:jeetgangwar625@gmail.com",
      icon: <HiOutlineMail size={27} />,
    },
    {
      id: 4,
      name: "Resume",
      url: "/resume.pdf",
      icon: <BsFillPersonLinesFill size={27} />,
      download: true,
    },
  ];

  return (
    <section className="fixed left-0 top-[calc(50%-102px)] hidden lg:block">
      <ul>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              download={link.download}
              className={
                "flex -translate-x-[62%] items-center justify-between gap-6 bg-gray-700 bg-opacity-80 px-4 py-3 font-bold text-white backdrop-blur-lg duration-300 hover:translate-x-0" +
                " " +
                ((link.id === 1 ? "rounded-tr-[4px]" : "") ||
                  (link.id === socialLinks.length ? "rounded-br-[4px]" : ""))
              }
            >
              {link.name}
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SocialLinks;
