"use client";

import { useState } from "react";
import RoomFilterType from "./RoomFilterType";
import RoomFilterResidents from "./RoomFilterResidents";
import RoomsFilterPriceRange from "./RoomsFilterPriceRange";
import toast from "react-hot-toast";

export default function RoomsFilter() {
  const types = ["All", "Single", "Double", "Suite", "King"];
  const [type, setType] = useState("All");
  const [residentAmount, setResidentAmount] = useState(0);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  function onSubmit() {
    if (priceFrom > priceTo) {
      toast.error("Price from cannot be greater than price to");
      return;
    }
  }

  return (
    <div
      className={`relative mb-[3rem] flex w-full flex-col items-center gap-[3rem] px-[2rem] py-[2rem] duration-150 ease-in-out ${!isExpanded ? "h-[7rem] overflow-hidden opacity-50" : "h-auto opacity-100"}`}
    >
      <div
        className={`flex w-full flex-wrap items-center justify-center gap-[3rem] ${!isExpanded && "pointer-events-none"}`}
      >
        <RoomFilterType type={type} setType={setType} />
        <RoomFilterResidents residentAmount={residentAmount} setResidentAmount={setResidentAmount} />
        <RoomsFilterPriceRange from={priceFrom} to={priceTo} setFrom={setPriceFrom} setTo={setPriceTo} />
      </div>
      <div className="flex w-full items-center justify-center md:w-[40rem] xs:w-full">
        <button onClick={onSubmit}  className="h-[3.5rem] w-full rounded-lg bg-black text-[1.3rem] font-bold uppercase tracking-wider text-white">
          Submit
        </button>
      </div>
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className={`absolute left-1/2 -translate-x-1/2 rounded-[2rem] bg-gray-200 px-[1.5rem] py-[.5rem] text-[1.3rem] ${isExpanded ? "-bottom-[3rem]" : "bottom-0"}`}
      >
        {isExpanded ? "Close Filter" : "Show Filter"}
      </button>
    </div>
  );
}
