interface Props {
  from: number;
  to: number;
  setFrom: React.Dispatch<React.SetStateAction<number>>;
  setTo: React.Dispatch<React.SetStateAction<number>>;
}

export default function RoomsFilterPriceRange({ from, to, setFrom, setTo }: Props) {
  function onAmountChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>,
  ) {
    if (e.target.value === "" || isNaN(parseInt(e.target.value))) {
      setter(0);
    } else {
      setter(parseInt(e.target.value));
    }
  }

  return (
    <div className="flex w-full flex-col gap-[.5rem] md:w-[20rem]">
      <p className="text-[1.1rem] font-semibold uppercase">Price Range</p>
      <div className="flex items-center gap-[1rem]">
        <input
          value={from}
          onChange={(e) => onAmountChange(e, setFrom)}
          type="text"
          className="w-full rounded-xl border border-gray-300 px-[1rem] py-[1rem] text-[1.3rem] font-medium"
        />
        <p className="text-[1.3rem] font-medium"> - </p>
        <input
          value={to}
          onChange={(e) => onAmountChange(e, setTo)}
          type="text"
          className="w-full rounded-xl border border-gray-300 px-[1rem] py-[1rem] text-[1.3rem] font-medium"
        />
      </div>
    </div>
  );
}
