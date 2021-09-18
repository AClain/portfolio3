import { makeStyles } from "@material-ui/styles";
import { ThemeContextThemeEnum } from "providers/ThemeContext";

interface Props {
	theme: ThemeContextThemeEnum;
}

const useStyles = makeStyles({
	switchBox: {
		zIndex: 99,
		position: "absolute",
		bottom: "15px",
		right: "15px",
		background: "var(--dark-opacity)",
		border: "none",
		borderRadius: "5px",
		padding: "5px",

		"&:hover": {
			cursor: "pointer",
		},
	},
	themeIcon: {
		color: (props: Props) => (props.theme === "dark" ? "var(--yellow)" : "var(--light)"),
		height: "50px",
		width: "50px",
	},
});

export { useStyles };

/**
 * @keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
  animation: rotating 2s linear infinite;
}
 */
