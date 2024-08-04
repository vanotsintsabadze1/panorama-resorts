import { useState } from "react";
import SelectedDateFrame from "./SelectedDateFrame";
import DaysFrame from "./DaysFrame";
import DatesFrame from "./DatesFrame";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function DatePicker({ setModal, setCurrentDate }: Props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const [month, setMonth] = useState(() => date.getMonth());
  const [year, setYear] = useState(() => date.getFullYear());

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="flex flex-col items-center gap-[1rem] rounded-lg border border-gray-300 bg-white px-[2rem] py-[1rem] shadow-md sm:w-[38rem] xs:w-[30rem]"
    >
      <SelectedDateFrame month={month} year={year} monthName={months[month]} setMonth={setMonth} setYear={setYear} />
      <DaysFrame />
      <DatesFrame setModal={setModal} month={month} year={year} setCurrentDate={setCurrentDate} />
    </div>
  );
}
