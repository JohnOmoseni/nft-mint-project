import { navLinks } from "@constants/navLinks";
import { useSelector } from "react-redux";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
import Button from "./Button";
import LinkRow from "./LinkRow";
import logo from "@assets/images/logo.png";

const Header = ({ setOpenMenu }) => {
	const { currentAcc, isConnected } = useSelector((state) => state.web3);

	return (
		<header className="max-sm:fixed top-2 left-2 right-2 z-50 max-sm:rounded-md max-sm:shadow-sm max-sm:backdrop-blur-sm max-sm:bg-opacity-80 bg-[#242424] flex-row gap-8 !justify-between mx-auto pr-3 py-1 sm:py-0 sm:pr-6 sm:pl-4 !text-white shadow-sm">
			<Link
				to="home"
				spy={true}
				smooth={true}
				offset={0}
				duration={400}
				className="group !flex flex-row items-center !justify-evenly transition-sm hover:scale-[0.9]"
			>
				<img
					src={logo}
					alt="infinity"
					className="relative !w-[50px] sm:!w-[60px] group-hover:drop-shadow-md"
				/>
				<p className="text-sm md:text-lg font-familybold tracking-tight whitespace-nowrap uppercase dp-shad -ml-1">
					INFINITY WEALTH
				</p>
			</Link>

			<div className="hidden md:flex-row gap-4">
				{navLinks?.map((link, idx) => (
					<LinkRow key={idx} {...link} />
				))}
			</div>

			{isConnected ? (
				<div>
					<Button
						title={`${currentAcc.slice(0, 4)}...${currentAcc.slice(-4)} `}
						icon={
							<span className="text-tiny !text-emerald-600 mt-[0.1em] md:mr-1">
								Connected:{" "}
							</span>
						}
						className="hidden md:block !whitespace-normal leading-4 !py-0.5 !px-3 text-neutral-300 text-sm bg-black bg-opacity-40 border border-solid border-[#e6e4e462]"
					/>
				</div>
			) : (
				<Button
					title="Connect Wallet"
					className="hidden md:block !whitespace-normal leading-4 text-neutral-300 text-[1rem] bg-black bg-opacity-40 border border-solid border-[#e6e4e462]"
				/>
			)}

			<div className="block md:hidden" onClick={() => setOpenMenu(true)}>
				<HiOutlineMenuAlt4 size={20} color="#dddeee" />
			</div>
		</header>
	);
};

export default Header;
