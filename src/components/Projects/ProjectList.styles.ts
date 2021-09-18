import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
	container: {
		width: "100%",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		flexDirection: "row",
		flexWrap: "wrap",
		overflow: "hidden",
		marginBottom: "50px",
	},
	inView: {
		animation: "$appear 1s both",
	},
	imgBox: {
		position: "relative",
		flex: "calc(50% - 10px)",
		height: "450px",
		opacity: 0,
		overflow: "hidden",
		padding: "3px",
		margin: "5px",

		"&:hover": {
			cursor: "pointer",
		},

		"&::after": {
			position: "absolute",
			content: "''",
			top: "calc(-1 * 3px)",
			left: "calc(-1 * 3px)",
			zIndex: -1,
			width: "calc(100% + 3px * 2)",
			height: "calc(100% + 3px * 2)",
			background: `linear-gradient(
			  60deg,
			  hsl(224, 85%, 66%),
			  hsl(269, 85%, 66%),
			  hsl(314, 85%, 66%),
			  hsl(359, 85%, 66%),
			  hsl(44, 85%, 66%),
			  hsl(89, 85%, 66%),
			  hsl(134, 85%, 66%),
			  hsl(179, 85%, 66%)
			)`,
			backgroundSize: "300% 300%",
			backgroundPosition: "0 50%",
			borderRadius: "calc(2 * 3px)",
			animation: "$moveGradient 4s alternate infinite",
		},

		"@media (max-width:900px)": { height: "300px" },
		"@media (max-width:600px)": { flex: "1 1 100%" },
	},
	img: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		transition: "all .2s ease-in",

		"&:hover": {
			transform: "scale(1.1)",
		},
	},

	"@keyframes appear": {
		from: {
			transform: "translateY(500px)",
		},
		to: {
			opacity: 1,
			transform: "translateY(0px)",
		},
	},
	"@keyframes moveGradient": {
		"50%": {
			backgroundPosition: "100% 50%",
		},
	},
});

export { useStyles };
