import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/tailwind.css";

const outfit = localFont({
  src: "./fonts/Outfit-VariableFont_wght.ttf",
});

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#D5E1EF",
};

export const metadata: Metadata = {
  title: "Arda Eker - QR Code Component",
  description:
    "This is a solution to the QR Code Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
  keywords: [
    "Frontend Mentor",
    "Tailwind CSS",
    "NextJS",
    "Arda Eker",
    "QR Code Component",
    "Frontend Mentor Challenge",
    "QR Code Component Challenge",
    "QR Code Component Solution",
  ],
  metadataBase: new URL("https://fm-2024-qr-code-component.vercel.app"),
  openGraph: {
    title: "Arda Eker - QR Code Component",
    description:
      "This is a solution to the QR Code Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
    url: "fm-2024-qr-code-component.vercel.app",
    type: "website",
  },
  twitter: {
    title: "Arda Eker - QR Code Component",
    description:
      "This is a solution to the QR Code Component challenge on Frontend Mentor. It's built with Tailwind CSS and NextJS. Made with ❤️ by Arda Eker.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>{children}</body>
    </html>
  );
}
