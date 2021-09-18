import { FC } from "react";
import { Box } from "@material-ui/core";
import { Project } from "types";

import { useStyles } from "./ProjectList.styles";
import { InView } from "react-intersection-observer";

interface ProjectListProps {
	projects: Array<Project>;
	setFocusedProject: Function;
}

const ProjectList: FC<ProjectListProps> = ({ projects, setFocusedProject }) => {
	const classes = useStyles();

	const focusProject = (project: Project) => {
		console.log(project);
		setFocusedProject(project);
	};

	const addInView = (inView: boolean, entry: any) => {
		if (inView) {
			entry.target.classList.add(classes.inView);
		}
	};

	return (
		<Box className={classes.container}>
			{projects.map((p, k) => (
				<InView
					as='div'
					onClick={() => {
						focusProject(p);
					}}
					className={classes.imgBox}
					key={k}
					onChange={(inView, entry) => addInView(inView, entry)}
					threshold={0.3}
				>
					<img loading='lazy' className={classes.img} src={p.img} alt={p.title} />
				</InView>
			))}
		</Box>
	);
};

export { ProjectList };
