import { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

function App() {
	const [taskList, setTaskList] = useState(() => []);
	const [formData, setFormData] = useState({
		title: "",
		task: "",
		isComplete: false,
	});

	// the handleChecked function is used for checkbox inputs as the value of the checkbox type input does not check when clicked, rather the checked parameter is what changes its value between true or false ( checked / unchecked );
	const handleChecked = (event) => {
		event.preventDefault();

		setFormData({
			...formData,
			[event.target.name]: event.target.checked,
		});
	};

	// This funciton is to handle the changing values of the input fields that actually have a value property that changes;
	const handleChange = (event) => {
		event.preventDefault();

		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	// the handleSubmit function is used for anything that submits data like a form tag.
	const handleSubmit = (event) => {
		// the preventDefault method is used to prevent actions that would take effect after another method is called. (ie: submitting a form will cause a page to refresh *** We don't wan't this ***);
		event.preventDefault();

		setTaskList([...taskList, formData]);
		setFormData({
			title: "",
			task: "",
			isComplete: false,
		});
	};

	const updateTask = (id) => {
		console.log({ id, task: taskList[id], taskList });

		let updatedList = [...taskList];
		let taskToUpdate = taskList[id];

		taskToUpdate.isComplete = !taskToUpdate.isComplete;

		updatedList[id] = taskToUpdate;

		console.log({ updatedList, taskToUpdate });
		// in order to trigger the component refresh, the setter for the useState must have the parent value (ie: object, array, string), be different than the original. This can be done by making a clone of the origal value (ie: [...yourArray] / {...yourObject})

		// see example on declaration of updatedList (line: 49) clone.
		setTaskList(updatedList);
	};

	const displayForm = () => {
		return (
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>
					Title:{" "}
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={(e) => handleChange(e)}
					></input>
				</label>
				<label>
					Task:{" "}
					<input
						type="text"
						name="task"
						value={formData.task}
						onChange={(e) => handleChange(e)}
					></input>
				</label>
				<label>
					Is Complete:{" "}
					<input
						type="checkbox"
						name="isComplete"
						checked={formData.isComplete}
						onChange={(e) => handleChecked(e)}
					></input>
				</label>
				<button>Add Task</button>
			</form>
		);
	};

	const displayTaskList = () => {
		console.log({ theList: taskList });
		return taskList.length ? (
			taskList.map((task, i) => {
				return (
					<div key={i} className="task-box">
						<h3>{task.title}</h3>
						<h3>{task.task}</h3>
						<h4>Completed? {task.isComplete ? "✅" : "❌"}</h4>
						<button onClick={() => updateTask(i)}>
							{task.isComplete ? "Not Done" : "Done"}
						</button>
					</div>
				);
			})
		) : (
			<p>No Tasks to display</p>
		);
	};

	return (
		<div className="App">
			<h1>Iron Task List</h1>
			<br />
			{displayForm()}
			{displayTaskList()}
			{/* <TaskList taskList={taskList} updateTask={updateTask} /> */}
		</div>
	);
}

export default App;
