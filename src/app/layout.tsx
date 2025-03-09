import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Filip Tomanec",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <ReactQueryProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
