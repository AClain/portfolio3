import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	container: {
		margin: "0px 150px",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		flexDirection: "column",

		animation: "$appear .75s both",

		"@media (max-width:900px)": { margin: "0px 50px" },
		"@media (max-width:600px)": { margin: "0px 25px" },
	},
	globalContainer: {
		width: "75%",
		display: "flex",
		flexDirection: "column",

		"@media (max-width:600px)": { flexDirection: "column-reverse" },
	},
	linkContainer: {
		width: "100%",
		display: "flex",
		justifyContent: "space-evenly",
		marginBottom: "15px",

		"@media (max-width:600px)": { flexDirection: "column" },
	},
	link: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minWidth: "65px",
		height: "65px",
		background: "white",
		borderRadius: "3px",
		padding: "0px 15px",
		margin: "10px",
		flexWrap: "wrap",
		boxShadow: "var(--small-shadow)",
	},
	clickIcon: {
		marginLeft: "15px",
		fontSize: "25px",
	},
	form: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	input: {
		margin: "25px 0px",
		color: "var(--text)",
	},

	"@keyframes appear": {
		from: {
			opacity: "0",
			transform: "scale(0.5)",
		},
		to: {
			opacity: "1",
			transform: "scale(1)",
		},
	},
});

export { useStyles };
