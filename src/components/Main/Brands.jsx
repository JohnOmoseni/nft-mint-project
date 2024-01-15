import logo1 from "@assets/partner1.png";
import logo2 from "@assets/partner2.png";
import logo3 from "@assets/partner3.png";
import logo4 from "@assets/partner4.png";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <section className="relative overflow-hidden pt-[4em] pb-8 min-h-[40vh] w-full bg-[#FFFAEA]">
      <h2 className="text-center capitalize text-green">Our partners</h2>
      <Marquee
        autoFill={true}
        gradient={true}
        gradientColor="#fffaea"
        gradientWidth={60}
        className="my-[4em] justify-between w-full"
      >
        <img src={logo1} className="" alt="" />
        <img src={logo2} className="" alt="" />
        <img src={logo3} className="" alt="" />
        <img src={logo4} className="" alt="" />
      </Marquee>
    </section>
  );
};
export default Brands;
