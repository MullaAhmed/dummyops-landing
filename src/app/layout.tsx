import localFont from "next/font/local";
import { Metadata } from "next";
import { Illustrations } from "@/assets/illustrations";
import { Toaster } from "sonner";
import { CountersProvider } from "@/lib/client/context/counters";
import { ScrollProvider } from "@/lib/client/context/scroll";
import { ActiveTimeProvider } from "@/lib/client/context/active-time";
import { TextSelectionProvider } from "@/lib/client/context/text-selection";
import { MousePositionProvider } from "@/lib/client/context/mouse-position";
import { ChatWidgetComponent } from "@/lib/client/chat-widget";
import RB2BLoader from "@/lib/client/rb2b-loader";

import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";

const WantedSans = localFont({
  src: "./font/WantedSans.ttf",
  display: "swap",
  variable: "--font-wanted-sans",
});

export const metadata: Metadata = {
  title: "DummyOPS",
  description:
    "Transform every anonymous visitor into a complete customer profile that drives sales, support, and marketing.",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "DummyOPS",
    description:
      "Transform every anonymous visitor into a complete customer profile that drives sales, support, and marketing.",
    images: [Illustrations.LEAD_QUALIFICATION.src],
    siteName: "DummyOPS",
    url: "https://www.dummyops.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "DummyOPS",
    description:
      "Transform every anonymous visitor into a complete customer profile that drives sales, support, and marketing.",
    images: [Illustrations.LEAD_QUALIFICATION.src],
  },
  alternates: {
    canonical: "https://www.dummyops.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.dummyops.com"),
  authors: [{ name: "Meer Tarbani", url: "https://www.meertarbani.in" }],
  keywords: ["DummyOPS", "AI", "Chatbot", "Sales", "Support", "Marketing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src="https://bot.dummyops.com/dummy.js"
          data-company="dummy-ops"
          data-user-id="123"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${WantedSans.className} antialiased overflow-x-hidden`}>
        <MousePositionProvider>
          <CountersProvider>
            <ScrollProvider>
              <ActiveTimeProvider>
                <TextSelectionProvider>
                  {children}
                  <ChatWidgetComponent />
                </TextSelectionProvider>
              </ActiveTimeProvider>
            </ScrollProvider>
          </CountersProvider>
        </MousePositionProvider>
        <Toaster richColors position="bottom-center" />
        <Suspense fallback={<></>}>
          <RB2BLoader />
        </Suspense>
      </body>
    </html>
  );
}
