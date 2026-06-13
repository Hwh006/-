export default function SideHud() {
  return (
    <>
      <aside className="pointer-events-none fixed left-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-8 opacity-40 mix-blend-screen xl:flex">
        <div className="flex origin-left rotate-90 items-center gap-4">
          <span className="font-metadata text-metadata uppercase">
            LOC: 35.6895° N, 139.6917° E
          </span>
          <div className="h-px w-24 bg-primary-container" />
        </div>
        <div className="flex flex-col gap-2 pt-20">
          <div className="h-1.5 w-1.5 bg-primary-container" />
          <div className="h-1.5 w-1.5 bg-grid-line" />
          <div className="h-1.5 w-1.5 bg-grid-line" />
        </div>
      </aside>

      <aside className="pointer-events-none fixed right-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-end gap-8 opacity-40 mix-blend-screen xl:flex">
        <div className="text-right font-metadata text-metadata uppercase leading-relaxed">
          SYS://RIA.HOME
          <br />
          PROTOCOL_V4.2
          <br />
          ENCRYPT: AES-256
        </div>
        <div className="relative h-48 w-px bg-grid-line">
          <div className="absolute right-0 top-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 bg-primary-container" />
          <div className="absolute bottom-0 right-0 h-2 w-2 -translate-y-1/2 translate-x-1/2 bg-primary-container" />
        </div>
      </aside>
    </>
  );
}
