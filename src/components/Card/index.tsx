// Styled Components
import { CardImg, CardS } from "./style";

// Types
import { CardProps } from "./types";

// Functional Component
export const Card = (props: CardProps) => {
	// Rendering
	return (
		<CardS color={props.color}>
			<CardImg src={props.img} />
		</CardS>
	);
};
