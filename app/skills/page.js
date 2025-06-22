"use client";
import { Bounce, Fade } from 'react-awesome-reveal';
import skillsList from "./skillsList.js";
import styles from './skills.module.css';
import Router from 'react-router';
import { useState } from 'react';

function MapSkills() {
    return (
        skillsList.map((item, index) => (
            <div key={index} className={"col-12 col-md-2 col-lg-2 border shadow " + styles.skill_item}>
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className='switching-color h1'>{item.icon} </span><br />
                        <span className="text-success btn">{item.spanText}</span>
                    </a>
            </div>
        )));
}
function MapDesSkills() {
    return (
        <>
            <ul className='fs-5 text-secondary'>
                <li >
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
                    MySQL, MSSQL, MongoDB, MongoDB Atlas.
                </li>
                <li>
                    <span className="text-success">AWS Cloud:&nbsp;</span>
                    EC2, load balancer, AWS S3, Elastic Block Store, Amazon RDS, Amazon NoSQL, Route-53, Amazon
                    EFS, VPC, Elastic Beanstalk, AWS Lambda, CloudWatch, Auto Scaling, SNS, AWS IAM, AWS Cost Management,
                    Shield, AWS Networking.
                </li>
                <li>
                    <span className="text-success">DevOps Tools:&nbsp;</span>
                    Git, Maven, Tomcat, SonarQube Server, SonarQube Scanner, Sonatype Nexus, Jenkins, Terraform,
                    Netlify.
                </li>
                <li>
                    <span className="text-success">Core Concept:&nbsp;</span>
                    DSA, OOPS, DBMS, Computer Network
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
                    <h1 className="switching-color"> Skills </h1>
            </div>
            <div className='row'>
                    <p className={styles.skill_text}   >
                        Yes, I am always eager to learn new technologies.
                    </p>
            </div>
            {/* <div className="row  mb-3 text-center">
                <div className='col-6 col-md-6 col-lg-6 border border-primary'>
                    <div className='btn text-white' style={{ width: '100%' }} onClick={() => { setSkills(<MapSkills />) }}>Skills Box</div>
                </div>
                <div className='col-6 col-md-6 col-lg-6 border border-primary'>
                    <div className='btn text-white' style={{ width: '100%' }} onClick={() => { setSkills(<MapDesSkills />) }}>Skills description</div>
                </div>
            </div> */}
            <div className="row">
                {
                    useSkills
                }
            </div>
        </>
    )
}


