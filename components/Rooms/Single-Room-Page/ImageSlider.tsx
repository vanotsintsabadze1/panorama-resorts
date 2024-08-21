"use client";

import LoadingSpinner from "@/components/misc/LoadingSpinner";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  url: string;
  token: string;
  roomImages: RoomImagePayload[];
}

export default function ImageSlider({ url, token, roomImages }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [images, setImages] = useState<string[]>([]);

  async function getImages() {
    for (let image of roomImages) {
      const res = await fetch(`${url}/v1/Image/${image.url}`, {
        method: "GET",
        headers: {
          "Content-Type": "image/.jpg",
          Authorization: `Bearer ${token}`,
        },
      });
      const blob = await res.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImages((prev) => [...prev, imageUrl]);
    }
  }

  useEffect(() => {
    getImages();
  }, []);

  function onImageClick(idx: number) {
    emblaApi?.scrollTo(idx);
  }

  //  First div controls the height and the width of the image.
  // The embla elements are inheriting their css from globals.css

  return (
    <>
      <div className="relative h-[22rem] w-[35rem] md:h-[30rem] md:w-[45rem] xs:h-[18rem] xs:w-[28rem]">
        {images.length > 0 ? (
          <div className="embla">
            <div className="embla__viewport rounded-[1rem]" ref={emblaRef}>
              <div className="embla__container">
                {images.map((image, idx) => (
                  <div className="embla__slide relative mx-[1rem] border border-gray-400" key={idx}>
                    <Image src={image} alt={`room-image-${idx}}`} fill />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <LoadingSpinner width="4rem" height="4rem" color="black" />
        )}
      </div>

      <div className="flex w-full flex-wrap items-center justify-center gap-[2rem]">
        {images.map((image, idx) => (
          <button
            key={image}
            onClick={() => onImageClick(idx)}
            className="relative h-[6rem] w-[7rem] rounded-lg shadow-md"
          >
            <Image src={image} fill alt={`room-mini-image-${idx}`} className="border border-gray-500" />
          </button>
        ))}
      </div>
    </>
  );
}
