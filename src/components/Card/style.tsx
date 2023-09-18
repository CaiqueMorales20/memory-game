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
	aspect-ratio: 1 / 1;
	display: grid;
	place-items: center;
	overflow: hidden;
	align-self: center;
	justify-self: center;
	cursor: pointer;
	width: 100%;
`;

export const Inner = styled.div`
	width: 100%;
    height: 100%;

	position: relative;

	& > * {
		position: absolute;
	}
`


export const CardImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const Background = styled.div`
	width: 100%;
	height: 100%;
`