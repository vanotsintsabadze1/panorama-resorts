import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ReactLenis } from "lenis/react";
import LoadingSpinner from "@/components/misc/LoadingSpinner";
import ReviewStars from "./ReviewStars";
import { editReview } from "@/scripts/rooms/editReview";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const divAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1 },
};

interface Props {
  text: string;
  roomId: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReviewEditModal({ text, setModal, roomId }: Props) {
  const [preStars, setPreStars] = useState(0);
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState(text);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  async function onUpdate() {
    setLoading(true);

    if (reviewText.length < 50) {
      toast.error("Review must be at least 50 characters long.");
      setLoading(false);
      return;
    }

    if (stars === 0) {
      toast.error("Please select a star rating.");
      setLoading(false);
      return;
    }

    const res = await editReview(stars + 1, reviewText, roomId);

    if (res?.status === 200) {
      setModal(false);
      toast.success("Review updated successfully.");
      router.refresh();
    } else if (res?.status === 500) {
      toast.error("Internal server error.");
    } else {
      toast.error("Unauthorized.");
    }

    setLoading(false);
  }

  return createPortal(
    <ReactLenis options={{ prevent: () => true }}>
      <motion.div
        onClick={() => setModal(false)}
        className="fixed left-0 top-0 z-[40] flex h-[100dvh] w-full items-center justify-center overflow-hidden bg-black/60 px-[2rem]"
        variants={divAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex w-full flex-col gap-[1rem] rounded-lg bg-white p-[1rem] shadow-md md:w-[60rem] lg:w-[80rem]"
        >
          <textarea
            defaultValue={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="min-h-[10rem] w-full rounded-lg border border-gray-300 p-[.5rem] text-[1.3rem]"
          />
          <div className="flex w-full items-center justify-end gap-[1rem]">
            <ReviewStars preStars={preStars} setPreStars={setPreStars} finalStars={stars} setStars={setStars} />
            <button
              onClick={onUpdate}
              className="h-[3.2rem] w-[10rem] rounded-lg bg-green-600 text-[1.3rem] font-bold text-white shadow-md"
            >
              {loading ? <LoadingSpinner width="2rem" height="2rem" color="white" /> : "Update"}
            </button>
          </div>
        </div>
      </motion.div>
    </ReactLenis>,
    document.body,
  );
}
