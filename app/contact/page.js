
"use client";
import { BsLinkedin, BsGithub, BsEnvelopeFill } from "react-icons/bs";
import styles from "./Contact.module.css";

const whereToFind = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/raj-gupta-ckt",
        icon: <BsLinkedin size={22} />,
    },
    {
        name: "Github",
        url: "https://github.com/rajgupta2",
        icon: <BsGithub size={22} />,
    },
    {
        name: "Email",
        url: "mailto:rajgupta.ckt22@gmail.com",
        icon: <BsEnvelopeFill size={22} />,
    },
];

function SocialLinks({ list }) {
    return (
        <div className={styles.socialRow}>
            {list.map((e, index) => (
                <a
                    key={index}
                    href={e.url}
                    className={styles.socialIcon}
                    title={e.name}
                >
                    {e.icon}
                </a>
            ))}
        </div>
    );
}

export default function ContactPage() {
    return (
      <div className="mb-5">
        <div className="row">
          <h1 className="switching-color">Contact</h1>
          <p className="fs-5 text-muted">
            Open to MERN and AWS/DevOps opportunities. Let&apos;s connect.
          </p>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className={styles.card}>
              <h4>Certifications</h4>
              <div className={styles.credlyWrap}>
                <img
                  src="https://credly-readme-stats.onrender.com/api/overview?username=raj-gupta.62a5ed7b&theme=github_light&sort=issuer&columns=3&show_issuer=true"
                  alt="Raj's Credly certification badges"
                  className={styles.credlyImg}
                />
                <a
                  href="https://www.credly.com/users/raj-gupta.62a5ed7b/badges"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.credlyLink}
                >
                  View all badges on Credly
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={styles.card}>
              <h4>Find me here</h4>
              <SocialLinks list={whereToFind} />
            </div>
          </div>
        </div>
      </div>
    );
}