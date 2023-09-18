// Imported Components
import ContextComponent from "./global/context";
import { Content } from "./components/Content";

// Styled Components
import { AppS, Title } from "./App.style";

// Functional Component
const App = () => {
	// Rendering
	return (
		<ContextComponent>
			<AppS>
				<Title>memory</Title>
				<Content />
			</AppS>
		</ContextComponent>
	);
};

// Export
export default App;
