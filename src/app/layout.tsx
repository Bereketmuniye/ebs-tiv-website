import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "EBS TV - Your #1 Choice! | Ethiopian Best TV Shows, Series, Dramas, Movies & News",
  description: "Home to Ethiopian best TV shows, series dramas, movies, music & latest news. Watch EBS TV live streaming for free.",
  keywords: "EBS TV, Ethiopian TV, Ethiopian shows, Ethiopian news, live streaming, Amharic shows, African TV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
