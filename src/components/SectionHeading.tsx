import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

const SectionHeading = ({ number, title }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-12"
  >
    <span className="font-mono text-primary text-lg md:text-xl">{number}.</span>
    <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">{title}</h2>
    <div className="h-px bg-border flex-1 max-w-xs" />
  </motion.div>
);

export default SectionHeading;
