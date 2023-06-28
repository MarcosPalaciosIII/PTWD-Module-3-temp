// import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";

function App() {
	const helloStatement = (
		<h2>Hello there! This is the MIA PTWD class. Buyaka!!</h2>
	);

	/**
	 * This info was living here but we kept the pace. ;)
	 */
	// const ironhacker = {
	// 	name: "Nick",
	// 	course: "Web Dev",
	// };

	// const { name, course } = ironhacker;

	return (
		<div className="App">
			<h1>CRA React App</h1>

			{helloStatement}

			<User />

			{/* 
      - adding comments on jsx file on the html return parameter, you have to add the {}.
      - when adding any non html element to the return method, you must have it in the {}.
      */}
			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
