import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (target) => {
	const location = useLocation();

	return new URLSearchParams(location.search).get(target);
};

export const useReplaceQueryParameter = () => {
	const location = useLocation();
	const history = useHistory();

	const searchParams = new URLSearchParams(location?.search || "");
	const isMovies =
		location.pathname.startsWith("/movies");

	return ({ key, value }) => {
		if (value === undefined) {
			searchParams.delete(key);
		} else {
			searchParams.set(key, value);
		}

		let newPath = isMovies ? "/movies/search" : "/people/search";

		if (key === "query" && !value) {
			newPath = isMovies ? "/movies" : "/people";
		}

		const currentPage = parseInt(searchParams.get("page")) || 1;
		const currentQuery = searchParams.get("query");
		let urlParams = `page=${currentPage}`;

		if (currentQuery) {
			urlParams += `&query=${currentQuery}`;
		}

		history.replace(`${newPath}?${urlParams}`);
	};
};