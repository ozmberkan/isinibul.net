import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "İş Bulur - Kolayca İşini Bulur!",
  description:
    "İş Bulur, iş arayanlar ve işverenleri bir araya getiren bir platformdur.",
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default AuthLayout;
