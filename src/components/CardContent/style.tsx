// Imports
import { styled } from "styled-components";

// Styled Components
export const CardContentS = styled.div`
	--column-number: 4;

	display: grid;
	grid-template-columns: repeat(var(--column-number), 1fr);
	gap: 1em;
	width: min(45rem, 90%);
	margin-inline: auto;
`;
