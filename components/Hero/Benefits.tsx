import { Hotel, Palmtree, Star } from "lucide-react";

const benefits = [
  {
    icon: <Star size={70} className="text-orange-800" />,
    title: "Best Price Guarantee",
    description:
      "We offer the best price guarantee for all our hotels and resorts.",
  },
  {
    icon: <Hotel size={70} className="text-orange-800" />,
    title: "Luxury Accommodation",
    description:
      "Our hotels and resorts offer luxury accommodation with the best views.",
  },
  {
    icon: <Palmtree size={70} className="text-orange-800" />,
    title: "Beachfront Resorts",
    description:
      "Right on the beach, our resorts offer the best views and activities.",
  },
];

export default function Benefits() {
  return (
    <section className="flex w-full flex-wrap items-center justify-center gap-x-[5rem] gap-y-[4rem] px-[2rem] py-[3rem]">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-y-4"
        >
          {benefit.icon}
          <h3 className="text-[2rem] font-semibold">{benefit.title}</h3>
          <p className="max-w-[30rem] text-center text-[1.3rem]">
            {benefit.description}
          </p>
        </div>
      ))}
    </section>
  );
}
