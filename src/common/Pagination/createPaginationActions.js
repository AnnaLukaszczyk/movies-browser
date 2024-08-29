export const paginationActions = () => {
	const paginationReducers = {
        pageNumberFromURL: (state, { payload: query }) => {
            state.page = +query;
            state.status = "loading";
        },
	};

	return { paginationReducers };
};