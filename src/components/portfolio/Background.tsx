export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient wash */}
      <div className="absolute inset-0 bg-background" />
      {/* floating orbs */}
      <div className="animate-float-slow absolute -left-32 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="animate-float-slow-2 absolute right-[-15%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-[120px]" />
      <div className="animate-float-slow absolute bottom-[-10%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[130px]" />
      {/* grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
    </div>
  );
}
