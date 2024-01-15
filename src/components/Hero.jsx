import Button from "./Button";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full min-h-[100vh] max-sm:pt-[30vh] py-[6%]"
    >
      <div className="w-full h-full flex-column !items-center">
        <h1 className="uppercase px-2 relative whitespace-nowrap md:text-[20vw] text-center leading-6  select-none">
          <span className=" text-gradient sm:ml-2 g1">Welcome to</span>
          <span className="font-familybold">Infinite Wealth</span>
        </h1>

        <p>
          Experience the fusion of AI-driven insightsand world-class security in
          real estate tokenization.AssetLink: Where compliance meets innovation
          in property investment.
        </p>
      </div>

      <Button
        title="Connect Wallet"
        className="bg-[#00E65C] capitalize absolute bottom-3 text-shadow-200 shadow-sm hover:!dp-shad"
      />
    </motion.div>
  );
}
export default Hero;
