import { GrGithub } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";

// projects' id, name, stacks, icon and url data
const Projects_data = [
  {
    id: 1,
    name: "Techwork",
    desc: "On this platform, there were two user modes: developer mode and client mode. With each other's contact details at hand, the developers and clients could establish connections.According to his requirements, the client may look for a developer, and the developer may ask for a position on the client's project.",
    stack: "HTML CSS Bootstrap JavaScript jQuery .NET-MVC MSSQL-Server   Entity-Framework ",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/rajgupta2/Techwork",
    },
    website: {
      icon: <TbWorld />,
      url: "",
    },
    imgUrl: "Techwork.png",
  },
  {
    id: 2,
    name: "StudyStudent",
    desc: "A platform called StudyStudent allowed students to access study guides, take online tests, and turn in their homework. The administrator, who is also the teacher, can upload study materials, manage student results, and assign homework.",
    stack: "HTML CSS Bootstrap JavaScript jQuery Node-JS Mongoose MongoDB  OAuth-2.0  Google-Recaptcha-API",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/rajgupta2/StudyStudent",
    },
    website: {
      icon: <TbWorld />,
      url: "https://github.com/rajgupta2/",
    },
    imgUrl: "StudyStudent.png",
  },
  {
    id: 3,
    name: "Engineer ",
    desc: "The Engineer website focused on studying and contributing to works and notes.",
    stack: "Next-JS Tailwind-CSS  Git",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/rajgupta2/rajgupta2.github.io",
    },
    website: {
      icon: <TbWorld />,
      url: "https://rajgupta2.github.io/",
    },
    imgUrl: "Engineer.png",
  },
  {
    id:4 ,
    name: "My own Portfolio",
    desc: "My portfolio includes a career summary, personal introduction, my projects and my skills. ",
    stack: "Next-JS Bootstrap CSS JSX Git",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/rajgupta2/Raj-Gupta-Portfolio",
    },
    website: {
      icon: <TbWorld />,
      url: "https://raj-gupta-portfolio.netlify.app/",
    },
    imgUrl: "Portfolio.png",
  },
];
export default Projects_data;
