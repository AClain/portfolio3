import { useState } from "react";
import { ThemeContext } from "providers/ThemeContext";
import ThemeProvider from "providers/ThemeProvider";
import { Main as MainRouter } from "./routes/Main.routes";
import { Box } from "@material-ui/core";
import { SwitchTheme } from "components/Global/SwitchTheme";

function App() {
	const [theme, setTheme] = useState(ThemeProvider.getClientTheme());

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Box className={`${theme}`} height='100vh' minHeight='500px' overflow='auto'>
				<MainRouter />
				<SwitchTheme />
			</Box>
		</ThemeContext.Provider>
	);
}

export default App;
