import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";

const LinkRow = ({ href, name, onClick }) => {
  const link = `relative w-max flex-row py-1 px-2.5 uppercase !text-[0.74rem] !text-[#333] bg-cyan-300 rounded-md shadow-sm transition-sm hover:scale-105 hover:text-shadow-100`;
  const activeLink = `${link} bg-[#333] !text-white rounded-md shadow-variant`;

  const location = useLocation();
  const { pathname } = location;

  return name === "Docs" ? (
    <a
      href={href}
      className={`${link}`}
      aria-label="Docs"
      target="_blank"
      rel="noreferrer"
    >
      Docs
    </a>
  ) : (
    <Link
      to={href}
      // className={({ isActive }) => (isActive ? activeLink : link)}
      onClick={onClick}
      className={`${link}`}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={href.includes("roadmap") ? 200 : -2}
      duration={400}
    >
      {name}
    </Link>
  );
};

export default LinkRow;
