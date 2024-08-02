import React from "react";

interface Props {
  residentAmount: number;
  setResidentAmount: React.Dispatch<React.SetStateAction<number>>;
}

export default function RoomFilterResidents({ residentAmount, setResidentAmount }: Props) {
  function onResidentChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "" || isNaN(parseInt(e.target.value))) {
      setResidentAmount(0);
    } else {
      setResidentAmount(parseInt(e.target.value));
    }
  }

  return (
    <div className="flex w-full flex-col gap-[.5rem] md:w-[20rem]">
      <p className="text-[1.1rem] font-semibold uppercase">Residents</p>
      <input
        value={residentAmount}
        onChange={onResidentChange}
        type="text"
        className="w-full rounded-xl border border-gray-300 px-[1rem] py-[1rem] text-[1.3rem] font-medium"
      />
    </div>
  );
}
