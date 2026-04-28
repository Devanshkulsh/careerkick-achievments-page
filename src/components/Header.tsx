import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="mx-auto w-full max-w-7xl bg-transparent px-4 pt-4 text-white sm:px-6 sm:pt-5 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center">
            <img
              src="/logo-bg.png"
              alt="CareerKick logo"
              className="h-9 w-auto object-contain sm:h-10 md:h-11"
            />
          </a>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/30 bg-white/10 md:hidden"
          >
            <span className="sr-only">Open navigation menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>

          <div className="hidden items-center gap-x-2 text-sm font-medium md:flex md:text-base">
            <a
              href="#about"
              className="rounded-full px-3 py-2 leading-none transition-colors hover:bg-white/10 hover:text-white/90"
            >
              About
            </a>
            <a
              href="#achievements"
              className="rounded-full px-3 py-2 leading-none transition-colors hover:bg-white/10 hover:text-white/90"
            >
              Achievements
            </a>
            <a
              href="#stories"
              className="rounded-full px-3 py-2 leading-none transition-colors hover:bg-white/10 hover:text-white/90"
            >
              Stories
            </a>
            <a
              href="#contact"
              className="rounded-full px-3 py-2 leading-none transition-colors hover:bg-white/10 hover:text-white/90"
            >
              Contact
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 flex flex-col rounded-xl border border-white/20 bg-black/25 p-2 text-sm font-medium backdrop-blur-sm md:hidden">
            <a
              href="#about"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
            >
              About
            </a>
            <a
              href="#achievements"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
            >
              Achievements
            </a>
            <a
              href="#stories"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
            >
              Stories
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
