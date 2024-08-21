"use client";
import { Trash2Icon, Edit } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import ConfirmationModal from "@/components/misc/ConfirmationModal";
import { deleteReview } from "@/scripts/rooms/deleteReview";
import toast from "react-hot-toast";
import ReviewEditModal from "./ReviewEditModal";

interface Props {
  reviewText: string;
  reviewId: string;
  roomId: string;
}

export default function ReviewActions({ reviewId, reviewText, roomId }: Props) {
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  async function onDeleteSubmit() {
    const res = await deleteReview(reviewId);

    if (res?.status === 200) {
      toast.success("Review deleted successfully.");
    } else {
      toast.error("Failed to delete review.");
    }
  }

  return (
    <>
      <AnimatePresence>
        {confirmationModal && <ConfirmationModal callback={onDeleteSubmit} setModal={setConfirmationModal} />}
      </AnimatePresence>

      <AnimatePresence>
        {editModal && <ReviewEditModal roomId={roomId} setModal={setEditModal} text={reviewText} />}
      </AnimatePresence>

      <div className="absolute right-[1.5rem] top-[1rem] flex items-center justify-center gap-[1rem]">
        <button
          onClick={() => setConfirmationModal(true)}
          className="text-gray-500 duration-300 ease-in-out hover:scale-105 hover:text-black"
        >
          <Trash2Icon size={17} />
        </button>
        <button
          onClick={() => setEditModal(true)}
          className="text-gray-500 duration-300 ease-in-out hover:scale-105 hover:text-black"
        >
          <Edit size={17} />
        </button>
      </div>
    </>
  );
}
