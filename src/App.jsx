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
		}, 2000);
	}, []);

	if (loading) {
		return <div className="text-center">Loading..</div>;
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
