import { Container } from "../common/Container";
import { Navigation } from "../common/Navigation/NavBar";
import { Pagination } from "../common/Pagination";
import { Tile } from "../common/Tile";

function App() {
	return (
		<>
			<Navigation />
			<Container>
				Movies Browser
				<Tile />
			</Container>
			<Pagination />
		</>
	);
}

export default App;
