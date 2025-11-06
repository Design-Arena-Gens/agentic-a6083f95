import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Lumina Learning ? Modern Education for Everyone',
    template: '%s ? Lumina Learning'
  },
  description:
    'A modern learning platform for schools, teams, and lifelong learners. Personalized, engaging, and effective.',
  metadataBase: new URL('https://agentic-a6083f95.vercel.app'),
  openGraph: {
    title: 'Lumina Learning ? Modern Education for Everyone',
    description:
      'A modern learning platform for schools, teams, and lifelong learners. Personalized, engaging, and effective.',
    url: 'https://agentic-a6083f95.vercel.app',
    siteName: 'Lumina Learning',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Lumina Learning'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Learning ? Modern Education for Everyone',
    description:
      'A modern learning platform for schools, teams, and lifelong learners. Personalized, engaging, and effective.',
    creator: '@luminaclass'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>{children}</body>
    </html>
  );
}
