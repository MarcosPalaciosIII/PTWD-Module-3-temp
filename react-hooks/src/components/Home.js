import React, { useEffect, useState } from "react";
import logo from "../logo.svg";

export default function Home() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log("This is loading when the component mounts");
		// the effect of componentDidMount (function running when component loads) happens when you pass a [] as the 2nd param to the useEffect lifecycle hook.
		return () => {
			// return a callback within useEffect to act like componentWillUnmount (runs when component is closing).
			console.log("SHOW ME WHEN IM CLOSIN!");
		};
	}, []);

	useEffect(() => {
		console.log("This is running when the counter value is updated");
		// the effect of componentDidUpdate (function running when component updates) happens when you pass a value in [<myValue>] as the 2nd param to the useEffect lifecycle hook.
	}, [counter]);

	// useEffect(() => {
	// 	console.log("Seems to be updating on any update within component");
	// 	// the effect of componentWillMount (function running when component updates) happens, but for any update, when you pass nothing as the 2nd param to the useEffect lifecycle hook.
	// });

	return (
		<div>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<button onClick={() => setCounter(counter + 1)}>
					Click Me
				</button>
			</header>
		</div>
	);
}

// import React, { Component } from "react";

// export default class Home extends Component {
//     componentWillMount() {
//         // this runs when the component is loading
//     }

//     component

// 	componentWillUnmount() {
//         // when the component is closing, this lifecycle method is called
//     }
// 	render() {
// 		return <div>Home</div>;
// 	}
// }
