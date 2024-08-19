import { Container } from "../common/Container";
import { Navigation } from "../common/Navigation/NavBar";
import { Pagination } from "../common/Pagination";
import { MovieList } from "../features/movies/MovieList";

function App() {
	return (
		<>
			<Navigation />
			<Container>
				Movies Browser
				<MovieList />
			</Container>
			<Pagination />
		</>
	);
}

export default App;
