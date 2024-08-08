"use client";

import { Home, LucideHotel, BookmarkIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  const links = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <Home size={23} />,
    },
    {
      title: "Rooms",
      href: "/admin/rooms",
      icon: <LucideHotel size={23} />,
    },
    {
      title: "Reservations",
      href: "/admin/reservations",
      icon: <BookmarkIcon size={23} />,
    },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-center gap-[5rem] px-[2rem]">
      {links.map((link) => (
        <button
          key={link.href}
          onClick={() => router.push(link.href)}
          className="flex flex-col items-center gap-[.5rem] duration-300 ease-in-out hover:text-orange-600"
        >
          {link.icon}
          <span className="text-[1.2rem] font-semibold">{link.title}</span>
        </button>
      ))}
    </nav>
  );
}
