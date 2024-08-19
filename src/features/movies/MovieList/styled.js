import styled from "styled-components";

export const List = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, minmax(200px, 1fr));
	grid-gap: 24px;
	margin: auto;
	padding: 0;
	list-style: none;

	@media (max-width: ${({ theme }) => theme.breakpoints.smallDesktop}px) {
		grid-template-columns: repeat(3, minmax(200px, 1fr));
	}
`;

export const ListItem = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
`;
