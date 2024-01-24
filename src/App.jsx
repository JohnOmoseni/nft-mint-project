import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { networkChainId, contractAddress } from "@constants/constants";
import { ethers, BrowserProvider } from "ethers";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";

import "./index.css";
import ConfettiEffect from "./components/Confetti";
import { setCurrentChain } from "./redux/web3Slice";

function App() {
	const [openMenu, setOpenMenu] = useState(false);
	const { isConnected, showConfetti } = useSelector((state) => state.web3);
	const dispatch = useDispatch();

	const connectWallet = async () => {
		if (!isConnected) return;

		try {
			const res = await window.ethereum.request({ method: "eth_chainId" });
			const chainId = parseInt(Number(res));
			const isNetwork = Number(chainId) === networkChainId;
			console.log(chainId, networkChainId);

			if (isNetwork) {
				dispatch(setCurrentChain(chainId));
			} else {
				console.log("Please select Rinkeby network");
				return;
			}
		} catch (err) {
			console.log(err, "Error connecting to wallet");
		}
	};

	return (
		<div className="wrapper">
			{showConfetti && <ConfettiEffect />}
			<Header setOpenMenu={setOpenMenu} connectWallet={connectWallet} />
			<AnimatePresence>
				{openMenu && <Menu setOpenMenu={setOpenMenu} />}
			</AnimatePresence>

			<Routes>
				<Route path="*" element={<Home connectWallet={connectWallet} />} />
			</Routes>
		</div>
	);
}

export default App;
