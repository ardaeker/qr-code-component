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
  title: 'Arda Eker - QR Code Component',
  description:
    'A tested, SEO-friendly QR code component with semantic markup and responsive design.',
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
    title: 'Arda Eker - QR Code Component',
    description:
      'A tested, SEO-friendly QR code component with semantic markup and responsive design.',
    siteName: 'Arda Eker - QR Code Component solution',
    images: [
      {
        url: 'open-graph-image.png',
      },
    ],
  },
  alternates: {
    canonical: 'https://qr-code-component-beryl-ten.vercel.app',
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
