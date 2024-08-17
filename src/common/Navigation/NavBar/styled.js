import styled from "styled-components";

export const StyledNavigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
	gap: 80px;
`;

export const Logo = styled.p`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 12px;
    align-items: center;
    width: 220px;
    text-decoration: none; 
`;

export const LogoText = styled.h1`
    width: 168px;
    font-weight: 500;
    font-size: 24px;
    margin: 0;
`;

export const NavSection = styled.ul`
    display: flex;
    gap: 16px;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

export const StyledLink = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    padding: 13px 24px;
`;