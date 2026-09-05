import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  metadataBase: new URL('https://marcuspeh.vercel.app'),
  title: {
    default: 'Marcus Peh — Software Engineer @ TikTok',
    template: '%s — Marcus Peh',
  },
  description:
    'Software engineer at TikTok building high-scale query infrastructure and data products. Previously Google, ByteDance, and GovTech.',
  keywords: [
    'Marcus Peh',
    'Backend Engineer',
    'TikTok',
    'Software Engineer',
    'Systems',
    'Algorithmic Trading',
    'Singapore',
  ],
  authors: [{name: 'Marcus Peh'}],
  openGraph: {
    type: 'website',
    title: 'Marcus Peh — Software Engineer @ TikTok',
    description: 'Scaling query infrastructure and data products at TikTok.',
    siteName: 'Marcus Peh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcus Peh — Software Engineer @ TikTok',
    description: 'Scaling query infrastructure and data products at TikTok.',
  },
  robots: {index: true, follow: true},
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

// Sets the initial color-scheme before React hydrates so the browser
// renders form controls, scrollbars, and the page background correctly
// for the user's system preference.
const themeBootstrapScript = `
(function () {
  try {
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var scheme = prefersLight ? 'light' : 'dark';
    document.documentElement.style.colorScheme = scheme;
  } catch (e) {}
})();
`;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: themeBootstrapScript}}
        />
        <meta
          name="theme-color"
          content="#0B0D12"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#FFFFFF"
          media="(prefers-color-scheme: light)"
        />
      </head>
      <body className="bg-bg text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
