// Icons
import pythonLogo from "../assets/python-logo.png"
import excelLogo from "../assets/excel-logo2.png"
import mysqlLogo from "../assets/mysql-logo.png"
import powerBILogo from "../assets/powerbi-logo.png"
import tableauLogo from "../assets/tableau-logo.png"
import pandasLogo from "../assets/pandas-logo.png"
import numpyLogo from "../assets/numpy-logo.png"
import matplotlibLogo from "../assets/matplotlib-logo.png"
import jupyterLogo from "../assets/jupyter.jpg"
import githubLogo from "../assets/github.jpeg"

import { StaticImageData } from "next/image"
// Projects
export interface Project {
  title: string
  description: string
  technologies: string[]
  techIcons: (StaticImageData | string)[];
  image: string
  liveLink: string
  gitLink: string
}

export const projects: Project[] = [
  {
    title: "Excel Adidas US Sales Analysis",
    description:
      "Analysis of Adidas sales data in the US using Excel with advanced formulas, pivot tables, and dashboards for business insights.",
    technologies: ["Excel", "Pivot Tables", "Dashboards", "Power Query"],
    techIcons: [excelLogo],
    image: "/adidas.png",
    liveLink: "",
    gitLink: "https://github.com/mjshubham21/Excel_Adidas_US_Sales",
  },
  {
    title: "Maven Movies SQL Project",
    description:
      "SQL project focused on movie database querying, manipulation, and reporting using Maven for project management.",
    technologies: ["MySQL"],
    techIcons: [mysqlLogo],
    image: "/mysql.png",
    liveLink: "",
    gitLink: "https://github.com/mjshubham21/SQL_maven_movies_project",
  },
  {
    title: "NY Yellow Taxi Python Data Analysis",
    description:
      "Data analysis of New York yellow taxi trip data using Python for cleaning, visualization, and extracting meaningful patterns.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    techIcons: [pythonLogo, pandasLogo, numpyLogo, matplotlibLogo, jupyterLogo],
    image: "/pythonProject.png",
    liveLink: "",
    gitLink: "https://github.com/mjshubham21/NY_yellow_taxi_python_DA_project",
  },
  {
    title: "Movies Metrics Power BI & Python Project",
    description:
      "Combined Power BI dashboards and Python analytics for movie industry metrics visualization and performance evaluation.",
    technologies: ["Power BI", "Python", "DAX"],
    techIcons: [powerBILogo, pythonLogo, "⚡"],
    image: "/powerbi1.jpeg",
    liveLink: "",
    gitLink: "https://github.com/mjshubham21/MoviesMetrics_PowerBi_Python_Project",
  },
  {
    title: "AdventureWorks Power BI Project",
    description:
      "Advanced sales and operations analytics Power BI project for the AdventureWorks database with interactive reports.",
    technologies: ["Power BI", "DAX"],
    techIcons: [powerBILogo, "⚡"],
    image: "/powerbi2.png",
    liveLink: "",
    gitLink: "https://github.com/mjshubham21/AdventureWorks_PowerBi_Project",
  },
  {
    title: "Retail Sales Analysis Tableau Project",
    description:
      "Retail sales trend analysis using Tableau with visual dashboards on sales, regions, and product categories.",
    technologies: ["Tableau"],
    techIcons: [tableauLogo],
    image: "/tableau.png",
    liveLink: "https://public.tableau.com/app/profile/shubham.pawar4669/viz/Retail_Sales_Analysis_17580552662880/Story1",
    gitLink: "https://github.com/mjshubham21/Retail_Sales_Analysis_Tableau_Project",
  },
];

// Skills
export interface Skill {
  name: string
  icon: any // now this will be a path to the image
  level: "beginner" | "good"
  description: string
}

export const skills: Skill[] = [
  {
    name: "Python",
    icon: "/public/pythonLogo.png",
    level: "good",
    description: "Data analysis with NumPy, Pandas, Matplotlib, and Seaborn",
  },
  {
    name: "Microsoft Excel",
    icon: excelLogo,
    level: "good",
    description: "Advanced formulas, pivot tables, dashboards, and VBA",
  },
  {
    name: "MySQL",
    icon: mysqlLogo,
    level: "good",
    description: "Complex queries, joins, aggregations, and database design",
  },
  {
    name: "Power BI",
    icon: powerBILogo,
    level: "good",
    description: "Interactive dashboards, DAX formulas, and data modeling",
  },
  {
    name: "Tableau",
    icon: tableauLogo,
    level: "good",
    description: "Data visualization, storytelling, and dashboard creation",
  },
  {
    name: "Jupyter Notebook",
    icon: jupyterLogo,
    level: "good",
    description: "Interactive data exploration and analysis",
  },
  {
    name: "Pandas",
    icon: pandasLogo,
    level: "good",
    description: "Powerful data manipulation & cleaning in Python",
  },
  {
    name: "NumPy",
    icon: numpyLogo,
    level: "good",
    description: "High-performance numerical computing in Python",
  },
  {
    name: "Matplotlib",
    icon: matplotlibLogo,
    level: "good",
    description: "Rich plotting and visualization in Python",
  },
  {
    name: "GitHub",
    icon: githubLogo,
    level: "good",
    description: "Collaboration, version control, and code management",
  }
  // Add others similarly.
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