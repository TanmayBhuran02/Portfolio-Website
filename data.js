// Portfolio Data for Tanmay Sanjay Bhuran
const portfolioData = {
  personal: {
    name: "Tanmay Sanjay Bhuran",
    role: "Associate Software Engineer — Backend",
    email: "tanmaybhuran18@gmail.com",
    phone: "+917498464548",
    linkedin: "https://www.linkedin.com/in/tanmay-bhuran-bb8a36248",
    github: "https://github.com/TanmayBhuran02",
    summary: "Associate Software Engineer with 2 years of industry experience in backend development and test automation, with working exposure to frontend integration. Proficient in Python (Flask), Java Spring Boot, and AWS-based systems. Hands-on experience building REST APIs, designing database schemas, and authoring end-to-end automation test suites using Python Playwright, with familiarity across the full request lifecycle from UI to database. Seeking a Backend Developer role to deliver scalable, well-tested, and reliable software solutions."
  },
  skills: {
    languages: ["Python", "Java", "SQL", "JavaScript"],
    backend: ["Flask", "Spring Boot", "Django", "REST APIs", "Microservices", "Authentication & Authorization"],
    databases: ["PostgreSQL", "MySQL", "Query Optimization", "Schema Design"],
    cloudDevops: ["AWS (S3, ECS, ECR, RDS)", "Git", "GitHub", "TeamCity"],
    testing: ["Python Playwright", "E2E Testing", "Regression Automation"],
    frontend: ["Angular", "HTML", "CSS"]
  },
  experience: [
    {
      role: "Associate Software Engineer",
      company: "RSquareSoft Technologies (Client: ZS Associates)",
      period: "Jan 2025 – Present",
      location: "Onsite",
      bullets: [
        "Developed and maintained RESTful backend services using Python Flask, integrating business logic with PostgreSQL and serving data to frontend-facing interfaces.",
        "Built end-to-end automation test suites using Python Playwright with reusable fixtures and utilities, covering critical workflows across frontend and backend layers.",
        "Contributed to small frontend features using Angular, supporting API integration and consistent data flow between layers.",
        "Collaborated with senior engineers to triage failing test suites, identifying root causes and restoring stability across release cycles."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "RSquareSoft Technologies",
      period: "Sep 2024 – Present",
      location: "Onsite",
      bullets: [
        "Developed backend services and REST APIs using Java Spring Boot and PostgreSQL.",
        "Optimized SQL queries and database schemas for performance improvements.",
        "Worked with AWS services such as S3, ECS, ECR, and RDS."
      ]
    },
    {
      role: "Intern Software Engineer",
      company: "RSquareSoft Technologies",
      period: "Apr 2024 – Sep 2024",
      location: "Onsite",
      bullets: [
        "Assisted in backend and data-related development tasks in a microservices environment.",
        "Supported API development and database operations."
      ]
    }
  ],
  projects: [
    {
      title: "AuthFlow Starter Kit",
      date: "May 2026",
      tech: ["FastAPI", "SQLAlchemy", "JWT", "Vanilla JS"],
      bullets: [
        "Built a production-ready authentication and authorization starter kit using FastAPI and SQLAlchemy.",
        "Implemented secure JWT authentication with refresh token rotation, token blacklisting, and protected API access.",
        "Developed a granular RBAC system for role-based endpoint authorization and user management.",
        "Designed a customizable backend architecture with dependency injection and a built-in frontend for authentication and admin workflows."
      ]
    },
    {
      title: "Multi-Tenant SaaS Bootstrapper",
      date: "May 2026",
      tech: ["Flask", "PostgreSQL", "React (Vite)"],
      bullets: [
        "Implemented subdomain-based tenant routing with SQLAlchemy-level row-level security, auto-scoping every query to the active tenant via a ContextVar interceptor.",
        "Built tenant provisioning, JWT auth, plan-tiered feature flags, and a superadmin panel with cross-tenant metrics and soft-delete over a shared PostgreSQL schema.",
        "Developed a React frontend with a multi-step onboarding wizard, flag-gated UI components, and a superadmin tenant-switcher."
      ]
    }
  ],
  education: [
    {
      degree: "B.E. Computer Engineering",
      institution: "Gharda Institute of Technology",
      period: "2020 – 2024",
      details: "CGPA: 7.44/10"
    }
  ],
  certifications: [
    {
      title: "Python and Flask Framework",
      issuer: "Udemy",
      year: "2025",
      certificateUrl: "https://drive.google.com/file/d/1-LmhwVM1jZdCjBVZGXzz7kdhned1iZHM/preview"
    },
    {
      title: "Full Stack JAVA",
      issuer: "Symbiosis Skills & Professional University × Capgemini",
      year: "2024",
      certificateUrl: "https://drive.google.com/file/d/1gLJVvSuzJtEgy1yXxECp-39WEgIX9Z2u/preview"
    },
    {
      title: "JAVA Programming - Beginner to Master",
      issuer: "AWS Academy",
      year: "2023",
      certificateUrl: "https://drive.google.com/file/d/1c78eooc1HbGIAjaMlELi47NvVZ29I9Xy/preview"
    }
  ],
  activities: [
    "Received the Star Performer Award from RSquareSoft Technologies for outstanding contribution in Q2 2025.",
    "Mentored Java Spring Boot and DevOps interns on backend development and DevOps fundamentals as personal initiative (2025)."
  ]
};
