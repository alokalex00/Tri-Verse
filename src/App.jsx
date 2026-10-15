import CursorFX from "./components/CursorFX.jsx";
import { useState } from "react";
import "./App.css";
import alokImage from "./assets/alok_image.jpg";

const friends = [
  {
    id: 0,
    name: "Alok Kumar",
    role: "Frontend Developer",
    photo: alokImage,
    color: "#a58aff",
    about:
      "I build modern web experiences with React, JavaScript and creative UI design. I enjoy turning ideas into interactive digital products.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git", "GitHub"],
    github: "https://github.com/alokalex00",
    linkedin: "https://www.linkedin.com/in/alok-kumar-35070334a/",
    email: "alokalex8292@gmail.com",
    projects: [
      {
        name: "MSP International School",
        description: "A modern and responsive school website.",
        link: "https://mspinternationalschool.vercel.app/",
      },
      {
        name: "SkyMart Shopping",
        description: "An e-commerce website with a product-focused UI.",
        link: "https://skymartshopping.vercel.app/",
      },
      {
        name: "Edu-Manage",
        description: "An education management web project.",
        link: "https://edu-manage-cyan.vercel.app/",
      },
    ],
  },
  {
    id: 1,
    name: "Namo Tripathi",
    role: "Developer & Creator",
    photo:
      "https://res.cloudinary.com/ix4yr8ul/image/upload/v1792089430/WhatsApp_Image_2026-10-15_at_11.41.48_PM_s2weke.jpg",
    color: "#55d6ff",
    about:
      "A creative developer who enjoys solving problems, exploring new technologies and building useful digital experiences.",
    skills: ["HTML", "CSS","JAVA","C++","JavaScript", "Problem Solving"],
    github: "https://github.com/Namo485",
    linkedin: "https://www.linkedin.com/in/namo-tripathi-2a571033b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    email: "tripathinamo291@gmail.com",
    projects: [
      {
        name: "WISH",
        description: "An e-commerce platform for buying and selling products.",
        link: "https://wishh-ecom.vercel.app/",
      },
      {
        name: "Veriscan-AI",
        description: "An AI-powered verification platform.",
        link: "https://veriscan-ai.onrender.com/",
      },
    ],
  },
  {
    id: 2,
    name: "Friend Three",
    role: "Tech Enthusiast",
    photo:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=600&q=85",
    color: "#ff91d0",
    about:
      "An enthusiastic learner interested in technology, creative thinking and developing projects that make a difference.",
    skills: ["Technology", "Creativity", "Learning", "Teamwork"],
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/",
    email: "",
    projects: [
      {
        name: "Project One",
        description: "Add this friend's first project here.",
        link: "https://github.com/",
      },
      {
        name: "Project Two",
        description: "Add this friend's second project here.",
        link: "https://github.com/",
      },
    ],
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Universe({ onSelect }) {
  return (
    <main className="universe-page">
      <div className="universe-grid" />
      <div className="universe-glow universe-glow-one" />
      <div className="universe-glow universe-glow-two" />

      <header className="universe-nav">
        <a className="universe-logo" href="#universe">
          TRI<span>//</span>VERSE
        </a>
        <span className="universe-label">
          <i /> INTERACTIVE PORTFOLIO
        </span>
      </header>

      <section className="universe-heading">
        <p className="eyebrow">THREE MINDS. ONE UNIVERSE.</p>
        <h1>
          Choose your
          <br />
          <span>universe.</span>
        </h1>
        <p className="universe-subtitle">
          Three individuals. Three stories. Explore the person behind the profile.
        </p>
      </section>

      <section className="orbit-scene" aria-label="Choose a profile">
        <div className="orbit-line orbit-line-outer" />
        <div className="orbit-line orbit-line-inner" />

        <div className="orbit-center">
          <div className="orbit-core">
            <span>TRI</span>
            <strong>//</strong>
            <span>VERSE</span>
          </div>
          <span className="core-caption">SELECT A PROFILE</span>
        </div>

        <div className="orbit-track">
          {friends.map((friend, index) => (
            <button
              key={friend.id}
              className={`orbit-profile orbit-profile-${index + 1}`}
              style={{ "--profile-color": friend.color }}
              onClick={() => {
if (friend.id === 0) {
window.open(
"https://my-portfolio-alokkumar-alpha.vercel.app/",
"_blank",
"noopener,noreferrer"
);
} else {
onSelect(friend.id);
}
}}
              aria-label={`Open ${friend.name}'s portfolio`}
            >
              <span className="orbit-photo-wrap">
                <img src={friend.photo} alt={friend.name} />
                <span className="orbit-photo-number">
                  0{friend.id + 1}
                </span>
              </span>
              <span className="orbit-name">{friend.name}</span>
              <span className="orbit-role">{friend.role}</span>
              <span className="orbit-open">
                EXPLORE <Arrow diagonal />
              </span>
            </button>
          ))}
        </div>
      </section>

      <footer className="universe-footer">
        <span>03 PROFILES</span>
        <span>MOVE THROUGH OUR UNIVERSE</span>
        <span>EST. 2026</span>
      </footer>
    </main>
  );
}

function ProfilePortfolio({ friend, onBack }) {
  return (
    <main
      className="person-page"
      style={{ "--profile-color": friend.color }}
    >
      <header className="person-nav">
        <button className="back-button" onClick={onBack}>
          <span>←</span> BACK TO UNIVERSE
        </button>
        <a className="universe-logo" href="#person-home">
          TRI<span>//</span>VERSE
        </a>
        <span className="person-number">
          PROFILE / 0{friend.id + 1}
        </span>
      </header>

      <section className="person-hero" id="person-home">
        <div className="person-copy">
          <p className="eyebrow">
            <i /> PERSONAL PORTFOLIO — 0{friend.id + 1}
          </p>

          <h1>
            Hey, I'm
            <br />
            <span>{friend.name}</span>
          </h1>

          <p className="person-role">{friend.role}</p>
          <p className="person-about">{friend.about}</p>

          <div className="person-actions">
            <a className="person-primary-button" href="#person-projects">
              EXPLORE MY WORK <Arrow diagonal />
            </a>
            {friend.email && (
              <a className="person-secondary-button" href={`mailto:${friend.email}`}>
                CONTACT ME
              </a>
            )}
          </div>

          <div className="person-socials">
            <a href={friend.github} target="_blank" rel="noreferrer">
              GitHub <Arrow diagonal />
            </a>
            <a href={friend.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow diagonal />
            </a>
          </div>
        </div>

        <div className="person-portrait-stage">
          <div className="portrait-orbit portrait-orbit-one" />
          <div className="portrait-orbit portrait-orbit-two" />
          <div className="portrait-glow" />
          <div className="person-portrait">
            <img src={friend.photo} alt={`Portrait of ${friend.name}`} />
          </div>
          <div className="portrait-label portrait-label-top">
            <span>CREATIVE MIND</span>
            <strong>0{friend.id + 1} / 03</strong>
          </div>
          <div className="portrait-label portrait-label-bottom">
            <span>THE TRIVERSE PROJECT</span>
            <span>● ONLINE</span>
          </div>
        </div>
      </section>

      <section className="person-section" id="person-skills">
        <div className="person-section-heading">
          <p className="eyebrow">01 — WHAT I DO</p>
          <h2>
            My skills<span>.</span>
          </h2>
          <p>Tools and technologies I use to turn ideas into reality.</p>
        </div>

        <div className="person-skills-grid">
          {friend.skills.map((skill, index) => (
            <div className="person-skill" key={skill}>
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
              <Arrow diagonal />
            </div>
          ))}
        </div>
      </section>

      <section className="person-section" id="person-projects">
        <div className="person-section-heading">
          <p className="eyebrow">02 — SELECTED WORK</p>
          <h2>
            My projects<span>.</span>
          </h2>
          <p>A few things I've built, explored and worked on.</p>
        </div>

        <div className="person-projects-grid">
          {friend.projects.map((project, index) => (
            <article className="person-project" key={project.name}>
              <div className="project-art">
                <span>0{index + 1}</span>
                <strong>{project.name}</strong>
                <div className="project-art-orb" />
              </div>
              <p className="eyebrow">PROJECT / 0{index + 1}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                VIEW PROJECT <Arrow diagonal />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="person-contact">
        <p className="eyebrow">03 — LET'S CONNECT</p>
        <h2>
          Have something
          <br />
          <span>in mind?</span>
        </h2>
        <p>Let's connect, exchange ideas and build something worthwhile.</p>
        <div className="person-actions">
          {friend.email && (
            <a className="person-primary-button" href={`mailto:${friend.email}`}>
              SAY HELLO <Arrow diagonal />
            </a>
          )}
          <button className="person-secondary-button" onClick={onBack}>
            BACK TO THE TRIO
          </button>
        </div>
      </section>

      <footer className="person-footer">
        <a className="universe-logo" href="#person-home">
          TRI<span>//</span>VERSE
        </a>
        <span>BUILT WITH CURIOSITY.</span>
        <button onClick={onBack}>ALL PROFILES ↑</button>
      </footer>
    </main>
  );
}

export default function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);

  return (
    <div className="triverse-app">
      <CursorFX />
      {selectedFriend === null ? (
        <Universe onSelect={setSelectedFriend} />
      ) : (
        <ProfilePortfolio
          friend={friends[selectedFriend]}
          onBack={() => setSelectedFriend(null)}
        />
      )}
    </div>
  );
}