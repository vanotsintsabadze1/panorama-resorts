"use client";

import { Star } from "lucide-react";
import { useState } from "react";

export default function ReviewTextArea() {
  const [stars, setStars] = useState(0);

  function onStarHover(index: number) {
    setStars(index);
  }

  return (
    <section className="flex w-full flex-col gap-[1rem] rounded-md border border-gray-300 bg-white shadow-md">
      <form className="w-full">
        <textarea
          name="reviewComment"
          className="min-h-[10rem] w-full resize-none overflow-auto bg-transparent p-[1rem] text-[1.3rem]"
          placeholder="Write your review.."
        />
      </form>
      <div className="mb-[1rem] flex w-full items-center justify-end gap-[2rem] px-[2rem]">
        <div className="flex items-center justify-center gap-[1rem]">
          {[...Array(5).fill(0)].map((_, i) => (
            <button key={i} onMouseOver={() => onStarHover(i)} onMouseOut={() => onStarHover(0)}>
              <Star size={20} color="orange" fill={i <= stars ? "orange" : "none"} />
            </button>
          ))}
        </div>
        <button className="h-[3rem] w-[10rem] rounded-lg bg-green-600 text-[1.3rem] font-bold text-white shadow-md">
          Submit
        </button>
      </div>
    </section>
  );
}
