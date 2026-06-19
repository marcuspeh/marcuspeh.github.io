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
    default: 'Marcus Peh — Backend Engineer @ TikTok',
    template: '%s — Marcus Peh',
  },
  description:
    'Backend engineer at TikTok building scalable data platforms and algorithmic trading systems. Previously Google, ByteDance, and GovTech.',
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
    title: 'Marcus Peh — Backend Engineer @ TikTok',
    description:
      'Building scalable data platforms and algorithmic trading systems.',
    siteName: 'Marcus Peh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcus Peh — Backend Engineer @ TikTok',
    description:
      'Building scalable data platforms and algorithmic trading systems.',
  },
  robots: {index: true, follow: true},
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
