import React from "react";

export default function TaskList({ taskList, updateTask }) {
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
	return <div>{displayTaskList()}</div>;
}
