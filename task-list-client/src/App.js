import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Tasks from "./components/tasks/Tasks";
import { TaskProvider } from "./contexts/Tasks.context";
import { UserProvider } from "./contexts/User.context";

function App() {
	return (
		<div className="App">
			<UserProvider>
				<NavBar />
				<TaskProvider>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/tasks" element={<Tasks />} />
					</Routes>
				</TaskProvider>
			</UserProvider>
		</div>
	);
}

export default App;
