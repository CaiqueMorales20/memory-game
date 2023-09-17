// Imported Components
import ContextComponent from "./global/context";
import { CardContent } from "./components/CardContent";

// Styled Components
import { AppS, Title } from "./App.style";

// Functional Component
const App = () => {
	// Rendering
	return (
		<ContextComponent>
			<AppS>
				<Title>memory</Title>
				<CardContent />
			</AppS>
		</ContextComponent>
	);
};

// Export
export default App;
