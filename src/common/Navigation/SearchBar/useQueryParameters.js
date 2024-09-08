import { useLocation, useHistory } from "react-router-dom/cjs/react-router-dom";
import pageParamName from "../../../paginationParam";

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
			searchParams.set(pageParamName, 1);
			searchParams.set(key, value);
		}

		history.replace(`${location.pathname}?${searchParams.toString()}`);
	};
};