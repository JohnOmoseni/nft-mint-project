import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { container, listAnimate } from "@utils";
import { useDispatch, useSelector } from "react-redux";
import { setShowConfetti } from "@redux/web3Slice";
import Button from "./Button";
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

		console.log(provider.getBalance("ethers.eth"));
		return;
		const contract = new ethers.Contract(
			contractAddress,
			contractABI,
			provider
		);
		const value = ethers.parseEther((0.08 * mintAmount).toString());
		console.log(contract, mintAmount, value);
		if (contract) {
			try {
				const res = await contract
					.connect(signer)
					.mint(ethers.parseEther(mintAmount.toString()), {
						value: ethers.parseEther((0.08 * mintAmount).toString()),
					});

				res && dispatch(setShowConfetti(true));
				console.log(res, value);
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
			className="bg-img-hero relative w-full h-dvh max-sm:pt-[20vh] pt-[10%] pb-8 flex-column"
		>
			<motion.div
				variants={listAnimate}
				initial="hidden"
				whileInView="animate"
				viewport={{ once: true, amount: 0.1 }}
				className="w-full px-4 sm:px-[3%]"
			>
				<div className="w-max flex gap-1 py-1.5 px-3 sm:ml-1 rounded-lg bg-green-200 text-tiny !text-[#00CC52] max-sm:mx-auto">
					<div className="animate-pulse relative w-3 h-3 border border-solid border-green-600 rounded-full icon">
						<div className="rounded-full w-2 h-2 bg-green-400 absolute left-[50%] translate-x-[-50%]"></div>
					</div>
					<span>Revolutionizing Agriculture...</span>
				</div>
				<h1 className="capitalize relative text-[#FFFAEA] max-sm:mt-1 max-sm:text-center !text-shadow-200">
					<span className="whitespace-nowrap">Welcome to</span>
					<span className="sm:-mt-4 !block">Infinite Wealth</span>
				</h1>

				<p className="w-full max-sm:font-[300] sm:max-w-[80ch] max-sm:text-center text-light-green mt-2 mx-2">
					Infinite wealth stands at the forefront of innovation revolutionizing
					the <br /> agricultural investment land scape.
				</p>

				<Button
					title={isConnected && isAuthenticated ? "Mint NFT" : "Connect Wallet"}
					className="bg-[#00E65C] max-sm:mx-auto flex my-8 mx-2 capitalize shadow-sm hover:!dp-shad-black"
					onClick={handleButtonClick}
				/>
			</motion.div>

			{/* <motion.div
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
			</motion.div> */}

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
			</div>
		</motion.div>
	);
}
export default Hero;
