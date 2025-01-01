"use client";
import { useSearchParams } from "next/navigation";

const Ilanlar = () => {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  return <div>{q}</div>;
};

export default Ilanlar;
