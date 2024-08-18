import { Container } from "../common/Container";
import { Navigation } from "../common/Navigation/NavBar";
import { MoviesList } from "../features/MoviesList";

function App() {
	return (
		<>
			<Navigation />
			<Container>
				Movies Browser
				<MoviesList />
			</Container>
		</>
	);
}

export default App;
