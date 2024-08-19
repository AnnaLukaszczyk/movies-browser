import styled from "styled-components";

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
	gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 100%;
	    gap: 15px;
    };
`;

export const Logo = styled.button`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 12px;
    align-items: center;
    width: 220px;
    text-decoration: none; 
    border: none;
    background: ${({ theme }) => theme.color.black};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) { 
        grid-gap: 10px;
        width: 170px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) { 
        grid-gap: 10px;
        width: 120px;
    }
`;

export const LogoText = styled.h1`
    font-weight: 500;
    font-size: 24px;
    margin: 0;
    color: ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) { 
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) { 
        font-size: 13px;
    }
`;

export const NavSection = styled.ul`
    display: flex;
    gap: 16px;
    justify-content: center;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) { 
        gap: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) { 
        gap: 20px;
    }
`;

export const StyledLink = styled.button`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    padding: 13px 24px;
    border-radius: 30px;
    border: solid 1px white;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.black};

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}) { 
        font-size: 13px;
        line-height: 19.5px;
        padding: 10px 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) { 
        font-size: 12px;
        line-height: 18px;
        padding: 8px 14px;
    }
`;