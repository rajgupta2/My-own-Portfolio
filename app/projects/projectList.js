import { GrGithub } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";

// projects' id, name, stacks, icon and url data
const Projects_data = [
  {
    name: "SkillHub",
    desc: "A student resource-sharing platform where users discover study resources, pyqs, tutorials, articles, college profiles, and community engagements through an intuitive dashboard. Built with server-side rendering and JWT-based authentication, integrating with a separate SkillHub backend via REST APIs.",
    stack:
      "Next-JS TypeScript React Tailwind-CSS shadcn/ui Docker REST-API AWS-S3",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/rajgupta2/SkillHub",
    },
    website: {
      icon: <TbWorld />,
      url: "https://skillhub-student.vercel.app/",
    },
    imgUrl: "SkillHub.png",
  },
  {
    name: "StudyStudent",
    desc: "An educational platform with separate student and admin dashboards. Students submit assignments, take tests, and access study materials, while admins assign homework, evaluate submissions, and manage student records — with Google Sign-In and reCAPTCHA-secured authentication.",
    stack:
      "Node-JS Express-JS MongoDB Mongoose Passport-JS Google-OAuth reCAPTCHA",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/rajgupta2/StudyStudent",
    },
    website: {
      icon: <TbWorld />,
      url: "https://studystudent.onrender.com/",
    },
    imgUrl: "StudyStudent.png",
  },
  {
    name: "AWS Terraform Infrastructure",
    desc: "An Infrastructure-as-Code project built during my DevOps internship at TechEazy Consulting. Used Terraform to provision and manage AWS infrastructure — including EC2 instances, S3 storage, and IAM roles/policies — with CloudWatch configured for monitoring and alerting.",
    stack: "Terraform AWS-EC2 AWS-S3 AWS-IAM AWS-CloudWatch AWS-SNS AWS-CLI",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/rajgupta2/tech_eazy_devops_rajgupta2",
    },
    website: {
      icon: <TbWorld />,
      url: "",
    },
    imgUrl: "TechEazyDevOps.png",
  },
  {
    name: "Techwork",
    desc: "A collaboration platform connecting developers and clients through role-based dashboards. Clients post project requirements and find developers matching their needs, while developers browse listings and bid on projects, all backed by secure, role-based authentication.",
    stack: "ASP.NET-MVC C# Entity-Framework MSSQL-Server MySQL",
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
    name: "Engineer - Technotes",
    desc: "A lightweight platform for studying and publishing technical notes, focused on fast page loads and clean content presentation. It is hosted on github pages.",
    stack: "Next-JS Tailwind-CSS Git Github-pages ",
    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/rajgupta2/Engineer",
    },
    website: {
      icon: <TbWorld />,
      url: "https://rajgupta2.github.io/Engineer/",
    },
    imgUrl: "Engineer.png",
  },
];
export default Projects_data;
