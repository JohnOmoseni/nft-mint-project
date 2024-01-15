import { footerLinks } from "@constants/navLinks";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";

const FooterLink = ({ name, href, icon: Icon }) => (
  <Link to={href} className="!flex items-center gap-1">
    <Icon fill="white" className="max-sm:text-xl text-lg icon" />
    <span className="!hidden sm:!block text-shadow-200 text-sm">{name}</span>
  </Link>
);

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full shadow-sm bg-[#242424] flex-row gap-8 !justify-between py-4 px-6 max-sm:p-3">
      <div className="flex-row gap-2">
        <p className="rounded-full w-[20px] h-[20px] icon border border-solid border-neutral-800 leading-5 align-middle">
          C
        </p>
        <p className="font-familymedium whitespace-nowrap text-xs">
          Cheetahlabs Copyright. 2023.
        </p>
      </div>
      <LinkScroll
        to="home"
        spy={true}
        smooth={true}
        offset={-30}
        duration={400}
        className="!hidden sm:!block w-[100px]"
      >
        <img src="" alt="injdragon" className="h-auto" />
      </LinkScroll>

      <div className="flex-row gap-6 sm:gap-4 max-sm:flex-wrap max-sm:justify-end">
        {footerLinks?.map((link, idx) => {
          return <FooterLink key={idx} {...link} />;
        })}
      </div>
    </div>
  );
}
export default Footer;
