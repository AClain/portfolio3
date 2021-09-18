export type Skill = {
	name: string;
	img: string;
	link?: string;
};

export type Project = {
	title: string;
	description: string;
	img: string;
	languages: Array<Skill>;
	frameworks?: Array<Skill>;
};
