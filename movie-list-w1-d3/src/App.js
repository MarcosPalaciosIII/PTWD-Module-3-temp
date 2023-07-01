import "./App.css";
import MovieList from "./components/Movies/MovieList";

const arrayOfMovies = [
	{
		title: "Titanic",
		releaseYear: 1997,
		genre: "Drama",
		rating: 4,
		fav: false,
		id: 1,
	},
	{
		title: "Cat in the Hat",
		releaseYear: 2003,
		genre: "Family",
		rating: 3,
		fav: false,
		id: 2,
	},
	{
		title: "John Wick",
		releaseYear: 2014,
		genre: "Action",
		rating: 5,
		fav: false,
		id: 3,
	},
	{
		title: "It Follows",
		releaseYear: 2014,
		genre: "Horror",
		rating: 4,
		fav: false,
		id: 4,
	},
	{
		title: "The Perfect Storm",
		releaseYear: 2000,
		genre: "Thriller",
		rating: 1,
		fav: false,
		id: 5,
	},
	{
		title: "Child's Play",
		releaseYear: 1988,
		genre: "Horror",
		rating: 4,
		fav: false,
		id: 6,
	},
];

function App() {
	return (
		<div className="App">
			<MovieList listOfMovies={arrayOfMovies} />
		</div>
	);
}

export default App;
