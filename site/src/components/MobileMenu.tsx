"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { navLinks } from "@/lib/nav";
import { buildWhatsAppUrl } from "@/config/company";

function subscribeNoop() {
  return () => {};
}

// SSR renders on the server (no `document`); the portal can only attach
// once hydrated on the client.
function useMounted() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Rendered through a portal into document.body: the header is
  // `position: sticky`, which (like relative/absolute/fixed) becomes the
  // containing block for `position: fixed` descendants — without the
  // portal, this overlay gets trapped inside the header's own box instead
  // of covering the viewport.
  const overlay = (
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-navy-900 px-6 pt-6 pb-8 shadow-soft-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Image
                  src="/images/logo/roma-logo-white.png"
                  alt="Roma Ar Condicionado e Eletricidade"
                  width={140}
                  height={46}
                  className="h-9 w-auto"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="focus-ring flex h-11 w-11 items-center justify-center rounded-xl text-white/80 hover:text-white"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.05, duration: 0.3 }}
                    className="focus-ring rounded-lg px-3 py-3.5 text-lg font-semibold text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-accent-500 px-6 py-3.5 text-base font-semibold text-white shadow-soft transition hover:bg-accent-400"
                >
                  Pedir orçamento
                </a>
                <p className="text-center text-sm text-white/50">
                  Piracicaba e região
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menu"
        aria-expanded={open}
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-xl border border-navy-900/10 bg-white text-navy-900 shadow-soft"
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </div>
  );
}
