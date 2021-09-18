import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	box: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: "65px",
		height: "65px",
		background: "white",
		borderRadius: "3px",
		margin: "10px",
		flexWrap: "wrap",
		boxShadow: "var(--small-shadow)",

		"&:hover": {
			cursor: "help",
		},
	},
	tooltip: {
		fontSize: "20px!important",
	},
});

export { useStyles };
