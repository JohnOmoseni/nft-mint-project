import Button from "../Button";

function Section() {
  return (
    <div className="w-full min-h-[60vh] sm:flex-row !justify-between relative overflow-hidden  bg-gradient-100">
      <div className=" pt-16 sm:pt-[10%] sm:pl-[5%] sm:w-[50%] grid place-items-center">
        <h1 className="w-full max-md:text-center font-familybold md:text-8xl text-shadow-100 select-none max-sm:px-3">
          Ready to Invest in the <br /> Future of Agriculture?
        </h1>
      </div>
      <div className="justify-self-start">
        <span className="text-sm text-neutral-600">
          Want to invest in infinite wealth?
        </span>
        <Button
          title="Invest now"
          className="bg-[#00FF66] capitalize shadow-sm"
        />
      </div>

      <div className="max-md:ml-auto md:absolute max-md:w-[400px] max-md:h-[400px] bottom-0 max-w-[510px] lg:max-w-[600px] right-0 select-none">
        <img src="" alt="" />
      </div>
    </div>
  );
}
export default Section;
