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
      Map: {
        url: "https://map-tianheg.vercel.app/",
        tags: ["mapbox", "Vite", "map"],
      },
      "Fogg Behavior Model": {
        url: "https://vanilla-tianheg.vercel.app/fogg-behavior-model/",
        tags: ["from book", "vanilla"],
      },
    },
    all: {
      Vanilla: {
        url: "https://vanilla-tianheg.vercel.app/",
        tags: ["JavaScript", "CSS", "HTML", "vanilla"],
      },
      "Learning Tree": {
        url: "https://learning-tree-tianheg.vercel.app/",
        tags: [
          "Next.js",
          "tree style",
          "https://blackglory.me/notes/typescript",
        ],
      },
      "Stable Diffusion XL Lightning": {
        url: "https://sdxl-lightning-tianheg.vercel.app/",
        tags: ["Stable Diffusion", "Text to Image"],
      },
      Calendar: {
        url: "https://calendar-tianheg.vercel.app/",
        tags: ["React.js", "Radix UI"],
      },
      "Pinia Tasks": {
        url: "https://tasks-tianheg.pages.dev/",
        tags: ["Vue.js", "Pinia"],
      },
      "Hacker News": {
        url: "https://hn-tianheg.vercel.app/",
        tags: ["Nuxt.js"],
      },
      "Cloudflare D1 Manager": {
        url: "https://cf-d1-manager-tianheg.pages.dev/",
        tags: ["Cloudflare", "database"],
      },
      "ffmpeg.zh_CN": {
        url: "https://ffmpeg-tianheg.vercel.app/",
        tags: ["ffmpeg", "LLM", "Next.js", "WASM"],
      },
      "Brave Search": {
        url: "https://brave-search-demo-tianheg.vercel.app/",
        tags: ["Brave Search", "API", "Vue.js", "fastify"],
      },
      "Moodist 环境音": {
        url: "https://moodist-tianheg.vercel.app/",
        tags: [
          "sound",
          "Astro",
          "React.js",
          "Framer Motion",
          "Zustand",
          "react-wrap-balancer",
        ],
      },
    },
  },
  og: {
    image: icon.src,
  },
};
