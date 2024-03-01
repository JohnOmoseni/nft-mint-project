import { motion } from "framer-motion";
import { aboutAnimate } from "@utils";

function About() {
	return (
		<motion.div
			id="about"
			initial="hidden"
			whileInView="animate"
			className="relative shadow-md min-h-[110vh]"
		>
			<div className="w-full pt-[15%] lg:pt-[8%] flex-column px-8 md:px-[4%] pb-[4rem]">
				<h2 className="w-full capitalize green sm:text-5xl max-md:text-center">
					About us
				</h2>
				<p
					// data-aos="fade-down"
					// data-aos-duration="3000"
					className="capitalize w-full text-2xl max-md:text-center text-shadow-200"
				>
					Explore Infinite Sprouts
				</p>
				<div className="w-full flex-column md:grid grid-columns-two md:items-center gap-4 mx-auto md:mt-8 md:min-h-[60vh]">
					<motion.div
						variants={aboutAnimate}
						initial="hiddenBody"
						whileInView="scale"
						viewport={{ once: true, amount: 0.2 }}
						className="md:order-2 flex-column md:px-3 mb-[5%] md:mb-[10%] md:justify-self-center"
					>
						<div className="w-full">
							<div className="my-6 max-md:text-center w-full md:max-w-[50ch]  text-neutral-200 md:pr-3">
								<p className="text-neutral-300">
									Infinite sprouts stands at the forefront of innovation
									revolutionizing the agricultural investment land scape,
									through it cutting-edge tokenized platform by seamlessly
									integrating block chain technology with real world
									agriculture.
								</p>

								<p className="my-8 text-neutral-300">
									<strong className="text-white">I-sprouts vision</strong>{" "}
									<br />
									Infinite sprouts seeks to provide global opportunity for
									agricultural investment by unity block chain technology with
									real world agriculture, using high and updated technology to
									facilitate easy interaction with agriculture. and with our
									innovative block chain- based platform we are making it
									possible.
								</p>

								<p className="text-neutral-300">
									<strong className="text-white">I-sprouts mission</strong>
									<br /> Our mission is to revolutionize the agricultural sector
									by seamlessly integrating block chain technology with real
									world agriculture and also the use of updated technical
									equipment's and machinery to explore more possibilities in the
									agricultural sector, using tokenization as a medium to allow
									fractional ownership of assets.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						variants={aboutAnimate}
						initial="hidden"
						whileInView="animate"
						viewport={{ once: true, amount: 0.2 }}
						style={{ backgroundImage: "url(/images/about.png)" }}
						className="w-full h-[400px] md:h-[80%] border border-solid border-[#FFD02B] dp-shad-green md:max-lg:w-[360px] lg:w-[500px] bg-no-repeat bg-center bg-cover rounded-2xl drop-shadow-sm relative overflow-hidden"
					/>
				</div>
			</div>
		</motion.div>
	);
}
export default About;
