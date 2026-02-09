import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
const skills = ["JavaScript", "React","Laravel", "Node.js", "Python", "PostgreSQL", "Docker", "PHP"];
const AboutSection = () => {
  return <section id="sobre" className="section-padding max-w-5xl mx-auto">
      <SectionHeading number="01" title="Sobre Mim" />

      <div className="grid md:grid-cols-3 gap-12">
        <motion.div initial={{
        opacity: 0,
        x: -30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p>Sou desenvolvedor backend com experiência em PHP e Laravel, focado na construção de sistemas funcionais, organizados e pensados para resolver problemas reais. Tenho vivência prática com manutenção, evolução e criação de aplicações web, lidando com banco de dados, regras de negócio e integração entre sistemas.</p>
          <p>
            Aqui estão algumas tecnologias com as quais tenho trabalhado:
          </p>

          <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-4">
            {skills.map(skill => <li key={skill} className="flex items-center gap-2">
                <span className="text-primary text-xs">▹</span>
                {skill}
              </li>)}
          </ul>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        x: 30
      }} whileInView={{
        opacity: 1,
        x: 0
      }} viewport={{
        once: true
      }} className="relative group mx-auto">
          <div className="w-56 h-56 md:w-64 md:h-64 rounded bg-primary/20 overflow-hidden relative z-10">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary flex items-center justify-center text-5xl font-bold text-primary">
              JP
            </div>
          </div>
          <div className="absolute top-4 left-4 w-56 h-56 md:w-64 md:h-64 rounded border-2 border-primary transition-all group-hover:top-2 group-hover:left-2" />
        </motion.div>
      </div>
    </section>;
};
export default AboutSection;