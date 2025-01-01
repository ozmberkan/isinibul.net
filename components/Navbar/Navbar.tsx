"use client";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const route = useRouter();

  const routeLogin = () => {
    route.push("/giris");
  };

  return (
    <div className="w-full flex items-center gap-x-3 justify-between border-b py-5">
      <Link href={"/"}>
        <Image alt="Logo" src={Logo} width={100} />
      </Link>
      <Button size="small" onClick={routeLogin}>
        Oturum aç
      </Button>
    </div>
  );
};

export default Navbar;
