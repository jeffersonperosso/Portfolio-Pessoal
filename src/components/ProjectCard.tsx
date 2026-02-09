import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  reverse?: boolean;
}

const ProjectCard = ({ title, description, image, tags, github, live, reverse }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative grid md:grid-cols-12 items-center gap-4 mb-24 ${reverse ? "md:text-left" : "md:text-right"}`}
    >
      {/* Image */}
      <div
        className={`md:col-span-7 relative group rounded overflow-hidden ${
          reverse ? "md:col-start-6 md:row-start-1" : "md:col-start-1 md:row-start-1"
        }`}
      >
        <a href={live || "#"} className="block">
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-80 object-cover filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
          />
        </a>
      </div>

      {/* Content */}
      <div
        className={`md:col-span-7 md:row-start-1 relative z-20 ${
          reverse ? "md:col-start-1" : "md:col-start-6"
        }`}
      >
        <p className="font-mono text-primary text-xs mb-2">Projeto em Destaque</p>
        <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
          <a href={live || "#"}>{title}</a>
        </h3>
        <div className="bg-card p-6 rounded shadow-xl text-sm text-muted-foreground leading-relaxed">
          {description}
        </div>
        <ul className={`flex flex-wrap gap-3 font-mono text-xs text-muted-foreground mt-4 ${reverse ? "justify-start" : "md:justify-end"}`}>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className={`flex gap-4 mt-4 ${reverse ? "justify-start" : "md:justify-end"}`}>
          {github && (
            <a href={github} className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          )}
          {live && (
            <a href={live} className="text-foreground hover:text-primary transition-colors" aria-label="Link Externo">
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
