import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter, AlignCenter } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const categories = ["All", "Full Stack", "MERN", "Web App", "API", "Mobile"];

const portfolioProjects = [
  {
    id: 1,
    title: "Amorra AI",
    category: "Mobile",
    description:
      "An AI-powered emotional companion app designed for men 50+, offering empathetic conversations, daily prompts, and a personalized experience in a secure and private environment.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Firebase", "Stripe", "GetX", "AI"],
    problem:
      "Men aged 50+ often experience loneliness and lack accessible, private emotional support and meaningful conversation platforms.",
    solution:
      "Built a secure AI companion app that offers empathetic, personalized conversations with privacy-first architecture and simple, intuitive UX.",
    challenges: [
      "Maintaining conversational context across sessions",
      "Ensuring user privacy and data encryption",
      "Building a simple and accessible UI for older users",
      "Integrating subscriptions with Stripe securely",
    ],
    github: "https://github.com/wmtechdev/amorra",
    demo: "#",
  },
  {
    id: 2,
    title: "ATS – Applicant Tracking System",
    category: "Mobile",
    description:
      "A comprehensive Flutter web-based Applicant Tracking System that streamlines recruitment workflows, enabling candidates to apply for jobs and administrators to manage job postings, documents, and application statuses efficiently.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    tags: [
      "Flutter Web",
      "Firebase",
      "GetX",
      "Clean Architecture",
      "Firestore",
    ],
    problem:
      "Recruitment teams struggled with fragmented hiring processes, manual document handling, and lack of visibility into application and document statuses.",
    solution:
      "Built a centralized recruitment platform with separate candidate and admin portals, automated document validation, real-time status tracking, and role-based access control.",
    challenges: [
      "Designing role-based access control for multiple user types",
      "Implementing document validation and approval workflows",
      "Maintaining Clean Architecture separation across layers",
      "Ensuring scalable Firestore data modeling",
    ],
    github: "https://github.com/wmtechdev/ats",
    demo: "#",
  },
  {
    id: 3,
    title: "Elegant Advisors Website",
    category: "Mobile",
    description:
      "A Flutter web application serving as the online presence for Elegant Advisors, implemented using modern Flutter tooling and structured for web deployment.",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Dart", "Web", "Responsive UI"],
    problem:
      "Elegant Advisors needed a web platform to showcase services and provide a professional online presence.",
    solution:
      "Built a Flutter-based web application to deliver a responsive, cross-platform front-end that can easily be deployed and maintained.",
    challenges: [
      "Implementing web-friendly Flutter layout",
      "Managing assets and routing for a web deployment",
      "Ensuring performance on multiple devices",
    ],
    github: "https://github.com/wmtechdev/elegant_advisors",
    demo: "#",
  },
  {
    id: 4,
    title: "CryptoTracker Dashboard",
    category: "MERN",
    description:
      "Real-time cryptocurrency tracking dashboard with portfolio management, price alerts, and historical analysis. Integrates with major exchanges for live data.",
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Express", "MongoDB", "Redux", "Chart.js"],
    problem:
      "Crypto investors needed a single platform to track investments across multiple wallets and exchanges.",
    solution:
      "Created a unified dashboard with real-time price tracking, portfolio aggregation, and smart alerts.",
    challenges: [
      "Handling rate-limited APIs",
      "Real-time WebSocket connections",
      "Complex data aggregation",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "RecipeHub Social",
    category: "Web App",
    description:
      "Social recipe sharing platform with meal planning, smart shopping lists, and nutritional tracking. Features AI-powered recipe recommendations.",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind", "OpenAI"],
    problem:
      "Home cooks lacked a platform that combined recipe discovery with practical meal planning tools.",
    solution:
      "Built a community-driven platform with intelligent meal planning and automated shopping lists.",
    challenges: [
      "Scaling image uploads",
      "Complex ingredient parsing",
      "AI integration for recommendations",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    title: "DevConnect API",
    category: "API",
    description:
      "RESTful API service for developer portfolios with authentication, project management, and social features. Powers multiple client applications.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Redis"],
    problem:
      "Developers needed a robust backend solution for portfolio websites with social features.",
    solution:
      "Designed a scalable API with comprehensive documentation, rate limiting, and caching.",
    challenges: [
      "API versioning strategy",
      "Rate limiting at scale",
      "Efficient caching",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 7,
    title: "FitTrack Mobile",
    category: "Mobile",
    description:
      "Cross-platform fitness tracking app with workout logging, progress photos, and social challenges. Syncs with popular fitness wearables.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Node.js", "MongoDB", "Firebase"],
    problem:
      "Fitness enthusiasts wanted a comprehensive app that combined tracking with social motivation.",
    solution:
      "Created a feature-rich mobile app with wearable integration and community challenges.",
    challenges: [
      "Cross-platform consistency",
      "Wearable API integration",
      "Offline workout tracking",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 8,
    title: "BlogCMS Platform",
    category: "Full Stack",
    description:
      "Modern headless CMS for blogs with markdown support, SEO optimization, and analytics dashboard. Powers high-traffic content sites.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "GraphQL", "Redis"],
    problem:
      "Content creators needed a fast, flexible CMS that didn't compromise on performance or SEO.",
    solution:
      "Built a headless CMS with powerful API, intelligent caching, and built-in SEO tools.",
    challenges: [
      "GraphQL schema design",
      "Image optimization pipeline",
      "Multi-tenant architecture",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Developer Portfolio
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              MERN Stack Showcase
            </h1>
            <p className="text-xl text-primary-foreground/70 leading-relaxed">
              A curated collection of full-stack projects demonstrating
              technical expertise, creative problem-solving, and a passion for
              crafting quality software.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section ref={ref} className="section-padding bg-background">
        <div className="container-wide">
          {/* Category Filter */}
          <div
            className={`flex flex-wrap items-center gap-3 mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Filter size={20} className="text-muted-foreground" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn()}
              ></button>
            ))}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-card rounded-2xl overflow-hidden shadow-card card-hover border border-border/50 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center gap-4 p-6">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg text-primary-foreground text-sm font-medium hover:bg-primary-foreground/30 transition-colors"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-accent rounded-lg text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Problem & Solution */}
                  <div className="space-y-3 mb-4">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        Problem
                      </span>
                      <p className="text-sm text-foreground/80 mt-1">
                        {project.problem}
                      </p>
                    </div>
                    <div className="p-3 bg-accent/5 rounded-lg border border-accent/20">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        Solution
                      </span>
                      <p className="text-sm text-foreground/80 mt-1">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Challenges */}
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Key Challenges
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.challenges.map((challenge) => (
                        <span
                          key={challenge}
                          className="text-xs text-muted-foreground"
                        >
                          • {challenge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-subtle">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Interested in collaborating or have a project in mind? I'd love to
            hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <a href="mailto:hello@wmsols.com" className="group">
                Get in Touch
              </a>
            </Button>
            <Button variant="default" size="lg" asChild>
              <a href="#" className="group">
                <Github size={18} className="mr-2" />
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
