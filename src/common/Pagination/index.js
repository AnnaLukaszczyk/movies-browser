import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import { BoldText, ButtonText, LeftVector, StyledButton, Text, TextContainer, Vector, Wrapper } from "./styled"
import pageParamName from "../../API/pageParamName";

export const Pagination = () => {

    const location = useLocation();
    const history = useHistory();

    const searchParams = new URLSearchParams(location.search);
    const pageParam = searchParams.get(pageParamName);

    const maxPage = 500;

    const onIncrement = () => {
        searchParams.set(pageParamName, +pageParam + 1);
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    const onDecrement = () => {
        searchParams.set(pageParamName, +pageParam - 1);
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    const onToFirstPage = () => {
        searchParams.set(pageParamName, 1);
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    const onToLastPage = () => {
        searchParams.set(pageParamName, maxPage);
        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Wrapper>
            <StyledButton
                onClick={onToFirstPage}
                disabled={+pageParam < 2}
            >
                <LeftVector />
                <ButtonText>
                    First
                </ButtonText>
            </StyledButton>
            <StyledButton
                onClick={onDecrement}
                disabled={+pageParam < 2}
            >
                <LeftVector />
                <ButtonText>
                    Previous
                </ButtonText>
            </StyledButton>
            <TextContainer>
                <Text>Page</Text>
                <BoldText>1</BoldText>
                <Text>of</Text>
                <BoldText>150</BoldText>
            </TextContainer>
            <StyledButton
                onClick={onIncrement}
                disabled={+pageParam === maxPage}>
                <ButtonText>
                    Next
                </ButtonText>
                <Vector />
            </StyledButton>
            <StyledButton
                onClick={onToLastPage}
                disabled={+pageParam === maxPage}>
                <ButtonText>
                    Last
                </ButtonText>
                <Vector />
            </StyledButton>
        </Wrapper>
    )

}