import type { Metadata } from "next";
import "../globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata: Metadata = {
  title: "İşinibul.net - Kolayca İşini Bulur!",
  description:
    "İşinibul.net, iş arayanlar ve işverenleri bir araya getiren bir platformdur.",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <ReduxProvider>
          <Toaster />
          <NextTopLoader showSpinner={false} color="#3B9B8B" />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default AuthLayout;
