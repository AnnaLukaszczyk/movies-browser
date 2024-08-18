import { BoldText, ButtonText, LeftVector, StyledButton, Text, TextContainer, Vector, Wrapper } from "./styled"

export const Pagination = () => {

    const page = 1;

    return (
        <Wrapper>
            <StyledButton
                disabled={page < 2}
            >
                <LeftVector />
                <ButtonText>
                    First
                </ButtonText>
            </StyledButton>
            <StyledButton
                disabled={page < 2}
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
                disabled={page === 500}>
                <ButtonText>
                    Next
                </ButtonText>
                <Vector />
            </StyledButton>
            <StyledButton
                disabled={page === 500}>
                <ButtonText>
                    Last
                </ButtonText>
                <Vector />
            </StyledButton>
        </Wrapper>
    )

}