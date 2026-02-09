import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  {
    title: "Dashboard Analytics",
    description:
      "Plataforma completa de analytics com visualizações em tempo real, relatórios customizáveis e integração com múltiplas fontes de dados. Interface intuitiva para tomada de decisões baseada em dados.",
    image: project1,
    tags: ["React", "TypeScript", "D3.js", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Mobile App",
    description:
      "Aplicativo mobile de e-commerce com catálogo dinâmico, carrinho inteligente, sistema de pagamentos integrado e rastreamento de pedidos em tempo real.",
    image: project2,
    tags: ["React Native", "TypeScript", "Stripe", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    title: "Rede Social ConnectHub",
    description:
      "Plataforma social com feed em tempo real, sistema de mensagens, stories e algoritmo de recomendação de conteúdo personalizado.",
    image: project3,
    tags: ["React", "GraphQL", "MongoDB", "Socket.io", "Redis"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Analytics Platform",
    description:
      "SaaS de analytics potencializado por inteligência artificial. Previsões automáticas, detecção de anomalias e relatórios inteligentes para empresas.",
    image: project4,
    tags: ["Python", "TensorFlow", "React", "FastAPI", "Docker"],
    github: "#",
    live: "#",
  },
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
