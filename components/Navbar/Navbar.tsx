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
    <div className="w-full flex items-center gap-x-3 justify-between  py-5">
      <Link href={"/"}>
        <Image alt="Logo" src={Logo} width={100} />
      </Link>
      <div className="space-x-5">
        <Link className="hover:text-neutral-500" href={"/ilanlar"}>
          İş Ara
        </Link>
        <Link className="hover:text-neutral-500" href={"/rehber"}>
          Rehber
        </Link>

        <Button size="small" onClick={routeLogin}>
          Aday girişi
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
