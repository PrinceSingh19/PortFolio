import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div>
				<Intro />
				<About />
				<Skills />
			</div>
		</div>
	);
}

export default App;
