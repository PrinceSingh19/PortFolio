import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import AllFixedSocials from "./components/AllFixedSocials";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1300);
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center mt-56 animate-bounce">
				<img src="/images/Logo.png" alt="logo" className="w-20" />
			</div>
		);
	}
	return (
		<div className="App">
			<Navbar />
			<AllFixedSocials />

			<div>
				<Intro />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
