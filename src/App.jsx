import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";
import { networkChainId } from "@constants/constants";
import ConfettiEffect from "./components/Confetti";
import { setCurrentChain, setCurrentAcc } from "./redux/web3Slice";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import AOS from "aos";

import "aos/dist/aos.css";
import "./index.css";

function App() {
	const [openMenu, setOpenMenu] = useState(false);
	const { isConnected, showConfetti } = useSelector((state) => state.web3);
	const dispatch = useDispatch();

	const requestAccounts = async () => {
		try {
			// request accounts
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			console.log(accounts);
			if (accounts?.length > 0) {
				dispatch(setCurrentAcc(accounts[0]));
			} else {
				console.log("Create an account in your wallet");
			}
		} catch (err) {
			console.log(err, "Error connecting to metamask");
		}
	};

	const connectWallet = async () => {
		requestAccounts();

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

	useEffect(() => {
		let mounted = true;

		if (typeof window.ethereum !== "undefined") {
			window.ethereum.on("accountsChanged", (accounts) => {
				accounts?.length > 0 && dispatch(setCurrentAcc(accounts[0]));
			});
		} else {
			// show a toast/sonner message
			console.log("Metamask not detected>");
		}

		return () => {
			window?.ethereum?.removeAllListeners();
			mounted = false;
		};
	}, []);

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
