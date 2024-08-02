import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  month: number;
  year: number;
  monthName: string;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
  setYear: React.Dispatch<React.SetStateAction<number>>;
}

export default function SelectedDateFrame({ month, year, monthName, setMonth, setYear }: Props) {
  function onPrevArrow() {
    if (month === 0) {
      setMonth(11);
      setYear((prev) => prev - 1);
    } else {
      setMonth((prev) => prev - 1);
    }
  }

  function onNextArrow() {
    if (month === 11) {
      setMonth(0);
      setYear((prev) => prev + 1);
    } else {
      setMonth((prev) => prev + 1);
    }
  }

  return (
    <section className="relative flex w-full items-center justify-center p-[1rem]">
      <button onClick={onPrevArrow} className="absolute left-0 top-1/2 -translate-y-1/2">
        <ChevronLeft size={24} />
      </button>
      <p className="text-[1.3rem] font-bold">
        {monthName}, {year}
      </p>
      <button onClick={onNextArrow} className="absolute right-0 top-1/2 -translate-y-1/2">
        <ChevronRight size={24} />
      </button>
    </section>
  );
}
