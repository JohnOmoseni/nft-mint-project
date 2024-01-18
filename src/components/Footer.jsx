import { footerLinks } from "@constants/navLinks";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import img from "@assets/images/logo.png";

const FooterLink = ({ name, href, icon: Icon }) => (
  <Link to={href} className="!flex items-center gap-1">
    <Icon fill="white" className="max-sm:text-xl text-lg icon mt-0.5" />
    <span className="!hidden sm:!block !text-white font-familymedium leading-0">
      {name}
    </span>
  </Link>
);

function Footer() {
  return (
    <div className="relative md:fixed bottom-0 left-0 z-[999] w-full shadow-sm bg-[#242424] flex-row gap-8 !justify-between !text-neutral-300 px-5 max-sm:p-3">
      <p className="font-familymedium max-sm:text-sm  whitespace-nowrap mt-1 leading-0">
        Cheetahlabs Copyright. 2023.
      </p>
      <LinkScroll
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={100}
        className="!hidden sm:!block w-[60px]"
      >
        <img src={img} alt="" className="h-auto" />
      </LinkScroll>

      <div className="flex-row gap-4 sm:gap-4 max-sm:justify-end">
        {footerLinks?.map((link, idx) => {
          return <FooterLink key={idx} {...link} />;
        })}
      </div>
    </div>
  );
}
export default Footer;
