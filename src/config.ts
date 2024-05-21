import icon from "../src/assets/icon.png";

interface IConfig {
	me: {
		name: string;
		job: string;
		started: string;
		stack: string;
		projectLink: string;
	};
	projects: {
		home: {
			[name: string]: {
				url: string;
				tags: string[];
			};
		};
		all: {
			[name: string]: {
				url: string;
				tags: string[];
			};
		};
	};
	og: {
		image: string;
	};
}

export const Config: IConfig = {
	me: {
		name: "tianheg",
		job: "web developer",
		started: "2020-03-20",
		stack: "JavaScript",
		projectLink: "/projects",
	},
	projects: {
		home: {
			"Observable Framework demo": {
				url: "https://observable-framework-demo-tianheg.vercel.app/",
				tags: ["data app", "observable"],
			},
			"PDF modification": {
				url: "https://vanilla-tianheg.vercel.app/extract-pdf/",
				tags: ["PDF", "extract"],
			},
		},
		all: {
			Vanilla: {
				url: "https://vanilla-tianheg.vercel.app/",
				tags: ["JavaScript", "CSS", "HTML", "vanilla"],
			},
		},
	},
	og: {
		image: icon.src,
	},
};
