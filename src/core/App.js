import { HashRouter } from "react-router-dom";
import { Navigation } from "../common/Navigation";
import { Main } from "../common/Main";

function App() {
	return (
		<HashRouter>
			<Navigation />
			<Main />
		</HashRouter>
	);
}

export default App;
