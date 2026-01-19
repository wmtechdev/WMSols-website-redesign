import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden gradient-hero">
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
        <div className="absolute top-1/3 left-1/5 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="container-wide relative z-10 text-center py-24 md:py-32 pt-32">
          <div className="max-w-3xl mx-auto">
            {/* Badge */}
            <div
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-8 backdrop-blur-sm border border-primary-foreground/10 transition-all duration-700",
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Our Work</span>
            </div>

            <h1
              className={cn(
                "font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 transition-all duration-700 delay-100",
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
            >
              Case Studies
            </h1>

            <p
              className={cn(
                "text-lg md:text-xl text-primary-foreground/70 leading-relaxed transition-all duration-700 delay-200",
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
            >
              Real products. Real impact. Built and delivered by WMSols.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Link
                key={caseStudy.id}
                to={`/case-studies/${caseStudy.slug}`}
                className={cn(
                  "group relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card card-hover transition-all duration-500",
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={caseStudy.heroImage}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" /> */}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {caseStudy.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {caseStudy.shortDescription}
                  </p>

                  {/* CTA */}
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                      View Case Study
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Success Story?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Let's discuss how we can help bring your vision to life with the
              same dedication and quality.
            </p>
            <Button variant="default" size="lg" asChild>
              <Link to="/contact" className="group">
                Start a Conversation
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
