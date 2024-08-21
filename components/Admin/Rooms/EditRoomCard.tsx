"use client";
import { useEffect, useRef, useState } from "react";
import { Upload, X } from "lucide-react";
import { schema } from "@/schemas/roomCreationSchema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import editRoom from "@/scripts/rooms/editRoom";
import RoomEditFormFields from "./RoomEditFormFields";
import LoadingSpinner from "@/components/misc/LoadingSpinner";
import Image from "next/image";

interface Props extends Room {
  token: string;
  url: string;
}

export default function EditRoomCard({ id, type, capacity, pricePerNight, description, images, token, url }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imagesAsFiles, setImagesAsFiles] = useState<File[]>([]);
  const [imagesAsUrls, setImagesAsUrls] = useState<string[]>([]);
  const [fetched, setFetched] = useState(false);

  async function getBlobsConvertedToFiles() {
    for (let image of images) {
      const res = await fetch(`${url}/v1/Image/${image.url}`, {
        method: "GET",
        headers: {
          "Content-Type": "image/.jpg",
          Authorization: `Bearer ${token}`,
        },
      });
      const blob = await res.blob();
      const blobToFile = new File([blob], image.id);

      setImagesAsFiles((prev) => [...prev, blobToFile]);
    }

    setFetched(true);
  }

  useEffect(() => {
    if (fetched) {
      for (let image of imagesAsFiles) {
        const imageURL = URL.createObjectURL(image);

        setImagesAsUrls((prev) => [...prev, imageURL]);
      }
    }
  }, [fetched]);

  async function onRoomEdit(e: React.MouseEvent<HTMLFormElement>) {
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

    formData.append("Id", id);
    formData.append("PricePerNightCurrency", "1");

    if (!res.success) {
      toast.error(res.error.errors[0].message);
      setIsLoading(false);
      return;
    }

    const status = await editRoom(formData);

    if (status?.status === 200) {
      toast.success("Room updated successfully.");
    } else if (status?.status === 500) {
      toast.error("Error on the server. Contact the support.");
    } else {
      toast.error("Unauthorized action.");
    }

    router.push("/admin/rooms");
  }

  useEffect(() => {
    getBlobsConvertedToFiles();
  }, []);

  async function onImageDelete(imageURL: string, index: number) {
    setImagesAsUrls((prev) => prev.filter((img) => img !== imageURL));
    setImagesAsFiles((prev) => prev.filter((_, idx) => idx !== index));
  }

  function onImageUpload() {
    if (!imageInputRef.current?.files || imageInputRef.current.files.length === 0) {
      return;
    }

    if (!formRef.current) {
      return;
    }
    const formData = new FormData(formRef.current);
    const images = formData.getAll("ImageFiles") as File[];
    images.forEach((image) => {
      const imageURL = URL.createObjectURL(image);
      setImagesAsUrls((prev) => [...prev, imageURL]);
      setImagesAsFiles((prev) => [...prev, image]);
    });
  }

  useEffect(() => {
    if (fetched) {
      if (!imageInputRef.current) {
        return;
      }

      const newFiles = new DataTransfer();

      imagesAsFiles.forEach((imageFile) => {
        newFiles.items.add(imageFile);
      });

      imageInputRef.current.files = newFiles.files;
    }
  }, [imagesAsFiles]);

  return (
    <form
      action=""
      ref={formRef}
      onSubmit={onRoomEdit}
      className="flex w-full flex-col items-center gap-[2rem] rounded-[1rem] border border-gray-300 bg-white p-[2rem] shadow-md md:w-[60rem]"
    >
      <RoomEditFormFields type={type} capacity={capacity} pricePerNight={pricePerNight} description={description} />
      <label
        htmlFor="roomCreationFileUpload"
        className="relative flex h-[10rem] w-[20rem] flex-col items-center justify-center gap-[1rem] rounded-[2rem] bg-gray-300 py-[1rem] text-[1.2rem] font-semibold text-gray-400 shadow-sm"
      >
        <Upload size={35} className="text-gray-400 opacity-80" />
        Upload Room Images
        <input
          type="file"
          accept="image/*"
          name="ImageFiles"
          ref={imageInputRef}
          onChange={onImageUpload}
          multiple
          id="roomCreationFileUpload"
          className="absolute right-0 top-0 hidden h-full w-full"
        />
      </label>
      {imagesAsUrls.length > 0 && (
        <div className="flex w-full flex-wrap items-center justify-center gap-x-[2rem] gap-y-[1rem]">
          {imagesAsUrls.map((image, index) => (
            <div className="relative h-[7rem] w-[10rem] object-cover" key={image}>
              <Image src={image} alt="image" className="rounded-[1rem] shadow-md duration-100 ease-in-out" fill />

              <button
                onClick={() => onImageDelete(image, index)}
                type="button"
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
          className="flex h-[3rem] w-[14rem] items-center justify-center rounded-[1rem] bg-orange-600 px-[2rem] text-[1.3rem] font-bold text-white"
        >
          {isLoading ? <LoadingSpinner width="2rem" height="2rem" color="white" /> : "Update Room"}
        </button>
      </div>
    </form>
  );
}
