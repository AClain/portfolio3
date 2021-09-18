import { FC, useState } from "react";
import { Box } from "@material-ui/core";
import { ProjectList } from "./ProjectList";
import { FocusProject } from "./FocusProject";
import { Project } from "types";

import { useStyles } from "./Projects.styles";

const Projects: FC<{}> = () => {
	const classes = useStyles();

	const [focusedProject, setFocusedProject] = useState<Project | null>(null);

	const close = () => {
		setFocusedProject(null);
	};

	const projectList: Array<Project> = [
		{
			img: "/images/irc.png",
			title: "IRC",
			description:
				"This project's goal is to reproduce the fonctionnality of an IRC (Internet Relay Chat). It uses a graphical interface along with a command-like system to navigate between discussion rooms.",
			languages: [
				{
					name: "Javascript",
					img: "/images/svgs/javascript.svg",
				},
				{
					name: "Socket.io",
					img: "/images/svgs/socketio.svg",
				},
				{
					name: "NodeJS",
					img: "/images/svgs/nodejs.svg",
				},
			],
			frameworks: [
				{
					name: "ReactJS",
					img: "/images/svgs/react.svg",
				},
			],
		},
		{
			img: "/images/italks.png",
			title: "iTalks",
			description: "Project done during the second year of education at Epitech. Done in a group of 5",
			languages: [
				{
					name: "Javascript",
					img: "/images/svgs/javascript.svg",
				},
				{
					name: "Typescript",
					img: "/images/svgs/typescript.svg",
				},
				{
					name: "PHP",
					img: "/images/svgs/php.svg",
				},
				{
					name: "MySQL",
					img: "/images/svgs/mysql.svg",
				},
			],
			frameworks: [
				{
					name: "ReactJS",
					img: "/images/svgs/react.svg",
				},
				{
					name: "Material-UI",
					img: "/images/svgs/materialui.svg",
				},
				{
					name: "Laravel",
					img: "/images/svgs/laravel.svg",
				},
			],
		},
		{
			img: "/images/musicbank.png",
			title: "MusicBank",
			description: "'MusicBank' is a service to search and add music resources (artists, albums, etc.) via an API.",
			languages: [
				{
					name: "Javascript",
					img: "/images/svgs/javascript.svg",
				},
				{
					name: "PHP",
					img: "/images/svgs/php.svg",
				},
				{
					name: "MySQL",
					img: "/images/svgs/mysql.svg",
				},
			],
			frameworks: [
				{
					name: "ReactJS",
					img: "/images/svgs/react.svg",
				},
				{
					name: "Material-UI",
					img: "/images/svgs/materialui.svg",
				},
				{
					name: "Symfony",
					img: "/images/svgs/symfony.svg",
				},
			],
		},
		{
			img: "/images/numbers.png",
			title: "Numbers",
			description: "Personal project done in order to learn more about api and ReactJS.",
			languages: [
				{
					name: "Javascript",
					img: "/images/svgs/javascript.svg",
				},
			],
			frameworks: [
				{
					name: "ReactJS",
					img: "/images/svgs/react.svg",
				},
				{
					name: "Material-UI",
					img: "/images/svgs/materialui.svg",
				},
			],
		},
		{
			img: "/images/portfolio.png",
			title: "Portfolio V1",
			description: "First 'production-ready' portfolio I built.",
			languages: [
				{
					name: "Javascript",
					img: "/images/svgs/javascript.svg",
				},
			],
			frameworks: [
				{
					name: "ReactJS",
					img: "/images/svgs/react.svg",
				},
				{
					name: "Material-UI",
					img: "/images/svgs/materialui.svg",
				},
			],
		},
		{
			img: "/images/portfoliov2.png",
			title: "Portfolio V2",
			description: "Second 'production-ready' portfolio I built.",
			languages: [
				{
					name: "Javascript",
					img: "/images/svgs/javascript.svg",
				},
			],
			frameworks: [
				{
					name: "ReactJS",
					img: "/images/svgs/react.svg",
				},
				{
					name: "Material-UI",
					img: "/images/svgs/materialui.svg",
				},
			],
		},
		{
			img: "/images/previouslyon.png",
			title: "Previously On",
			description:
				"Based on the 'Betaseries' API, this project's goal is to keep up with your history of series and shows you've watched. It is possible to preview, archive or bookmark a series as well as to consult the details of the series and its episodes.",
			languages: [
				{
					name: "Javascript",
					img: "/images/svgs/javascript.svg",
				},
			],
			frameworks: [
				{
					name: "ReactJS",
					img: "/images/svgs/react.svg",
				},
				{
					name: "Material-UI",
					img: "/images/svgs/materialui.svg",
				},
			],
		},
		{
			img: "/images/wisecom.png",
			title: "Wisecom",
			description: "A short description",
			languages: [
				{
					name: "PHP",
					img: "/images/svgs/php.svg",
				},
			],
			frameworks: [
				{
					name: "Laravel",
					img: "/images/svgs/laravel.svg",
				},
			],
		},
	];

	return (
		<>
			{focusedProject && <FocusProject close={close} project={focusedProject} />}
			<Box className={classes.container}>
				<h1 className='title'>Projects</h1>
				<ProjectList setFocusedProject={setFocusedProject} projects={projectList} />
			</Box>
		</>
	);
};

export { Projects };
