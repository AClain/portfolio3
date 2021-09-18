import { FC } from "react";
import { Box } from "@material-ui/core";

import { HiOutlineArrowLeft } from "react-icons/hi";

import { useStyles } from "./BackHome.styles";
import { useHistory } from "react-router";

const BackHome: FC<{}> = () => {
	const classes = useStyles();

	let history = useHistory();

	const goHome = () => {
		history.push("/");
	};

	return (
		<Box onClick={goHome} className={classes.box}>
			<HiOutlineArrowLeft className={classes.backIcon} />
		</Box>
	);
};

export { BackHome };
