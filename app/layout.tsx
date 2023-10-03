import "@/styles/tailwind.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const font = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "QR Code Component - Arda Eker",
  description:
    "This is a solution to the QR code component challenge on Frontend Mentor. Challenge by Frontend Mentor. Coded by Arda Eker.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
