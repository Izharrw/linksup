import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LinksUp - URL Shortener",
  description: "A URL Shortener",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://my.spline.design/animatedshapeblend-vDdmSmWzgeAl8EAvjtFiLMGO/" />
      <body
        className={`bg-purple-50 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}

      </body>
    </html>
  );
}
