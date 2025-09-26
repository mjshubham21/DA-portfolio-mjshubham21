// Projects
export interface Project {
  title: string
  description: string
  technologies: string[]
  techIcons: string[]
  image: string
  liveLink: string
  gitLink: string
}

export const projects: Project[] = [
  {
    title: "Sales Dashboard Analytics",
    description:
      "Comprehensive sales performance dashboard built with Power BI, featuring interactive visualizations and KPI tracking for business insights.",
    technologies: ["Power BI", "Excel", "SQL", "DAX"],
    techIcons: ["📊", "📈", "🗃️", "⚡"],
    image: "/modern-sales-dashboard-with-charts-and-graphs.jpg",
    liveLink: "https://github.com/mjshubham21/sales-dashboard",
    gitLink: "https://github.com/mjshubham21/sales-dashboard",
  },
  {
    title: "E-commerce Data Pipeline",
    description:
      "End-to-end data pipeline using MySQL and Python for processing e-commerce transactions and generating business reports.",
    technologies: ["MySQL", "Python", "Pandas", "Tableau"],
    techIcons: ["🗃️", "🐍", "📊", "📋"],
    image: "/data-pipeline-visualization-with-database-connecti.jpg",
    liveLink: "https://github.com/mjshubham21/ecommerce-pipeline",
    gitLink: "https://github.com/mjshubham21/ecommerce-pipeline",
  },
]

// Skills
export interface Skill {
  name: string
  icon: string
  level: "beginner" | "good"
  description: string
}

export const skills: Skill[] = [
  {
    name: "Python",
    icon: "🐍",
    level: "good",
    description: "Data analysis with NumPy, Pandas, Matplotlib, and Seaborn",
  },
  {
    name: "Microsoft Excel",
    icon: "📊",
    level: "good",
    description: "Advanced formulas, pivot tables, dashboards, and VBA",
  },
  {
    name: "MySQL",
    icon: "🗃️",
    level: "good",
    description: "Complex queries, joins, aggregations, and database design",
  },
  {
    name: "Power BI",
    icon: "📈",
    level: "good",
    description: "Interactive dashboards, DAX formulas, and data modeling",
  },
  {
    name: "Tableau",
    icon: "📋",
    level: "good",
    description: "Data visualization, storytelling, and dashboard creation",
  },
  {
    name: "GCP BigQuery",
    icon: "☁️",
    level: "beginner",
    description: "Cloud-based data warehousing and SQL analytics",
  },
  {
    name: "Jupyter Notebook",
    icon: "📊",
    level: "good",
    description: "Interactive data exploration and analysis",
  },
  {
    name: "GitHub",
    icon: "👨‍💻",
    level: "good",
    description: "Collaboration, version control, and code management",
  },
  {
    name: "AI in workflow",
    icon: "🤖",
    level: "beginner",
    description: "Integrating AI into data analysis workflows",
  },
  {
    name: "Data Storytelling",
    icon: "📊",
    level: "beginner",
    description: "Creating engaging data visualizations and stories",
  }
  // {
  //   name: "Machine Learning",
  //   icon: "🤖",
  //   level: "beginner",
  //   description: "Learning ML fundamentals and basic algorithms",
  // },
  // {
  //   name: "React.js",
  //   icon: "⚛️",
  //   level: "good",
  //   description: "Building modern user interfaces with React ecosystem",
  // },
]

// Education
export interface Education {
  degree: string
  institution: string
  years: string
  percentage: string
}

export const educations: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "SPPU",
    years: "2022-2024",
    percentage: "80%",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Mumbai",
    years: "2018-2021",
    percentage: "74%",
  },
]

// Experience
export interface Experience {
  company: string
  position: string
  duration: string
  responsibilities: string[]
}

export const experiences: Experience[] = [
  {
    company: "Zentosys Pvt. Ltd.",
    position: "MERN Stack Developer",
    duration: "July 2024 - November 2024",
    responsibilities: [
      "Developed and optimized full-stack applications using MongoDB, Express.js, React.js, and Node.js",
      "Collaborated with clients from India and Saudi Arabia to deliver custom web solutions",
      "Implemented responsive frontend features and RESTful APIs",
      "Participated in code reviews and maintained high code quality standards",
    ],
  },
  {
    company: "Zentosys Pvt. Ltd.",
    position: "MERN Stack Developer Intern",
    duration: "Jan 2024 - June 2024",
    responsibilities: [
      "Developed and optimized full-stack applications using MongoDB, Express.js, NextJs, React.js, and Node.js",
      "Collaborated with clients from Pune, India to deliver custom web solutions",
      "Implemented responsive frontend features and RESTful APIs",
      "Participated in code reviews and maintained high code quality standards",
    ],
  },
  // {
  //   company: "Freelance",
  //   position: "Web Developer",
  //   duration: "January 2024 - June 2024",
  //   responsibilities: [
  //     "Built custom websites and web applications for small businesses",
  //     "Worked with modern JavaScript frameworks and libraries",
  //     "Provided technical consultation and project management",
  //     "Delivered projects on time while maintaining client satisfaction",
  //   ],
  // },
]

// Certificates
export interface Certificate {
  title: string
  issuer: string
  date: string
  link: string
}

export const certificates: Certificate[] = [
  {
    title: "PL-300: Power Platform Fundamentals",
    issuer: "Microsoft",
    date: "2025-10-15",
    link: "https://credentials.google.com/3d4e5f7b-3d4e-5f7b-3d4e-5f7b3d4e5f7b",
  },
  {
    title: "Data Analyst Certificate",
    issuer: "JASON School",
    date: "2025-10-15",
    link: "https://credentials.google.com/3d4e5f7b-3d4e-5f7b-3d4e-5f7b3d4e5f7b",
  }
]