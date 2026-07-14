import { BsGithub } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbCloudComputing, TbApi } from "react-icons/tb";
import {
  SiExpress,
  SiUbuntu,
  SiPostman,
  SiCplusplus,
  SiMongoosedotws,
  SiAmazonec2,
  SiAmazons3,
  SiAwslambda,
  SiAmazonroute53,
  SiAmazondynamodb,
  SiAmazonrds,
  SiLinux,
  SiTerraform,
  SiDocker,
  SiJenkins,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiAmazoniam,
  SiAmazoncloudwatch,
} from "react-icons/si";

import { FaAws } from "react-icons/fa";
import { AiFillHtml5, AiOutlineConsoleSql } from "react-icons/ai";
import { DiCss3, DiMongodb, DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs, FaGit } from "react-icons/fa";

const skillsList = [
  { icon: <RiReactjsLine className="skills-icon switch__color" />, spanText: "React" },
  { icon: <TbBrandNextjs className="skills-icon switch__color" />, spanText: "Next JS" },
  { icon: <IoLogoJavascript className="skills-icon switch__color" />, spanText: "JavaScript" },
  { icon: <SiTypescript className="skills-icon switch__color" />, spanText: "TypeScript" },
  { icon: <FaNodeJs className="skills-icon switch__color" />, spanText: "NodeJs" },
  { icon: <SiExpress className="skills-icon switch__color" />, spanText: "Express" },
  { icon: <AiFillHtml5 className="skills-icon switch__color" />, spanText: "HTML5" },
  { icon: <DiCss3 className="skills-icon switch__color" />, spanText: "CSS" },
  { icon: <SiTailwindcss className="skills-icon switch__color" />, spanText: "Tailwind CSS" },
  { icon: <DiMongodb className="skills-icon switch__color" />, spanText: "MongoDB" },
  { icon: <SiMongoosedotws className="skills-icon switch__color" />, spanText: "Mongoose" },
  { icon: <DiMysql className="skills-icon switch__color" />, spanText: "MySQL" },
  { icon: <SiPostgresql className="skills-icon switch__color" />, spanText: "PostgreSQL" },
  { icon: <AiOutlineConsoleSql className="skills-icon switch__color" />, spanText: "SQL" },
  { icon: <FaAws className="skills-icon switch__color" />, spanText: "AWS" },
  { icon: <SiAmazonec2 className="skills-icon switch__color" />, spanText: "EC2" },
  { icon: <SiAmazons3 className="skills-icon switch__color" />, spanText: "S3" },
  { icon: <SiAmazoniam className="skills-icon switch__color" />, spanText: "IAM" },
  { icon: <SiAmazonrds className="skills-icon switch__color" />, spanText: "RDS" },
  { icon: <SiAmazondynamodb className="skills-icon switch__color" />, spanText: "DynamoDB" },
  { icon: <SiAmazonroute53 className="skills-icon switch__color" />, spanText: "Route 53" },
  { icon: <SiAwslambda className="skills-icon switch__color" />, spanText: "Lambda" },
  { icon: <SiAmazoncloudwatch className="skills-icon switch__color" />, spanText: "CloudWatch" },
  { icon: <TbCloudComputing className="skills-icon switch__color" />, spanText: "Cloud Computing" },
  { icon: <SiTerraform className="skills-icon switch__color" />, spanText: "Terraform" },
  { icon: <SiDocker className="skills-icon switch__color" />, spanText: "Docker" },
  { icon: <SiJenkins className="skills-icon switch__color" />, spanText: "Jenkins" },
  { icon: <SiCplusplus className="skills-icon switch__color" />, spanText: "C++" },
  { icon: <FaGit className="skills-icon switch__color" />, spanText: "Git" },
  { icon: <BsGithub className="skills-icon switch__color" />, spanText: "GitHub" },
  { icon: <SiPostman className="skills-icon switch__color" />, spanText: "Postman" },
  { icon: <SiUbuntu className="skills-icon switch__color" />, spanText: "Ubuntu" },
  { icon: <SiLinux className="skills-icon switch__color" />, spanText: "Linux" },
  { icon: <TbApi className="skills-icon switch__color" />, spanText: "REST APIs" },
];

export default skillsList;