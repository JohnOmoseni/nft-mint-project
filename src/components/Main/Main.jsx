import About from "./About";
import Collection from "./Collection";
import Features from "./Features";
import Roadmap from "./Roadmap";
import Section from "./Section";

function Main() {
	return (
		<>
			<div
				className="relative min-h-[100vh] bg-no-repeat bg-cover bg-center bg-blend-screen bg-fixed"
				style={{ backgroundImage: "url(/public/images/bg.png)" }}
			>
				<div className="relative isolate">
					<video
						src="https://res.cloudinary.com/dei5xnezi/video/upload/v1707804035/1t7jk0_2_axbqz5.mp4"
						autoPlay
						loop
						muted
						className="w-full h-full absolute top-0 left-0 -z-10 object-cover"
					></video>
					<Features />
					<About />
				</div>
			</div>
			<Collection />
			<Roadmap />
			<Section />
		</>
	);
}
export default Main;
