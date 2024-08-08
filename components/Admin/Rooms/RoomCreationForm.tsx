"use client";
import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { schema } from "../../../schemas/roomCreationSchema";
import { toast } from "react-hot-toast";
import { createRoom } from "@/scripts/admin/createRoom";
import { useRouter } from "next/navigation";
import RoomCreationFormFields from "./RoomCreationFormFields";
import LoadingSpinner from "@/components/misc/LoadingSpinner";

export default function RoomCreationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onRoomCreation(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) {
      toast.error("Error on the form.");
      setIsLoading(false);
      return;
    }
    const formData = new FormData(formRef.current);

    const data = {
      description: formData.get("Description") as string,
      capacity: Number(formData.get("Capacity")),
      pricePerNight: Number(formData.get("PricePerNight")),
    };

    const res = schema.safeParse(data);
    formData.append("PricePerNightCurrency", "1");

    if (!res.success) {
      toast.error(res.error.errors[0].message);
      setIsLoading(false);
      return;
    }

    const status = await createRoom(formData);

    if (status?.status === 200) {
      toast.success("Room created successfully.");
      router.push("/admin/rooms");
    } else if (status?.status === 500) {
      toast.error("Error on the server. Contact the support.");
    } else {
      toast.error("Unauthorized action.");
    }
  }

  return (
    <form
      action=""
      ref={formRef}
      onSubmit={onRoomCreation}
      className="flex w-full flex-col items-center gap-[2rem] rounded-[1rem] border border-gray-300 bg-white p-[2rem] shadow-md md:w-[60rem]"
    >
      <RoomCreationFormFields />
      <label
        htmlFor="roomCreationFileUpload"
        className="relative flex h-[15rem] w-full flex-col items-center justify-center gap-[1rem] rounded-[2rem] bg-gray-300 py-[1rem] text-[1.2rem] font-semibold text-gray-400 shadow-sm"
      >
        <Upload size={48} className="text-gray-400 opacity-80" />
        Upload Room Images
        <input
          type="file"
          accept="image/*"
          name="ImageFiles"
          multiple
          id="roomCreationFileUpload"
          className="absolute right-0 top-0 hidden h-full w-full"
        />
      </label>
      <div className="flex w-full items-center justify-center">
        <button
          type="submit"
          className="h-[3rem] rounded-[1rem] flex justify-center items-center bg-orange-600 px-[2rem] text-[1.3rem] font-bold text-white"
        >
          {isLoading ? <LoadingSpinner width="2rem" height="2rem" color="white"/> : "Create Room"}
        </button>
      </div>
    </form>
  );
}
