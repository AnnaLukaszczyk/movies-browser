import { HashRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Navigation } from "../common/Navigation";
import { Pagination } from "../common/Pagination";
import { MovieList } from "../features/movies/MovieList";
import { PeopleList } from "../features/people/PeopleList";
import { MovieDetails } from "../features/movies/MovieDetails";

function App() {
	return (
		<>
			<HashRouter>
				<Navigation />
				<Switch>
					<Route path="/movieDetails">
						<MovieDetails />
					</Route>
					<Route path="/movies">
						<MovieList />
					</Route>
					<Route path="/people">
						<PeopleList />
					</Route>
					<Route path="/">
						<Redirect to="/movies" />
					</Route>
				</Switch>
			</HashRouter>
			<Pagination />
		</>
	);
}

export default App;
