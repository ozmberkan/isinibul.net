"use client";

import { getUserById } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Profil = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user, status } = useSelector((store: RootState) => store.user);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/auth/getMe", {
        withCredentials: true,
      });
      const userId = response.data.id;

      dispatch(getUserById(userId));
    } catch (error) {
      console.error("Kullanıcı verisi alınamadı:", error);
    }
  };

  const exitHandle = async () => {
    try {
      await axios.post(
        "http://localhost:5001/api/auth/signout",
        {},
        { withCredentials: true }
      );
      window.location.href = "/giris";
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (status === "loading") {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div>
      <h1>Profil</h1>
      <p>{user?.email}</p>
      <p>{user?.username}</p>
      <button
        onClick={exitHandle}
        className="bg-red-500 text-white rounded-lg px-4 py-2"
      >
        çıkış
      </button>
    </div>
  );
};

export default Profil;
