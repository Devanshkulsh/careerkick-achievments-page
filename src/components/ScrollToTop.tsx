import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 420);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary text-black shadow-[0_12px_35px_rgba(90,194,13,0.28)] transition duration-300 hover:scale-105 hover:opacity-95 sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={22} strokeWidth={2.4} />
    </button>
  );
};

export default ScrollToTop;
