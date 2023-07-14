import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			{/* 6. Update navigation link with the NavLink import set the to path (to="") for your endpoint */}
			<NavLink to="/">Home</NavLink>
			<NavLink to="/tasks">Tasks</NavLink>
		</nav>
	);
}
