"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-brand shadow-lg shadow-gold/30 transition-all duration-500 hover:scale-110 hover:bg-gold-light hover:shadow-xl ${
        showScrollTop
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0"
      }`}
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={24} className="transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}