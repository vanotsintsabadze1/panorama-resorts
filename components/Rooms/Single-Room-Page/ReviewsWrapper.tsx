import { Star } from "lucide-react";
import ReviewTextArea from "./ReviewTextArea";

export default function ReviewsWrapper() {
  return (
    <section className="mb-[1rem] mt-[5rem] flex w-full flex-col items-center">
      <div className="flex w-full flex-col px-[2rem] md:w-[60rem] lg:w-[100rem]">
        <h1 className="text-[3rem] font-medium text-slate-800">Reviews</h1>
        <canvas className="my-[2rem] h-[.1rem] w-[90%] bg-black/10" />
        <ReviewTextArea />
        <div className="mt-[4rem] flex w-full flex-col gap-[4rem]">
          {[...Array(5).fill(0)].map((_, i) => (
            <div key={i} className="flex w-full flex-col gap-[.5rem]">
              <div className="flex w-full items-center gap-[2rem] px-[.5rem]">
                <span className="text-[1.2rem] font-medium uppercase">John Doe</span>
                <div className="flex gap-[1rem]">
                  {[...Array(5).fill(0)].map((_, idx) => (
                    <Star key={i} size={20} color="orange" fill={idx <= i ? "orange" : "none"} />
                  ))}
                </div>
              </div>
              <div className="min-h-[10rem] w-full rounded-md bg-white p-[1rem] shadow-md">
                <p className="text-[1.3rem] font-medium">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, repellat. Ratione, blanditiis quas
                  dolorem beatae id earum consectetur distinctio quisquam libero impedit vel quaerat reiciendis numquam
                  fugiat. Nihil, aliquid cumque.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
