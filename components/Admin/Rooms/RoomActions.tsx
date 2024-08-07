import ConfirmationModal from "@/components/misc/ConfirmationModal";
import { useRouter } from "next/navigation";
import { Trash2Icon, Edit } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import LoadingSpinner from "@/components/misc/LoadingSpinner";
import { deleteRoom } from "@/scripts/admin/deleteRoom";
import toast from "react-hot-toast";

interface Props {
  id: string;
}

export default function RoomsActions({ id }: Props) {
  const router = useRouter();
  const [shouldDeleteConfirmationModalOpen, setShouldDeleteConfirmationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function onEdit() {
    router.push(`/admin/rooms/editRoom/${id}`);
  }

  function enableConfirmationModal() {
    setShouldDeleteConfirmationModalOpen(true);
  }

  async function onRoomDelete() {
    setIsLoading(true);

    const res = await deleteRoom(id);

    if (res?.status === 200) {
      toast.success("Room deleted successfully.");
    } else if (res?.status === 500) {
      toast.error("Error on the server. Contact the support.");
    } else {
      toast.error("Unauthorized action.");
    }

    router.refresh();
    setIsLoading(false);
  }

  return (
    <>
      <AnimatePresence>
        {shouldDeleteConfirmationModalOpen && (
          <ConfirmationModal callback={onRoomDelete} setModal={setShouldDeleteConfirmationModalOpen} />
        )}
      </AnimatePresence>

      <button>
        <Edit size={17} color="green" className="duration-150 ease-in-out hover:scale-105" />
      </button>
      {isLoading ? (
        <LoadingSpinner width="1.5rem" height="1.5rem" color="red" />
      ) : (
        <button onClick={enableConfirmationModal}>
          <Trash2Icon size={17} color="red" className="duration-150 ease-in-out hover:scale-105" />
        </button>
      )}
    </>
  );
}
