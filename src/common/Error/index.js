import { toMovies } from "../../core/routes";
import { StyledError, StyledDanger, Warning, Info, Button, } from "./styled";

export const Error = () => (
    <StyledError>
        <StyledDanger />
        <Warning>Ooops! Something went wrong... </Warning>
        <Info>Please check your network connection <br/> and try again</Info>
        <Button to={toMovies()}>Back to home page</Button>
    </StyledError>
);