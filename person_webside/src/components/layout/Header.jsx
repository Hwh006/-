const NAV_ITEMS = [
  { label: "HOME / 首页", href: "#", active: true },
  { label: "ABOUT / 个人介绍", href: "#", active: false },
  { label: "WORKS / 作品库", href: "#", active: false },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-grid-line bg-background px-margin-edge py-4">
      <div className="font-headline-lg-mobile text-headline-lg-mobile font-bold tracking-tighter text-primary">
        SYS_TERMINAL_V1.0
      </div>

      <nav className="hidden gap-8 md:flex">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={
              item.active
                ? "cursor-target border-b border-primary pb-1 font-label-bilingual text-label-bilingual uppercase text-primary transition-colors duration-200"
                : "cursor-target font-label-bilingual text-label-bilingual uppercase text-on-surface-variant transition-colors duration-200 hover:bg-grid-line hover:text-primary-fixed"
            }
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex gap-4">
        <button
          type="button"
          className="cursor-target material-symbols-outlined p-2 text-primary transition-colors duration-200 hover:bg-grid-line"
          aria-label="Terminal"
        >
          terminal
        </button>
        <button
          type="button"
          className="cursor-target material-symbols-outlined p-2 text-primary transition-colors duration-200 hover:bg-grid-line"
          aria-label="Settings"
        >
          settings
        </button>
      </div>
    </header>
  );
}
