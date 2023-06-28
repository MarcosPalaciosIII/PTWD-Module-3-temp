import React from "react";

export default function User() {
	const ironhacker = {
		name: "Nick",
		course: "Web Dev",
	};

	const { name, course } = ironhacker;

	return (
		<div>
			<h2>Profile Page</h2>
			<p>This is the user profile for {name}</p>
			<aside>Currently enrolled in course: {course}</aside>
		</div>
	);
}
