// Styled Components
import { AppS, Title } from "./App.style";
import { CardContent } from "./components/CardContent";

// Functional Component
const App = () => {
	// Rendering
	return (
		<AppS>
			<Title>memory</Title>
			<CardContent />
		</AppS>
	);
};

// Export
export default App;
