export default function HeroSection() {
  return (
    <section className="relative mb-16">
      <div className="mb-4 flex items-center gap-3 font-metadata text-metadata text-primary-container">
        <span className="animate-pulse">●</span>
        <span>SYSTEM_STATUS: ACTIVE</span>
        <span className="h-px flex-grow bg-grid-line" />
      </div>

      <h1 className="mb-8 max-w-5xl font-headline-xl text-[64px] font-extrabold leading-[0.9] tracking-tighter md:text-[100px] lg:text-[120px]">
        HI, HERE IS
        <br />
        <span
          className="flicker relative inline-block overflow-hidden bg-clip-text font-black text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(rgb(0, 255, 135) 50%, rgba(255, 255, 0, 0.2) 50%), linear-gradient(rgb(0, 255, 135), rgb(255, 255, 0))",
            backgroundSize: "100% 4px, 100% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          HUANGWEIHENG
        </span>
      </h1>

      <p className="max-w-2xl font-system-code text-system-code leading-relaxed text-on-surface-variant">
        [ LOG ]: INITIALIZING INTERFACE... <br />
        A multi-disciplinary developer and creative technologist exploring the
        boundaries between brutalist architecture and digital systems. Current
        focus: High-density data visualization and terminal-inspired UI
        architectures.
      </p>
    </section>
  );
}
