import { motion } from "motion/react";
import { Reveal, SectionHeading, GlassCard } from "./primitives";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          subtitle="A blend of frontend polish, backend depth, and everything in between."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={(gi % 4) * 0.08}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                    <group.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                </div>

                {"skills" in group && group.skills ? (
                  <div className="mt-5 space-y-4">
                    {group.skills.map((s) => (
                      <div key={s.name}>
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">{s.name}</span>
                          <span className="text-muted-foreground">{s.level}%</span>
                        </div>
                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                          <motion.div
                            className="h-full rounded-full bg-gradient-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.badges?.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-border bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
