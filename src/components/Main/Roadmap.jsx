import { roadmap } from "@constants/constants";
import { motion } from "framer-motion";

export const Card = ({ phase, list }) => (
  <div className="w-full bg-[#D9FFE8] bg-opacity-40  py-4 px-4 flex-column !justify-start gap-3 backdrop-blur-md border border-solid border-[#e9fafa3f] min-h-[280px] transition-sm rounded-md shadow-200 hover:backdrop-blur-sm hover:dp-shad">
    <h3 className="font-familybold text-gradient-100">{phase}</h3>
    <ul className="relative flex-column gap-3 py-6 px-6">
      {list.map((text, idx) => (
        <li key={idx} className="text-neutral-800 !list-disc">
          {text}
        </li>
      ))}
    </ul>
  </div>
);

function Roadmap() {
  return (
    <motion.div
      id="roadmap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-img-roadmap w-full min-h-[110vh] relative py-8 sm:py-[4em]"
    >
      <h2 className="text-center capitalize green">Roadmap</h2>
      <ul className="lg:absolute w-[90%] lg:w-[80%] max-sm:mt-[3em] mt-[4em] mb-6 bottom-[10%] left-0 right-0 mx-auto grid grid-cols-roadmap items-center gap-8">
        {roadmap?.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </ul>
    </motion.div>
  );
}
export default Roadmap;
