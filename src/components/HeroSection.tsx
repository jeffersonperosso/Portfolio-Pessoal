import { motion } from "framer-motion";
const HeroSection = () => {
  return <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-4xl">
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="font-mono text-primary mb-5 text-sm md:text-base">
          Olá, meu nome é
        </motion.p>

        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
          Jefferson Perosso.
        </motion.h1>

        <motion.h2 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
          Construo experiências digitais.
        </motion.h2>

        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.5
      }} className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed mb-12">
          Sou um desenvolvedor full-stack especializado em criar aplicações web
          excepcionais.
        </motion.p>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }}>
          <a href="#projetos" className="inline-block font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors">
            Confira meus projetos
          </a>
        </motion.div>
      </div>
    </section>;
};
export default HeroSection;