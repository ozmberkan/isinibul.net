"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchForm = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/ilanlar/?q=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form className="w-1/2 mt-7" onSubmit={handleSearch}>
      <div className="flex items-center gap-x-2 bg-white h-10 px-2 rounded-xl">
        <Search className="w-12 text-neutral-500  " />
        <input
          className="w-full  h-full outline-none"
          placeholder="İş ara..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary text-white text-sm py-1 px-5 rounded-md"
        >
          Ara
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
