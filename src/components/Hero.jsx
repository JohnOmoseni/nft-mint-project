import Button from "./Button";
import { motion } from "framer-motion";
import heroimg from "@assets/images/heroimg.png";
import herocoin from "@assets/images/hero-coin.png";
import leaf from "@assets/images/leaf 7.png";
import { container, listAnimate } from "../../utils";

function Hero() {
  return (
    <motion.div
      id="home"
      variants={container}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-img-hero relative w-full sm:min-h-[80vh] max-sm:pt-[20vh] pt-[6%] flex-column"
    >
      <motion.div
        variants={listAnimate}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full px-4"
      >
        <h1 className="capitalize px-2 relative  text-center select-none ">
          <span className="!font-familylight font-[400] leading-[50px]">
            Welcome to
          </span>
          <span className="!font-familybold !block sm:-mt-4">
            Infinite Wealth
          </span>
        </h1>

        <p className=" w-full max-sm:font-[300] sm:max-w-[80ch] text-center mt-3 mx-auto">
          Experience the fusion of AI-driven insightsand world-class security in
          real estate tokenization. <br />
          AssetLink: Where compliance meets innovation in property investment.
        </p>
      </motion.div>

      <motion.div
        variants={listAnimate}
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="relative -bottom-12 mt-auto mx-auto icon min-w-[320px] max-w-[600px] md:max-w-[600px]"
      >
        <img src={heroimg} alt="" />
        <div className="absolute top-[-10%] left-[45%] -z-10 w-[20px]">
          <img src={leaf} alt="" />
        </div>
        <div className="absolute bottom-0 -z-10 w-[90%]">
          <img src={herocoin} alt="" />
        </div>
      </motion.div>

      <Button
        title="Connect Wallet"
        className="bg-[#00E65C] !px-4 capitalize absolute bottom-4 !font-familylight left-[50%] translate-x-[-50%] shadow-sm hover:!dp-shad-black"
      />
      {/* <div className="radial"></div> */}
    </motion.div>
  );
}
export default Hero;
