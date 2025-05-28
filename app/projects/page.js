"use client";
import { Bounce } from 'react-awesome-reveal';
import Fade from "react-awesome-reveal";
import projectList from "./projectList.js";
import "./projects.css";
import Image from 'next/image.js';

const Project = (props) => {
    const { imgUrl, name, desc, stack, gitHubUrl, website } = props;
    return (
        <Fade bottom>
            <div className="mb-3 section_single_projects">
                <Image src={"/"+imgUrl} alt="project-image" width={0} height={0} sizes="100vw" />
                <div className="project_contents">
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
                </div>
            </div>
        </Fade>
    );
};

export default function Projects() {
    return (
        <>
            <div className='row'>
                <Bounce >
                    <h1 className="switching-color">My Projects </h1>
                </Bounce>
            </div>
            <div className='row'>
                <Fade bottom>
                    <p style={{ fontSize: 'larger' }}>
                        These are some of the projects I have worked on.
                    </p>
                </Fade>
            </div>
            <div className='row'>
                <div className='col-12 col-md-12 col-lg-12'>
                    {
                        projectList.map((project, index) => {
                            return <Project {...project} key={index} />
                        })
                    }
                </div>
            </div>
        </>
    );
}




