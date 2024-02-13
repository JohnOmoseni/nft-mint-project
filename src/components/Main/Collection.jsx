import nft1 from "@assets/images/nft1.png";
import nft2 from "@assets/images/nft2.png";
import nft3 from "@assets/images/nft3.png";

import leaf1 from "@icons/leaf.svg";
import leaf2 from "@icons/leaf2.svg";

import Marquee from "react-fast-marquee";
import Button from "../Button";
import { collection } from "@constants/constants";

const Card = ({ src, text }) => (
	<div className="relative w-full min-h-[320px] sm:min-h-[340px] rounded-xl border-2 border-solid border-br-clr border-opacity-70 overflow-hidden shadow-md">
		<div className="absolute inset-0 tracking-normal -mt-2">
			<img src={src} alt="" />
		</div>
		<div className="absolute w-full min-h-[2rem] text-center font-semibold text-2xl p-3 bottom-0 left-0 bg-black bg-opacity-95 text-shadow-100 border-t-2 border-solid border-br-clr border-opacity-70">
			{text}
		</div>
	</div>
);

const Brands = () => {
	return (
		<section
			className="relative overflow-hidden pt-[4em] pb-8 min-h-[70vh] w-full max-sm:bg-fixed bg-no-repeat bg-cover bg-left-top"
			style={{ backgroundImage: "url(/images/collection.png)" }}
		>
			<div className="absolute -left-3 -top-1 w-[80px] select-none">
				<img src={leaf1} alt="" />
			</div>
			<div className="absolute rotate-[90deg] -right-3 -bottom-3 w-[60px] select-none">
				<img src={leaf2} alt="" />
			</div>

			<h2 className="text-center capitalize sm:text-5xl green text-shadow-100 opacity-80">
				Our NFT Collection
			</h2>

			<div className="mx-auto w-[90%] mt-[4rem] mb-[3rem] flex-column sm:grid grid-cols-2 place-items-center lg:grid-cols-collection gap-8 tracking-normal overflow-hidden">
				{collection?.map(({ text, src }, idx) => {
					return <Card key={idx} src={src} text={text} />;
				})}
			</div>
			{/* <Marquee
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
			
			</Marquee> */}

			<Button
				title="Mint NFT"
				className="bg-[#060606] flex mt-[2rem] mx-auto text-green-300 border border-solid border-br-light capitalize shadow-sm hover:dp-shad-green"
			/>
		</section>
	);
};
export default Brands;
