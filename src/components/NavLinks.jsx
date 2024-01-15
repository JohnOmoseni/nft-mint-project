import { motion } from "framer-motion";
import { Link } from "react-scroll";

const linksAni = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

function NavLinks({ name, href, onClick }) {
  return (
    <motion.span variants={linksAni} onClick={onClick}>
      {name === "Docs" ? (
        <a
          href={href}
          className="!text-white"
          aria-label="Docs"
          target="_blank"
          rel="noreferrer"
        >
          Docs
        </a>
      ) : (
        <Link
          variants={linksAni}
          onClick={onClick}
          to={`${href}`}
          activeClass="nil"
          spy={true}
          smooth={true}
          offset={-50}
          duration={400}
        >
          <span className="!text-white">{name}</span>
        </Link>
      )}
    </motion.span>
  );
}

export default NavLinks;
