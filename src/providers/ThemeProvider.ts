import { ThemeContextThemeEnum } from "./ThemeContext";

class ThemeProvider {
	getClientTheme = () => {
		let currentTheme = localStorage.getItem("theme");
		if (currentTheme === null) {
			localStorage.setItem("theme", "dark");
			currentTheme = "dark";
		}

		return currentTheme as ThemeContextThemeEnum;
	};
}

export default new ThemeProvider();
