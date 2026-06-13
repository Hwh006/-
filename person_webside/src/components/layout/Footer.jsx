export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 flex w-full flex-col items-center justify-between border-t border-grid-line bg-surface-container-lowest px-margin-edge py-2 md:flex-row">
      <div className="flex items-center gap-2 font-metadata text-metadata text-metadata-gray">
        <span className="cursor-blink">&gt;</span> [ SYSTEM_READY ] &gt;
        USER_SESSION_ACTIVE
      </div>

      <div className="mt-2 flex gap-8 md:mt-0">
        <a
          href="#"
          className="cursor-target font-system-code text-system-code uppercase text-metadata-gray transition-all hover:text-primary"
        >
          GITHUB / 源码
        </a>
        <a
          href="#"
          className="cursor-target font-system-code text-system-code uppercase text-metadata-gray transition-all hover:text-primary"
        >
          CONTACT / 联系
        </a>
      </div>
    </footer>
  );
}
