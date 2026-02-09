import { Github, Linkedin} from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/jeffersonperosso", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/jefferson-perosso-b93495236", label: "LinkedIn" },
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
            target="_blank"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        Desenvolvido por Jefferson Perosso
      </p>
    </footer>
  );
};

export default Footer;
