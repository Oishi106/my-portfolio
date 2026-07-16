import { GraduationCap } from "lucide-react";
import { Reveal, SectionHeading, GlassCard } from "./primitives";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation"
          subtitle="Where the craft was first shaped."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.08}>
              <GlassCard className="h-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <h4 className="font-display text-lg font-semibold">{e.school}</h4>
                  </div>
                  <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
                    {e.year}
                  </span>
                </div>
                <p className="mt-4 font-medium text-gradient">{e.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">Major: {e.major}</p>
                <p className="mt-1 text-sm text-muted-foreground">GPA: {e.gpa}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
