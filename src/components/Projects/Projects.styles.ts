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
