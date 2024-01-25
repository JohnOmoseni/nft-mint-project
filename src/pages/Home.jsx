import Hero from "@components/Hero";
import Main from "@components/Main/Main";
import Footer from "@components/Footer";

function Home({ connectWallet }) {
	return (
		<>
			<Hero connectWallet={connectWallet} />
			<Main />
			<Footer />
		</>
	);
}
export default Home;
