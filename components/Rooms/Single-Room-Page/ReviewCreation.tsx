"use client";

import { Star } from "lucide-react";
import { useState } from "react";

interface Props {
  canReview: boolean;
}

export default function ReviewCreation({ canReview }: Props) {
  const [stars, setStars] = useState(0);

  function onStarHover(index: number) {
    if (canReview) {
      setStars(index);
    }
  }

  return (
    <section
      className={`flex w-full flex-col gap-[1rem] rounded-md border border-gray-300 bg-white shadow-md ${!canReview && "cursor-not-allowed opacity-50"}`}
    >
      <form className="w-full">
        <textarea
          name="reviewComment"
          className={`min-h-[10rem] w-full resize-none overflow-auto bg-transparent p-[1rem] text-[1.3rem]`}
          placeholder="Write your review.."
          disabled={!canReview}
        />
      </form>
      <div className="mb-[1rem] flex w-full items-center justify-end gap-[2rem] px-[2rem]">
        <div className={`flex items-center justify-center gap-[1rem]`}>
          {[...Array(5).fill(0)].map((_, i) => (
            <button key={i} onMouseOver={() => onStarHover(i)} onMouseOut={() => onStarHover(0)}>
              <Star size={20} color="orange" fill={i <= stars ? "orange" : "none"} />
            </button>
          ))}
        </div>
        <button
          className={`h-[3rem] w-[10rem] rounded-lg bg-green-600 text-[1.3rem] font-bold text-white shadow-md ${canReview && "cursor-not-allowed"}`}
        >
          Submit
        </button>
      </div>
    </section>
  );
}
