import type { Metadata } from "next";
import "../globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/ReduxProvider";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "İşinibul.net - Kolayca İşini Bulur!",
  description:
    "İşinibul.net, iş arayanlar ve işverenleri bir araya getiren bir platformdur.",
};

const inter = Inter({ subsets: ["latin"] });

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <ReduxProvider>
          <Toaster />
          <NextTopLoader showSpinner={false} color="#3B9B8B" />
          <main className="w-full min-h-screen flex">{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
