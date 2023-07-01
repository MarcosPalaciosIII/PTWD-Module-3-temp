import React, { useState } from "react";
import Movie from "./Movie";

export default function MovieList({ listOfMovies }) {
	// the useState hook has a setter and getter in the array when getting initiallized. (ie: const [getter, setter] = useState(<set initial value here>))
	const [moviesArray, setMoviesArray] = useState(() => []);
	const [userFavs, setUserFavs] = useState(() => []);

	const displayMovies = () =>
		!!moviesArray && moviesArray.length
			? moviesArray.map((movie, i) => {
					return (
						<Movie
							key={i}
							title={movie.title}
							releaseYear={movie.releaseYear}
							genre={movie.genre}
							rating={movie.rating}
							fav={movie.fav}
							id={movie.id}
							// function is passed to the child component in order to manipulate data that is here on the parent component
							updateFavs={addToUserFav}
						/>
					);
			  })
			: "No Movies To Display";

	const displayFavs = () =>
		!!userFavs && userFavs.length
			? userFavs.map((movie, i) => {
					return (
						<Movie
							key={i}
							title={movie.title}
							releaseYear={movie.releaseYear}
							genre={movie.genre}
							rating={movie.rating}
							fav={movie.fav}
							id={movie.id}
							// function is passed to the child component in order to manipulate data that is here on the parent component
							updateFavs={addToUserFav}
						>
							Must Watch
						</Movie>
					);
			  })
			: "No Movies To Display";

	// this is called in order to set the initial value of the movies in the moviesArray if there is non set already.
	const getMovies = () => {
		if (moviesArray.length === 0) {
			setMoviesArray(() => listOfMovies);
		}
	};

	// data parameter added to get back the id and fav property of the movie from the child component
	function addToUserFav(data) {
		// updating both userFavs and moviesArray with updated fav value from the returned data first in order to filter through both arrays correctly for display
		if (data.fav) {
			const updatedFav = moviesArray.filter(
				(movie) => movie.id === data.id
			)[0];
			updatedFav.fav = data.fav;

			setUserFavs(() => [...userFavs, updatedFav]);
			// filtering fav movies from moviesArray
			setMoviesArray(() => moviesArray.filter((movie) => !movie.fav));
		} else {
			const updatedMovie = userFavs.filter(
				(movie) => movie.id === data.id
			)[0];
			updatedMovie.fav = data.fav;

			setMoviesArray(() => [...moviesArray, updatedMovie]);
			// filtering non fav movies from userFavs
			setUserFavs(() => userFavs.filter((movie) => movie.fav));
		}
	}

	return (
		<div>
			<h2 className="page__title">List of Movies</h2>
			{getMovies()}
			<div className="movies__display-boby">
				<div className="movies__container">{displayMovies()}</div>
				<div className="movies__container">{displayFavs()}</div>
			</div>
		</div>
	);
}
