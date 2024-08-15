import Image from "next/image";

export default function FacilityContainers() {
  const containers = [
    {
      image: "/images/facilities/gym.webp",
      title: "Fitness Center",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur provident cupiditate laboriosam voluptate ipsum, pariatur corrupti recusandae labore corporis? Esse hic ex recusandae ab eius similique non eligendi aspernatur.",
    },
    {
      image: "/images/facilities/spa.webp",
      title: "Spa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur provident cupiditate laboriosam voluptate ipsum, pariatur corrupti recusandae labore corporis? Esse hic ex recusandae ab eius similique non eligendi aspern",
    },
    {
      image: "/images/facilities/pool.webp",
      title: "Swimming Pool",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur provident cupiditate laboriosam voluptate ipsum, pariatur corrupti recusandae labore corporis? Esse hic ex recusandae ab eius similique non eligendi aspernatur.",
    },
    {
      image: "/images/facilities/restaurant.webp",
      title: "Restaurant",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur provident cupiditate laboriosam voluptate ipsum, pariatur corrupti recusandae labore corporis? Esse hic ex recusandae ab eius similique non eligendi aspern",
    },
  ];

  return (
    <section className="mb-[6rem] mt-[3rem] flex w-full flex-col items-center justify-center gap-[10rem] px-[2rem]">
      {containers.map((container, index) => (
        <div key={index} className="flex flex-wrap justify-center gap-[3rem]">
          <div className="relative h-[25rem] w-[40rem] shadow-lg md:h-[40rem] md:w-[60rem] xs:h-[20rem] xs:w-[30rem]">
            <Image
              src={container.image}
              fill
              alt={`facility-${index}`}
              className="rounded-[1rem] border border-gray-400"
            />
          </div>
          <div className="flex max-w-[50rem] flex-col items-center gap-[1rem] lg:items-start">
            <h2 className="text-[3rem] font-bold text-slate-900">{container.title}</h2>
            <p className="lg:max-w-auto max-w-[40rem] text-center text-[1.4rem] text-gray-600 lg:text-left">
              {container.description}
            </p>
            <div className="mt-[2rem] flex w-full flex-grow items-end justify-center lg:mt-0 lg:justify-start">
              <button className="h-[3.8rem] w-[14rem] rounded-[1rem] bg-black text-[1.3rem] font-medium uppercase tracking-wider text-white shadow-md">
                See More
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
