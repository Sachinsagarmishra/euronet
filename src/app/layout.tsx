import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Euronet World | Premium Solar Energy Solutions",
  description: "Leading provider of solar energy solutions. Switch to clean power, long-term savings, and a brighter future for you and the planet.",
  keywords: "solar energy, solar panels, renewable energy, clean energy, solar installation, euronet",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Euronet World | Premium Solar Energy Solutions",
    description: "Leading provider of solar energy solutions. Switch to clean power today.",
    type: "website",
    url: "https://euronetworld.com",
    siteName: "Euronet World",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Euronet World - Premium Solar Energy Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Euronet World | Premium Solar Energy Solutions",
    description: "Leading provider of solar energy solutions. Switch to clean power today.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
