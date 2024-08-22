"use client";
import { useState } from "react";
import { schema } from "@/schemas/reviewSchema";
import { submitReview } from "@/scripts/rooms/submitReview";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/misc/LoadingSpinner";
import toast from "react-hot-toast";
import ReviewStars from "./ReviewStars";

interface Props {
  roomId: string;
}

export default function ReviewCreation({ roomId }: Props) {
  const [preStars, setPreStars] = useState(0);
  const [finalStars, setStars] = useState(0);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

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

    const res = await submitReview(finalStars + 1, text, roomId);

    if (res.status === 200) {
      toast.success("Review submitted successfully.");
      setLoading(false);
      setText("");
      setStars(0);
      setPreStars(0);
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
      className={`relative flex w-full flex-col gap-[1rem] rounded-md border border-gray-300 bg-white shadow-md`}
    >
      <form className="w-full">
        <textarea
          name="reviewComment"
          className={`min-h-[10rem] w-full resize-none overflow-auto bg-transparent p-[1rem] text-[1.3rem]`}
          placeholder="Write your review.."
          maxLength={450}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className="mb-[1rem] flex w-full items-center justify-end gap-[2rem] px-[2rem]">
        <div className={`flex items-center justify-center gap-[1rem]`}>
          <ReviewStars preStars={preStars} setPreStars={setPreStars} finalStars={finalStars} setStars={setStars} />
        </div>
        <button
          onClick={onSubmitReview}
          className={`h-[3rem] w-[10rem] rounded-lg bg-green-600 text-[1.3rem] font-bold text-white shadow-md`}
        >
          {loading ? <LoadingSpinner width="2rem" height="2rem" color="white" /> : "Submit"}
        </button>
      </div>
    </section>
  );
}
