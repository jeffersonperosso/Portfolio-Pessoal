import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center gap-6 mb-6">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Desenvolvido por Rafael Costa
      </p>
    </footer>
  );
};

export default Footer;
