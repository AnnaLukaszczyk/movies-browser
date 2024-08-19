import styled from "styled-components";

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
	grid-gap: 24px;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
`;
