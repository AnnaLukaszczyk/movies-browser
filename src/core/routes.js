export const toMovies = () => "/movies";
export const toPeople = () => "/people";

export const toMovieDetails = ({id} = {id: ":id"}) => `/movies/${id}`;
export const toPeopleDetails = ({id} = {id: ":id"}) => `/people/${id}`;