import type React from "react";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Loader } from "@/components/ui/loader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Dynamically import ErrorBoundary as client component
const ErrorBoundary = dynamic(() => import("@/components/ErrorBoundary"), {
  ssr: false,
});

export const metadata = {
  title: "Shubham Pawar - Data Analytics Portfolio",
  description:
    "MERN Stack Developer transitioning to Data Analytics. Showcasing projects in Excel, MySQL, Python, Power BI, and Tableau.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/s.png" />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} `}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ErrorBoundary fallback={<Loader />}>
            <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
              {children}
              <Analytics />
              <SpeedInsights />
            </Suspense>
          </ErrorBoundary>
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
