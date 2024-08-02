"use client";

import Link from "next/link";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Rooms",
    url: "/rooms",
  },

  {
    name: "Facilities",
    url: "/facilities",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

interface Props {
  className: string;
}

export default function Navigation({ className }: Props) {
  return (
    <nav className={className}>
      {links.map((link) => (
        <Link key={link.url} href={link.url}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
