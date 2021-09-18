import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	container: {
		margin: "0px 150px",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		height: "100%",
		flexDirection: "column",
		overflow: "hidden",

		"@media (max-width:900px)": { margin: "0px 50px" },
		"@media (max-width:600px)": { margin: "0px 25px" },
	},
	link: {
		width: "100%",
		padding: "15px",
		fontSize: "75px",
		fontFamily: "Roboto Thin",
		textAlign: "center",
		border: "solid 2px",
		borderRadius: "3px",
		transition: "all .2s ease-in",

		"&:hover": {
			cursor: "pointer",
			background: "var(--text)",
			color: "var(--bg)",
		},

		"@media (max-width:600px)": { fontSize: "50px" },
	},
	firstLink: {
		animation: "$appear 1s both",
	},
	secondLink: {
		animation: "$appear 1s .25s both",
	},
	thirdLink: {
		animation: "$appear 1s .5s both",
	},
	fourthLink: {
		animation: "$appear 1s .75s both",
	},
	firstLinkTransition: {
		animation: "$translate 1s both",
	},
	secondLinkTransition: {
		animation: "$translate 1s .10s both",
	},
	thirdLinkTransition: {
		animation: "$translate 1s .20s both",
	},
	fourthLinkTransition: {
		animation: "$translate 1s .30s both",
	},

	"@keyframes appear": {
		from: {
			transform: "translateY(2000px)",
		},
		to: {
			transform: "translateY(0px)",
		},
	},
	"@keyframes translate": {
		from: {
			transform: "translateY(0px)",
		},
		to: {
			transform: "translateY(-2000px)",
		},
	},
});

export { useStyles };
