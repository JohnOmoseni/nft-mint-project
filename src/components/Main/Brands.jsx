import logo1 from "@assets/images/partner1.png";
import logo2 from "@assets/images/partner2.png";
import logo3 from "@assets/images/partner3.png";
import logo4 from "@assets/images/partner4.png";
import leaf1 from "@icons/leaf.svg";
import leaf2 from "@icons/leaf2.svg";
import Marquee from "react-fast-marquee";

const Container = ({ children }) => (
  <div className="rounded-md w-[260px] h-[150px] max-h-[200px] p-6 border border-solid border-[#71ffaa] bg-[#D9FFE8] icon">
    {children}
  </div>
);

const Brands = () => {
  return (
    <section className="relative overflow-hidden pt-[4em] pb-8 min-h-[50vh] w-full bg-[#fffaea9e]">
      <div className="absolute -left-3 -top-1 w-[80px] select-none">
        <img src={leaf1} alt="" />
      </div>
      <div className="absolute rotate-[90deg] -right-3 -bottom-3 w-[60px] select-none">
        <img src={leaf2} alt="" />
      </div>
      <div className="absolute -left-3 -bottom-3 w-[60px] select-none">
        <img src={leaf2} alt="" />
      </div>
      <div className="absolute rotate-[90deg] -top-1 -right-3 w-[80px] select-none">
        <img src={leaf1} alt="" />
      </div>
      <h2 className="text-center capitalize sm:text-5xl green">Our partners</h2>
      <Marquee
        autoFill={true}
        gradient={true}
        gradientColor="#fffaea"
        gradientWidth={60}
        className="mt-[6em] mb-4 justify-between w-full"
      >
        <Container>
          <img src={logo1} className="!w-[150px] !h-auto" alt="" />
        </Container>
        <Container>
          <img src={logo2} className="!w-[150px] !h-auto" alt="" />
        </Container>
        <Container>
          <img src={logo3} className="!w-[150px] !h-auto" alt="" />
        </Container>
        <Container>
          <img src={logo4} className="!w-[150px] !h-auto" alt="" />
        </Container>
      </Marquee>
    </section>
  );
};
export default Brands;
