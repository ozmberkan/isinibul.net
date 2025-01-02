"use client";
import Features from "@/components/Features/Features";
import Guide from "@/components/Guide/Guide";
import Hero from "@/components/Hero/Hero";
import { getUserById } from "@/redux/slices/userSlice";
import { AppDispatch } from "@/redux/store";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
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

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Features />
      <Guide />
    </div>
  );
};

export default Home;
