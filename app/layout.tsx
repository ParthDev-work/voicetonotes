import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const SITE_URL = "https://voicetonotes.ai";
const DESCRIPTION =
  "VoiceToNotes turns your voice, ideas, and creativity into powerful notes, audios, and videos with AI. Stop typing, start speaking.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "VoiceToNotes — Stop Typing, Start Speaking.",
  description: DESCRIPTION,
  icons: {
    icon: "/assets/logo-mark.png",
    apple: "/assets/logo-mark.png",
  },
  openGraph: {
    title: "VoiceToNotes — Stop Typing, Start Speaking.",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "VoiceToNotes",
    images: [{ url: "/assets/hero-devices.jpg", width: 1105, height: 872 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VoiceToNotes — Stop Typing, Start Speaking.",
    description: DESCRIPTION,
    images: ["/assets/hero-devices.jpg"],
  },
};

export const viewport = {
  themeColor: "#E8E8E8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans antialiased bg-bg text-ink-700">
        {children}
      </body>
    </html>
  );
}
