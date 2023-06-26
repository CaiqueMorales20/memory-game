// Imports
import React from "react";
import ReactDOM from "react-dom/client";

// Imported Components
import { GlobalStyle } from "./GlobalStyle.tsx";

// App
import App from "./App.tsx";

// Rendering
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>
);
