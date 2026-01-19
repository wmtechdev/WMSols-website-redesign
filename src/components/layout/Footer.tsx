import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Portfolio", path: "/portfolio" },
  ],
  services: [
    { name: "Web Development", path: "/services" },
    { name: "Mobile Apps", path: "/services" },
    { name: "Cloud Solutions", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-heading font-bold text-lg">
                  W
                </span>
              </div>
              <span className="font-heading font-semibold text-xl">WMSols</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">
              We craft digital solutions that empower businesses to thrive in an
              ever-evolving technological landscape. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-heading font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-accent" />
                <span className="text-primary-foreground/70">
                  info@wmsols.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-accent" />
                <span className="text-primary-foreground/70">
                  +1 (505) 386-1888
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-accent" />
                <span className="text-primary-foreground/70">
                  123 Tech Avenue
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} WMSols. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.support.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground/50 text-sm hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
