import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Mail } from "lucide-react";
import { Reveal, SectionHeading, GlassCard } from "./primitives";
import { contactInfo, socials } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function FloatingField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  textarea = false,
}: {
  id: keyof Fields;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  textarea?: boolean;
}) {
  const shared =
    "peer w-full rounded-2xl border bg-muted px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-colors placeholder-transparent focus:border-primary";
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(shared, "resize-none", error ? "border-destructive" : "border-border")}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(shared, error ? "border-destructive" : "border-border")}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-sm text-muted-foreground transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
      {error && <p className="mt-1.5 pl-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

export function Contact() {
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (v: string) => {
    setFields((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Errors = {};
    if (!fields.name.trim()) e.name = "Please enter your name.";
    if (!emailRe.test(fields.email.trim())) e.email = "Enter a valid email address.";
    if (fields.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setFields({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          subtitle="Have a project in mind or just want to say hi? Drop me a message."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 rounded-2xl glass border border-border card-glow p-5 transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground border border-accent/30 shadow-[var(--shadow-glow)]">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                    <p className="truncate font-medium">{c.value}</p>
                  </div>
                </a>
              ))}
              <GlassCard hover={false} className="mt-auto">
                <p className="text-sm font-medium">Find me online</p>
                <div className="mt-3 flex gap-3">
                  {socials.map((s, i) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className={`grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-muted text-muted-foreground social-animate ${
                        i % 2 === 0 ? "social-float" : ""
                      }`}
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </GlassCard>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassCard hover={false} className="h-full">
              <form onSubmit={onSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <FloatingField id="name" label="Your name" value={fields.name} onChange={set("name")} error={errors.name} />
                  <FloatingField id="email" label="Email address" type="email" value={fields.email} onChange={set("email")} error={errors.email} />
                </div>
                <FloatingField id="message" label="Your message" textarea value={fields.message} onChange={set("message")} error={errors.message} />

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-all",
                    sent ? "bg-success" : "bg-gradient-primary hover:scale-[1.01]",
                  )}
                >
                  {sent ? (
                    <>
                      <CheckCircle2 className="h-4 w-4" /> Message sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </motion.button>

                <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Mail className="h-3.5 w-3.5" /> I usually reply within 24 hours.
                </p>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
