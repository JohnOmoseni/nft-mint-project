import { navLinks } from "@constants/navLinks";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
import Button from "./Button";
import LinkRow from "./LinkRow";
import logo from "@assets/images/logo.png";

const Header = ({ setOpenMenu }) => {
  return (
    <header className="max-sm:fixed top-2 left-2 right-2 z-50 max-sm:rounded-md max-sm:shadow-sm max-sm:backdrop-blur-sm max-sm:bg-opacity-80 bg-[#242424] flex-row gap-8 !justify-between mx-auto py-4 px-6 max-sm:p-3  ">
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        duration={400}
        className="group !flex flex-row items-center !justify-evenly  transition-sm hover:scale-[0.9]"
      >
        <img
          src={logo}
          alt="infinity"
          className="relative -top-0.5 !w-[40px] group-hover:drop-shadow-md"
        />
        <p className="text-sm md:text-base self-end font-familybold pb-1 tracking-tight whitespace-nowrap uppercase text-shadow-100">
          INFINITY WEALTH
        </p>
      </Link>

      <div className="hidden sm:flex-row gap-4">
        {navLinks?.map((link, idx) => (
          <LinkRow key={idx} {...link} />
        ))}
      </div>

      <div className="block sm:hidden" onClick={() => setOpenMenu(true)}>
        <HiOutlineMenuAlt4 size={20} color="#111" />
      </div>

      <Button
        title="Connect Wallet"
        className="hidden sm:block text-white bg-black border border-solid border-[#e6e4e4be]"
      />
    </header>
  );
};

export default Header;
