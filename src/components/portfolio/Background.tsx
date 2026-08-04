export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 18% 20%, rgba(0,230,255,0.06) 0%, transparent 18%), radial-gradient(900px 500px at 82% 40%, rgba(10,191,207,0.03) 0%, transparent 20%), linear-gradient(180deg, #071826 0%, #04121a 100%)",
        }}
      />
      {/* floating orbs */}
      <div className="animate-float-slow absolute -left-32 top-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/25 blur-[120px]" />
      <div className="animate-float-slow-2 absolute right-[-15%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-[120px]" />
      <div className="animate-float-slow absolute bottom-[-10%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[130px]" />
      {/* grid overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* fine tiled squares */}
        <div
          className="absolute inset-0 bg-small-squares"
          style={{ maskImage: "radial-gradient(ellipse at center, black 42%, transparent 78%)" }}
        />

        {/* larger grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,230,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,230,255,0.03) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </div>
    </div>
  );
}
