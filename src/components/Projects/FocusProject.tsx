import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from "@material-ui/core";
import { FC } from "react";
import { Project } from "types";

import { useStyles } from "./FocusProject.styles";

interface FocusProjectProps {
	project: Project;
	close: Function;
}

const FocusProject: FC<FocusProjectProps> = ({ project, close }) => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Box
				onClick={() => {
					close();
				}}
				className={classes.overlay}
			></Box>
			<Box className={classes.projectBox}>
				<img className={classes.projectImg} src={project.img} alt={project.title} />
				<Typography className={classes.projectTitle} variant='h3'>
					{project.title}
				</Typography>
				<Typography className={classes.projectDescription} variant='subtitle1'>
					{project.description}
				</Typography>
				<Divider />
				<List component='nav'>
					<Typography variant='subtitle2'>Language(s) used</Typography>
					{project.languages.map((l, k) => (
						<ListItem button>
							<ListItemIcon>
								<img className='icon' src={l.img} alt={l.name} />
							</ListItemIcon>
							<ListItemText primary={l.name} />
						</ListItem>
					))}
				</List>
				<Divider />
				{project.languages.length > 0 && (
					<List component='nav'>
						<Typography variant='subtitle2'>Framework(s) used</Typography>
						{project.frameworks?.map((f, k) => (
							<ListItem button>
								<ListItemIcon>
									<img className='icon' src={f.img} alt={f.name} />
								</ListItemIcon>
								<ListItemText primary={f.name} />
							</ListItem>
						))}
					</List>
				)}
			</Box>
		</Box>
	);
};

export { FocusProject };
