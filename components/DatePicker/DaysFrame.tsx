export default function DaysFrame() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <section className="grid w-full grid-cols-7 gap-[2rem]">
      {days.map((day, idx) => (
        <div key={idx} className="flex justify-center text-[1.1rem] font-semibold uppercase">
          {day}
        </div>
      ))}
    </section>
  );
}
