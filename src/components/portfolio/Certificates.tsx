import { useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { certificates } from "@/lib/portfolio-data";

type Certificate = (typeof certificates)[number];

export function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certificates"
          title="Credentials & achievements"
          subtitle="Continuous learning is part of the craft."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.08}>
              <div
                role="button"
                tabIndex={0}
                onClick={() => setSelected(c)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelected(c);
                }}
                className="group flex h-full cursor-pointer flex-col rounded-3xl glass border border-border card-glow p-6 transition-all hover:-translate-y-1.5 hover:border-primary/40"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                    {c.image ? (
                      <img
                        src={c.image}
                        alt=""
                        className="h-full w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <Award className="h-6 w-6" />
                    )}
                  </span>
                  <button
                    type="button"
                    aria-label={`View ${c.title} certificate`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(c);
                    }}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
                <h3 className="mt-5 font-display text-base font-semibold leading-snug">
                  {c.title}
                </h3>
                <p className="mt-1 text-sm text-gradient">{c.issuer}</p>
                <p className="mt-auto pt-4 text-xs text-muted-foreground">{c.date}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Content */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl glass border border-border p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-gradient-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt=""
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <Award className="h-8 w-8" />
                )}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {selected.title}
                </h3>
                <p className="text-sm text-gradient">{selected.issuer}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{selected.date}</p>
              </div>
            </div>

            {/* Full certificate image preview, if available */}
            {selected.image && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full object-cover"
                />
              </div>
            )}

           
          </div>
        </div>
      )}
    </section>
  );
}