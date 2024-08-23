import { useState } from "react";
import RoomFilterType from "./RoomFilterType";
import toast from "react-hot-toast";
import RoomFilterResidents from "./RoomFilterResidents";
import RoomsFilterPriceRange from "./RoomsFilterPriceRange";

interface Props {
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
}

export default function RoomsFilter({ setRooms }: Props) {
  const [type, setType] = useState(0);
  const [residentAmount, setResidentAmount] = useState(0);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);
  const [isFilterActive, setIsFilterActive] = useState(false);

  function onSubmit() {
    if (priceFrom > priceTo) {
      toast.error("Price from cannot be greater than price to.");
      return;
    }

    if (priceFrom < 0 || priceTo < 0) {
      toast.error("Prices can't be less than 0.");
      return;
    }

    if (priceTo === 0) {
      toast.error("Please enter a price range.");
      return;
    }

    if (residentAmount < 1) {
      toast.error("Please enter a valid resident amount.");
      return;
    }

    setRooms((prev) =>
      prev.filter(
        (room) =>
          room.capacity >= residentAmount &&
          room.pricePerNight >= priceFrom &&
          room.pricePerNight <= priceTo &&
          room.type === type,
      ),
    );
    setIsFilterActive(true);
  }

  return (
    <div
      className={`relative mb-[3rem] flex w-full flex-col items-center gap-[3rem] px-[2rem] py-[2rem] duration-150 ease-in-out`}
    >
      <div className={`flex w-full flex-wrap items-center justify-center gap-[3rem]`}>
        <RoomFilterType type={type} setType={setType} />
        <RoomFilterResidents residentAmount={residentAmount} setResidentAmount={setResidentAmount} />
        <RoomsFilterPriceRange from={priceFrom} to={priceTo} setFrom={setPriceFrom} setTo={setPriceTo} />
      </div>
      <div className="flex w-full items-center justify-center md:w-[40rem] xs:w-full">
        <button
          onClick={onSubmit}
          className="h-[3.5rem] w-full rounded-lg bg-black text-[1.3rem] font-bold uppercase tracking-wider text-white"
        >
          Submit
        </button>
      </div>
      {isFilterActive && (
        <div className="flex w-full items-center justify-center">
          <button onClick={() => (window.location.href = "/rooms")} className="">
            Clear Filter
          </button>
        </div>
      )}
    </div>
  );
}
