import { motion } from "motion/react";
import { Download, Sparkles, ArrowDown, Code2 } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { profile, socials } from "@/lib/portfolio-data";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16 overflow-hidden">
      {/* ambient background blobs for extra depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-accent/10 blur-[100px]"
        style={{ animation: "float-slow 10s ease-in-out infinite" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
        style={{ animation: "float-slow 12s ease-in-out infinite reverse" }}
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 rounded-full glass border border-border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-3.5 w-3.5" />
            </motion.span>
            Open for remote work
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.2rem]"
          >
            I&apos;m{" "}
            <span
              className="text-gradient bg-[length:200%_auto]"
              style={{ animation: "gradient-shift 6s ease infinite" }}
            >
              Mahamuda Afroz
            </span>
            , a <span className="text-accent">Full-Stack Developer</span> crafting{" "}
            <span
              className="text-gradient bg-[length:200%_auto]"
              style={{ animation: "gradient-shift 6s ease infinite" }}
            >
              modern web experiences
            </span>
            .
          </motion.h1>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href={profile.resumeUrl}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-accent px-6 py-3.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
            <motion.button
              onClick={() => scrollToId("projects")}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-accent/20"
            >
              View My Work
              <motion.span
                className="inline-flex"
                animate={{ rotate: [0, 12, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex items-center gap-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`grid h-11 w-11 place-items-center rounded-xl glass border border-accent/30 text-muted-foreground transition-colors hover:text-accent hover:border-accent/60 social-animate ${
                  i % 2 === 0 ? "social-float" : ""
                }`}
              >
                <s.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile image with animated gold tracing ring */}
        <motion.div
          className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          {/* soft glow behind */}
          <div className="absolute inset-6 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />

          {/* outer rotating gradient ring */}
          <div className="absolute -inset-2 rounded-full" style={{ animation: "spin-slow 16s linear infinite" }}>
            <div
              className="h-full w-full rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(0,230,255,0.04) 0deg, rgba(0,180,255,0.1) 40deg, transparent 160deg, rgba(0,230,255,0.1) 300deg)",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 6px), #000 calc(100% - 6px))",
                filter: "blur(8px)",
              }}
            />
          </div>

          {/* dotted rotating ring accents */}
          <div className="absolute inset-0 rounded-full" style={{ pointerEvents: "none" }}>
            <div
              className="h-full w-full rounded-full"
              style={{
                background:
                  "repeating-radial-gradient(circle at center, rgba(0,230,255,0.08) 0px, rgba(0,230,255,0.08) 2px, transparent 3px, transparent 8px)",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 8px))",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 8px))",
                transform: "rotate(12deg)",
                animation: "spin-slow 28s linear infinite reverse",
                opacity: 0.9,
              }}
            />
          </div>

          {/* thin sweeping arc to show rotation around the profile */}
          <div aria-hidden className="absolute inset-0 pointer-events-none">
            <div className="sweep">
              <div
                className="sweep-arc"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(0,230,255,0.95) 10deg, rgba(0,180,255,0.45) 100deg, rgba(0,230,255,0.12) 140deg, transparent 210deg)",
                  WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 8px))",
                  mask: "radial-gradient(farthest-side, transparent calc(100% - 8px), #000 calc(100% - 8px))",
                }}
              />
            </div>
          </div>

          {/* static thin base ring */}
          <div className="absolute inset-0 rounded-full border border-accent/25" />

          {/* headshot */}
          <motion.div
            className="absolute inset-[7%] overflow-hidden rounded-full border-2 border-accent/40 shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={avatar}
              alt={`${profile.name}, ${profile.title}`}
              width={912}
              height={912}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* floating badge */}
          <motion.div
            className="absolute -bottom-2 left-2 rounded-2xl glass-strong border border-border px-5 py-3 card-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.6, duration: 0.6 },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
          >
            <p className="text-2xl font-bold text-gradient">15+</p>
            <p className="text-xs text-muted-foreground">Projects</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToId("about")}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-accent md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6" />
      </motion.button>
    </section>
  );
}