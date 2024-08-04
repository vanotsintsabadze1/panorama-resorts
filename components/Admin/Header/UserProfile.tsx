import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="flex flex-col items-center gap-[.5rem]">
      <div className="relative h-[3rem] w-[3rem]">
        <Image className="rounded-[50%]" src="/images/backgrounds/hero.webp" fill alt="user-profile-picture" />
      </div>
      <p className="w-[8rem] truncate text-[1.2rem] font-semibold">VanoTsintsabadze</p>
    </div>
  );
}
