import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İşinibul.net - Kolayca İşini Bulur!",
  description:
    "İşinibul.net, iş arayanlar ve işverenleri bir araya getiren bir platformdur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto">
          <Navbar />
          <main className="min-h-screen ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
