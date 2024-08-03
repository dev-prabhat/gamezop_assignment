import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  fallback: ["Roboto"],
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gamezop App PWA",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  authors: [
    { name: "Prabhat Singh" },
  ],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-32x32.png" },
    { rel: "icon", url: "icons/icon-32x32.png" },
  ],
};

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
  themeColor: 'black',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex justify-center ${roboto.className} bg-[var(--category-section-color)]`}>
        {children}
      </body>
    </html>
  );
}
