import React from "react";
import DateCell from "./DateCell";

interface Props {
  month: number;
  year: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function DatesFrame({ month, year, setModal, setCurrentDate }: Props) {
  const emptyCellAmount = new Date(year, month, 1).getDay();
  const amountOfDays = new Date(year, month + 1, 0).getDate();
  const lastDateDay = new Date(year, month, amountOfDays).getDay();
  const datesArr = Array.from({ length: amountOfDays }, (_, i) => i + 1);
  const nextMonthCellAmount = 6 - lastDateDay;
  const nextMonthDatesArray = Array.from({ length: nextMonthCellAmount }, (_, i) => i + 1);
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const prevMonthDays = new Date(prevYear, prevMonth + 1, 0).getDate() - emptyCellAmount;

  function onSelectDate(date: number) {
    setCurrentDate(new Date(year, month, date));
    setModal(false);
  }

  return (
    <div className="grid w-full grid-cols-7 gap-[2rem] gap-y-[4rem] py-[1rem]">
      {Array(emptyCellAmount)
        .fill(" ")
        .map((_, idx) => (
          <DateCell key={idx} className="flex items-center justify-center text-[1.3rem] text-gray-400">
            {prevMonthDays + idx + 1}
          </DateCell>
        ))}
      {datesArr.map((date, idx) => (
        <DateCell
          onCellClick={() => onSelectDate(date)}
          key={date + idx}
          className="flex items-center justify-center rounded-2xl text-[1.3rem] duration-100 ease-in-out hover:bg-gray-400/50"
        >
          {date}
        </DateCell>
      ))}
      {nextMonthDatesArray.map((date, idx) => (
        <DateCell key={date * idx} className="flex items-center justify-center text-[1.3rem] text-gray-400">
          {date}
        </DateCell>
      ))}
    </div>
  );
}
