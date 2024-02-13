import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

import { navLinks } from "@constants/navLinks";
import NavLinks from "./NavLinks";
import Button from "./Button";

const animateMenu = {
	hidden: { opacity: 0, x: "100vw" },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.1,
			duration: 0.8,
			type: "spring",
			mass: 0.3,
			ease: "easeIn",
			when: "beforeChildren",
			delayChildren: 0.2,
			staggerChildren: 0.4,
		},
	},
	exit: {
		x: "100vw",
		opacity: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

function Menu({ setOpenMenu }) {
	return (
		<motion.div
			className="block lg:hidden bg-body z-[9999] w-full fixed inset-0 h-100dvh bg-opacity-30 backdrop-blur-sm"
			variants={animateMenu}
			initial="hidden"
			animate="visible"
			exit="exit"
			onClick={() => setOpenMenu(false)}
		>
			<div
				className="w-[80%] isolate h-full absolute top-0 right-0 bg-black flex text-white overflow-hidden bg-no-repeat bg-cover bg-center bg-blend-screen bg-fixed"
				onClick={(e) => e.stopPropagation()}
				style={{ backgroundImage: "url(/images/bg.png)" }}
			>
				<span
					className="absolute top-4 right-5 p-1 transition-colors active:scale-95 hover:text-white"
					onClick={() => setOpenMenu(false)}
					title="close-menu"
				>
					<IoClose size="30" className="close-menu" fill="white" />
				</span>
				<nav className="text-xl mx-auto flex-column gap-6 px-[4%]">
					{navLinks.map((link, idx) => (
						<NavLinks
							key={idx}
							{...link}
							idx={idx}
							onClick={() => setOpenMenu(false)}
						/>
					))}
				</nav>
				{/* <Button title="Buy on Talis" className="!w-[70%]" type="normal" /> */}
			</div>
		</motion.div>
	);
}

export default Menu;
