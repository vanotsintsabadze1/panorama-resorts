import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative h-[1.4rem] w-[15rem]">
      <Image src="/images/logos/logo_white_md.webp" alt="logo" fill />
    </div>
  );
}
