import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { container, listAnimate } from "@utils";
import { useDispatch, useSelector } from "react-redux";
import { setShowConfetti } from "@redux/web3Slice";
import Button from "./Button";
import heroimg from "@assets/images/heroimg.png";
import herocoin from "@assets/images/hero-coin.png";
import leaf from "@assets/images/leaf 7.png";
import { ethers, BrowserProvider } from "ethers";
import { contractAddress } from "../constants/constants";
import contractABI from "@constants/contractABI.json";

function Hero({ connectWallet }) {
	const { isAuthenticated, isConnected } = useSelector((state) => state.web3);
	const [mintAmount, setMintAmount] = useState(1);
	const dispatch = useDispatch();

	const mintNFT = async () => {
		const provider = new BrowserProvider(window.ethereum);
		const signer = await provider.getSigner();

		const contract = new ethers.Contract(
			contractAddress,
			contractABI,
			provider
		);
		console.log(contract, mintAmount);
		if (contract) {
			try {
				const res = await contract
					.connect(signer)
					.mint(ethers.parseEther(mintAmount.toString()), {
						value: ethers.parseEther((0.01 * mintAmount).toString()),
					});
				console.log(res);

				res && dispatch(setShowConfetti(true));
			} catch (err) {
				console.error(err);
			}
		}
	};

	const handleQuantityChange = (id) => {
		if (id === "increment") {
			if (mintAmount >= 10) return;
			setMintAmount((prev) => prev + 1);
		} else {
			if (mintAmount <= 1) return;
			setMintAmount((prev) => prev - 1);
		}
	};

	const handleButtonClick = () => {
		if (isConnected && isAuthenticated) {
			mintNFT();
		} else {
			connectWallet();
		}
	};

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
				<span className="w-max !flex py-1.5 px-2 mx-auto rounded-lg bg-green-200 bg-opacity-80 text-tiny !text-green-600">
					Revolutionizing Agriculture...
				</span>
				<h1 className="capitalize px-2 relative sm:-mt-6  text-center select-none !text-shadow-200">
					<span className="!font-familylight font-[400] leading-[50px]">
						Welcome to
					</span>
					<span className="!font-familybold !block sm:-mt-4">
						Infinite Wealth
					</span>
					<div className="absolute -bottom-1.5 w-[90%] sm:w-[70%] sm:-bottom-1 left-[50%] translate-x-[-50%] h-[1px] -rotate-1 bg-green-500 rounded-md"></div>
				</h1>

				<p className="w-full max-sm:font-[300] sm:max-w-[80ch] text-center mt-6 mx-auto">
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

			<div className="absolute bottom-4 left-[50%] translate-x-[-50%] flex-column gap-1.5 !items-center">
				{isConnected && isAuthenticated && (
					<div className="flex-row gap-0.5">
						<div
							className="rounded-sm shadow-md bg-red-600 !text-white cursor-pointer pb-1 px-4 select-none"
							onClick={() => handleQuantityChange("decrement")}
						>
							-
						</div>
						<input
							type="number"
							value={mintAmount}
							readOnly
							className=" bg-white w-[100px] h-[30px] p-1 text-center rounded-sm"
						/>
						<span
							className="rounded-sm shadow-md bg-emerald-800 !text-white cursor-pointer pb-1 px-4 select-none"
							onClick={() => handleQuantityChange("increment")}
						>
							+
						</span>
					</div>
				)}
				<Button
					title={isConnected && isAuthenticated ? "Mint NFT" : "Connect Wallet"}
					className="bg-[#00E65C] !py-1 !px-4 capitalize shadow-sm hover:!dp-shad-black"
					onClick={handleButtonClick}
				/>
			</div>
		</motion.div>
	);
}
export default Hero;
