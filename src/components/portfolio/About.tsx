import { Target, Heart, Sparkles } from "lucide-react";
import { Reveal, SectionHeading, GlassCard } from "./primitives";
import { aboutCards, interests, profile } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into products"
          subtitle="A quick look at who I am, what drives me, and how I work."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <GlassCard hover={false} className="h-full">
              <p className="text-base leading-relaxed text-muted-foreground">
                I'm {profile.name}, a {profile.title.toLowerCase()} who loves building elegant,
                high-performing software. Over the past six years I've partnered with startups and
                enterprises to ship products that are as delightful to use as they are robust
                under the hood.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-muted p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <Target className="h-5 w-5" />
                    <h4 className="font-display font-semibold text-foreground">Career Objective</h4>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    To lead the design and engineering of AI-driven products that meaningfully
                    improve everyday life.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-muted p-5">
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles className="h-5 w-5" />
                    <h4 className="font-display font-semibold text-foreground">Professional Summary</h4>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Full-stack expertise across React, Node, Python and cloud, with a sharp eye
                    for design systems and performance.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-secondary">
                  <Heart className="h-5 w-5" />
                  <h4 className="font-display font-semibold text-foreground">Interests</h4>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {interests.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-border glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {aboutCards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <GlassCard className="flex h-full flex-col justify-center text-center">
                  <p className="text-xl font-bold text-gradient sm:text-2xl">{c.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
