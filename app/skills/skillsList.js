import { BsBootstrapFill, BsGithub } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbCloudComputing,TbBrandCSharp,TbApi } from "react-icons/tb";
import {
  SiAwselasticloadbalancing,
  SiJquery,
  SiExpress,
  SiCanva,
  SiUbuntu,
  SiNetlify,
  SiPostman,
  SiCplusplus,
  SiMongoosedotws,
  SiAmazonec2,
  SiAmazons3,
  SiAwslambda,
  SiAmazonroute53,
  SiAmazondynamodb,
  SiAmazonrds,
  SiLinux
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import {
  AiFillHtml5,
  AiOutlineConsoleSql,
} from "react-icons/ai";
import { DiCss3, DiMongodb, DiJava, DiMysql, DiDotnet} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaGit } from "react-icons/fa";

const skillsList = [
    {
      icon: <RiReactjsLine className="skills-icon switch__color" />,
      spanText: "React",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
    },
    {
      icon: <TbBrandNextjs className="skills-icon switch__color" />,
      spanText: "Next JS",
      url: ""
    },
    {
      icon: <FaNodeJs className="skills-icon switch__color" />,
      spanText: "NodeJs",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
    },
    {
      icon: <SiExpress className="skills-icon switch__color" />,
      spanText: "Express",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Express",
    },
    {
      icon: <DiDotnet className="skills-icon switch__color" />,
      spanText: "ASP .Net",
      url: "",
    },
    {
      icon: <DiMongodb className="skills-icon switch__color" />,
      spanText: "MongoDB",
      url: "",
    },
    {
      icon: <SiMongoosedotws className="skills-icon switch__color" />,
      spanText: "Mongoose",
      url: "",
    },
    {
      icon: <FaAws className="skills-icon switch__color" />,
      spanText: "AWS",
      url: "",
    },
    {
      icon: <AiFillHtml5 className="skills-icon switch__color" />,
      spanText: "HTML5",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <DiCss3 className="skills-icon switch__color" />,
      spanText: "CSS",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <IoLogoJavascript className="skills-icon switch__color" />,
      spanText: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
    },
    // {
    //   icon: <SiSass className="skills-icon switch__color" />,
    //   spanText: "Saas",
    //   url: "",
    // },
    {
      icon: <BsBootstrapFill className="skills-icon switch__color" />,
      spanText: "Bootstrap",
      url: "",
    },

    {
      icon: <SiJquery className="skills-icon switch__color" />,
      spanText: "JQuery",
      url: "",
    },
    // {
    //   icon: <FaPython className="skills-icon switch__color" />,
    //   spanText: "Python",
    //   url: "",
    // },
    {
      icon: <SiCplusplus className="skills-icon switch__color" />,
      spanText: "C++",
      url: "",
    },
    {
      icon: <TbBrandCSharp className="skills-icon switch__color" />,
      spanText: "C#",
      url: "",
    },
    {
      icon: <DiJava className="skills-icon switch__color" />,
      spanText: "Java",
      url: "",
    },
    {
      icon: <AiOutlineConsoleSql className="skills-icon switch__color" />,
      spanText: "SQL",
      url: "",
    },
    {
      icon: <DiMysql className="skills-icon switch__color" />,
      spanText: "MySQL",
      url: "",
    },
    // {
    //   icon: <SiPostgresql className="skills-icon switch__color" />,
    //   spanText: "PostgreSQL",
    //   url: "",
    // },
    {
      icon: <SiPostman className="skills-icon switch__color" />,
      spanText: "Postman",
      url: "",
    },
    {
      icon: <FaGit className="skills-icon switch__color" />,
      spanText: "Git",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
    },
    {
      icon: <BsGithub className="skills-icon switch__color" />,
      spanText: "GitHub",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
    },
    {
      icon: <SiNetlify className="skills-icon switch__color" />,
      spanText: "Netlify",
      url: "",
    },
    {
      icon: <SiUbuntu className="skills-icon switch__color" />,
      spanText: "Ubuntu",
      url: "",
    },
    // {
    //   icon: <FiFigma className="skills-icon switch__color" />,
    //   spanText: "Figma",
    //   url: "https://figma.com",
    // },
    // {
    //   icon: <SiAdobephotoshop className="skills-icon switch__color" />,
    //   spanText: "Photoshop",
    //   url: "",
    // },
    {
      icon: <SiCanva className="skills-icon switch__color" />,
      spanText: "Canva",
      url: "",
    },
    {
      icon: <TbApi className="skills-icon switch__color" />,
      spanText: "API",
      url: "",
    },
    {
      icon: <SiAmazonec2 className="skills-icon switch__color" />,
      spanText: "EC2 VM",
      url: "",
    },
    {
      icon: <SiAwselasticloadbalancing className="skills-icon switch__color" />,
      spanText: "Load Balancer",
      url: "",
    },
    {
      icon: <SiAmazons3 className="skills-icon switch__color" />,
      spanText: "AWS S3",
      url: "",
    },
    {
      icon: <SiAmazonrds className="skills-icon switch__color" />,
      spanText: "AWS RDS",
      url: "",
    },
    {
      icon: <SiAmazondynamodb className="skills-icon switch__color" />,
      spanText: "DynamoDB",
      url: "",
    },
    {
      icon: <SiAmazonroute53 className="skills-icon switch__color" />,
      spanText: "Route 53",
      url: "",
    },
    {
      icon: <TbCloudComputing className="skills-icon switch__color" />,
      spanText: "Cloud Computing",
      url: "",
    },
    {
      icon: <SiAwslambda className="skills-icon switch__color" />,
      spanText: "Lambda",
      url: "",
    },
    {
      icon: <SiLinux className="skills-icon switch__color" />,
      spanText: "Linux",
      url: "",
    },
  ];

  export default skillsList;