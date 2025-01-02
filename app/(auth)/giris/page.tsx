"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { loginService } from "@/redux/slices/userSlice";

type girisProps = {
  email: string;
  password: string;
};

const Giris: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<girisProps>();

  const loginHandle: SubmitHandler<girisProps> = async (data) => {
    try {
      dispatch(loginService(data));
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
      onSubmit={handleSubmit(loginHandle)}
      className="flex flex-col justify-center items-center gap-3 mt-5"
    >
      <input
        placeholder="E-Posta"
        type="text"
        className="border px-4 py-2"
        {...register("email")}
      />

      <input
        placeholder="Parola"
        type="password"
        className="border px-4 py-2"
        {...register("password")}
      />
      <button className="bg-black text-white rounded-xl px-4 py-2">
        giris yap
      </button>
    </form>
  );
};

export default Giris;
