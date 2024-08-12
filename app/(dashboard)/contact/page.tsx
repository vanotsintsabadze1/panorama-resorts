import ContactCard from "@/components/Contact/ContactCard";

export default function page() {
  return (
    <section className="flex w-full flex-col items-center gap-[2rem] px-[2rem] py-[5rem] xs:py-[7rem]">
      <span className="text-[1.8rem] font-light uppercase tracking-widest">Panorama Resort</span>
      <h1 className="text-center text-[4rem] font-semibold uppercase tracking-widest md:text-[5rem]">Contact Us</h1>
      <ContactCard />
    </section>
  );
}
