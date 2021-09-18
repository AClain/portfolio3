import { FC } from "react";
import { Box } from "@material-ui/core";

import { useStyles } from "./Intro.styles";

const Intro: FC<{}> = () => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<h1 className='title'>Intro</h1>
		</Box>
	);
};

export { Intro };
