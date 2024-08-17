import { Container } from "../common/Container";
import { Navigation } from "../common/Navigation/NavBar";
import { Tile } from "../common/Tile";

function App() {
	return (
		<>
			<Navigation />
			<Container>
				Movies Browser
				<Tile />
			</Container>
		</>
	);
}

export default App;
