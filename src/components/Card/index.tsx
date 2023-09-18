// Styled Components
import { useContext } from "react";
import { Background, CardImg, CardS, Inner } from "./style";

// Types
import { CardProps } from "./types";
import { CardContext } from "../../global/context";
import { CardContextType } from "../../global/context/type";

// Functional Component
export const Card = (props: CardProps) => {
	// Variables
	const {flipped, setFlipped} = useContext(CardContext) as CardContextType

	// Functions
	const handleClick = () => {
		if(props.id ===  flipped) console.log('Combinou')
		setFlipped(props.id)
	}

	// Rendering
	return (
		<CardS onClick={() =>  handleClick()} color={props.color}>
			<Inner>
				<CardImg  src={props.img} />
				<Background  />
			</Inner>
		</CardS>
	);
};
