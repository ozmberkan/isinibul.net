import { PopularSearchs } from "@/constants/data";
import Link from "next/link";
import React from "react";

interface PopularSearchProps {
  id: number;
  title: string;
  key: string;
}

const PopularSearchComp = () => {
  return (
    <div className="mt-3 flex flex-col gap-3">
      <h2 className="text-white text-lg font-medium">Popüler Aramalar</h2>
      <div className="w-3/4 grid grid-cols-4 gap-3">
        {PopularSearchs.map((item: PopularSearchProps) => (
          <Link
            href={`/ilanlar/?q=${item.key}`}
            key={item.id}
            className="bg-white font-medium hover:bg-zinc-100 flex justify-center items-center rounded-xl px-1 py-2 text-sm"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularSearchComp;
