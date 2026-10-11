// Portfolio Data for Tanmay Sanjay Bhuran
const portfolioData = {
  personal: {
    name: "Tanmay Sanjay Bhuran",
    role: "Software Engineer – Backend Engineering",
    email: "tanmaybhuran18@gmail.com",
    phone: "+91 7498464548",
    linkedin: "https://www.linkedin.com/in/tanmay-bhuran-bb8a36248",
    github: "https://github.com/TanmayBhuran02",
    website: "https://tanmaybhuran02.github.io/Portfolio-Website/",
    summary: "Associate Software Engineer with 2+ years of experience in backend development, with exposure to frontend integration and test automation. Proficient in Python (Flask, FastAPI), Java Spring Boot, and AWS-based systems. Experienced in designing and building scalable REST APIs, optimizing database schemas for performance, and deploying backend services on AWS cloud infrastructure."
  },
  skills: {
    languages: ["Python", "Java", "SQL", "JavaScript (basic)"],
    backend: ["Flask", "FastAPI", "Spring Boot", "Django", "REST APIs", "Microservices", "Authentication & Authorization"],
    databases: ["PostgreSQL", "MySQL", "Query Optimization", "Schema Design"],
    cloudDevops: ["AWS (S3, ECS, ECR, RDS)", "Git", "GitHub", "Docker"],
    testing: ["Python Playwright", "Pytest", "End-to-End Testing", "Regression Automation"],
    frontend: ["Angular", "React", "HTML", "CSS"]
  },
  experience: [
    {
      role: "Associate Software Engineer",
      company: "RSquareSoft Technologies",
      period: "Sep 2024 – Present",
      location: "Onsite",
      subsections: [
        {
          title: "Client – ZS Associates (Jan 2025 – Present)",
          bullets: [
            "Developed and maintained RESTful backend services using Python Flask, integrating complex business logic with PostgreSQL.",
            "Designed and implemented backend workflows and REST API endpoints across multiple application layers, contributing small frontend features using Angular.",
            "Built end-to-end automation test suite using Python Playwright, reducing manual testing effort from 20 hours to 4–5 hours per cycle.",
            "Collaborated with senior engineers to triage and restore backend stability across release cycles."
          ]
        },
        {
          title: "Internal Projects (Sep 2024 – Present)",
          bullets: [
            "Developed backend services and REST APIs using Java Spring Boot with PostgreSQL as primary data store.",
            "Optimized long-running SQL queries on multi-million row datasets, reducing execution time from ~1 minute to 15–20 seconds.",
            "Deployed and managed backend services using AWS infrastructure including S3, ECS, ECR, and RDS."
          ]
        }
      ],
      bullets: [
        "Client – ZS Associates: Developed RESTful backend services using Python Flask with PostgreSQL, built E2E Playwright test suite reducing manual effort from 20h to 4–5h/cycle, and contributed Angular features.",
        "Internal Projects: Developed Java Spring Boot REST APIs, optimized SQL queries on multi-million row datasets (1 min → 15–20s), and deployed AWS infrastructure (S3, ECS, ECR, RDS)."
      ]
    },
    {
      role: "Intern Software Engineer",
      company: "RSquareSoft Technologies",
      period: "Apr 2024 – Sep 2024",
      location: "Onsite",
      bullets: [
        "Assisted in backend development tasks within a Java Spring Boot microservices architecture.",
        "Developed and maintained REST APIs and contributed to database operations using PostgreSQL.",
        "Collaborated to design and enhance database schemas, improving data integrity and query efficiency."
      ]
    }
  ],
  projects: [
    {
      title: "Multi-Tenant SaaS Bootstrapper",
      date: "May 2026",
      tech: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "React"],
      bullets: [
        "Built a reusable multi-tenant SaaS platform with JWT authentication, RBAC, and tenant provisioning.",
        "Added feature flags and plan-based limits to control access and usage per tenant.",
        "Implemented automatic tenant isolation using ContextVar and SQLAlchemy ORM events, with superadmin cross-tenant access.",
        "Developed reusable REST APIs and React components supporting custom frontend integration.",
        "Wrote pytest unit tests validating core business logic, tenant isolation, and API behaviour.",
        "Containerized the application using Docker for consistent development and deployment environments."
      ]
    },
    {
      title: "AuthFlow Starter Kit",
      date: "May 2026",
      tech: ["FastAPI", "SQLAlchemy", "JWT", "RBAC"],
      bullets: [
        "Built a production-ready authentication starter kit using FastAPI and SQLAlchemy.",
        "Implemented JWT authentication with refresh tokens and token blacklisting.",
        "Added role-based access control (RBAC) for permission management.",
        "Designed a modular backend architecture with a built-in frontend for authentication and user management.",
        "Wrote pytest unit tests covering authentication flows, RBAC rules, and token lifecycle management.",
        "Containerized the application using docker-compose for consistent deployment environments."
      ]
    }
  ],
  education: [
    {
      degree: "B.E. in Computer Engineering",
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
      issuer: "Udemy",
      year: "2023",
      certificateUrl: "https://drive.google.com/file/d/1c78eooc1HbGIAjaMlELi47NvVZ29I9Xy/preview"
    }
  ],
  activities: [
    {
      title: "Star Performer Award",
      issuer: "RSquareSoft Technologies",
      period: "Q2 2025",
      detail: "Received for outstanding contribution across release cycles and backend deliverables."
    },
    {
      title: "Backend & DevOps Mentorship",
      issuer: "Personal Initiative",
      period: "2025",
      detail: "Mentored Java Spring Boot and DevOps interns on backend architecture, API patterns, and DevOps fundamentals."
    }
  ]
};
