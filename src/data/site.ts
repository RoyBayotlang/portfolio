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
  github: "https://github.com/yourprofile",
  instagram: "https://instagram.com/yourprofile",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] =
  [];

export const about = `I am an aspiring full-stack web developer with hands-on experience building end-to-end projects, from planning and structuring ideas to developing, refining, and maintaining functional web applications. I focus on writing clean, efficient code and continuously improving how I design and organize systems as my projects grow.

Alongside web development, I’ve been involved in collaborative software development work where I’ve contributed to system planning, implementation, and maintaining code quality. These experiences have helped me better understand how real-world applications are built, structured, and scaled over time.

I also work with mobile development using React Native and Flutter, which allows me to expand my skills beyond web into cross-platform application development.

Currently, I’m also exploring areas like DevOps practices, workflow optimization, and AI-assisted development to build applications that are not only functional, but also efficient and scalable in real-world environments.`;

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
  frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
  devops: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  modeling: [
    "3D Modeling",
    "Blender",
    "Animation",
    "Texture Editing",
    "Unity Game Engine",
    "C#",
  ],
};

export const projects = [
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
  },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "SPARK Technical Training for Blockchain Cryptocurrency Specialist Certification",
    issuer: "Department of Information and Communications Technology",
    href: "#",
  },
  {
    name: "Coursera UX/UI Certification",
    issuer: "Google",
    href: "#",
  },
  {
    name: "Project Management",
    issuer: "University of the Philippines",
    href: "#",
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
