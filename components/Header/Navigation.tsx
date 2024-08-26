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
    name: "Reservations",
    url: "/rooms/userReservations",
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
        <Link className={`duration-300 hover:scale-110 hover:opacity-50 ${link.name === "Reservations" && "lg:hidden"}`} key={link.url} href={link.url}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
