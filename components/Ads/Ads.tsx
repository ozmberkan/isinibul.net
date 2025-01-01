import { JobAd } from "@/types/ads";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { GrLocation, GrMoney } from "react-icons/gr";
import { TbBuildingSkyscraper } from "react-icons/tb";

type AdsFullProps = {
  ad: JobAd;
};

const Ads = ({ ad }: AdsFullProps) => {
  return (
    <Link
      href={"/ilan/" + ad._id}
      className="w-full group bg-white hover:shadow rounded-xl transition-all duration-300  border border-l-8 min-h-[170px] border-l-primary px-5 py-3 flex flex-col"
    >
      <div className="w-full flex justify-between items-center ">
        <h1 className="font-semibold text-black text-xl group-hover:text-primary transition-colors duration-300 ">
          {ad.title}
        </h1>
        <div className="flex gap-x-2 items-center">
          {ad.tags?.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-orange-500/10 rounded-full border border-orange-500 px-2 text-orange-500"
            >
              {tag}
            </span>
          ))}
          <p className="text-xs bg-primary/10 rounded-full border border-primary px-2 text-primary">
            {ad.jobType}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-4">
        <p className="text-gray-500 text-sm flex items-center gap-x-2">
          <TbBuildingSkyscraper />
          {ad.companyName}
        </p>
        <p className="text-gray-500 text-sm flex items-center gap-x-2">
          <GrLocation />
          {ad.location}
        </p>
        <p className="text-gray-500 text-sm flex items-center gap-x-2">
          <GrMoney />
          {ad.salaryRange}₺
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-gray-800 text-sm">{ad.description}</p>

        <p className="p-2 rounded-md border border-primary bg-primary/10 text-primary text-sm font-medium">
          {ad.benefits}
        </p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="text-gray -500 text-sm">
            Son Başvuru: {dayjs(ad.applicationDeadline).format("DD.MM.YYYY")}
          </p>
        </div>
        <div>
          <button className="bg-primary text-white px-3 py-1 text-sm rounded-md">
            Başvur
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Ads;
