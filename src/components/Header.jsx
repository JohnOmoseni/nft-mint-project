import { navLinks } from "@constants/navLinks";
import { connect, useSelector } from "react-redux";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Link } from "react-scroll";
import Button from "./Button";
import LinkRow from "./LinkRow";
import logo from "@assets/images/logo.png";

const Header = ({ setOpenMenu, connectWallet }) => {
	const { currentAcc, isConnected } = useSelector((state) => state.web3);

	return (
		<header className="max-sm:fixed  max-sm:top-2 max-sm:inset-x-2 absolute sm:w-full z-50 max-sm:rounded-md max-sm:shadow-sm max-sm:backdrop-blur-sm max-sm:bg-opacity-80 bg-black flex-row gap-8 !justify-between mx-auto pr-3 py-1 sm:py-0 sm:pr-6 sm:pl-4 !text-white shadow-sm transition-colors">
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
				<p className="text-sm md:text-lg font-familybold tracking-tight whitespace-nowrap uppercase dp-shad -ml-1 group-hover:text-light-green">
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
							<span className="text-tiny mt-[0.1em] md:mr-1">Connected: </span>
						}
						className="hidden md:block whitespace-normal leading-4 py-0.5 px-3 text-sm bg-transparent border border-solid border-br-green"
					/>
				</div>
			) : (
				<Button
					title="Connect Wallet"
					onClick={connectWallet}
					className="hidden md:block font-bold whitespace-normal leading-4 py-2 px-3.5 uppercase bg-transparent border border-solid border-light-green"
				/>
			)}

			<div className="block md:hidden" onClick={() => setOpenMenu(true)}>
				<HiOutlineMenuAlt4 size={20} color="#dddeee" />
			</div>
		</header>
	);
};

export default Header;
