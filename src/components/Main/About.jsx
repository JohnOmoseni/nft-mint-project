import { motion } from "framer-motion";
import Button from "../Button";

function About() {
  return (
    <motion.div
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex-colu sm:grid grid-columns-two sm:gap-2 bg-[#FFFEE9] border-t border-solid border-br-light shadow-md min-h-[60vh]"
    >
      <div className="sm:order-2 w-full  flex-column px-4 mt-[10%] mb-[5%] md:mt-[5%] lg:-ml-[15%] ">
        <div className="w-full">
          <h2 className="capitalize sm:text-6xl max-sm:text-center">
            About us
          </h2>
          <h3 className="capitalize font-familybold sm:text-6xl text-2xl max-sm:text-center">
            Lorem ipsum dolor sit.
          </h3>
          <p className="my-4 px-3 w-full max-w-[50ch] text-lg text-neutral-700 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At neque
            distinctio odit impedit illo inventore, natus illum quisquam quaerat
            praesentium. Ad possimus vitae cumque quis placeat, cupiditate
            assumenda accusantium, dolorem alias, magni aut porro ut asperiores.
            Est nihil esse similique?
          </p>
          <Button
            title="Connect Wallet"
            className="bg-[#00E65C] capitalize absolute bottom-3 text-shadow-200 shadow-sm hover:!dp-shad"
          />
        </div>
      </div>

      <div className="sm:order-1 max-w-[600px] select-none">
        <img src="" alt="" />
      </div>
    </motion.div>
  );
}
export default About;
