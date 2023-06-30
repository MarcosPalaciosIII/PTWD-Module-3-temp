import React from "react";
import PersonData from "../Pages/PersonData";

export default function GuestList() {
	const guests = [
		{
			firstName: "Jon",
			lastName: "Dunn",
			age: 37,
			plusOne: true,
			email: "www.blahnessrules@gmail.com",
		},
		{
			firstName: "Courtney",
			lastName: "Ernest",
			age: 24,
			plusOne: true,
			email: "www.blahnessrules@gmail.com",
		},
		{
			firstName: "Daniel",
			lastName: "Bijl",
			age: 21,
			plusOne: false,
			email: "www.blahnessrules@gmail.com",
		},
		{
			firstName: "Kseniia",
			lastName: "Cornejo",
			age: 24,
			plusOne: true,
			email: "www.blahnessrules@gmail.com",
		},
	];

	const displayList = () =>
		guests.map((guest, i) => (
			<PersonData
				// add key to primary element tag being returned in order to remove the key required warning in the console.
				key={i}
				firstName={guest.firstName}
				lastName={guest.lastName}
				age={guest.age}
				plusOne={guest.plusOne}
				email={guest.email}
				// key, firestName, lastName, age, plusOne, email are all props that can be used in the PersonData component
			/>
		));

	return <div className="guestlist-container">{displayList()}</div>;
}
