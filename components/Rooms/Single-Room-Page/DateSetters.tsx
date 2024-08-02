import { useState } from "react";
import { Calendar } from "lucide-react";
import DateSelectorModal from "./DateSelectorModal";
import { AnimatePresence } from "framer-motion";

interface Props {
  checkIn: Date;
  checkOut: Date;
  setCheckInDate: React.Dispatch<React.SetStateAction<Date>>;
  setCheckOutDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function DateSetters({ checkIn, checkOut, setCheckInDate, setCheckOutDate }: Props) {
  const checkInMonth = checkIn.getMonth() + 1;
  const checkOutMonth = checkOut.getMonth() + 1;
  const checkInDate = checkIn.getDate();
  const checkInYear = checkIn.getFullYear();
  const checkOutDate = checkOut.getDate();
  const checkOutYear = checkOut.getFullYear();

  const [isCheckInSelectorOpen, setIsCheckInSelectorOpen] = useState(false);
  const [isCheckOutSelectorOpen, setIsCheckOutSelectorOpen] = useState(false);

  function enableCheckInSelectorModal() {
    setIsCheckInSelectorOpen(true);
  }

  function enableCheckOutSelectorModal() {
    setIsCheckOutSelectorOpen(true);
  }

  return (
    <section className="flex w-full items-center justify-center gap-[1rem]">
      <AnimatePresence>
        {isCheckInSelectorOpen && (
          <DateSelectorModal setModal={setIsCheckInSelectorOpen} setCurrentDate={setCheckInDate} />
        )}
        {isCheckOutSelectorOpen && (
          <DateSelectorModal setModal={setIsCheckOutSelectorOpen} setCurrentDate={setCheckOutDate} />
        )}
      </AnimatePresence>

      <div className="flex basis-1/2 flex-col items-center gap-[.5rem]">
        <p className="text-[1.2rem] font-bold uppercase">Check-In</p>
        <button
          onClick={enableCheckInSelectorModal}
          className="relative h-[4rem] w-full border border-gray-300 px-[1rem] text-center text-[1.2rem] font-medium tracking-wider"
        >
          {checkInMonth}/{checkInDate}/{checkInYear}
          <Calendar className="absolute right-[1rem] top-1/2 -translate-y-1/2" size={17} />
        </button>
      </div>
      <div className="flex basis-1/2 flex-col items-center gap-[.5rem]">
        <p className="text-[1.2rem] font-bold uppercase">Check-Out</p>
        <button
          onClick={enableCheckOutSelectorModal}
          className="relative h-[4rem] w-full border border-gray-300 px-[1rem] text-center text-[1.2rem] font-medium tracking-wider"
        >
          {checkOutMonth}/{checkOutDate}/{checkOutYear}
          <Calendar className="absolute right-[1rem] top-1/2 -translate-y-1/2" size={17} />
        </button>
      </div>
    </section>
  );
}
