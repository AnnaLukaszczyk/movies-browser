import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as VideoIconSVG } from "../../images/Video.svg";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
	gap: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
        width: 100%;
	    gap: 15px;
    };
`;

export const VideoIcon = styled(VideoIconSVG)`
     width: 40px;
     height: 40px;
  `;

export const LogoText = styled.h1`
    font-weight: 500;
    font-size: 24px;
    margin: 0;
    color: ${({ theme }) => theme.color.white};

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) { 
        font-size: 18px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) { 
        font-size: 13px;
    }
`;

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap:12px;
    `;

export const NavSection = styled.ul`
    display: flex;
    gap: 16px;
    justify-content: center;
    margin: 0;
    padding: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) { 
        gap: 20px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) { 
        gap: 20px;
    }
`;

export const StyledNavLink = styled(NavLink)`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-decoration: none;
    padding: 13px 24px;
    border-radius: 30px;
    border: solid 1px white;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.black};
    

    @media(max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) { 
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

export const StyledLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
	color: inherit;
    
`;