import { createContext } from "react";

export declare enum ThemeContextThemeEnum {
	Dark = "dark",
	Light = "light",
}

export declare type ThemeContextProps = {
	theme: ThemeContextThemeEnum;
	setTheme?: Function;
};

const DEFAULT_CONTEXT: ThemeContextProps = {
	theme: "dark" as ThemeContextThemeEnum,
};

export const ThemeContext = createContext<Partial<ThemeContextProps>>(DEFAULT_CONTEXT);
