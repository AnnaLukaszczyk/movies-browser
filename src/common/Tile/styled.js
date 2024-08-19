import styled from "styled-components";

export const Tile = styled.div`
	display: grid;
	justify-content: center;
	grid-template-rows: auto 1fr;
	grid-gap: 16px;
	padding: 16px;
	max-width: 324px;
	min-height: 650px;
	background: #fff;
	border-radius: 5px;
	box-shadow: 0 0 12px #bac7d580;
`;

export const Image = styled.img`
	width: 292px;
	height: 434px;
`;

export const Content = styled.div`
	margin-bottom: 16px;
`;

export const Title = styled.header`
	font-size: 22px;
	font-weight: 500;
`;

export const Year = styled.p`
	margin: 8px 0;
	color: darkgray;
`;

export const Tags = styled.ul`
	display: flex;
	flex-wrap: wrap;
    margin: 0;
    padding: 0;
	list-style: none;
`;

export const Tag = styled.li`
	padding: 8px 16px;
    font-size: 14px;
	background: #e4e6f0;
	border-radius: 5px;

	&:not(:last-child) {
		margin-right: 8px;
	}
`;
