import { useEffect, useRef } from "react";

const QUICK_COMMANDS = ["HELP_CMD", "FETCH_BIO", "VIEW_PORTFOLIO"];

export default function CommandPrompt() {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "/") {
        inputRef.current?.focus();
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleInput = (event) => {
    event.target.value = event.target.value.toUpperCase();
  };

  return (
    <section className="w-full max-w-3xl">
      <div className="mb-2 font-metadata text-metadata uppercase text-on-surface-variant">
        Command_Prompt / 指令输入
      </div>

      <div className="group relative">
        <div className="absolute -inset-0.5 bg-primary-container opacity-20 blur transition-opacity group-focus-within:opacity-40" />
        <div className="cursor-target relative flex items-center rounded-sm border border-primary-container bg-surface-container-low p-6">
          <span className="mr-4 text-xl font-bold text-primary-container">
            &gt;
          </span>
          <input
            ref={inputRef}
            type="text"
            className="w-full border-none bg-transparent font-system-code uppercase text-primary-container placeholder:text-surface-container-highest focus:ring-0"
            placeholder="TYPE A COMMAND (HELP, WORKS, CONTACT)..."
            onInput={handleInput}
          />
          <div className="ml-2 h-6 w-3 cursor-blink bg-primary-container" />
        </div>
      </div>

      <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto">
        {QUICK_COMMANDS.map((command) => (
          <button
            key={command}
            type="button"
            className="cursor-target border border-grid-line px-3 py-1 font-metadata text-metadata transition-all hover:border-primary-container hover:text-primary-container"
          >
            {command}
          </button>
        ))}
      </div>
    </section>
  );
}
