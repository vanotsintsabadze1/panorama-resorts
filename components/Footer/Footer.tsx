import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-[1rem] bg-primary px-[2rem] py-[3rem] md:items-start">
      <div className="relative h-[1.8rem] w-[20rem]">
        <Image src="/images/logos/logo_white_high.webp" fill alt="footer-logo-white" className="brightness-50" />
      </div>
      <div className="mt-[2rem] flex flex-wrap items-center justify-center gap-[4rem] text-[1.3rem] font-medium text-gray-300 opacity-50 duration-150 ease-in-out hover:opacity-100">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <p className="text-[1.3rem] font-light text-gray-300"></p>
      </div>
      <canvas className="h-[.1rem] w-full bg-gray-400/50" />
      <div className="flex items-center justify-center gap-[3rem] py-[1rem]">
        <Image
          className="opacity-75 duration-150 hover:opacity-90"
          src="/images/icons/sm-icons/facebook.webp"
          width={30}
          height={30}
          alt="facebook-icon"
        />
        <Image
          className="opacity-75 duration-150 hover:opacity-90"
          src="/images/icons/sm-icons/instagram.webp"
          width={30}
          height={30}
          alt="facebook-icon"
        />
        <Image
          className="opacity-75 duration-150 hover:opacity-90"
          src="/images/icons/sm-icons/gmail.webp"
          width={30}
          height={30}
          alt="facebook-icon"
        />
      </div>
      <div className="mt-[.5rem]">
        <p className="text-center text-[1.1rem] uppercase text-gray-300 opacity-50">
          @ 2024 Panorama Resort. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
