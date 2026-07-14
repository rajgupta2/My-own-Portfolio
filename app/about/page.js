"use client";
import { Fade, Bounce } from "react-awesome-reveal";
import styles from "./about.module.css";
import Image from "next/image";
const About = () => {
  return (
    <div className="mb-5">
      <div className="row">
        <h1 className="switching-color">About me</h1>
      </div>
      <div className="row">
        {/* <div className="col-12 col-md-4 col-lg-4 pt-3">
                    <Image src="/Raj-img.jpeg" alt="Raj-Gupta-Image" width={'253'} height={'320'} className={styles.about_image}/>
                </div> */}
        <div className={"col-12  pt-3 " + styles.about_text}>
          <Fade>
            <p className="text-justify">
              I&apos;m a <b>Gold Medalist</b> B.Tech (Information Technology)
              graduate from Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya,
              Chitrakoot, Satna, Madhya Pradesh, with a strong foundation in
              both <b>full stack development</b> and <b>cloud infrastructure</b>
              .
            </p>
            <p className="text-justify">
              I work across <b>MERN Stack </b>{" "}
              building applications with{" "}
              <b>React.js, Next.js, Node.js, Express.js</b> and modern
              databases, and  <b>AWS Cloud/DevOps</b> working with{" "}
              <b>EC2, S3, IAM, Terraform, and CloudWatch, Docker, CI/CD Pipelines.</b>.
            </p>
          </Fade>
          <Fade>
            <p className="text-justify">
              My hands-on experience includes internships at{" "}
              <b>TechEazy Consulting</b>, where I worked on infrastructure
              automation with Terraform and AWS, and at <b>Edunet Foundation</b>
              , where I built full stack MERN applications. I&apos;m{" "}
              <b>AWS Certified Cloud Practitioner</b> and have built projects
              like <b>SkillHub</b> and <b>StudyStudent</b> that combine full
              stack engineering with cloud and AI capabilities.
            </p>
            <p className="text-justify">
              I&apos;m now <b>actively looking for opportunities</b> as a{" "}
              <b>Web Developer or Cloud/DevOps Engineer</b>, where I can
              contribute to meaningful projects and keep growing alongside
              experienced teams.
            </p>
          </Fade>
        </div>
      </div>
      <div className="row">
        <Fade left className="mt-4 mb-4">
          <a href="/contact" className="btn btn-lg border-primary">
            <span className="text-primary p-5 m-4">Contact me</span>
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default About;
