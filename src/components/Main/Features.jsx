import { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { features } from "@constants/constants";
import Button from "../Button";
import logo from "@assets/images/logo.png";
import { container, listAnimate } from "@utils";

const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 35, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
	speed: 1000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Card = ({ title, body, idx, vector, tag }) => {
	const [lineClamp, setLineClamp] = useState(true);
	return (
		<Tilt
			options={defaultOptions}
			style={{ alignSelf: `${idx % 2 ? "end" : "start"}` }}
		>
			<motion.div
				variants={listAnimate}
				initial="hidden"
				whileInView="animate"
				viewport={{ once: true, amount: 0.2 }}
				custom={idx}
				className=" border border-solid border-br-clr self-start bg-black dp-shad-green py-3 px-4 rounded-2xl transition-sm odd:self-end"
			>
				<div className="flex-row !justify-start gap-2">
					<img src={vector} alt="" className="!w-6" />
					<h3 className="font-familymedium leading-5">{title}</h3>
				</div>
				<p
					className={`${
						lineClamp ? "line-clamp-4 md:line-clamp-[8]" : ""
					} my-4 max-sm:min-w-[25ch]`}
				>
					{body}
				</p>
				<Button
					title={lineClamp ? "Read More" : "Collapse..."}
					// className={`${link}`}
					className="mt-4 mb-1 !capitalize text-black bg-white transition-colors border border-solid border-[#00FF66]"
					onClick={() => setLineClamp(!lineClamp)}
				/>
			</motion.div>
		</Tilt>
	);
};

function Features() {
	return (
		<div className="relative p-section !pb-10 min-h-[70vh] sm:min-h-[100vh]">
			<div className=" mx-auto bg-[#111] bg-opacity-80 backdrop-blur-sm rounded-full overflow-auto py-1 px-2 w-[70px] h-[35px] border border-solid border-green-500">
				<img src={logo} alt="" className="" />
			</div>
			<h2 className="text-center capitalize green my-1">Our Features</h2>
			<div>
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="animate"
					className="scroll-snap py-12 pb-[4em] sm:py-[5em] sm:pb-[3em] px-3 gap-4 sm:gap-8 justify-between grid grid-cols-features w-[96%] mx-auto max-sm:auto-cols-min sm:max-md:auto-cols-[40%] h-features sm:min-h-[80vh]"
				>
					{features.map((item, idx) => {
						return <Card {...item} key={idx} idx={idx} />;
					})}
				</motion.div>
			</div>
		</div>
	);
}

export default Features;
