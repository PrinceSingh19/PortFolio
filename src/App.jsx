import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div>
				<Intro />
				<About />
				<Skills />
				<Projects />
			</div>
		</div>
	);
}

export default App;
