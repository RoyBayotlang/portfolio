export const site = {
  name: "Roy Bayotlangg",
  location: "Butuan City, Philippines",
  tagline: "Web Developer | UX/UI Designer",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "/img/avatar.jpg" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "" as string | undefined,
  email: "your@email.com",
  calendlyUrl: "https://calendly.com/your-link",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/RoyBayotlang",
  instagram: "https://www.instagram.com/iiittssrooii/",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] =
  [];

export const about = `I am an aspiring full-stack web developer with practical experience building web applications from planning and structuring ideas to developing, refining, and maintaining functional systems. I work with modern frontend technologies including JavaScript, TypeScript, React, Vue.js, Tailwind CSS, and Bootstrap, allowing me to build responsive and component-driven user interfaces. On the backend side, I have experience working with MongoDB and PostgreSQL, giving me exposure to both NoSQL and relational database systems.

I actively build projects to strengthen my skills and improve my understanding of real-world development workflows. My current focus is improving my JavaScript and TypeScript proficiency while deepening my full-stack development capabilities. Through consistent hands-on practice, I aim to build scalable, efficient, and well-structured applications while continuing to grow as a developer.`;

export const experience = [
  /**  {
    role: "Student Developer (Contributor)",
    company: "ISySS-CDM CSU",
    year: "2026",
  },
  {
    role: "Systems Developer / Analyst",
    company: "DA-BAFE ABEMIS 3.0",
    year: "2025",
  },
  {
    role: "Software Developer (Contributor)",
    company: "MARVEL Technologies",
    year: "2022",
  },
  {
    role: "IT Student / Developer",
    company: "Caraga State University",
    year: "2019–Present",
  },
  {
    role: "Self-Taught Developer",
    company: "Personal Coding Journey",
    year: "2015–Present",
  },*/
];

export const techStack = {
  frontend: [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Tailwind CSS",
    "Bootstrap",
  ],
  backend: ["PostgreSQL", "MongoDB"],
  devops: ["Docker", "GitHub Actions"],
  modeling: [
    /**
    "3D Modeling",
    "Blender",
    "Animation",
    "Texture Editing",
    "Unity Game Engine",
    "C#",
   */
  ],
};

export const projects = [
  /** 
  {
    name: "ISySS-CDM",
    description: "CSU & PNP collaborative system platform",
    url: "https://isyss-cdm.web.app/",
    domain: "isyss-cdm.web.app",
  },
  {
    name: "ABEMIS 3.0",
    description:
      "Agricultural & Biosystems Engineering Management Information System",
    url: "https://abemis-front.vercel.app/",
    domain: "abemis-front.vercel.app",
  },
  {
    name: "MARVEL Technologies",
    description: "AR/VR technology initiative and simulation platform",
    url: "https://chci.carsu.edu.ph/marvel-technologies/",
    domain: "chci.carsu.edu.ph",
  },
  {
    name: "DYNAMIS Workout Tracker",
    description: "AI-powered workout tracker",
    url: "https://dynamis-app.online",
    domain: "dynamis-app.online",
  }, */
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "HTML SoloLearn Certification",
    issuer: "SoloLearn",
    href: "/img/HTML-cert.jpg",
  },
  {
    name: "CSS SoloLearn Certification",
    issuer: "SoloLearn",
    href: "/img/css.jpg",
  },
  {
    name: "SQL SoloLearn Certification",
    issuer: "SoloLearn",
    href: "/img/SQL-cert.jpg",
  },
];

export const recommendations = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Cris Lawrence Adrian Militante",
    title: "ICT Director at GCM",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Ken Gorro",
    title: "Senior Developer at Fullscale",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Patrick Vince Velasco",
    title: "Software Engineer, YNS",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "John Edmerson Pizarra",
    title: "Jr. Full-stack Developer, PocketDevs",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Glenn Pepito",
    title: "Professor at University of San Carlos",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Van Honoridez",
    title: "Application Development Analyst at Accenture",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Zinia Ma. Consuelo R. Trinidad",
    title: "Web Developer, Quickway Holdings Inc.",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    author: "Jomar Neri",
    title: "Full-stack Developer, Freelance",
  },
];

export const memberships = [
  {
    name: "Philippine Society of IT Educators – Caraga Chapter",
    href: "https://psite.org/",
  },
];
