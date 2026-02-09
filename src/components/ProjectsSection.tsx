import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Portfolio Pessoal",
    description:
      "Este projeto consiste em um site de portfólio pessoal, desenvolvido para apresentar minhas experiências, habilidades e projetos, servindo como um espaço profissional para divulgação do meu trabalho.",
    image: project1,
    tags: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
    github: "https://github.com/jeffersonperosso/Portfolio-Pessoal",
    live: "#Teste",
  }
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="03" title="Projetos" />
      {projects.map((project, i) => (
        <ProjectCard key={project.title} {...project} reverse={i % 2 !== 0} />
      ))}
    </section>
  );
};

export default ProjectsSection;
