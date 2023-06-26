// Imported Components
import { Card } from "../Card";

// Styled Components
import { CardContentS } from "./style";

// Data
import { CardData } from "../../global/data";

// Functional Component
export const CardContent = () => {
	// Rendering
	return (
		<CardContentS>
			{CardData.map((item) => {
				// Rendering
				return (
					<Card
						name={item.name}
						img={item.img}
						color={item.color}
						id={item.id}
						key={item.id}
					/>
				);
			})}
			{CardData.map((item) => {
				// Rendering
				return (
					<Card
						name={item.name}
						img={item.img}
						color={item.color}
						id={item.id}
						key={item.id}
					/>
				);
			})}
		</CardContentS>
	);
};
