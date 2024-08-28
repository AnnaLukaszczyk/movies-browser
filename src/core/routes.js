export const toMovies = () => "/movies";
export const toPeople = () => "/people";

export const toMovieDetails = ({id} = {id: ":id"}) => `/movieDetails/${id}`;
export const toPeopleDetails = ({id} = {id: ":id"}) => `/peopleDetails/${id}`;