"use client";
import { Bounce, Fade } from 'react-awesome-reveal';
import skillsList from "./skillsList.js";
import styles from './skills.module.css';
import Router from 'react-router';
import { useState } from 'react';

function MapSkills() {
    return (
        skillsList.map((item, index) => (
            <div key={index} className={"col-12 col-md-2 col-lg-2 " + styles.skill_item}>
                <Fade bottom >
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className='switching-color h1'>{item.icon} </span><br />
                        <span className="text-success btn">{item.spanText}</span>
                    </a>
                </Fade>
            </div>
        )));
}
function MapDesSkills() {
    return (
        <>
            <ul>
                <li>
                    <span className="text-success">Programming languages:&nbsp;</span>
                    C, C++, C#.
                </li>
                <li>
                    <span className="text-success">Frontend:&nbsp;</span>
                    HTML5, CSS3, JavaScript, jQuery, AJAX, Tailwind CSS, Bootstrap, React, and Next.js.
                </li>
                <li>
                    <span className="text-success">Backend: &nbsp;</span>
                    ASP.NET MVC, ASP.NET Core, Node.js, Express.js, RESTful API.
                </li>
                <li>
                    <span className="text-success">Database: &nbsp;</span>
                    MySQL, MSSQL, MongoDB.
                </li>
                <li>
                    <span className="text-success">AWS Cloud:&nbsp;</span>
                    EC2 VM, Elastic Load Balancer, S3, EBS, Amazon RDS, Amazon NoSQL, Route 53, VPC, Elastic Beanstalk, and Serverless Lambda.
                </li>
                <li>
                    <span className="text-success">DevOps Tools:&nbsp;</span>
                    Apache Tomcat, Maven, Git, and SonarQube.
                </li>
                <li>
                    <span className="text-success">Others:&nbsp;</span>
                    DSA, OOPs, DBMS, Computer Network
                </li>
            </ul>
        </>
    )
}
export default function Skills() {
    const [useSkills, setSkills] = useState(<MapSkills />);
    return (
        <>
            <div className='row'>
                <Bounce >
                    <h1 className="switching-color"> Skills </h1>
                </Bounce>
            </div>
            <div className='row'>
                <Fade>
                    <p className={styles.skill_text}   >
                        Yes, I am always eager to learn new technologies.
                    </p>
                </Fade>
            </div>
            <div className="row  mb-3 text-center">
                <div className='col-6 col-md-6 col-lg-6 border border-primary'>
                    <div className='btn text-white' style={{width:'100%'}} onClick={() => { setSkills(<MapSkills />) }}>Skills Box</div>
                </div>
                <div className='col-6 col-md-6 col-lg-6 border border-primary'>
                    <div className='btn text-white' style={{width:'100%'}} onClick={() => { setSkills(<MapDesSkills />) }}>Skills description</div>
                </div>
            </div>
            <div className="row">
                {
                    useSkills
                }
            </div>
        </>
    )
}


