import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  firebase,
  optima,
  siema,
  millionaire,
  social_app,
  memorize_dots,
  chat_app,
  ftw_quiz,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "FrontEnd Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Product Localization Manager",
    company_name: "Optima Global",
    icon: optima,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "BI - collecting valuable data on prospect clients and competitors / other products on the market using available tools",
      "Communicating with various entities to ensure regulatory and security compliance, making relevant research",
      "Supervising and building wireframe diagrams, flow charts and various presentations",
      "Ensuring the product suits market needs and makes clients happy through collaboration with team members",
    ],
  },

  {
    title: "Manual Software Tester",
    company_name: "Siema",
    icon: siema,
    iconBg: "#383E56",
    date: "March 2021 - March 2022",
    points: [
      "Writing and executing on test plans, ensuring smooth operation and visual appeal of the product",
      "Writing test reports detailing findings",
      "Collaborating with team members to ensure smooth workflow and product integrity",
    ],
  },
];

const projects = [
  {
    name: "Millionaire — Game",
    description:
      "A quiz-like game (who wants to be a millionaire) tracking player progress and providing feedback on right/wrong answers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: millionaire,
    source_code_link: "https://github.com/slaffsla/millionaire-game",
    project_link: "https://millionaire-who-wants.web.app/",
  },
  {
    name: "Social App",
    description:
      "A social app where users can log in, post, delete and like messages. Facebook must be scared now!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: social_app,
    source_code_link: "https://github.com/slaffsla/social-app",
    project_link: "https://social-app-sla.web.app",
  },
  {
    name: "Colorful Bubbles App",
    description:
      "A fun app where you can place colorful bubbles on the screen. You can also undo and redo any action.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: memorize_dots,
    source_code_link: "https://github.com/slaffsla/memorize-dots-react",
    project_link: "https://colorful-bubbles-fun.web.app/",
  },
  {
    name: "Chat App",
    description:
      "App where users can log in, create rooms and chat on whichever subject they want.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chat_app,
    source_code_link: "https://github.com/slaffsla/react-chat-app",
    project_link: "https://cool-chat-app-ddee0.web.app/",
  },
  {
    name: "Interview Simulator",
    description:
      "React Native App for people preparing for a job interview. This is a collab.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "expo.dev",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ftw_quiz,
    source_code_link: "https://github.com/slaffsla/INTERVIEW-SIMULATOR",
    project_link: "https://snack.expo.dev/@zabaroth/ai-ftw-quiz",
  },
];

export { services, technologies, experiences, projects };
