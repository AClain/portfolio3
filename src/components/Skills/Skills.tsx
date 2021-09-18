import { FC } from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import { Skill } from "types";
import { SkillBox } from "./SkillBox";

import { useStyles } from "./Skills.styles";

import skillsData from "assets/data/skills.json";

const Skills: FC<{}> = () => {
	const classes = useStyles();

	const frontLanguageSkillList: Array<Skill> = skillsData.web.front.languages;
	const frontFrameworkSkillList: Array<Skill> = skillsData.web.front.frameworks;
	const backLanguageSkillList: Array<Skill> = skillsData.web.back.languages;
	const backFrameworkSkillList: Array<Skill> = skillsData.web.back.frameworks;
	const envSkillList: Array<Skill> = skillsData.env;
	const toolSkillList: Array<Skill> = skillsData.tools;
	const communicationSkill: Array<Skill> = skillsData.communication;

	return (
		<Box className={classes.container}>
			<h1 className='title'>Skills</h1>
			<Typography className={classes.skillTitle} variant='h4'>
				Web Skills - Front-End Languages
			</Typography>
			<Box className={classes.skillBox}>
				{frontLanguageSkillList.map((s, k) => (
					<SkillBox key={k} skill={s} />
				))}
			</Box>
			<Divider className={classes.skillDivider} />
			<Typography className={classes.skillTitle} variant='h4'>
				Web Skills - Front-End Frameworks
			</Typography>
			<Box className={classes.skillBox}>
				{frontFrameworkSkillList.map((s, k) => (
					<SkillBox key={k} skill={s} />
				))}
			</Box>
			<Divider className={classes.skillDivider} />
			<Typography className={classes.skillTitle} variant='h4'>
				Web Skills - Back-End Languages
			</Typography>
			<Box className={classes.skillBox}>
				{backLanguageSkillList.map((s, k) => (
					<SkillBox key={k} skill={s} />
				))}
			</Box>
			<Divider className={classes.skillDivider} />
			<Typography className={classes.skillTitle} variant='h4'>
				Web Skills - Back-End Frameworks
			</Typography>
			<Box className={classes.skillBox}>
				{backFrameworkSkillList.map((s, k) => (
					<SkillBox key={k} skill={s} />
				))}
			</Box>
			<Divider className={classes.skillDivider} />
			<Typography className={classes.skillTitle} variant='h4'>
				Environment
			</Typography>
			<Box className={classes.skillBox}>
				{envSkillList.map((s, k) => (
					<SkillBox key={k} skill={s} />
				))}
			</Box>
			<Divider className={classes.skillDivider} />
			<Typography className={classes.skillTitle} variant='h4'>
				Tools
			</Typography>
			<Box className={classes.skillBox}>
				{toolSkillList.map((s, k) => (
					<SkillBox key={k} skill={s} />
				))}
			</Box>
			<Divider className={classes.skillDivider} />
			<Typography className={classes.skillTitle} variant='h4'>
				Communication
			</Typography>
			<Box className={classes.skillBox}>
				{communicationSkill.map((s, k) => (
					<SkillBox key={k} skill={s} />
				))}
			</Box>
		</Box>
	);
};

export { Skills };
