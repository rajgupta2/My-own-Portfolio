"use client";
import { Bounce } from 'react-awesome-reveal';
import Fade from "react-awesome-reveal";
import projectList from "./projectList.js";
import "./projects.css";

const Project = (props) => {
    const { imgUrl, name, desc, stack, gitHubUrl, website } = props;
    return (
        <Fade bottom>
            <div className="mb-3 section_single_projects">
                <img src={imgUrl} alt="project-image" />
                <div className="project_contents">
                    <div className='project_description text-justify'>
                        <h1 className="switching-color">{name}</h1>
                        <p className='text-justify'>{desc}</p>
                        <h2 className="switching-color">Built with</h2>
                        <p className="text-success">{stack}</p>
                    </div>
                    <div className="project_icon p-5">
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
                        These are the projects that I have worked upon in the past few
                        months.
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




