import { BoldText, ButtonText, StyledButton, Text, TextContainer, Wrapper } from "./styled"

export const Pagination = () => {
    return (
        <Wrapper>
            <StyledButton>
                <ButtonText>
                    First
                </ButtonText>
            </StyledButton>
            <StyledButton>
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
            </StyledButton>
            <StyledButton>
                <ButtonText>
                    Last
                </ButtonText>
            </StyledButton>
        </Wrapper>
    )

}