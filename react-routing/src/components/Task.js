import React from "react";
import { useParams } from "react-router-dom";

export default function Task() {
	const taskList = [
		{
			title: "Trash",
			description: "Take out the garbage from kitchen and bathroom",
			complete: false,
		},
		{
			title: "Wash Car",
			description: "Wash Wifey's car and mine",
			complete: false,
		},
		{
			title: "Groceries",
			description:
				"Get the weekly fresh produce that you have to get every week, because they have to be fresh at all times before you eat it. So we do this every week. Etc.. ",
			complete: false,
		},
	];

	const { taskId } = useParams();

	const task = taskList[taskId];

	return (
		<div>
			<h3>Task: {task.title}</h3>
			<h3>Description: {task.description}</h3>
			<h3>Completed: {task.complete ? "Yes" : "No"}</h3>
		</div>
	);
}
