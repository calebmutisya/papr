import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Papr - Trendy News",
  description: "Trendy News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        <Navbar/>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
