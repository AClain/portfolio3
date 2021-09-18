import { FC, useState } from "react";
import { Box } from "@material-ui/core";

import { useStyles } from "./Home.styles";
import { useHistory } from "react-router";

const Home: FC<{}> = () => {
	const classes = useStyles();

	let history = useHistory();

	const [inTransition, setIntransition] = useState(false);

	const goTo = (path: string) => {
		setIntransition(true);

		setTimeout(() => {
			history.push(path);
		}, 500);
	};

	return (
		<Box className={`${classes.container}`}>
			<Box
				className={`${classes.link} ${classes.firstLink} ${inTransition && classes.firstLinkTransition}`}
				onClick={() => {
					goTo("intro");
				}}
			>
				<h1>Intro</h1>
			</Box>
			<Box
				className={`${classes.link} ${classes.secondLink} ${inTransition && classes.secondLinkTransition}`}
				onClick={() => {
					goTo("skills");
				}}
			>
				<h1>Skills</h1>
			</Box>
			<Box
				className={`${classes.link} ${classes.thirdLink} ${inTransition && classes.thirdLinkTransition}`}
				onClick={() => {
					goTo("projects");
				}}
			>
				<h1>Projects</h1>
			</Box>
			<Box
				className={`${classes.link} ${classes.fourthLink} ${inTransition && classes.fourthLinkTransition}`}
				onClick={() => {
					goTo("contact");
				}}
			>
				<h1>Contact</h1>
			</Box>
		</Box>
	);
};

export { Home };
