"use client";
import { useRef } from "react";
import { Upload } from "lucide-react";
import { schema } from "../../../schemas/roomCreationSchema";
import { toast } from "react-hot-toast";
import { createRoom } from "@/scripts/admin/createRoom";
import RoomCreationFormFields from "./RoomCreationFormFields";

export default function RoomCreationForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function onRoomCreation(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current) {
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
      toast.error(res.error.message);
      return;
    }

    const status = await createRoom(formData);

    if (status?.status === 200) {
      toast.success("Room created successfully.");
    } else if (status?.status === 500) {
      toast.error("Error on the server. Contact the support.");
    } else {
      toast.error("Unauthorized action.");
    }

    window.location.href = "/admin/rooms";
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
          className="h-[3rem] rounded-[1rem] bg-orange-600 px-[2rem] text-[1.3rem] font-bold text-white"
        >
          Create Room
        </button>
      </div>
    </form>
  );
}
