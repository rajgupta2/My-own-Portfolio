"use client";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className="mb-5">
      <div id={styles.Hero} className="switching-color">
        <span>Hello!</span>
        <br />
        <span>
          Myself Raj Gupta, <br /> And{" "}
        </span>
        <br />
        <span className="inline"> I&nbsp;</span>
        <TypeAnimation
          sequence={[
            "am a MERN Stack Developer.",
            1000,
            "am an AWS Cloud Developer.",
            1000,
            "am a DevOps enthusiast.",
            1000,
            "am a Gold Medalist graduate.",
            1000,
            "build full stack & cloud solutions.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          repeat={Infinity}
          className=" inline-block text-success"
        />
      </div>

      <Fade left className="mt-4 mb-4">
        <a
          href="https://drive.google.com/file/d/1tsUEOUUYt0hcIqHgM_qRjLbIdBIXzneb/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lg border border-primary"
        >
          <span className="p-5 mt-2 text-primary">View Resume</span>
        </a>
      </Fade>
    </div>
  );
}
