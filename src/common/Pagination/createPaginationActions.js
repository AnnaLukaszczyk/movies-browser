export const paginationActions = () => {
	const paginationReducers = {
        pageNumberFromURL: (state, { payload: pageParam }) => {
            state.page = +pageParam;
            state.status = "loading";
        },
	};

	return { paginationReducers };
};