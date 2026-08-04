import { motion } from "motion/react";
import { Target, Heart, Sparkles } from "lucide-react";
import { Reveal, SectionHeading, GlassCard } from "./primitives";
import { aboutCards, interests, profile } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 overflow-hidden">
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"
        style={{ animation: "float-slow 11s ease-in-out infinite" }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into products"
          subtitle="A quick look at who I am, what drives me, and how I work."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <GlassCard hover={false} className="h-full">
              <p className="text-base leading-relaxed text-muted-foreground">{profile.bio}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-border bg-muted p-5 transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  <div className="flex items-center gap-2 text-primary">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Target className="h-5 w-5" />
                    </span>
                    <h4 className="font-display font-semibold text-foreground">Career Objective</h4>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    To build reliable full-stack products that combine strong UX, clean systems and
                    measurable business value.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="group rounded-2xl border border-border bg-muted p-5 transition-colors hover:border-accent/40 hover:bg-accent/5"
                >
                  <div className="flex items-center gap-2 text-accent">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <h4 className="font-display font-semibold text-foreground">
                      Professional Summary
                    </h4>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Full-stack expertise across React, Node.js, TypeScript, and databases, with a
                    sharp eye for design systems and performance.
                  </p>
                </motion.div>
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-secondary">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary/10">
                    <Heart className="h-5 w-5" />
                  </span>
                  <h4 className="font-display font-semibold text-foreground">Interests</h4>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {interests.map((i, idx) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="rounded-full border border-border glass px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      {i}
                    </motion.span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {aboutCards.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                >
                  <GlassCard className="flex h-full flex-col justify-center text-center transition-shadow hover:shadow-[0_20px_50px_rgba(0,180,255,0.12)]">
                    <p className="text-xl font-bold text-gradient sm:text-2xl">{c.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                  </GlassCard>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}