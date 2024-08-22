import styled from "styled-components";
import { ReactComponent as VectorSVG } from "../../icons/icon-vector.svg";

export const Wrapper = styled.div`
	margin-top: 40px;
	display: flex;
	justify-content: center;
	gap: 12px;
	font-size: 14px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		gap: 8px;
	}
`;

export const StyledButton = styled.button`
	display: flex;
	gap: 8px;
	align-items: center;
	padding: 8px 16px;
	border: none;
	border-radius: 5px;
	color: ${({ theme }) => theme.color.blue};
	background: ${({ theme }) => theme.color.lightBlue};
	cursor: pointer;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		padding: 8px 12px;
		gap: 4px;
	}

	&:disabled {
		cursor: auto;
		color: ${({ theme }) => theme.color.waterloo};
		background: ${({ theme }) => theme.color.mystic};
	}
`;

export const ButtonText = styled.span`
	color: ${({ theme }) => theme.color.woodsmoke};

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		display: none;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	margin: 0 12px;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		gap: 2px;
		margin: 0;
	}
`;

export const Text = styled.span`
	color: ${({ theme }) => theme.color.waterloo};
	font-size: 16px;
	font-weight: 400;

	@media (max-width: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
		gap: 2px;
		font-size: 10px;
	}
`;

export const BoldText = styled(Text)`
	color: ${({ theme }) => theme.color.woodsmoke};
	font-weight: 600;
`;

export const Vector = styled(VectorSVG)``;

export const LeftVector = styled(Vector)`
	transform: rotate(180deg);
`;
