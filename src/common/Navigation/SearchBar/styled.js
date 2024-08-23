import styled from "styled-components";

export const Wrapper = styled.div`
    width: 432px;
    height: 48px;
    display: flex;
    gap: 16px;
    align-items: center;
    background: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-radius: 50px;
    padding: 0 24px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLarge}px) { 
        width: 100%;
        height: 46px;
        margin-top: 20px;
        padding: 0 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) { 
        height: 44px;
        margin-top: 16px;
        padding: 0 16px;
    }
`;

export const SearchInput = styled.input`
    flex-grow: 1;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: none;
    border-radius: 30px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletLarge}px) { 
        font-size: 14.5px;
        line-height: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) { 
        font-size: 13px;
        line-height: 17px;
    }
`;