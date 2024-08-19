import { Main } from "../common/Main";
import { Navigation } from "../common/Navigation/NavBar";
import { Pagination } from "../common/Pagination";
import { MovieList } from "../features/movies/MovieList";

function App() {
	return (
		<>
			<Navigation />
			<Main>
				<MovieList />
			</Main>
			<Pagination />
		</>
	);
}

export default App;
