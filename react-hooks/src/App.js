import { useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
	const [showHome, setShowHome] = useState();
	return (
		<div className="App">
			<h1>Main</h1>
			<br />
			<button onClick={() => setShowHome(!showHome)}>
				Show/Hide Home
			</button>
			{showHome && <Home />}
		</div>
	);
}

export default App;
