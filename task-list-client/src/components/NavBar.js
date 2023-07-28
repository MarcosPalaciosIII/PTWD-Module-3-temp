import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import UserContext from "../contexts/User.context";
import axios from "axios";

export default function NavBar() {
	const { user, setUser } = useContext(UserContext);

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [isSignUp, setisSignUp] = useState(null);

	const handleChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const submitForm = async () => {
		let urlType = isSignUp ? "signup" : "login";
		let storedToken = localStorage.getItem("user");

		try {
			const data = await axios.post(
				`http://localhost:3000/auth/
			http://localhost:3000/auth/${urlType}`,
				formData,
				{
					withCredentials: true,
					headers: {
						Authorization: `Bearer ${storedToken}`,
					},
				}
			);
			setUser(() => (isSignUp ? null : data));
		} catch (error) {
			console.error(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm();
	};

	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/tasks">Tasks</NavLink>
			<div>
				<button onClick={() => setisSignUp(true)}>Sign Up</button>
				<button onClick={() => setisSignUp(false)}>Log In</button>
				{
					<div>
						<label>
							Email:{" "}
							<input
								type="text"
								name="email"
								value={formData.email}
							/>
						</label>
						<label>
							Password:{" "}
							<input
								type="password"
								name="password"
								value={formData.password}
							/>
						</label>
					</div>
				}
			</div>
		</div>
	);
}
