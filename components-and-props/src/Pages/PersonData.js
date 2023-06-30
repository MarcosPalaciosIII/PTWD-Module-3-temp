import React from "react";

// the parameter for the function of your component may contain props passed from the parent. To access these pops, either pass props as an arguement or destructure the props if you know the values (you should ;)) by using the {} and name of the props being passed (ie: { fistName, lastName, age, plustOne, email })
export default function PersonData({
	firstName,
	lastName,
	age,
	plusOne,
	email,
}) {
	// ** this is how to pass props to the component without destructuring the data being passed from the parent.

	// export default function PersonData(props) {
	// const { fistName, lastName, age, plustOne, email } = props

	return (
		<div className="person-data">
			<h4>
				Name: {firstName} {lastName}
			</h4>
			<h3>Age: {age}</h3>
			<h3>PlusOne: {plusOne ? "Yes" : "No"}</h3>
			<h3>Email: {email}</h3>
		</div>
	);
}
