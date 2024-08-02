import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="flex w-full flex-col items-center gap-[3rem] py-[4rem]">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-[2rem] font-medium uppercase tracking-widest">About Us</h3>
        <canvas className="my-[1rem] mb-[2rem] h-[.1rem] w-[90%] bg-gray-400" />
        <p className="max-w-[60rem] px-[2rem] text-center text-[1.3rem] text-gray-700 md:px-0">
          At Panorama Resort, every detail is crafted to provide you with an unforgettable experience. Our opulent
          suites are designed for ultimate comfort, featuring private infinity pools, floor-to-ceiling windows, and
          exquisite decor. Each room offers a sanctuary of peace and tranquility, allowing you to unwind and rejuvenate
          in style.
        </p>
      </div>
    </section>
  );
}
