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
			"996.ICU": {
				url: "https://github.com/996icu/996.ICU",
				tags: ["ccp", "chinese", "overwork", "labor", "996"],
			},
			Linux: {
				url: "https://github.com/torvalds/linux",
				tags: ["c", "kernel", "unix", "os"],
			},
		},
		all: {
			"996.ICU": {
				url: "https://github.com/996icu/996.ICU",
				tags: ["ccp", "chinese", "overwork", "labor", "996"],
			},
			Linux: {
				url: "https://github.com/torvalds/linux",
				tags: ["c", "kernel", "unix", "os"],
			},
			Liux: {
				url: "https://github.com/torvalds/linux",
				tags: ["c", "kernel", "unix", "os"],
			},
		},
	},
	og: {
		image: icon.src,
	},
};
