import { House, ShowerHead, Droplet, Wine } from "lucide-react";

export default function FacilityTypes() {
  const types = [
    {
      icon: <House size={50} className="text-orange-800" />,
      title: "Fitness Center",
      description:
        "Stay active during your stay with our state-of-the-art fitness center, equipped with the latest exercise machines and free weights.",
    },
    {
      icon: <ShowerHead size={50} className="text-orange-800" />,
      title: "Luxury Spa",
      description:
        "Indulge in a world of relaxation and rejuvenation at our luxurious spa, where you can enjoy a variety of treatments and massages.",
    },
    {
      icon: <Droplet size={50} className="text-orange-800" />,
      title: "Outdoor Pool",
      description:
        "Take a dip in our sparkling swimming pool, surrounded by lush gardens and sun loungers for the ultimate relaxation experience.",
    },
    {
      icon: <Wine size={50} className="text-orange-800" />,
      title: "Gourmet Dining",
      description:
        "Savor a delicious meal at our on-site restaurant, where you can enjoy a variety of local and international dishes, as well as a selection of fine wines.",
    },
  ];

  return (
    <section className="my-[8rem] flex flex-wrap items-center justify-center gap-x-[5rem] gap-y-[5rem] md:gap-x-[10rem]">
      {types.map((type, idx) => (
        <div key={idx} className="flex w-[15rem] flex-col items-center gap-[.5rem] text-center">
          {type.icon}
          <h5 className="mt-[1rem] text-[1.6rem] font-bold text-slate-900">{type.title}</h5>
          <p className="text-[1.3rem] text-gray-600">{type.description}</p>
        </div>
      ))}
    </section>
  );
}
