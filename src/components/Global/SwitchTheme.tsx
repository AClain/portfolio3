import { Box } from "@material-ui/core";
import { FC, useState, useContext } from "react";
import { ThemeContext } from "providers/ThemeContext";
import { HiOutlineMoon, HiOutlineLightBulb } from "react-icons/hi";
import { useStyles } from "./SwitchTheme.styles";

const SwitchTheme: FC<{}> = () => {
	const context = useContext(ThemeContext);
	const [checked, setChecked] = useState(context.theme === "dark");

	const classes = useStyles({ theme: context.theme! });

	const switchTheme = () => {
		setChecked(!checked);

		if (context.theme === "dark") {
			if (context.theme === "dark") {
				context.setTheme!("light");
				localStorage.setItem("theme", "light");
				return;
			}
		}
		context.setTheme!("dark");
		localStorage.setItem("theme", "dark");
	};

	return (
		<Box onClick={switchTheme} className={classes.switchBox}>
			{checked ? <HiOutlineLightBulb className={classes.themeIcon} /> : <HiOutlineMoon className={classes.themeIcon} />}
		</Box>
	);
};

export { SwitchTheme };
