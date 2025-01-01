"use client";

import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const IlanlarContent = () => {
  const params = useSearchParams();
  const q = params.get("q");

  return <div>{q}</div>;
};

const Ilanlar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IlanlarContent />
    </Suspense>
  );
};

export default Ilanlar;
