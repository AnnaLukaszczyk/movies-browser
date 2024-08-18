import styled from "styled-components";

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