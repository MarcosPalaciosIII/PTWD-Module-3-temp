import React from "react";

/**
 * we desctructure our props expecting the parent component to pass in the following props { model, make, color, doors, year }.
 * This is done like so in the Cars.js file
 * (ie: <Car model={car.model} make={car.make} color={car.color} doors={car.doors} year={car.year} />)
 * */
export default function Car({
	model,
	make,
	color,
	doors,
	year,
	carSelect,
	carList,
}) {
	const handleSelectedCar = (selectedNumber) => {
		carSelect(selectedNumber);
	};

	const displayCarSelectButtons = () => {
		return carList.map((car, i) => {
			return (
				<button key={i} onClick={() => handleSelectedCar(i)}>
					Car {i + 1}
				</button>
			);
		});
	};

	return (
		<div>
			<div>{displayCarSelectButtons()}</div>
			<br />
			{year > 2002 ? (
				<div>
					<h3>Year: {year}</h3>
					<h3>Color: {color}</h3>
					<h3>Doors: {doors}</h3>
					<h3>Make: {make}</h3>
					<h3>Model: {model}</h3>
				</div>
			) : (
				<p>To Classic to Display!</p>
			)}
		</div>
	);
}
