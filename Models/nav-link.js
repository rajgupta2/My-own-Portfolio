import {AiFillHome} from 'react-icons/ai';
import {RiContactsBook3Line} from 'react-icons/ri';
import {SiProgress} from 'react-icons/si';
import {VscProject} from 'react-icons/vsc';
import{BsPersonLinesFill} from 'react-icons/bs';
import { RxResume } from "react-icons/rx";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const navlink = [
    {
      text: "Home",
      icon: <AiFillHome className="link-icon" />,
      url: "/",
    },
    {
      text: "About",
      icon: <BsPersonLinesFill className="link-icon" />,
      url: "about",
    },
    {
      text: "Skills",
      icon: <MdOutlineWorkspacePremium className="link-icon" />,
      url: "skills",
    },
    {
      text: "Projects",
      icon: <IoCodeWorkingOutline className="link-icon" />,
      url: "projects",
    },
    // {
    //   text: "Experience",
    //   icon: <GiNotebook className="link-icon" />,
    //   url: "experience",
    // },
    {
      text: "Contact",
      icon: <RiContactsBook3Line className="link-icon" />,
      url: "contact",
    },
    // {
    //     text: "Works",
    //     icon: <SiProgress className="link-icon" />,
    //     url: "works",
    // },
    {
      text: "Resume",
      icon: <RxResume className="link-icon" />,
      url: "resume",
  },
  ];
export default navlink;