'use client';

import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {navLinks} from '@/data/socials';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-bg/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6 md:h-20 md:px-10">
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface/60 text-primary transition-colors duration-300 group-hover:border-primary/30">
            <span className="text-xs">M</span>
          </span>
          <span>Marcus Peh</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-primary-muted transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/marcuspeh"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-border bg-surface/60 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-primary/20 hover:bg-surface-hover md:inline-flex"
        >
          ★ GitHub
        </a>

        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-md border border-border bg-surface/60 p-2 md:hidden"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5h12M3 9h12M3 13h12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.25, ease: [0.16, 1, 0.3, 1]}}
            className="border-t border-border bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <nav className="mx-auto flex w-full max-w-content flex-col gap-1 px-6 py-4">
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-primary-muted transition-colors duration-200 hover:bg-surface-hover hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
