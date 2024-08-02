import React from "react";

interface Props {
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}

export default function RoomFilterType({ type, setType }: Props) {
  const types = ["All", "Single", "Double", "Suite", "King"];

  return (
    <div className="flex w-full flex-col gap-[.5rem] md:w-[20rem]">
      <p className="text-[1.1rem] font-semibold uppercase">Type</p>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-[1rem] py-[1rem] text-[1.3rem] font-medium"
      >
        {types.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
