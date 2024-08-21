import { Star } from "lucide-react";

interface Props {
  preStars: number;
  finalStars: number;
  setPreStars: React.Dispatch<React.SetStateAction<number>>;
  setStars: React.Dispatch<React.SetStateAction<number>>;
}

export default function ReviewStars({ preStars, finalStars, setPreStars, setStars }: Props) {
  function onStarHover(index: number) {
    setPreStars(index);
  }

  function onStarSubmit() {
    setStars(preStars);
  }

  return (
    <div className={`flex items-center justify-center gap-[1rem]`}>
      {[...Array(5).fill(0)].map((_, i) => (
        <button key={i} onMouseOver={(e) => onStarHover(i)} onMouseOut={() => onStarHover(0)} onClick={onStarSubmit}>
          <Star
            size={20}
            color="orange"
            fill={finalStars > 0 && i <= finalStars ? "orange" : finalStars === 0 && i <= preStars ? "orange" : "none"}
          />
        </button>
      ))}
    </div>
  );
}
