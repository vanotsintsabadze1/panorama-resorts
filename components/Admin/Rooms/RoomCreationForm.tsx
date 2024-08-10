"use client";
import RoomCreationFormFields from "./RoomCreationFormFields";
import LoadingSpinner from "@/components/misc/LoadingSpinner";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { schema } from "../../../schemas/roomCreationSchema";
import { toast } from "react-hot-toast";
import { createRoom } from "@/scripts/admin/createRoom";
import { useRouter } from "next/navigation";

export default function RoomCreationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const imagesInputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
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

  function onImageUpload() {
    if (!imagesInputRef.current?.files || imagesInputRef.current.files.length === 0) {
      return;
    }

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);

    const images = formData.getAll("ImageFiles") as File[];
    setImageFiles((prev) => [...prev, ...images]);

    images.forEach((img) => {
      const image = URL.createObjectURL(img);
      setImages((prev) => [...prev, image]);
    });
  }

  function onImageDelete(image: string, idx: number) {
    setImages((prev) => prev.filter((img) => img !== image));
    setImageFiles((prev) => prev.filter((_, index) => index !== idx));
  }

  useEffect(() => {
    if (imagesInputRef.current) {
      let newFiles = new DataTransfer();
      imageFiles.forEach((file) => newFiles.items.add(file));
      imagesInputRef.current.files = newFiles.files;
    }
  }, [imageFiles]);

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
        className="relative flex h-[10rem] w-[20rem] flex-col items-center justify-center gap-[1rem] rounded-[2rem] bg-gray-300/40 py-[1rem] text-[1.2rem] font-semibold text-gray-400 shadow-sm"
      >
        <Upload size={35} className="text-gray-400 opacity-80" />
        Upload Room Images
        <input
          type="file"
          accept="image/png, image/jpeg"
          name="ImageFiles"
          onChange={onImageUpload}
          multiple
          ref={imagesInputRef}
          id="roomCreationFileUpload"
          className="absolute right-0 top-0 hidden h-full w-full"
        />
      </label>
      {images.length > 0 && (
        <div className="flex w-full flex-wrap items-center justify-center gap-x-[2rem] gap-y-[1rem]">
          {images.map((image, index) => (
            <div className="relative h-[7rem] w-[10rem] object-cover" key={image}>
              <Image src={image} alt="image" className="rounded-[1rem] shadow-md duration-100 ease-in-out" fill />

              <button
                type="button"
                onClick={() => onImageDelete(image, index)}
                className="absolute right-[.5rem] top-[.5rem] rounded-md bg-gray-300/80"
              >
                <X size={15} color="black" />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="flex w-full items-center justify-center">
        <button
          type="submit"
          className="flex h-[3rem] items-center justify-center rounded-[1rem] bg-orange-600 px-[2rem] text-[1.3rem] font-bold text-white"
        >
          {isLoading ? <LoadingSpinner width="2rem" height="2rem" color="white" /> : "Create Room"}
        </button>
      </div>
    </form>
  );
}
