"use client";
import { Fade, Bounce } from "react-awesome-reveal";
import styles from './about.module.css';
import Image from "next/image";
const About = () => {
    return (
        <>
            <div className="row">
                <h1 className="switching-color">
                    <Bounce>About me</Bounce>
                </h1>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-4 pt-3">
                    <Image src="Raj-img.png" alt="Raj-Gupta-Image" width='100%' height="100%" className={styles.about_image} />
                </div>
                <div className={"col-12 col-md-8 col-lg-8 pt-3 "+ styles.about_text}>
                    <Fade>
                        <p className="text-justify">
                            I am a full stack developer with expertise in <b className="text-success">MERN stack, .NET MVC and .NET Core. </b>
                            I also have a experience working with <b className="text-success">AWS cloud computing and devops culture.</b>
                        </p>
                    </Fade>
                    <Fade bottom>
                        <p className="text-justify">
                             Apart from that, I am enrolled in a <b className="switching-color"> B.Tech degree specializing in Information Technology </b> at
                             Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya, Chitrakoot, and I will complete it in 2025.
                        </p>
                    </Fade>
                </div>
            </div>
            <div className="row">
                <Fade left className='mt-4 mb-4'>
                    <a href="/contact" className="my_btn">
                        <span className='text-primary p-5 m-4'>Contact me</span>
                    </a>
                </Fade>
            </div>
        </>
    );
};

export default About;
