import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding max-w-2xl mx-auto text-center py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-4">04. E agora?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h2>
        <p className="text-muted-foreground leading-relaxed mb-10">
          Estou sempre aberto a novas oportunidades e parcerias. Se você tem um
          projeto em mente, uma pergunta ou simplesmente quer dizer olá, minha
          caixa de entrada está sempre aberta!
        </p>
        <a
          href="mailto:jeffersondamazioperosso@gmail.com"
          className="inline-block font-mono text-sm border border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-colors"
        >
          Diga Olá
        </a>
      </motion.div>
    </section>
  );
};

export default ContactSection;
