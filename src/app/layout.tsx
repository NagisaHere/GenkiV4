import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
// own components
import Navbar from "./components/navbar/navbar";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenkiV4",
  description: "Kanji Generation Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any"/>
      <body
        className={`${font.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
