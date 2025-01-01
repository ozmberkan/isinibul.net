import type { Metadata } from "next";
import "../globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "İşinibul.net - Kolayca İşini Bulur!",
  description:
    "İşinibul.net, iş arayanlar ve işverenleri bir araya getiren bir platformdur.",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <NextTopLoader showSpinner={false} color="#3B9B8B" />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default AuthLayout;
