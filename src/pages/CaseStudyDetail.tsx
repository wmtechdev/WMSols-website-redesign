import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  Layers,
  CheckCircle2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getCaseStudyBySlug, iconMap, caseStudies } from "@/data/caseStudies";

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    window.scrollTo(0, 0);
  }, [slug]);

  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  // Find next case study for navigation
  const currentIndex = caseStudies.findIndex((cs) => cs.slug === slug);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden gradient-hero">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 left-1/5 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container-wide relative z-10 py-24 md:py-32 pt-32">
          {/* Back link */}
          <Link
            to="/case-studies"
            className={cn(
              "inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-all duration-700",
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-4",
            )}
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-medium">All Case Studies</span>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Tags */}
              <div
                className={cn(
                  "flex flex-wrap gap-2 mb-6 transition-all duration-700 delay-100",
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                )}
              >
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent border border-accent/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1
                className={cn(
                  "font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 transition-all duration-700 delay-200",
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                )}
              >
                {caseStudy.title}
              </h1>

              <p
                className={cn(
                  "text-lg text-primary-foreground/70 leading-relaxed mb-8 transition-all duration-700 delay-300",
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                )}
              >
                {caseStudy.shortDescription}
              </p>

              {/* Metadata */}
              <div
                className={cn(
                  "grid grid-cols-2 gap-4 transition-all duration-700 delay-400",
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4",
                )}
              >
                <div className="flex items-center gap-3 text-primary-foreground/60">
                  <Layers size={18} className="text-accent" />
                  <span className="text-sm">{caseStudy.metadata.industry}</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/60">
                  <Calendar size={18} className="text-accent" />
                  <span className="text-sm">{caseStudy.metadata.year}</span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/60">
                  <Clock size={18} className="text-accent" />
                  <span className="text-sm">
                    {caseStudy.metadata.deliveryTime}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-primary-foreground/60">
                  <Users size={18} className="text-accent" />
                  <span className="text-sm">{caseStudy.metadata.teamSize}</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className={cn(
                "relative aspect-video rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 delay-300 ring-1 ring-primary-foreground/10",
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8",
              )}
            >
              <img
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section with Key Facts */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
                Project Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {caseStudy.overview}
              </p>
            </div>

            {/* Key Facts Card */}
            <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-card h-fit">
              <h3 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-accent" />
                Key Facts
              </h3>
              <div className="space-y-4">
                {caseStudy.keyFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0 last:pb-0"
                  >
                    <span className="text-muted-foreground text-sm">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-foreground">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <h4 className="text-sm font-medium text-muted-foreground mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.metadata.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium rounded bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              The Challenge
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-6">
              Problem Statement
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {caseStudy.problemStatement}
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-6">
              Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {caseStudy.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Capabilities
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
              Key Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.features.map((feature, index) => {
              const IconComponent = iconMap[feature.iconName];
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border/50 shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent size={24} className="text-accent" />
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* UI/UX Design Approach */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Design Philosophy
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-6">
              {caseStudy.designApproach.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {caseStudy.designApproach.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Under the Hood
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
              Technical Architecture
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="font-heading text-lg font-semibold mb-4 text-accent">
                Frontend
              </h3>
              <ul className="space-y-3">
                {caseStudy.technicalArchitecture.frontend.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="font-heading text-lg font-semibold mb-4 text-accent">
                Backend
              </h3>
              <ul className="space-y-3">
                {caseStudy.technicalArchitecture.backend.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="font-heading text-lg font-semibold mb-4 text-accent">
                DevOps
              </h3>
              <ul className="space-y-3">
                {caseStudy.technicalArchitecture.devops.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground text-sm"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Execution */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                Project Journey
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
                Timeline & Execution
              </h2>
              {caseStudy.earlyDelivery && (
                <p className="text-accent font-medium mt-4 flex items-center justify-center gap-2">
                  <Sparkles size={16} />
                  {caseStudy.earlyDelivery}
                </p>
              )}
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

              <div className="space-y-8">
                {caseStudy.timeline.map((phase, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative grid md:grid-cols-2 gap-4 md:gap-8",
                      index % 2 === 0 ? "md:text-right" : "md:text-left",
                    )}
                  >
                    <div
                      className={cn(
                        "pl-8 md:pl-0 md:pr-8",
                        index % 2 !== 0 && "md:col-start-2 md:pl-8 md:pr-0",
                      )}
                    >
                      <div className="bg-card rounded-xl p-5 border border-border/50 shadow-soft inline-block w-full">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-accent font-semibold text-sm">
                            {phase.duration}
                          </span>
                        </div>
                        <h3 className="font-heading font-semibold mb-2">
                          {phase.phase}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {phase.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 top-5 w-3 h-3 rounded-full bg-accent border-4 border-background md:-translate-x-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing & QA */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Quality Assurance
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-6">
              Testing & QA
            </h2>
            <ul className="space-y-4">
              {caseStudy.testing.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Measurable Outcomes
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">
              Results & Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.results.map((result, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50 shadow-soft text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {result.value}
                </div>
                <div className="font-semibold text-foreground mb-1">
                  {result.metric}
                </div>
                <p className="text-muted-foreground text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Insights
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-6">
              Key Learnings
            </h2>
            <ul className="space-y-4">
              {caseStudy.keyLearnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      {caseStudy.futureRoadmap && (
        <section className="py-16 bg-background">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                What's Next
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-6">
                Future Roadmap
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {caseStudy.futureRoadmap.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl border border-border/30"
                  >
                    <ArrowRight size={18} className="text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Let's Build Your Success Story
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Inspired by what you see? Let's discuss how we can bring similar
              results to your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact" className="group">
                  Start a Conversation
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button variant="hero" size="lg" asChild>
                <Link
                  to={`/case-studies/${nextCaseStudy.slug}`}
                  className="group"
                >
                  Next Case Study
                  <ExternalLink size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
