import { HashRouter } from "react-router-dom";
import { Navigation } from "../common/Navigation";
import { Main } from "../common/Main";
import { ScrollToTop } from "./ScrollToTop";

function App() {
	return (
		<HashRouter>
			<ScrollToTop />
			<Navigation />
			<Main />
		</HashRouter>
	);
}

export default App;
