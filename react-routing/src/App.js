import "./App.css";
// 3. import {Routes, Route} from react-router-dom
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Tasks from "./components/Tasks";
import Task from "./components/Task";

function App() {
	return (
		<div className="App">
			<NavBar />

			{/* 4. Add your Routes element in order to add each Route */}
			<Routes>
				{/* 5. A Route has a path (endpoint to call in your link tag) and and element (component to display) */}
				<Route path="/" element={<HomePage propName={"blah"} />} />
				<Route path="/tasks" element={<Tasks />} />
				<Route path="/tasks/:taskId" element={<Task />} />
				{/* the :taskId is the value that you will desctructure in the Task.js in order to use the useParams method from react-router-dom */}
			</Routes>
		</div>
	);
}

export default App;
