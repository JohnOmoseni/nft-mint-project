import { roadmap } from "@constants/constants";
import { motion } from "framer-motion";
import { listAnimate } from "../../../utils";

export const Card = ({ phase, list, idx }) => (
	<motion.div
		variants={listAnimate}
		initial="hidden"
		whileInView="animate"
		viewport={{ once: true, amount: 0.2 }}
		custom={idx}
		className="w-full even:backdrop-blur-lg bg-[#D9FFE8] bg-opacity-40  py-4 px-4 flex-column !justify-start gap-3 backdrop-blur-md border border-solid border-[#e9fafa3f] min-h-[220px] sm:min-h-[280px] md:min-h-full transition-sm rounded-md shadow-200 hover:backdrop-blur-sm hover:dp-shad"
	>
		<h3 className="font-familybold text-gradient-100 text-gradient-100 opacity-80">
			{phase}
		</h3>
		<ul className="relative flex-column gap-3 py-6 px-6">
			{list.map((text, idx) => (
				<li key={idx} className="text-neutral-800 !list-disc">
					{text}
				</li>
			))}
		</ul>
	</motion.div>
);

function Roadmap() {
	return (
		<motion.div
			id="roadmap"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="bg-img-roadmap w-full min-h-[110vh] relative py-8 sm:py-[4em] -mt-2"
		>
			<h2 className="text-center capitalize green">Roadmap</h2>
			<ul className=" w-[90%] lg:w-[80%] mt-[2em] mb-6 mx-auto flex-column md:grid grid-cols-roadmap items-center gap-8">
				{roadmap?.map((item, idx) => (
					<Card key={idx} {...item} idx={idx} />
				))}
			</ul>
		</motion.div>
	);
}
export default Roadmap;
