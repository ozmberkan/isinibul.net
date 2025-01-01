import React from "react";
import Link from "next/link";

const Guide = () => {
  return (
    <div className="w-full h-[500px] flex items-start justify-start gap-12">
      <div className="w-1/2 h-full rounded-xl bg-guide bg-cover text-white p-3" />
      <div className="w-1/2 h-full rounded-xl  text-black  flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">
          Nasıl kolay iş arayacağını bilmiyor musun?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, velit.
          Alias placeat nisi quidem unde blanditiis facilis quo dolore maxime
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus a
          voluptates sapiente! Ea, ducimus tenetur, excepturi, corrupti odio
          totam non reiciendis eius veritatis culpa dolores? labore. voluptates
          suscipit ipsa, libero optio!
        </p>
        <Link
          href={"/rehber"}
          className="bg-primary text-white rounded-md flex w-44 justify-center items-center p-2"
        >
          Rehbere göz at
        </Link>
      </div>
    </div>
  );
};

export default Guide;
