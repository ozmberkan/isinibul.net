"use client";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Button from "../UI/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const route = useRouter();

  const { user } = useSelector((store: RootState) => store.user);

  const routeLogin = () => {
    route.push("/giris");
  };

  return (
    <div className="w-full flex items-center gap-x-3 justify-between py-5">
      <Link href={"/"}>
        <Image alt="Logo" src={Logo} width={120} />
      </Link>
      <div className="space-x-5">
        <Link className="hover:text-neutral-500" href={"/ilanlar"}>
          Tüm İlanlar
        </Link>
        <Link className="hover:text-neutral-500" href={"/rehber"}>
          Rehber
        </Link>
        {user ? (
          <Link
            className="px-3 py-1 bg-primary text-white hover:bg-primary  transition-colors rounded-full text-sm"
            href={"/profil"}
          >
            Profilim
          </Link>
        ) : (
          <Button size="small" onClick={routeLogin}>
            Aday girişi
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
