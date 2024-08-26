"use client";

import { PersonStanding, CircleDollarSign, Star } from "lucide-react";
import Image from "next/image";
import RoomSeeMoreBtn from "./RoomSeeMoreBtn";
import { useEffect, useState } from "react";
import { getUserToken } from "@/scripts/auth/getUserToken";
import LoadingSpinner from "../misc/LoadingSpinner";

interface Props extends Room {
  url: string;
  token: string;
}

export default function RoomCard({
  images: roomImageURLs,
  type,
  id,
  description,
  capacity,
  pricePerNight,
  url,
  token,
  averageStars,
}: Props) {
  const [image, setImages] = useState<string>("");

  // Since we only need one image, we're going to be fetching the first image of the room only.
  // This cuts the request amount and computation price.
  // The function has to be invoked on client side as octet-stream returns a blob and we need to use URL.createObjectURL(), which is only available on client.

  async function getSingleImage() {
    const res = await fetch(`${url}/v1/Image/${roomImageURLs[0].url}`, {
      method: "GET",
      headers: {
        "Content-Type": "image/.jpg",
        Authorization: `Bearer ${token}`,
      },
    });
    const blob = await res.blob();
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    setImages(imageUrl);
  }

  // Function gets invoked on the first load.
  useEffect(() => {
    getSingleImage();
  }, []);

  return (
    <div className="flex min-h-[40rem] w-[38rem] flex-col items-center gap-[1rem] rounded-[1rem] border border-gray-200 bg-white p-[2rem] shadow-lg xs:max-w-[35rem]">
      <div className="relative flex h-[25rem] w-[35rem] items-center justify-center xs:h-[20rem] xs:w-[30rem]">
        {image !== "" ? (
          <Image src={image} alt="some image" fill className="rounded-[1rem] shadow-md" />
        ) : (
          <LoadingSpinner width="4rem" height="4rem" color="black" />
        )}
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <h2 className="text-[1.8rem] font-bold">
          {type === 0 ? "Single Room" : type === 1 ? "Double Room" : "Suite Room"}
        </h2>
        <p className="line-clamp-3 text-[1.3rem] font-medium">{description}</p>
        <p className="mt-[.5rem] text-[1.3rem] font-bold">Details</p>
        <div className="my-[.5rem] flex w-full items-center gap-[2rem]">
          <div className="flex items-center justify-center gap-[.5rem]">
            <PersonStanding size={30} />
            <p className="text-[1.4rem] font-medium">{capacity}</p>
          </div>
          <div className="flex items-center justify-center gap-[.5rem]">
            <CircleDollarSign size={24} />
            <p className="text-[1.4rem] font-medium">${pricePerNight}</p>
          </div>
        </div>
        <div className="flex items-center gap-[.5rem]">
          {[
            ...Array(5)
              .fill(0)
              .map((_, i) => <Star key={i} size={25} fill={i <= averageStars ? "black" : "none"} />),
          ]}
        </div>
        <div className="mt-[2rem] flex w-full items-center justify-center">
          <RoomSeeMoreBtn id={id} />
        </div>
      </div>
    </div>
  );
}
