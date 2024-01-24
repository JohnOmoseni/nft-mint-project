import Hero from "@components/Hero";
import Main from "@components/Main/Main";
import Footer from "@components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentAcc } from "../redux/web3Slice";

function Home({ connectWallet }) {
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

	useEffect(() => {
		let mounted = true;

		if (typeof window.ethereum !== "undefined") {
			requestAccounts();
			window.ethereum.on("accountsChanged", (accounts) => {
				accounts?.length > 0 && dispatch(setCurrentAcc(accounts[0]));
			});
		} else {
			console.log("Metamask not detected>");
		}

		return () => {
			window.ethereum.removeAllListeners();
			mounted = false;
		};
	}, []);

	return (
		<>
			<Hero connectWallet={connectWallet} />
			<Main />
			<Footer />
		</>
	);
}
export default Home;
