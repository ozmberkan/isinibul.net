import type { Metadata } from "next";
import "../globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "İş Bulur - Kolayca İşini Bulur!",
  description:
    "İş Bulur, iş arayanlar ve işverenleri bir araya getiren bir platformdur.",
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
          <main className="min-h-screen bg-slate-50">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
