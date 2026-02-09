import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "The Social Media",
    role: "Desenvolvedor de Automação e IA.",
    period: "Jan 2026 — Atualmente",
    points: [
      "Desenvolvimento de automações que reduzem tarefas manuais e aumentam a eficiência dos processos.",
      "Integração de sistemas e APIs para garantir fluxo automático e confiável de dados.",
      "Criação de soluções personalizadas com foco em escalabilidade e manutenção simples.",
    ],
  },
  {
    company: "Invicto Energia Solar",
    role: "Desenvolvedor Fullstack (Laravel - PHP).",
    period: "Fev 2024 — Jan 2025",
    points: [
      "Desenvolvimento de sistemas web utilizando Laravel, com foco em organização, performance e boas práticas.",
      "Criação e manutenção de CRUDs, integrações com banco de dados e regras de negócio.",
      "Implementação de melhorias e correções visando escalabilidade e estabilidade da aplicação.",
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
