import { Briefcase, Trophy } from "lucide-react";
import { Reveal, SectionHeading, GlassCard } from "./primitives";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Building products and leading teams across the stack."
        />

        <div className="relative mt-14">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.05}>
                <div
                  className={`relative flex md:items-center ${
                    i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <span className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-primary ring-4 ring-background md:left-1/2" />
                  <div className="w-full pl-12 md:w-1/2 md:pl-0 md:px-8">
                    <GlassCard>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-2 text-primary">
                          <Briefcase className="h-4 w-4" />
                          <h3 className="font-display text-lg font-semibold text-foreground">
                            {exp.position}
                          </h3>
                        </span>
                        <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                          {exp.duration}
                        </span>
                      </div>
                      <p className="mt-1 font-medium text-gradient">{exp.company}</p>
                      <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                        {exp.responsibilities.map((r) => (
                          <li key={r} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {r}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.achievements.map((a) => (
                          <span
                            key={a}
                            className="inline-flex items-center gap-1 rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-success"
                          >
                            <Trophy className="h-3 w-3" />
                            {a}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

