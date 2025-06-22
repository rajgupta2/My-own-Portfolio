"use client";
import { Fade, Bounce } from "react-awesome-reveal";
import styles from './about.module.css';
import Image from "next/image";
const About = () => {
    return (
        <>
            <div className="row">
                <h1 className="switching-color">
                    About me
                </h1>
            </div>
            <div className="row">
                {/* <div className="col-12 col-md-4 col-lg-4 pt-3">
                    <Image src="/Raj-img.jpeg" alt="Raj-Gupta-Image" width={'253'} height={'320'} className={styles.about_image}/>
                </div> */}
                <div className={"col-12  pt-3 "+ styles.about_text}>
                    <Fade>
                        <p className="text-justify">
                            I have <b>recently completed</b> my bachelor's degree in <b>B.Tech (Information Technology) </b> from Mahatma Gandhi Chitrakoot Gramodaya Vishwavidayalya, Chitrakoot, Satna, Madhya Pradesh.
                        </p>
                        <p>
                            During my <b>academic journey</b>, I built several <b>real world projects</b> using the <b>MERN stack, Next.js, and tools like Tailwind CSS and Git</b>.
                        </p>
                    </Fade>
                    <Fade>
                        <p className="text-justify">
                            I have a strong foundation in <b>full stack web development</b> and a growing interest in DevOps and <b>cloud technologies</b>.
                            I’m now <b>looking for opportunities </b>where I can grow <b>as a web developer or cloud trainee</b> , contribute to meaningful projects, and learn from experienced teams.
                        </p>
                    </Fade>
                </div>
            </div>
            <div className="row">
                <Fade left className='mt-4 mb-4'>
                    <a href="/contact" className="btn btn-lg border-primary">
                        <span className='text-primary p-5 m-4'>Contact me</span>
                    </a>
                </Fade>
            </div>
        </>
    );
};

export default About;
