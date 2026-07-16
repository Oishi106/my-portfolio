import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import { navLinks, socials, profile } from "@/lib/portfolio-data";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const SOCIAL_HOVER = [
  "hover:bg-primary hover:border-primary hover:text-primary-foreground",
  "hover:bg-amber-400 hover:border-amber-400 hover:text-background",
  "hover:bg-yellow-500 hover:border-yellow-500 hover:text-background",
  "hover:bg-amber-500 hover:border-amber-500 hover:text-background",
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <button onClick={() => scrollToId("home")} className="flex items-center gap-2 font-display text-lg font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              Aarav<span className="text-gradient">.dev</span>
            </button>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              {profile.tagline} Let's turn your next idea into a premium, production-ready product.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.35 }}
                >
                  <motion.button
                    onClick={() => scrollToId(l.id)}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group relative inline-flex items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="relative">
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                    </span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider">Connect</h4>
            <div className="mt-4 flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className={`grid h-10 w-10 place-items-center rounded-xl glass border border-border text-muted-foreground shadow-[var(--shadow-glow)] transition-colors ${
                    SOCIAL_HOVER[i % SOCIAL_HOVER.length]
                  }`}
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Blueprint. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-xl glass border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary/40"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}