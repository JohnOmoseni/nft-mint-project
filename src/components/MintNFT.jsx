import { useState, useEffect, useCallback } from "react";
import {
	networkChainId,
	contractABI,
	contractAddress,
} from "../constants/constants";
import { ethers, BrowserProvider, JsonRpcSigner } from "ethers";

const initialWeb3State = {
	currentAcc: null,
	currentChain: "",
	contract: null,
	isAuthenticated: false,
	isConnected: false,
};

function MintNFT() {
	const [web3State, setWeb3State] = useState(initialWeb3State);

	useEffect(() => {
		let mounted = true;
		const requestAccounts = async () => {
			try {
				// request accounts
				const accounts = await window.ethereum.request({
					method: "eth_requestAccounts",
				});

				window.ethereum.on("accountsChanged", (accounts) => {
					if (accounts?.length > 0) {
						setWeb3State((prev) => ({
							...prev,
							currentAcc: accounts[0],
							isConnected: true,
						}));
					} else {
						console.log("Create an account in your wallet");
					}
				});
				console.log(accounts, web3State);
			} catch (err) {
				console.log(err, "Error connecting to metamask");
			}
		};
		if (typeof window.ethereum !== "undefined") {
			requestAccounts();
		} else {
			console.log("Metamask not detected>");
		}

		return () => {
			window.ethereum.removeAllListeners();
		};
	}, []);

	const connectWallet = useCallback(async () => {
		if (!web3State.isConnected) return;

		try {
			const chainId = window.ethereum.request({ method: "eth_chainId" });
			const isNetwork = Number(chainId) === networkChainId;

			if (isNetwork) {
				setWeb3State((prev) => ({
					...prev,
					currentChain: Number(chainId),
					isAuthenticated: isNetwork,
				}));
			} else {
				console.log("Please select Rinkeby network");
				return;
			}

			const provider = new BrowserProvider(window.ethereum);
			const signer = await provider.getSigner();

			const contract = new ethers.Contract(
				contractAddress,
				contractABI,
				signer
			);
			contract && setWeb3State((prev) => ({ ...prev, contract }));
		} catch (err) {
			console.log(err, "Error connecting to wallet");
		}
	}, []);

	return <div></div>;
}

export default MintNFT;
