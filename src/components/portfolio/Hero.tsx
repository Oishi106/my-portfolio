import { motion } from "motion/react";
import { Download, Sparkles, ArrowDown, Clapperboard } from "lucide-react";
import avatar from "@/assets/actor-headshot.jpg";
import { profile, socials } from "@/lib/portfolio-data";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Available for casting
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            I&apos;m <span className="text-gradient">{profile.name}</span>, an{" "}
            <span className="text-accent">{profile.title}</span> Based in{" "}
            <span className="text-gradient">{profile.location}</span>.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-accent px-6 py-3.5 text-sm font-semibold text-accent transition-all hover:-translate-y-0.5 hover:bg-accent/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
            >
              View My Shows
              <Clapperboard className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl glass border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Headshot with animated gold tracing ring */}
        <motion.div
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* soft glow behind */}
          <div className="animate-glow-pulse absolute inset-6 rounded-full bg-accent/25 blur-3xl" />

          {/* rotating conic gold trace */}
          <div className="animate-spin-slow absolute inset-0 rounded-full">
            <div
              className="h-full w-full rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 260deg, rgba(247,220,111,0.15) 300deg, #f7dc6f 350deg, #fff6cf 360deg)",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
              }}
            />
          </div>

          {/* static thin base ring */}
          <div className="absolute inset-0 rounded-full border border-accent/25" />

          {/* headshot */}
          <div className="absolute inset-[7%] overflow-hidden rounded-full border-2 border-accent/40 shadow-[var(--shadow-glow)]">
            <img
              src={avatar}
              alt={`${profile.name}, ${profile.title}`}
              width={912}
              height={912}
              className="h-full w-full object-cover"
            />
          </div>

          {/* floating badge */}
          <motion.div
            className="absolute -bottom-2 left-2 rounded-2xl glass-strong border border-border px-5 py-3 card-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-2xl font-bold text-gradient">15+</p>
            <p className="text-xs text-muted-foreground">Productions</p>
          </motion.div>
        </motion.div>
      </div>

      <button
        onClick={() => scrollToId("about")}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-accent md:block"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
}
