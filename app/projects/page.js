"use client";
import { Bounce } from 'react-awesome-reveal';
import Fade from "react-awesome-reveal";
import projectList from "./projectList.js";
import "./projects.css";
import Image from 'next/image.js';

const Project = (props) => {
    const { imgUrl, name, desc, stack, gitHubUrl, website } = props;
    return (
            <div className="pt-2 mb-4 section_single_projects border-2 border-info">
                <h3 className='ps-3'>{name}</h3>
                <Image src={"/"+imgUrl} alt="project-image" width={0} height={0} sizes="100vw" className='border border-top'/>
                {/* <div className="project_contents">
                    <div className='project_description text-justify'>
                        <div className="switching-color">{name}</div>
                        <div className='text-justify'>{desc}</div>
                        <div className="switching-color">Built with</div>
                        <div className="text-success">{stack}</div>
                    </div>
                    <div className="project_icon">
                        <a href={gitHubUrl.url}>
                            {gitHubUrl.icon}
                        </a>
                        <a href={website.url}>
                            {website.icon}
                        </a>
                    </div>
                </div> */}
            </div>
    );
};

export default function Projects() {
    return (
        <>
            <div className='row'>
                <h1 className="switching-color">My Projects </h1>
                <p style={{ fontSize: 'larger' }}>
                        These are some of the projects I have worked on.
                </p>
            </div>
            {
                projectList.map((project, index) => {
                    return <Project {...project} key={index} />
                })
            }
        </>
    );
}




