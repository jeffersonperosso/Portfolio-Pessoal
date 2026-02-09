import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Desenvolvedor Full-Stack Sênior",
    period: "Jan 2023 — Presente",
    points: [
      "Lidero o desenvolvimento de aplicações web escaláveis utilizando React, Node.js e AWS, atendendo mais de 50 mil usuários ativos.",
      "Implementei pipelines de CI/CD que reduziram o tempo de deploy em 60%.",
      "Mentoro uma equipe de 4 desenvolvedores juniores em melhores práticas e code reviews.",
    ],
  },
  {
    company: "PixelCraft Agency",
    role: "Desenvolvedor Front-End Pleno",
    period: "Mar 2021 — Dez 2022",
    points: [
      "Desenvolvi interfaces responsivas e acessíveis para mais de 20 clientes utilizando React e TypeScript.",
      "Otimizei performance de carregamento, alcançando score 95+ no Lighthouse em todos os projetos.",
      "Colaborei diretamente com designers UX para traduzir protótipos em componentes reutilizáveis.",
    ],
  },
  {
    company: "StartupFin",
    role: "Desenvolvedor Júnior",
    period: "Jun 2019 — Fev 2021",
    points: [
      "Contribuí para o desenvolvimento do app mobile de pagamentos usando React Native.",
      "Integrei APIs RESTful e serviços de terceiros para processamento de transações.",
      "Participei ativamente de sprints ágeis e cerimônias Scrum.",
    ],
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experiencia" className="section-padding max-w-3xl mx-auto">
      <SectionHeading number="02" title="Experiência" />

      <div className="flex flex-col md:flex-row gap-0">
        {/* Tabs */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-3 font-mono text-sm text-left whitespace-nowrap transition-colors ${
                activeTab === i
                  ? "text-primary bg-secondary/50 md:border-l-2 md:border-primary md:-ml-px border-b-2 md:border-b-0 border-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-secondary/30"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="py-4 md:py-0 md:pl-8 min-h-[280px]"
        >
          <h3 className="text-lg font-medium">
            {experiences[activeTab].role}{" "}
            <span className="text-primary">@ {experiences[activeTab].company}</span>
          </h3>
          <p className="font-mono text-sm text-muted-foreground mt-1 mb-6">
            {experiences[activeTab].period}
          </p>
          <ul className="space-y-4">
            {experiences[activeTab].points.map((point, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="text-primary mt-1 shrink-0">▹</span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
