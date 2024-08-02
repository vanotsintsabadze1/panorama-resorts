import { Minus, Plus } from "lucide-react";
import toast from "react-hot-toast";

interface Props {
  capacity: number;
  residentAmount: number;
  setResidentAmount: React.Dispatch<React.SetStateAction<number>>;
}

export default function ResidentAmount({ capacity, residentAmount, setResidentAmount }: Props) {
  function onAdd() {
    if (residentAmount === capacity) {
      toast.error("Maximum capacity reached");
      return;
    } else {
      setResidentAmount((prev) => prev + 1);
    }
  }

  function onRemove() {
    if (residentAmount === 0) {
      toast.error("Minimum capacity reached");
      return;
    } else {
      setResidentAmount((prev) => prev - 1);
    }
  }

  return (
    <section className="flex flex-col gap-[.5rem]">
      <p className="text-[1.3rem] font-semibold">Amount of Guests:</p>
      <div className="relative h-[4rem] w-full">
        <input
          className="h-full w-full border border-gray-300 px-[1rem] text-[1.3rem] outline-none"
          type="number"
          value={residentAmount}
          placeholder="Input Guest Amount.."
          readOnly
        />
        <div className="absolute right-0 top-0 h-[4rem]">
          <button onClick={onAdd} className="h-full border border-gray-300 bg-gray-400 px-[1rem] py-[.5rem]">
            <Plus size={20} />
          </button>
          <button onClick={onRemove} className="h-full border border-gray-300 bg-gray-400 px-[1rem] py-[.5rem]">
            <Minus size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
