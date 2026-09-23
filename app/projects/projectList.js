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
  }
];
export default Projects_data;
