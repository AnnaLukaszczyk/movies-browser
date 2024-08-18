import { ButtonText, StyledButton } from "./styled"

export const Pagination = () => {
    return (
        <>
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
        </>
    )

}