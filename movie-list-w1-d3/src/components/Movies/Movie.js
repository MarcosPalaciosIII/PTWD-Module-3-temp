import React from "react";

// export default function Movie(props) {
//     //                          |
//     //        ------------------
//     //       |
//     const {title, releaseYear, genre, rating, fav} = props

export default function Movie({
	title,
	releaseYear,
	genre,
	rating,
	fav,
	id,
	updateFavs,
	children,
}) {
	// created this function to add star's for the rating symbol rather than displaying a number value
	const displayRating = () => {
		let starRatingResults = ``;
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				starRatingResults += "★";
			} else {
				starRatingResults += "☆";
			}
		}

		return starRatingResults;
	};

	// this updateMovie function will update the fav boolean value of the movie and return said value with the movie id back to the parent essentially lifting the state data so that it can be used in the parent component.
	const updateMovie = () => {
		const updatedMovie = {
			id,
			fav: !fav,
		};

		updateFavs(updatedMovie);
	};

	// added on click function to the div in order to allow for larger click radius of the card in order to add or remove from fav's list
	return (
		<div className="movies__box">
			<button onClick={updateMovie}>
				{!fav ? "Add To Fav" : "Remove From Fav"}
			</button>
			<h3>Title: {title}</h3>
			<div>
				<p>Release Year: {releaseYear}</p>
				<p>Genre: {genre}</p>
			</div>
			<h5>Rating: {displayRating()}</h5>
			{children}
		</div>
	);
}
