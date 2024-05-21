export type Link = {
  url: string;
  title: string;
};

export type Project = {
  name: string;
  description: string;
  technologies: Technology[];
  createdAt: string;
  projectComplexity: number;
  projectUsefulness: number;
  funToCode: number;
  links: Link[];
  loom: string;
};

type KnownTechnologies =
  | "drizzle-orm"
  | "Elysia"
  | "React"
  | "BlitzJS"
  | "Javascript"
  | "TypeScript"
  | "TailwindCSS"
  | "Remix"
  | "TSPattern"
  | "Elixir"
  | "Pheonix"
  | "Rails"
  | "Ruby"
  | "CSS"
  | "HTML"
  | "express"
  | "bun"
  | "NestJS"
  | "NextJS"
  | "Rust"
  | "Prisma"
  | "Postgres"
  | "ReactNative"
  | "Firebase"
  | "VueJS"
  | "ReactQuery";

export type Technology = {
  name: KnownTechnologies;
  description: string;
  link?: string;
};
export const technologies: Record<KnownTechnologies, Technology> = {
  "drizzle-orm": {
    name: "drizzle-orm",
    description:
      "Drizzle is another typescript ORM similar to Prisma. Unlike prisma, it's more focused on being capable of raw-SQL-like queries, and also doesn't have a build step. This can make deploying it much easier, and working with it everyday a more general learning experience which I love. ",
    link: "https://orm.drizzle.team/docs/overview",
  },
  Elysia: {
    name: "Elysia",
    description:
      "Elysia is a backend framework for bun. It's very fun and it's typesafty is truly quite noice! As well as this it's pretty blazingly fast 🚀",
    link: "https://elysiajs.com/",
  },
  ReactQuery: {
    name: "ReactQuery",
    description:
      "React Query (Tanstack Query) is a library that is a state manager specifically designed to synchronizing frontend state with the server",
    link: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  VueJS: {
    name: "VueJS",
    description:
      "VueJS is a progressive Javascript framework that is used for building user interfaces. For my capstone at Flatiron school as a student I taught myself  VueJS!",
    link: "https://vuejs.org/",
  },
  BlitzJS: {
    name: "BlitzJS",
    description:
      "BlitzJS is a fullstack React framework that is built on top of NextJS. The creator tried bringing Rails style developer experience to the typescript world.",
    link: "https://blitzjs.com/",
  },
  Firebase: {
    name: "Firebase",
    description:
      "Firebase is a platform developed by Google for creating mobile and web applications. You can use it for data / authentication / deployment / and more.",
    link: "https://console.firebase.google.com/?pli=1",
  },
  ReactNative: {
    name: "ReactNative",
    description:
      "React Native is a framework for building mobile applications using React. It allows you to build mobile applications using the same codebase as your web applications.",
    link: "https://reactnative.dev/",
  },
  Postgres: {
    name: "Postgres",
    description:
      "Postgres is a relational database that is known for its reliability and performance. It is a great choice for many projects.",
    link: "https://www.postgresql.org/",
  },
  Prisma: {
    name: "Prisma",
    description:
      "Prisma is a modern database toolkit that makes it easy to work with databases. It is a great choice for many projects.",
    link: "https://www.prisma.io/",
  },
  CSS: {
    name: "CSS",
    description:
      "CSS is how we style our websites. If a website is a building, CSS is the paint, the wallpaper, and the furniture.",
  },
  HTML: {
    name: "HTML",
    description:
      "HTML is the structure of the website. If a website is a building, HTML is the foundation, the walls, and the roof.",
  },
  Javascript: {
    name: "Javascript",
    description:
      "Javascript is the programming language of the web. It allows us to make our websites interactive and dynamic.",
  },
  TypeScript: {
    name: "TypeScript",
    description:
      "Typescript is a superset of Javascript. It adds static types to Javascript, which can help catch bugs before they happen. Typescript saves energy time and money by completely eliminating many bugs. In fact, this website is built with Typescript!",
    link: "https://www.typescriptlang.org/",
  },
  Elixir: {
    name: "Elixir",
    description:
      "Elixir is a functional programming language that is built on top of the Erlang VM. It is known for its scalability and fault tolerance.",
    link: "https://elixir-lang.org/",
  },
  Rust: {
    name: "Rust",
    description:
      "Rust is a systems programming language that is known for its speed and safety. It is used in projects where performance is critical.",
    link: "https://www.rust-lang.org/",
  },
  React: {
    name: "React",
    description:
      "React is a Javascript library for building user interfaces. It allows us to simplify the relationshp between the data and the UI. Allowing us to make better websites eaven easier.",
    link: "https://react.dev/",
  },
  TSPattern: {
    name: "TSPattern",
    description:
      "TS-Pattern is a library that brings pattern matching to Typescript!",
    link: "https://github.com/gvergnaud/ts-pattern",
  },
  bun: {
    name: "bun",
    description:
      "Bun is a JS / TS runtime that brings both performance and a good developer experience to the ecosystem. In fact, this website is built with Bun! ",
    link: "https://bun.sh/",
  },
  express: {
    name: "express",
    description:
      "Express is a fast, unopinionated, minimalist web framework for Node.js. Honestly, it's kind of old and these days there's better frameworks... But hey if it ain't borke don't fix it.",
    link: "https://expressjs.com/",
  },
  NestJS: {
    name: "NestJS",
    description:
      "NestJS is an framework for building efficient, scalable Node.js server-side applications. It is largely architected after Java's Spring Boot",
    link: "https://nestjs.com/",
  },
  NextJS: {
    name: "NextJS",
    description:
      "NextJS is a React framework that allows for server side rendering and static site generation. It is a great choice for building fast and scalable websites. In fact, this website is built with NextJS!",
    link: "https://nextjs.org/",
  },
  Pheonix: {
    name: "Pheonix",
    description:
      "Pheonix is a web framework for Elixir. It's based off of Ruby on Rails but due to the language features of erlang tends to handle more traffic with less setup.",
    link: "https://www.phoenixframework.org/",
  },
  Rails: {
    name: "Rails",
    description:
      "Rails is a web application framework written in Ruby. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started.",
    link: "https://rubyonrails.org/",
  },
  Remix: {
    name: "Remix",
    description:
      "Remix is a full stack web framework that allows for server side rendering and static site generation. It is a great choice for very quickly building a product to life with quality code.",
    link: "https://remix.run/",
  },
  Ruby: {
    name: "Ruby",
    description:
      "Ruby is a dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",
    link: "https://www.ruby-lang.org/en/",
  },
  TailwindCSS: {
    name: "TailwindCSS",
    description:
      "TailwindCSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. In fact, this website is built with TailwindCSS!",
    link: "https://tailwindcss.com/",
  },
};

export const projects: Project[] = [
  {
    name: "Remenu",
    description:
      "Remenu is a scope specific CMS for restaurants that allows them to customize their menus on the fly. Remenu is simple enough for restaurant owners to use, easily embeddable by wordpress devs, and creates beautiful menus.",
    loom: "https://www.loom.com/embed/05ab696a8c2140dfb842c81801d1d450?sid=77de584e-2ff3-4b72-82f7-88b2e70e0d39",
    createdAt: "April 1st, 2022",
    links: [
      {
        url: "https://remenu.io",
        title: "Remenu",
      },
    ],
    funToCode: 4,
    projectUsefulness: 5,
    projectComplexity: 4,
    technologies: [
      technologies.Remix,
      technologies.React,
      technologies.TypeScript,
      technologies["TSPattern"],
      technologies.Prisma,
      technologies.bun,
      technologies.Postgres,
    ],
  },
  {
    name: "Portfolio",
    description:
      "This very site that you are viewing! It's a fun little project that took about a week to make",
    createdAt: "May 24th, 2024",
    funToCode: 5,
    projectComplexity: 2,
    projectUsefulness: 3,
    loom: "https://www.loom.com/embed/2d2679c910db4188a75c8121c9cb8f55?sid=29b23544-3c16-4370-871d-11f3e668e58f",
    links: [
      {
        url: "/",
        title: "This Website",
      },
    ],
    technologies: [
      ...(
        [
          "TailwindCSS",
          "CSS",
          "NextJS",
          "HTML",
          "TypeScript",
        ] satisfies KnownTechnologies[]
      ).map((tech) => technologies[tech]),
    ],
  },
  {
    name: "DativeApp",
    loom: "https://www.loom.com/embed/1f2a6cf4121f4275995b82992fac37fe?sid=42ddc923-e677-4003-bf2a-c2e583c136d4",
    description:
      "DativeApp is platform for partners to discover and track fun date ideas. You can download it right now if you have an iOS device",
    links: [
      {
        url: "https://www.dativeapp.com/",
        title: "Check Out DativeApp",
      },
    ],
    createdAt: "May 6th, 2021",
    funToCode: 5,
    projectComplexity: 4,
    projectUsefulness: 4,
    technologies: [
      ...(
        [
          "TypeScript",
          "ReactNative",
          "Firebase",
          "NestJS",
          "Postgres",
        ] satisfies KnownTechnologies[]
      ).map((tech) => technologies[tech]),
    ],
  },
  {
    name: "Noteworthy",
    description:
      "Noteworthy is a weekend experiment to play around with Elixir and Rust. The main data is built with Elixir and the Pheonix framework including Pheonix LiveView for frontend work",
    createdAt: "January 30th, 2021",
    funToCode: 5,
    projectComplexity: 3,
    projectUsefulness: 2,
    links: [
      { title: "Noteworthy", url: "https://github.com/jjhiggz/noteworthy" },
    ],
    technologies: [
      ...(
        [
          "Elixir",
          "Rust",
          "Pheonix",
          "TailwindCSS",
          "HTML",
          "CSS",
        ] satisfies KnownTechnologies[]
      ).map((tech) => technologies[tech]),
    ],
    loom: "https://www.loom.com/embed/18ea3bb8c04946f7976ef45f082efd2a",
  },
  {
    name: "DoomTyper",
    loom: "https://www.loom.com/embed/9f9b47ad53de46eb934a03ccc6173b3a?sid=28f3fb33-375b-4478-9254-82f0d4f3f88e",
    description:
      'A "DOOM" themed typing test. Battle your friends, and have some fun <3',
    createdAt: "",
    links: [
      {
        title: "Original Repo",
        url: "https://github.com/jjhiggz/DOOMTYPER_fulstack",
      },
      {
        title: "Revised Backend (Elysia)",
        url: "https://github.com/jjhiggz/doomtyper-elysia-backend",
      },
      {
        title: "Revised Frontend (Vite Build)",
        url: "https://github.com/jjhiggz/doomtyper_frontend_redeploy",
      },
      {
        title: "Play DoomTyper",
        url: "https://doomtyper.netlify.app/",
      },
    ],
    funToCode: 5,
    projectComplexity: 3,
    projectUsefulness: 1,
    technologies: [
      ...(
        [
          "VueJS",
          "Javascript",
          "CSS",
          "HTML",
          "Elysia",
          "bun",
          "Rails",
          "drizzle-orm",
          "Postgres",
        ] satisfies KnownTechnologies[]
      ).map((tech) => technologies[tech]),
    ],
  },
  {
    name: "Property Tracker",
    loom: "https://www.loom.com/embed/5bdb580e1fa4498ea11127320d7e8cc8?sid=5b0ce983-6222-48b2-a136-30fbc2614aca",
    description:
      "A property tracking application that provides the client with realtime feedback on the customers that are viewing.",
    links: [
      {
        title: "Property Tracker Case Study",
        url: "https://www.skycompassmedia.com/portfolio-spmultifamilygroup/",
      },
    ],
    createdAt: "Oct 24, 2021",
    funToCode: 4,
    projectComplexity: 3,
    projectUsefulness: 5,
    technologies: [
      ...(
        [
          "BlitzJS",
          "TypeScript",
          "ReactQuery",
          "TailwindCSS",
          "Postgres",
        ] satisfies KnownTechnologies[]
      ).map((tech) => technologies[tech]),
    ],
  },
];
