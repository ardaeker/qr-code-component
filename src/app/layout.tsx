import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#d5e1ef',
};

export const metadata: Metadata = {
  title: 'Frontend Mentor - QR Code Component',
  description:
    'This website is a solution to the QR Code Component challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
  authors: {
    name: 'Arda Eker',
    url: 'https://github.com/ardaeker',
  },
  keywords: [
    'Frontend Mentor',
    'QR Code Component',
    'QR Code Component solution',
    'QR Code Component challenge',
    'QR Code Component challenge solution',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
    'Arda Eker',
  ],
  metadataBase: new URL('https://qr-code-component-beryl-ten.vercel.app/'),
  openGraph: {
    title: 'Frontend Mentor - QR Code Component',
    description:
      'This website is a solution to the QR Code Component challenge on Frontend Mentor. It is built with Next.js, Tailwind CSS, and TypeScript. Coded by Arda Eker.',
    siteName: 'Frontend Mentor - QR Code Component solution',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://qr-code-component-beryl-ten.vercel.app',
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit antialiased`}>{children}</body>
    </html>
  );
}
