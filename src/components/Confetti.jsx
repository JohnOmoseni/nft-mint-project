import { useState, useEffect } from "react";
import { setShowConfetti } from "../redux/web3Slice";
import { useDispatch, useSelector } from "react-redux";
import Confetti from "react-confetti";

function ConfettiEffect() {
	const { showConfetti } = useSelector((state) => state.web3);
	const [windowSize, setWindowSize] = useState({ width: "", height: "" });

	const dispatch = useDispatch();

	const handleWindowResize = () => {
		console.log(window.innerWidth, window.innerHeight);
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight * 10,
		});
	};

	useEffect(() => {
		handleWindowResize();
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	useEffect(() => {
		let timeout;
		if (showConfetti) {
			timeout = setTimeout(() => {
				// dispatch(setShowConfetti(false));
			}, 10000);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [showConfetti]);

	return (
		<Confetti
			width={windowSize.width}
			height={windowSize.height}
			tweenDuration={800}
		/>
	);
}

export default ConfettiEffect;
