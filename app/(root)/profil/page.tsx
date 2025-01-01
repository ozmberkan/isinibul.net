"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const Profil = () => {
  const user = useSelector((state: RootState) => state.user.user);

  // Kullanıcı bilgisi yoksa
  if (!user) {
    return <div>Kullanıcı bilgisi bulunamadı.</div>;
  }

  return (
    <div>
      <h1>Profil</h1>
      <p>Ad: {user.name}</p>
      <p>Soyad: {user.surname}</p>
    </div>
  );
};

export default Profil;
