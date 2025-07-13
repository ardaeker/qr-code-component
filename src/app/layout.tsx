import "@/assets/styles/tailwind.css";

import { outfit } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "QR Code Component - Frontend Mentor",
  description:
    "This project is a solution to the QR Code Component challenge on Frontend Mentor, developed by Arda Eker.",
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
