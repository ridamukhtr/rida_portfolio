import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder } from "lucide-react";
import { LuGithub } from "react-icons/lu";

const reactProjects = [
  {
    title: "Grocery Store",
    description:
      "A dynamic e-commerce platform for Denmark, offering a seamless grocery shopping experience with quality products and exceptional service.",
    tech: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind Css",
      "Material ui",
      "Redux",
      "RTK Query",
    ],
    github: "",
    live: "https://naim.dk/",
  },
  {
    title: "Buraq _Al-Aziz Institute",
    description:
      "An exam prep platform with live/recorded lectures, quizzes, and mentor support. Integrated FCM push notifications and REST APIs for real - time content and updates.",
    tech: [
      "React Native",
      "Typescript",
      "Redux",
      "Async Storage",
      "FCM Push Notifications",
      "REST APIs",
    ],
    github: "",
    live: "https://play.google.com/store/apps/details?id=com.alazizia",
  },
  {
    title: "InspeCasa (property) App",
    description:
      "A React Native property inspection app with Firebase Auth,.It supports real-time chat, push notifications, and dynamic report handling for seamless communication between inspectors and clients.",
    tech: ["React Native", "TypeScript", "Firebase", "FCM Push Notifications", "Real-time Chat", "PDF report generation"],
    github: "https://github.com/ridamukhtr/InspeCasa-Mobile",
    live: "",
  },
  {
    title: "HumaCare Laboratory App",
    description: "A React Native app using Supabase for authentication and database to connect doctors, patients, and laboratories.It features secure lab report access with role - based permissions and supports.",
    tech: [
      "React Native",
      "Typescript",
      "Supabase",
    ],
    github: "",
    live: '',
  },
  {
    title: "GEBBLLY (Multi-Service)",
    description: "Developed a multi-service platform consisting of Customer, Restaurant, Driver apps, and an Admin Web Panel, enabling food ordering, grocery delivery, and ride booking in one ecosystem, along with admin dashboards for managing users and platform earnings.",
    tech: [
      "React.js",
      'React Native',
      "Typescript",
      "Tailwind Css",
      "Firebase",
      "Firebase Deploy",
      "Redux",
      "Real-time Database",
      "Google Maps API",
      "Tranzila Payment Gateway",
    ],
    github: "",
    live: "https://t3all-3d6d1.web.app/",
  },
  {
    title: "Image to Text Converter",
    description:
      "A React Native app that converts images into plain text using OCR. Users can easily copy, share, or save the extracted text for later use.",
    tech: ["React Native", "JavaScript", "OCR"],
    github: "https://github.com/ridamukhtr/imageConvertor",
  },
  {
    title: "DanZee Tech Website",
    description: "DanZee Tech provides innovative IT solutions, including web development, AI integration, UI/ UX design, helping businesses thrive in the digital space.",
    tech: ["React.js", "JavaScript", "Tailwind Css"],
    github: "",
    live: "https://danzeetech.com/",
  },
  {
    title: "Forex Signals Analysis",
    description:
      "A real-time Forex trading app delivering live signals, market trends, and key insights to optimize trading strategies",
    tech: ["React Native", "JavaScript", "Rest APIs", "Real-time Data", "FCM", "Real Time Push Notification", "Charts"],
    github: "https://github.com/ridamukhtr/froexsignalsanalysis",
    live: "",
  },
  {
    title: "Ecommerce App",
    description:
      "Built a responsive e-commerce app with product search, category filtering, cart management, and authentication modals.Implemented API integration, state management with Pinia, and optimized UX using skeleton loaders and reusable components.",
    tech: ["Vue3", "Boostrap5", "Pinia", "Axios", "REST APIs"],
    github: "https://github.com/ridamukhtr/myStorefamms",
    live: "https://e-store-famms.netlify.app/",
  },
];

interface ProjectCardProps {
  project: {
    title?: string;
    description?: string;
    tech?: string[];
    github?: string;
    live?: string;
  };
  index: number;
  isInView: boolean;
}

const ProjectCard = ({ project, index, isInView }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="project-card group"
  >
    {/* Project Header */}
    <div className="p-6 border-b border-border">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          <Folder size={24} />
        </div>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View on GitHub"
            >
              <LuGithub size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="View live site"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {project.description}
      </p>
    </div>
    {/* Tech Stack */}
    <div className="p-6 pt-4">
      <div className="flex flex-wrap gap-2">
        {project.tech?.map((tech) => (
          <span
            key={tech}
            className="text-xs text-muted-foreground font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* React & Next.js Projects */}
        <div className="">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-xl font-semibold mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-primary" />
            Web and Mobile app Projects
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {reactProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Projects;
