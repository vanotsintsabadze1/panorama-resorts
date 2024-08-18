"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { schema } from "@/schemas/reviewSchema";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/misc/LoadingSpinner";
import { submitReview } from "@/scripts/rooms/submitReview";
import { useRouter } from "next/navigation";

interface Props {
  roomId: string;
  canReview: boolean;
}

export default function ReviewCreation({ canReview, roomId }: Props) {
  const [preStars, setPreStars] = useState(0);
  const [finalStars, setStars] = useState(0);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function onStarHover(index: number) {
    if (canReview) {
      setPreStars(index);
    }
  }

  function onStarSubmit() {
    if (canReview) {
      setStars(preStars);
    }
  }

  async function onSubmitReview() {
    setLoading(true);
    const data = {
      text,
    };

    const result = schema.safeParse(data);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      setLoading(false);
      return;
    }

    const res = await submitReview(finalStars, text, roomId);

    if (res.status === 200) {
      toast.success("Review submitted successfully.");
      setLoading(false);
      router.refresh();
      return;
    } else if (res.status === 500) {
      toast.error("Something went wrong. Please try again later.");
    } else {
      toast.error("Unauthorized");
    }

    setLoading(false);
  }
  return (
    <section
      className={`relative flex w-full flex-col gap-[1rem] rounded-md border border-gray-300 bg-white shadow-md ${!canReview && "cursor-not-allowed opacity-50"}`}
    >
      <form className="w-full">
        <textarea
          name="reviewComment"
          className={`min-h-[10rem] w-full resize-none overflow-auto bg-transparent p-[1rem] text-[1.3rem] ${!canReview && "cursor-not-allowed"}`}
          placeholder="Write your review.."
          maxLength={450}
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={!canReview}
        />
      </form>
      <div className="mb-[1rem] flex w-full items-center justify-end gap-[2rem] px-[2rem]">
        <div className={`flex items-center justify-center gap-[1rem]`}>
          {[...Array(5).fill(0)].map((_, i) => (
            <button
              key={i}
              onMouseOver={(e) => onStarHover(i)}
              onMouseOut={() => onStarHover(0)}
              onClick={onStarSubmit}
            >
              <Star
                size={20}
                color="orange"
                fill={
                  finalStars > 0 && i <= finalStars ? "orange" : finalStars === 0 && i <= preStars ? "orange" : "none"
                }
              />
            </button>
          ))}
        </div>
        <button
          onClick={onSubmitReview}
          className={`h-[3rem] w-[10rem] rounded-lg bg-green-600 text-[1.3rem] font-bold text-white shadow-md ${!canReview && "cursor-not-allowed"}`}
        >
          {loading ? <LoadingSpinner width="2rem" height="2rem" color="white" /> : "Submit"}
        </button>
      </div>
      {!canReview && (
        <p className="absolute -bottom-[1rem] left-0 text-[1.2rem] text-red-600">
          * You can't post a review. Either you've already posted a review or you don't have a completed reservation!
        </p>
      )}
    </section>
  );
}
