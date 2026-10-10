const portfolio = {
  facts: [
    "Penn State CS",
    "GPA 3.50",
    "AWS Certified Solutions Architect - Associate",
    "Machine learning + data systems"
  ],
  projects: [
    {
      title: "Flux",
      date: "2025",
      image: "assets/projects/flux.png",
      tagline:
        "Empowering AI Agents with Banking Systems: Wallets, AI-governed approvals, and virtual cards for autonomous payments.",
      summary:
        "Flux explores what financial infrastructure could look like for an agent-first internet. The project combines a multi-agent marketplace, a payments SDK, and a live dashboard so autonomous systems can coordinate work and move money safely. What makes it stand out is its governance layer: payment requests are checked against policies, reviewed by an AI council, and then fulfilled with scoped one-time virtual cards. The result feels less like a demo and more like a systems design exercise around trust, observability, and safe autonomy.",
      tags: ["Agents", "Next.js", "Python", "Supabase"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/flux-7gqxt4"
        }
      ],
      repo: {
        label: "Swayam-Bansal/AgentPay-SDK",
        href: "https://github.com/Swayam-Bansal/AgentPay-SDK"
      }
    },
    {
      title: "Springboard (っ˘ω˘ς )~",
      date: "2025",
      image: "assets/projects/springboard.png",
      tagline:
        "Springboard is a platform that matches students, small businesses, and mentors based on location, desired tech stack, and availability.",
      summary:
        "Springboard is a three-sided platform built to connect students, mentors, and small businesses in a way that creates value for everyone involved. It grew out of the challenge students face when trying to gain experience without already having it. The platform uses structured onboarding to understand goals, tech stack, location, and availability, then uses that information to support better matches. Built with React, TypeScript, Supabase, and PostgreSQL, it feels like both a practical product and a thoughtful response to early-career barriers in tech.",
      tags: ["React", "TypeScript", "Supabase", "Matching"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/springboard-s64akm"
        }
      ],
      repo: {
        label: "Swayam-Bansal/Springboard",
        href: "https://github.com/Swayam-Bansal/Springboard"
      }
    },
    {
      title: "Keyzz",
      date: "2025",
      image: "assets/projects/keyzz.png",
      tagline: "Turning Paper Into Music. Piano Rhythm Games, Reinvented",
      summary:
        "Keyzz turns a laptop and a printed sheet of paper into a playable piano rhythm game. Using OpenCV, MediaPipe, and pygame, it detects keys through a webcam, tracks hand placement, and plays notes in real time while adding a game-like falling-note experience. The idea came from wanting a Synthesia-style music setup without needing a real piano. A lot of the work went into making the interaction feel stable and responsive, especially around calibration and audio playback, which made it a fun mix of computer vision, real-time systems, and creative interface design.",
      tags: ["OpenCV", "MediaPipe", "Python", "Computer Vision"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/keyzz"
        }
      ],
      repo: {
        label: "Swayam-Bansal/Keyzz",
        href: "https://github.com/Swayam-Bansal/Keyzz"
      }
    },
    {
      title: "commenTrix",
      date: "2025",
      image: "assets/projects/commentrix.png",
      tagline:
        "A dashboard for youtube creators to learn more about their audience through sentiment analysis on the comment over their videos.",
      summary:
        "commenTrix is a YouTube comment analytics dashboard that helps creators understand audience feedback in a more structured way. Instead of treating comments as a wall of text, it runs sentiment classification, emotion detection, aspect-based sentiment analysis, and toxicity detection, then displays the results in an interactive interface. The project combines Python, FastAPI, transformers, and React into a single end-to-end system. What makes it compelling is how it turns messy user-generated language into something interpretable and useful for creators who want clearer insight into their communities.",
      tags: ["Python", "React", "NLP", "Analytics"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/commentrix"
        }
      ],
      repo: {
        label: "Swayam-Bansal/commenTrix",
        href: "https://github.com/Swayam-Bansal/commenTrix"
      }
    },
    {
      title: "The Golden Apple",
      date: "2025",
      image: "assets/projects/golden-apple.png",
      tagline: "Happy Apple Devices for You and Businesses :D",
      summary:
        "The Golden Apple is a forecasting-focused project built around helping users and businesses make smarter Apple device decisions. It combines event data, historical pricing, and agent-style workflows to generate more useful guidance about device value over time. The system uses OpenAI-based agents together with Prophet-style forecasting to connect major events and market shifts with price behavior. A lot of the difficulty came from scraping, cleaning, and reshaping the underlying data into something usable, but the final idea lands as a mix of predictive modeling, product thinking, and consumer-facing decision support.",
      tags: ["Web", "Product", "React", "Recommendations"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/goldenapple"
        }
      ]
    },
    {
      title: "Gym-routine-extractor",
      date: "2024",
      image: "assets/projects/gym-routine-extractor.gif",
      tagline: "Get the routine mentioned in a youtube video, in hand",
      summary:
        "Gym Routine Extractor turns YouTube workout videos into structured routines with exercises, sets, reps, and notes. The main goal is usability: instead of forcing users to keep replaying spoken instructions, it converts a long video into something clear and actionable. Built with Whisper, LangChain, and Python, the project transcribes the video, extracts the workout structure, and presents it in a cleaner format. The hardest part was dealing with inconsistent language and video styles, but the result feels like a practical NLP tool rather than just a simple transcription demo.",
      tags: ["Whisper", "LangChain", "Python", "LLMs"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/gym-routine-extractor"
        }
      ],
      repo: {
        label: "Swayam-Bansal/youtube_workout_extractor",
        href: "https://github.com/Swayam-Bansal/youtube_workout_extractor"
      }
    },
    {
      title: "Green Companion",
      date: "2024",
      image: "assets/projects/green-companion.png",
      tagline:
        "Revolutionize indoor gardening with GreenCompanion! Our AI and sensors make plant care as fun and easy as caring for a pet, enhancing growth and your experience.",
      summary:
        "Green Companion turns plant care into a more interactive experience by combining sensing, hardware, and playful product design. The system monitors soil moisture, reacts to plant conditions with movement and audio, and was designed to rotate toward light using a computer vision setup. Built with Arduino, Raspberry Pi, Python, C++, and custom 3D design work, it feels part smart device and part character-driven companion. What stands out most is how it takes a common household problem and solves it in a way that feels memorable, educational, and surprisingly personal.",
      tags: ["Python", "C++", "Hardware", "Computer Vision"],
      links: [
        {
          label: "Devpost",
          href: "https://devpost.com/software/green-companion"
        }
      ],
      repo: {
        label: "Swayam-Bansal/GreenCompanion",
        href: "https://github.com/Swayam-Bansal/GreenCompanion"
      }
    }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "Community Dreams Foundation",
      date: "May 2026 - Present",
      highlights: [
        "Built and deployed an AI-powered HR email automation system handling 50+ emails per day, using deterministic templates for frequent FAQs and retrieval for context-specific questions to improve accuracy while reducing unnecessary LLM usage.",
        "Added production guardrails for sensitive-content detection, retrieval failure, and hallucination control; automatically escalated harassment-related or unsupported requests to HR and introduced an LLM-as-judge layer for response-quality evaluation.",
        "Built a real-time AI voice assistant for routine HR calls, integrating telephony, speech recognition, LLM reasoning, and text-to-speech into an end-to-end system that resolved 60%+ of routine calls before human escalation.",
        "Redesigned a production RAG assistant into a multi-agent architecture for project-specific, training, and general-support workflows, with semantic retrieval and role-aware SQL authorization checks to prevent cross-project data exposure.",
        "Routed long-form training conversations to a smaller, lower-cost model and automatically generated HR tickets for unresolved support requests instead of returning unsupported answers."
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "De-Bias",
      date: "Feb 2025 - Jun 2025",
      highlights: [
        "Unified multi-year Pennsylvania housing-assistance survey data into a consistent analytical dataset, reconciling changing survey questions, categorical fields, and messy free-text responses for modeling.",
        "Built and evaluated predictive models to identify the strongest indicators associated with housing-funding outcomes, using feature selection and imbalance-aware modeling to support more data-driven prioritization of limited government assistance and surface allocation inefficiencies."
      ]
    },
    {
      role: "Math Tutor",
      company: "Penn State University",
      date: "Aug 2023 - Dec 2024",
      highlights: [
        "Led 50+ tutoring sessions in calculus, linear algebra, and other advanced mathematics, translating complex quantitative concepts into structured problem-solving strategies."
      ]
    },
    {
      role: "Research Assistant",
      company: "Pennsylvania State University",
      date: "May 2023 - Aug 2023",
      highlights: [
        "Redesigned a legacy particle-collision system for CFD simulations, evaluating collision approximations that traded physical realism for computational efficiency and enabled near-real-time simulation of large particle sets."
      ]
    }
  ],
  skills: [
    {
      title: "Languages",
      items: ["Python", "Java", "C/C++", "SQL"]
    },
    {
      title: "Machine Learning",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "Model Evaluation"]
    },
    {
      title: "Technical Focus",
      items: ["Computer Vision", "Data Analysis", "Optimization", "System Design"]
    }
  ],
  contacts: [
    {
      label: "Email",
      href: "mailto:swayambansal01@gmail.com",
      text: "swayambansal01@gmail.com"
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/swayam-bansal",
      text: "linkedin.com/in/swayam-bansal"
    },
    {
      label: "GitHub",
      href: "https://github.com/Swayam-Bansal",
      text: "github.com/Swayam-Bansal"
    },
    {
      label: "Devpost",
      href: "https://devpost.com/swayambansal01?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
      text: "devpost.com/swayambansal01"
    }
  ]
};

