import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github, Check, X } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  const [selected, setSelected] = useState<typeof projects[number] | null>(null);
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected recent work"
          subtitle="A few products I'm proud of — from analytics to AI."
        />

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl glass border border-border card-glow transition-colors hover:border-primary/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-success" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3 pt-2">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>

                    <button
                      type="button"
                      onClick={() => setSelected(p)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-muted px-4 py-2.5 text-xs font-semibold text-foreground transition-colors hover:border-primary/40"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> View
                    </button>

                    {/* Code button removed per request */}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        {/* Project modal */}
        {selected && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="relative w-full max-w-3xl rounded-3xl glass border border-border p-6 shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => setSelected(null)}
                className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-background border border-border shadow-lg text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground z-[60]"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-start gap-4">
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl bg-muted">
                  <img src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold">{selected.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{selected.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="ml-2 flex-shrink-0">
                  <a href={selected.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-3 py-2 text-xs font-semibold text-primary-foreground z-10">Live Link</a>
                </div>
              </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold">Features</h4>
                  <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                    {selected.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div>
                    <h4 className="text-sm font-semibold">Repositories</h4>
                    <div className="mt-2 flex flex-col gap-2">
                      {('githubClient' in selected || 'githubServer' in selected) ? (
                        <>
                          {(selected as any).githubClient && (
                            <a href={(selected as any).githubClient} target="_blank" rel="noreferrer" className="repo-item inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-3 py-2 text-sm">
                              <Github className="h-4 w-4" /> Client Repository
                            </a>
                          )}
                          {(selected as any).githubServer && (
                            <a href={(selected as any).githubServer} target="_blank" rel="noreferrer" className="repo-item  inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-3 py-2 text-sm">
                              <Github className="h-4 w-4" /> Server Repository
                            </a>
                          )}
                        </>
                      ) : (
                        <a href={selected.github} target="_blank" rel="noreferrer" className="repo-item social-animate inline-flex items-center gap-2 rounded-xl border border-border bg-transparent px-3 py-2 text-sm">
                          <Github className="h-4 w-4" /> Repository
                        </a>
                      )}
                    </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}