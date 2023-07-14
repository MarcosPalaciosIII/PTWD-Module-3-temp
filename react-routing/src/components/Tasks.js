import React from "react";
import { Link } from "react-router-dom";

export default function Tasks() {
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
	return (
		<div>
			{taskList.map((task, i) => (
				<p key={i}>
					{task.title} -{" "}
					<Link to={`/tasks/${i}`}>See More Details</Link>
				</p>
			))}
		</div>
	);
}
