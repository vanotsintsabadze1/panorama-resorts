import React from "react";

interface Props {
  type: number;
  setType: React.Dispatch<React.SetStateAction<number>>;
}

export default function RoomFilterType({ type, setType }: Props) {
  const types = ["Single", "Double", "Suite"];

  return (
    <div className="flex w-full flex-col gap-[.5rem] md:w-[20rem]">
      <p className="text-[1.1rem] font-semibold uppercase">Type</p>
      <select
        value={type}
        onChange={(e) => setType(parseInt(e.target.value))}
        className="w-full rounded-xl border border-gray-300 px-[1rem] py-[1rem] text-[1.3rem] font-medium"
      >
        {types.map((type, index) => (
          <option key={index} value={index}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
