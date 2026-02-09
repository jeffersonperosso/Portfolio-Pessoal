import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const SocialSidebar = () => {
  return (
    <>
      {/* Left - Social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex fixed bottom-0 left-8 flex-col items-center gap-6"
      >
        <a href="#" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
          <Github className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all">
          <Twitter className="w-5 h-5" />
        </a>
        <div className="w-px h-24 bg-muted-foreground" />
      </motion.div>

      {/* Right - Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex fixed bottom-0 right-8 flex-col items-center gap-6"
      >
        <a
          href="mailto:rafael.costa@email.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
          style={{ writingMode: "vertical-rl" }}
        >
          rafael.costa@email.com
        </a>
        <div className="w-px h-24 bg-muted-foreground" />
      </motion.div>
    </>
  );
};

export default SocialSidebar;
