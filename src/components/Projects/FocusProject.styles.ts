import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	container: {
		zIndex: 9999,
		position: "absolute",
		width: "100%",
		height: "100%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		top: 0,
		left: 0,
	},
	overlay: {
		position: "absolute",
		width: "100%",
		height: "100%",
		background: "var(--dark-opacity)",
		top: 0,
		left: 0,
	},
	projectBox: {
		width: "50%",
		maxHeight: "75%",
		overflowY: "auto",
		textAlign: "center",
		color: "var(--dark)",
		background: "var(--light)",

		animation: "$appear .75s both",

		"@media (max-width:900px)": { width: "60%" },
		"@media (max-width:600px)": { width: "75%" },
	},
	projectImg: {
		width: "100%",
		maxHeight: "450px",
		objectFit: "cover",
	},
	projectTitle: {
		marginBottom: "15px",
	},
	projectDescription: {
		textAlign: "left",
		padding: "0px 15px",
		marginBottom: "15px",
	},

	"@keyframes appear": {
		from: {
			opacity: "0",
			transform: "scale(0.5)",
		},
		to: {
			transform: "scale(1)",
		},
	},
});

export { useStyles };
