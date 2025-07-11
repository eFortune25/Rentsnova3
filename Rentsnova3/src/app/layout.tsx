import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import { SessionProvider } from "@/components/auth/session-provider";
import { auth } from "@/lib/auth";
import type { Session } from "next-auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RentsNova - Rent Smarter. Live Anywhere.",
  description: "Secure, transparent, and efficient property rentals and sales across Africa. Connect property owners, real estate agents, tenants and buyers through our comprehensive marketplace platform.",
  keywords: ["rental", "housing", "property", "africa", "cameroon", "landlord", "tenant", "real estate"],
  authors: [{ name: "RentsNova" }],
  creator: "RentsNova",
  publisher: "RentsNova",
  openGraph: {
    title: "RentsNova - Rent Smarter. Live Anywhere.",
    description: "Modernizing Africa's housing marketplace, starting with Cameroon.",
    url: "https://rentsnova.com",
    siteName: "RentsNova",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RentsNova - Rent Smarter. Live Anywhere.",
    description: "Modernizing Africa's housing marketplace, starting with Cameroon.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <SessionProvider session={session}>
          <ClientBody>{children}</ClientBody>
        </SessionProvider>
      </body>
    </html>
  );
}
