import Button from "../Button";
import scrub1 from "@assets/images/scrub1.png";
import scrub2 from "@assets/images/scrub2.png";
import tree from "@assets/images/tree2.png";
import rock from "@assets/images/rock.png";

function Section() {
  return (
    <div className="w-full min-h-[80vh] md:min-h-[100vh] lg:min-h-[90vh] pt-[2em] md:pt-[5%] md:px-[4%] -mb-3 md:mb-[5vh] md:flex items-start gap-4 relative overflow-hidden isolate">
      <div className="w-[80%] mx-auto md:w-[60%] md:mx-0 md:mb-[2em]">
        <h2 className="max-md:text-center text-section font-familybold text-shadow-100 select-none max-sm:px-3">
          Ready to Invest in the Future of Agriculture?
        </h2>
      </div>
      <div className="mt-6 md:mt-[4%] md:ml-[4%] flex-column gap-2">
        <p className="w-full text-sm text-center text-neutral-600 md:text-lg">
          Want to invest in infinite wealth?
        </p>
        <Button
          title="Invest now"
          className="bg-[#00FF66] mx-auto capitalize shadow-md hover:dp-shad-black"
        />
      </div>

      <div className="absolute -bottom-3 max-w-[400px] -left-[5%] sm:-left-4 select-none max-sm:max-w-[150px]">
        <img src={scrub1} alt="" />
      </div>

      <div className="absolute bottom-0 max-w-[500px] -right-1 select-none max-md:max-w-[300px] -z-20">
        <img src={rock} alt="" />
        <div className="hidden lg:block absolute w-[200px] max-md:w-[400px] bottom-0 max-w-[600px] right-[90%] select-none max-sm:max-w-[100px] -z-10">
          <img src={scrub2} alt="" />
        </div>
      </div>
      <div className="absolute -bottom-1 max-w-[500px] right-0 select-none max-sm:right-[-2em] max-sm:max-w-[110px] sm:max-md:w-[130px] -z-10">
        <img src={tree} alt="" />
      </div>
    </div>
  );
}
export default Section;
