import {socials} from '@/data/socials';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border px-6 py-12 md:px-10">
      <div className="mx-auto flex w-full max-w-content flex-col items-start justify-between gap-8 text-sm text-primary-muted md:flex-row md:items-center">
        <p>© {year} Marcus Peh. Built with Next.js.</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {socials
            .filter(s => s.id !== 'resume')
            .map(link => (
              <a
                key={link.id}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
