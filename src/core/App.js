import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Navigation } from "../common/Navigation";
import { Pagination } from "../common/Pagination";
import { MovieList } from "../features/movies/MovieList";
import { PeopleList } from "../features/people/PeopleList";
import { MovieDetails } from "../features/movies/MovieDetails";
import { toMovieDetails, toMovies, toPeople } from "./routes";

function App() {
	return (
		<>
			<HashRouter>
				<Navigation />
				<Switch>
					<Route path={toMovieDetails()}>
						<MovieDetails />
					</Route>
					<Route path={toMovies()}>
						<MovieList />
					</Route>
					<Route path={toPeople()}>
						<PeopleList />
					</Route>
					<Route exact path="/">
						<Redirect to={toMovies()}/>
					</Route>
				</Switch>
			</HashRouter>
			<Pagination />
		</>
	);
}

export default App;
