import { motion } from "framer-motion";
import Button from "../Button";
import grass from "@assets/images/grass.png";
import about from "@assets/images/about.png";
import tree from "@assets/images/tree2.png";
import coin from "@assets/images/coin-green.png";

function About() {
  return (
    <motion.div
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-img-about bg-[#FFFEE9] shadow-md min-h-[110vh]"
    >
      <div className="w-full pt-[20%] md:pt-[15%] lg:pt-[8%] flex-column px-6 pb-12">
        <h2 className="w-full capitalize green sm:text-5xl max-sm:text-center sm:mb-4">
          About us
        </h2>
        <div className="w-full flex-column sm:grid grid-columns-two sm:items-center gap-4 mx-auto sm:mt-4 md:min-h-[60vh]">
          <div className="sm:order-2 flex-column px-3 mb-[5%] md:mb-[10%] md:justify-self-center">
            <div className="w-full">
              <h3 className="capitalize text-2xl max-sm:text-center">
                Lorem ipsum dolor sit.
              </h3>
              <p className="my-4 sm:my-6 max-sm:text-center w-full sm:max-w-[50ch]  text-neutral-700 sm:pr-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
                neque distinctio odit impedit illo inventore, natus illum
                quisquam quaerat praesentium. Ad possimus vitae cumque quis
                placeat, cupiditate assumenda accusantium, dolorem alias, magni
                aut porro ut asperiores. Est nihil esse similique?
              </p>
              <Button
                title="Connect Wallet"
                className="mt-10 flex bg-[#00732E] text-white  capitalize font-familylight text-shadow-200 shadow-sm hover:!dp-shad max-sm:!mx-auto"
              />
            </div>
          </div>

          <div className="w-full h-[400px] sm:h-full border border-solid border-[#cc920058] sm:max-md:w-[320px] md:w-[400px] bg-[#fff3c6] bg-opacity-80 backdrop-blur-sm py-3 rounded-2xl drop-shadow-md relative isolate overflow-hidden">
            <div className="absolute bottom-0 select-none max-w-[400px] -ml-[150px] left-[50%] -z-10 max-sm:left-[60%]">
              <img src={grass} alt="" />
            </div>
            <div className="absolute bottom-0 left-[50%] -ml-[180px] select-none max-w-[600px] max-sm:w-[400px] max-sm:left-[65%] -z-30">
              <img src={about} alt="" />
            </div>
            <div className="hidden sm:absolute bottom-4 left-8 select-none max-w-[30px] -z-20">
              <img src={coin} alt="" />
            </div>
            <div className="absolute bottom-6 max-sm:bottom-20 right-2 select-none max-w-[50px] -z-20">
              <img src={coin} alt="" />
            </div>
            <div className="absolute -bottom-3 -left-[80px] select-none max-w-[250px] max-sm:-left-[50px] -z-30">
              <img src={tree} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
export default About;
