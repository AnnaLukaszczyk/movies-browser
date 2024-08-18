import { BoldText, ButtonText, LeftVector, StyledButton, Text, TextContainer, Vector, Wrapper } from "./styled"

export const Pagination = () => {
    return (
        <Wrapper>
            <StyledButton>
                <LeftVector />
                <ButtonText>
                    First
                </ButtonText>
            </StyledButton>
            <StyledButton>
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
            <StyledButton>
                <ButtonText>
                    Next
                </ButtonText>
                <Vector />
            </StyledButton>
            <StyledButton>
                <ButtonText>
                    Last
                </ButtonText>
                <Vector />
            </StyledButton>
        </Wrapper>
    )

}