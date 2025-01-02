"use client";
import { registerService } from "@/redux/slices/userSlice";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

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
    <form
      onSubmit={handleSubmit(registerHandle)}
      className="flex flex-col justify-center items-center gap-3 mt-5"
    >
      <input
        placeholder="E-Posta"
        type="text"
        className="border px-4 py-2"
        {...register("email")}
      />
      <input
        placeholder="Kullanıcı Adı"
        type="text"
        className="border px-4 py-2"
        {...register("username")}
      />
      <input
        placeholder="Parola"
        type="password"
        className="border px-4 py-2"
        {...register("password")}
      />
      <button className="bg-black text-white rounded-xl px-4 py-2">
        kayit ol
      </button>
    </form>
  );
};

export default Kayit;
