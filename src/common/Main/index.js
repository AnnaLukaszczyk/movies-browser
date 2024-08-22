import { Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "../../features/movies/MovieList";
import { PeopleList } from "../../features/people/PeopleList";
import { MovieDetails } from "../../features/movies/MovieDetails";
import { toMovieDetails, toPeopleDetails, toMovies, toPeople } from "../../core/routes";
import { StyledMain } from "./styled";
import { PeopleDetails } from "../../features/people/PeopleDetails";

export const Main = () => (
	<StyledMain>
		<Switch>
			<Route path={toMovieDetails()}>
				<MovieDetails />
			</Route>
			<Route path={toPeopleDetails()}>
				<PeopleDetails />
			</Route>
			<Route path={toMovies()}>
				<MovieList />
			</Route>
			<Route path={toPeople()}>
				<PeopleList />
			</Route>
			<Route exact path="/">
				<Redirect to={toMovies()} />
			</Route>
		</Switch>
	</StyledMain>
);

export default Main;
