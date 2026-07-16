import { Reveal, Counter } from "./primitives";
import { stats } from "@/lib/portfolio-data";

export function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="grid grid-cols-2 gap-4 rounded-[2rem] glass-strong border border-border card-glow p-8 sm:p-10 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-3xl font-extrabold text-gradient sm:text-4xl md:text-5xl"
                />
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
