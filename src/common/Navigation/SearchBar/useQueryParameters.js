import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";

export const useQueryParameter = (target) => {
	const location = useLocation();

	return new URLSearchParams(location.search).get(target);
};

export const useReplaceQueryParameter = () => {
	const location = useLocation();
	const history = useHistory();

	const searchParams = new URLSearchParams(location.search);

	return ({ key, value }) => {
		if (value === undefined) {
			searchParams.delete(key);
		} else {
			searchParams.set("page", 1);
			searchParams.set(key, value);
		}

		history.replace(`${location.pathname}?${searchParams.toString()}`);
	};
};