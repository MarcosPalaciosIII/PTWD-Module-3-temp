import { createContext, useState } from "react";
import axios from "axios";

const TaskContext = createContext();

// every context should have a provider. This is what provides the child elements with shared values which helps avoid prop drilling and unneeded state lifting.
export const TaskProvider = ({ children }) => {
	const [taskList, setTasks] = useState([]);

	const handleTaskSubmit = (formData) => {
		axios
			.post("http://localhost:5005/task-lists", formData)
			.then((res) => {
				console.log({ create: res.data });
				setTasks([...taskList, res.data.taskList]);
			})
			.catch((err) => console.log({ err }));
	};

	// the value you pass in the provider is what will be available to the children components of this context.
	return (
		<TaskContext.Provider value={{ taskList, setTasks, handleTaskSubmit }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;

/**
 *  To Create Context
 *  1. Create a context.js file, add all necessay boilerplate code and the states
 *  2. Wrap your App with Context in App.js or Wrap your Routes with context in App.js
 * 3. Use useContext(contextName) method to get your values in any components you want
 */
