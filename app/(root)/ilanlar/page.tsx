"use client";

import Ads from "@/components/Ads/Ads";
import { supabase } from "@/lib/supabaseClient";
import { JobAd } from "@/types/ads";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import { HiOutlineInbox } from "react-icons/hi2";

const IlanlarContent = () => {
  const [ads, setAds] = useState<JobAd[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useSearchParams();
  const q = params.get("q");
  const category = params.get("category");
  const location = params.get("location");

  const getFilteredAds = async () => {
    setLoading(true);
    setError(null);

    try {
      let query = supabase.from("ads").select().order("id");

      if (q) {
        query = query.ilike("title", `%${q}%`);
      }

      if (category) {
        query = query.eq("category", category);
      }

      if (location) {
        query = query.eq("location", location);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      setAds(data || []);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Bir hata oluştu.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFilteredAds();
  }, [q, category, location]);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        Yükleniyor...
      </div>
    );
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  if (ads.length === 0) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center flex-col">
        <HiOutlineInbox size={200} className="text-primary" />
        <h1 className="text-xl font-semibold text-gray-400">
          Aradığınız kriterlere uygun ilan bulunamadı.
        </h1>
        <Link href={"/"} className="hover:underline text-gray-400 mt-5">
          Anasayfaya dön
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {ads.map((ad) => (
        <Ads key={ad.id} ad={ad} />
      ))}
    </div>
  );
};

const Ilanlar = () => {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <IlanlarContent />
    </Suspense>
  );
};

export default Ilanlar;
