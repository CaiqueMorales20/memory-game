// Imports
import { styled } from "styled-components";

// Types
type CardProps = {
	color: string;
};

// Styled Components
export const CardS = styled.div<CardProps>`
	border-radius: 50%;
	border: 0.25rem solid ${(props) => props.color};
	width: 10rem;
	aspect-ratio: 1 / 1;
	display: grid;
	place-items: center;
	overflow: hidden;
`;

export const CardImg = styled.img`
	width: 100%;
	object-fit: cover;
`;
