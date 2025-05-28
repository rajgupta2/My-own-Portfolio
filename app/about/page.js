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
                {/* <div className="col-12 col-md-4 col-lg-4 pt-3">
                    <Image src="/Raj-img.jpeg" alt="Raj-Gupta-Image" width={'253'} height={'320'} className={styles.about_image}/>
                </div> */}
                <div className={"col-12 col-md-8 col-lg-8 pt-3 "+ styles.about_text}>
                    <Fade>
                        <p className="text-justify">
                            I am a full stack developer with expertise in <b className="text-success">MERN stack, .NET MVC and .NET Core. </b><br/>
                            I also have a experience working with <b className="text-success">AWS cloud resources and devops culture.</b>
                        </p>
                    </Fade>
                    <Fade bottom>
                        <p className="text-justify">
                             Apart from that, I am graduating in June 2025 with the<b className="switching-color"> B.Tech degree in Information Technology </b>
                            from Mahatma Gandhi Chitrakoot Gramodaya Vishwavidyalaya, Chitrakoot.
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
