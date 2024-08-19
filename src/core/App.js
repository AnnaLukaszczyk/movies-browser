import { Container } from "../common/Container";
import { Navigation } from "../common/Navigation/NavBar";
import { Pagination } from "../common/Pagination";
import { MoviesList } from "../features/MoviesList";

function App() {
	return (
		<>
			<Navigation />
			<Container>
				Movies Browser
				<MoviesList />
			</Container>
			<Pagination />
		</>
	);
}

export default App;
