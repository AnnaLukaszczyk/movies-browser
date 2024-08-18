import styled from "styled-components";
import { ReactComponent as VectorSVG } from "../../common/images/icon-vector.svg";

export const Wrapper = styled.div`
    margin-top:56px;
    display:flex;
    justify-content: center;
    gap: 12px;
    font-size: 14px;

`;

export const StyledButton = styled.button`
    display: flex;
    gap: 8px;
    align-items: center;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.color.lightBlue};
    cursor: pointer;
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
    color: ${({ theme }) => theme.color.waterloo};
    font-size: 16px;
    font-weight: 400;
`;

export const BoldText = styled(Text)`
    color: ${({ theme }) => theme.color.woodsmoke};
    font-weight: 600;
`;

export const Vector = styled(VectorSVG)`
    color: ${({theme}) => theme.color.blue};
`;

export const LeftVector = styled(Vector)`
    transform: rotate(180deg);
`;