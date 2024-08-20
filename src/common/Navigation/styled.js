import styled from "styled-components";

export const Background = styled.div`
    background: ${({ theme }) => theme.color.black};
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1368px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px;
    margin: 0 auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) { 
        flex-direction: column;
        padding: 16px;
        margin-bottom: 24px;
    }
`;

export const SearchInput = styled.input`
    flex-grow: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) { 
        font-size: 14.5px;
        line-height: 20px;
    }
`;