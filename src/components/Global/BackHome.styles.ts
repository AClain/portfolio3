import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	box: {
		zIndex: 99,
		position: "absolute",
		top: "15px",
		left: "15px",
		background: "var(--dark-opacity)",
		border: "none",
		borderRadius: "5px",
		padding: "5px",

		"&:hover": {
			cursor: "pointer",
		},
	},
	backIcon: {
		color: "var(--light)",
		height: "25px",
		width: "25px",
	},
});

export { useStyles };
