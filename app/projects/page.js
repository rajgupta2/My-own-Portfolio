"use client";
import { useState } from "react";
import projectList from "./projectList.js";
import "./projects.css";
import Image from "next/image.js";

const Project = (props) => {
  const { imgUrl, name, desc, stack, gitHubUrl, website } = props;
  const [showLive, setShowLive] = useState(false);
  const hasLiveSite = website?.url && website.url.startsWith("http");
  const stackTags = stack.trim().split(/\s+/);

  return (
    <div className="project_card">
      <div className="project_media">
        {showLive && hasLiveSite ? (
          <iframe
            src={website.url}
            title={`${name} live preview`}
            loading="lazy"
            className="project_iframe"
          />
        ) : (
          <Image
            src={"/" + imgUrl}
            alt={name + " project screenshot"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="project_image"
          />
        )}

        {hasLiveSite && (
          <button
            className="project_toggle"
            onClick={() => setShowLive((prev) => !prev)}
          >
            {showLive ? "Show Screenshot" : "Live Preview"}
          </button>
        )}
      </div>

      <div className="project_body">
        <h3 className="project_title">{name}</h3>
        <p className="project_desc">{desc}</p>

        <div className="project_stack">
          {stackTags.map((tag, i) => (
            <span className="stack_pill" key={i}>
              {tag.replace(/-/g, " ")}
            </span>
          ))}
        </div>

        <div className="project_links">
          <a
            href={gitHubUrl.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project_link"
          >
            {gitHubUrl.icon}
            <span>Code</span>
          </a>
          {hasLiveSite && (
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project_link"
            >
              {website.icon}
              <span>Visit Site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="mb-5">
      <div className="row">
        <h1 className="switching-color">My Projects</h1>
        <p className="fs-5 text-muted">
          A few things I&apos;ve built MERN applications and cloud-backed platforms.
        </p>
      </div>
      <div className="projects_grid">
        {projectList.map((project,key) => (
          <Project {...project} key={key} />
        ))}
      </div>
    </div>
  );
}