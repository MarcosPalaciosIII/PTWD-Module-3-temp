import React, { useState } from "react";
import Car from "./Car";

const carList = [
	{ model: "Civic", make: "Honda", color: "Black", doors: "4", year: "2001" },
	{ model: "Civic", make: "Honda", color: "Red", doors: "4", year: "2010" },
	{ model: "Civic", make: "Honda", color: "White", doors: "4", year: "2011" },
	{
		model: "Civic",
		make: "Honda",
		color: "Hunter Green",
		doors: "4",
		year: "2021",
	},
	{ model: "Civic", make: "Honda", color: "Blue", doors: "4", year: "2022" },
];

export default function Cars() {
	// the useState hook is initialized by have a getter and setter and callining the initial value within the argument for the useState() method (hook); (ei: see below as we initialize the 'car' getter and 'setCar' setter and set initial value with {
	// 	model: "",
	// 	make: "",
	// 	color: "",
	// 	doors: "",
	// 	year: "",
	// })
	const [car, setCar] = useState(() => ({
		model: "",
		make: "",
		color: "",
		doors: "",
		year: "",
	}));

	function chooseCarToDisplay(carIndex) {
		setCar(() => carList[carIndex]);
	}

	return (
		<div>
			<h2>Car and Expo Center Event of the Year!!</h2>
			<p>Winner of the best car in show will be announced below</p>
			<Car
				model={car.model}
				make={car.make}
				color={car.color}
				doors={car.doors}
				year={car.year}
				carSelect={chooseCarToDisplay}
				carList={carList}
			/>
		</div>
	);
}
