"use client";
import { registerService } from "@/redux/slices/userSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Logo from "@/assets/logo.svg";
import { toast } from "sonner";
import Image from "next/image";
import { TbArrowBadgeLeft, TbLock, TbMail, TbUser } from "react-icons/tb";
import Link from "next/link";

type KayitProps = {
  email: string;
  username: string;
  password: string;
};

const Kayit: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<KayitProps>();

  const registerHandle: SubmitHandler<KayitProps> = async (data) => {
    try {
      dispatch(registerService(data));
      toast.success("Giriş Başarılı");
      reset();
      setTimeout(() => {
        router.push("/profil");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-grow justify-center items-start flex pt-24 relative">
      <Link
        href={"/"}
        className="absolute top-5 left-5 bg-primary text-white rounded-full p-2 flex justify-center items-center"
      >
        <TbArrowBadgeLeft size={20} />
      </Link>
      <div className="  min-w-[300px]  flex flex-col items-start justify-start">
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          className="border-b pb-5 mb-12"
        />
        <h1 className="font-extrabold text-primary text-2xl">Kayıt ol</h1>
        <p className="text-xs text-neutral-400 font-medium">
          Bilgilerinizi girerek sisteme kayıt olabilirsiniz.
        </p>
        <form
          onSubmit={handleSubmit(registerHandle)}
          className="flex flex-col justify-center items-center gap-3 mt-5 w-full"
        >
          <div className="w-full border pl-3 pr-4 h-10 flex items-center gap-x-2 rounded-lg">
            <div className="pr-2 border-r">
              <TbMail className=" text-primary " size={18} />
            </div>
            <input
              placeholder="E-Posta"
              type="text"
              className="h-full w-full outline-none text-sm"
              {...register("email")}
            />
          </div>
          <div className="w-full border pl-3 pr-4 h-10 flex items-center gap-x-2 rounded-lg">
            <div className="pr-2 border-r">
              <TbUser className=" text-primary " size={18} />
            </div>
            <input
              placeholder="Kullanıcı adı"
              type="text"
              className="h-full w-full outline-none text-sm"
              {...register("username")}
            />
          </div>
          <div className="w-full border pl-3 pr-4 h-10 flex items-center gap-x-2 rounded-lg">
            <div className="pr-2 border-r">
              <TbLock className=" text-primary " size={18} />
            </div>{" "}
            <input
              placeholder="Parola"
              type="password"
              className="h-full w-full outline-none text-sm"
              {...register("password")}
            />
          </div>
          <div className="w-full flex justify-between items-center text-sm">
            <Link href={"/giris"} className="text-neutral-500 hover:underline">
              Hesabın var mı?
            </Link>
          </div>
          <button className="bg-primary font-medium text-white rounded-lg px-4 py-2 w-full">
            Kayıt ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kayit;
