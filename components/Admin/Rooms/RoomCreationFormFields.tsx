export default function RoomCreationFormFields() {
  return (
    <>
      <div className="flex w-full flex-col gap-[.5rem]">
        <p className="text-lg font-semibold">Room Type</p>
        <select name="Type" className="w-full rounded-md border border-gray-300 p-[.5rem] px-[1rem] text-[1.3rem]">
          <option value="0">Single Room</option>
          <option value="1">Double Room</option>
          <option value="2">Suite Room</option>
        </select>
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <p className="text-lg font-semibold">Description</p>
        <textarea
          placeholder="Write the room description.."
          name="Description"
          className="h-[10rem] w-full resize-none overflow-auto rounded-md border border-gray-300 p-[.5rem] px-[1rem] text-[1.3rem]"
        />
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <p className="text-lg font-semibold">Capacity</p>
        <input
          type="number"
          placeholder="Write the resident amount.."
          name="Capacity"
          className="w-full rounded-md border border-gray-300 p-[.5rem] px-[1rem] text-[1.3rem]"
        />
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <p className="text-lg font-semibold">Price Per Night</p>
        <input
          type="number"
          placeholder="Write the price for per night.."
          name="PricePerNight"
          className="w-full rounded-md border border-gray-300 p-[.5rem] px-[1rem] text-[1.3rem]"
        />
      </div>
    </>
  );
}