const projectList = document.querySelector("#project-list");
const experienceList = document.querySelector("#experience-list");
const skillsList = document.querySelector("#skills-list");
const aboutFacts = document.querySelector("#about-facts");
const year = document.querySelector("#year");
const themeToggleButtons = document.querySelectorAll(".theme-toggle");

const themeStorageKey = "swayam-portfolio-theme";
const root = document.documentElement;

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem(themeStorageKey, theme);
  themeToggleButtons.forEach((button) => {
    const label = button.querySelector(".theme-toggle-text");
    if (label) {
      label.textContent = theme === "dark" ? "light" : "dark";
    }
    button.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  });
}

const savedTheme = localStorage.getItem(themeStorageKey);
if (savedTheme === "light" || savedTheme === "dark") {
  setTheme(savedTheme);
} else {
  setTheme("dark");
}

themeToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
});

if (aboutFacts) {
  portfolio.facts.forEach((fact) => {
    const pill = document.createElement("span");
    pill.className = "fact-pill";
    pill.textContent = fact;
    aboutFacts.append(pill);
  });
}

if (projectList) {
  portfolio.projects.forEach((project) => {
    const item = document.createElement("article");
    item.className = "project-card";
    item.innerHTML = `
      <a class="project-card-image" href="${project.links[0].href}" target="_blank" rel="noreferrer">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
      </a>
      <div class="project-card-body">
        <a class="project-card-title-link" href="${project.links[0].href}" target="_blank" rel="noreferrer">
          <h3 class="project-card-title">${project.title}</h3>
        </a>
        <p class="project-card-summary">${project.summary}</p>
        <div class="tag-row project-card-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
      </div>
      <div class="project-card-footer">
        <div class="project-card-links">
        ${project.links
          .map(
            (link) =>
              `<a class="project-card-link" href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
          )
          .join("")}
        ${
          project.repo
            ? `<a class="project-card-link" href="${project.repo.href}" target="_blank" rel="noreferrer" aria-label="View ${project.title} code on GitHub">↗ code</a>`
            : ""
        }
        </div>
      </div>
    `;
    projectList.append(item);
  });
}

if (experienceList) {
  portfolio.experience.forEach((item) => {
    const experienceItem = document.createElement("details");
    experienceItem.className = "list-item experience-card";
    experienceItem.innerHTML = `
      <summary>
      <div class="item-header">
        <h3 class="item-title">${item.role}</h3>
        <span class="item-meta">${item.date}</span>
      </div>
      <p class="item-subtitle">${item.company}</p>
      </summary>
      <ul class="bullet-list">
        ${item.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
      </ul>
    `;
    experienceList.append(experienceItem);
  });
}

if (skillsList) {
  portfolio.skills.forEach((group) => {
    const skillGroup = document.createElement("section");
    skillGroup.className = "skill-group";
    skillGroup.innerHTML = `
      <div>
        <p class="skill-label">${group.title}</p>
        <div class="tag-row">
          ${group.items.map((item) => `<span class="skill-chip">${item}</span>`).join("")}
        </div>
      </div>
    `;
    skillsList.append(skillGroup);
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
