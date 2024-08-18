import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top:56px;
    display:flex;
    justify-content: center;
    gap: 12px;
    font-size: 14px;
`;

export const StyledButton = styled.button`
    cursor: pointer;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.lightBlue};
`;

export const ButtonText = styled.span`
    color: ${({ theme }) => theme.color.woodsmoke};
`;

export const TextContainer = styled.div`
    display:flex;
    align-items: center;
    gap: 8px;
    margin: 0 12px;
`;

export const Text = styled.span`
    color: ${({theme}) => theme.color.waterloo};
    font-size: 16px;
    font-weight: 400;
`;

export const BoldText = styled(Text)`
    color: ${({theme}) => theme.color.woodsmoke};
    font-weight: 600;
`;