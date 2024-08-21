import { HashRouter } from "react-router-dom";
import { Navigation } from "../common/Navigation";
import { Pagination } from "../common/Pagination";
import { Main } from "../common/Main";

function App() {
	return (
		<HashRouter>
			<Navigation />
			<Main />
			<Pagination />
		</HashRouter>
	);
}

export default App;
