"use client";
import Ads from "@/components/Ads/Ads";
import { JobAd } from "@/types/ads";
import axios from "axios";
import { Suspense, useEffect, useState } from "react";

const IlanIcerik = () => {
  const [ads, setAds] = useState<JobAd[]>([]);
  const getAds = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/ads/getAllAds");
      setAds(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAds();
  }, []);

  return (
    <div>
      {ads.map((ad, i) => (
        <Ads key={i} ad={ad} />
      ))}
    </div>
  );
};

const Ilanlar = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <IlanIcerik />
    </Suspense>
  );
};

export default Ilanlar;
