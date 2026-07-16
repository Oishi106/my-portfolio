import { GraduationCap, Briefcase, Star } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { timeline } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const iconMap = {
  education: GraduationCap,
  career: Briefcase,
  milestone: Star,
} as const;

const colorMap = {
  education: "text-accent",
  career: "text-primary",
  milestone: "text-warning",
} as const;

export function Timeline() {
  return (
    <section id="journey" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Timeline"
          title="My journey so far"
          subtitle="Education, career milestones, and moments that shaped my path."
        />

        <div className="relative mt-14 pl-8">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.type as keyof typeof iconMap];
              return (
                <Reveal key={`${item.year}-${item.title}`} delay={i * 0.05}>
                  <div className="relative">
                    <span className="absolute -left-8 top-1 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full glass border border-border">
                      <Icon className={cn("h-4 w-4", colorMap[item.type as keyof typeof colorMap])} />
                    </span>
                    <div className="rounded-2xl glass border border-border card-glow p-5 transition-colors hover:border-primary/40">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                          {item.year}
                        </span>
                        <h3 className="font-display text-base font-semibold">{item.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
