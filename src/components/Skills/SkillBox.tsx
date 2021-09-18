import { FC } from "react";
import { Box, Tooltip } from "@material-ui/core";
import { Skill } from "types";

import { useStyles } from "./SkillBox.styles";

interface SkillBoxProps {
	key: number;
	skill: Skill;
}

const SkillBox: FC<SkillBoxProps> = ({ key, skill }) => {
	const classes = useStyles();

	return (
		<Tooltip classes={classes} title={skill.name} placement='bottom'>
			<Box key={key} className={classes.box}>
				<img className='icon' src={skill.img} alt={skill.img} />
			</Box>
		</Tooltip>
	);
};

export { SkillBox };
