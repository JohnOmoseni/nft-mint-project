import { footerLinks } from "@constants/navLinks";
import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import img from "@assets/images/logo.png";

const FooterLink = ({ name, href, icon: Icon }) => (
	<Link to={href} className="group !flex items-center gap-1">
		<Icon className="max-sm:text-xl text-lg icon group-hover:!text-emerald-400" />
		<span className="group-hover:!text-emerald-400 group-hover:!font-familymedium !hidden sm:!block !text-white !font-familylight leading-0 transition">
			{name}
		</span>
	</Link>
);

const year = new Date().getFullYear();

function Footer() {
	return (
		<div className="relative z-[999] w-full shadow-sm bg-black bg-opacity-95 flex-row gap-8 !justify-between px-5 max-sm:p-3">
			<p className="font-familylight max-sm:text-sm whitespace-nowrap leading-0">
				InfiniteSprouts. {year}.
			</p>
			<LinkScroll
				to="home"
				spy={true}
				smooth={true}
				offset={-80}
				duration={100}
				className="!hidden sm:!block w-[50px]"
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
