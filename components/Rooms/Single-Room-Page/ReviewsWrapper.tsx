import { Star } from "lucide-react";
import ReviewCreation from "./ReviewCreation";

interface Props {
  roomId: string;
  reviews: RoomReview[];
  canReview: boolean;
}

export default function ReviewsWrapper({ roomId, reviews, canReview }: Props) {
  return (
    <section className="mb-[1rem] mt-[5rem] flex w-full flex-col items-center">
      <div className="flex w-full flex-col px-[2rem] md:w-[60rem] lg:w-[100rem]">
        <h1 className="text-[3rem] font-medium text-slate-800">Reviews</h1>
        <canvas className="my-[2rem] h-[.1rem] w-[90%] bg-black/10" />
        <ReviewCreation roomId={roomId} canReview={canReview} />
        <div className="mt-[4rem] flex w-full flex-col gap-[4rem]">
          {reviews.map((review, i) => (
            <div key={i} className="flex w-full flex-col gap-[.5rem]">
              <div className="flex w-full items-center gap-[2rem] px-[.5rem]">
                <span className="text-[1.2rem] font-medium uppercase">John Doe</span>
                <div className="flex gap-[1rem]">
                  {[...Array(5).fill(0)].map((_, idx) => (
                    <Star key={i} size={20} color="orange" fill={idx <= review.starCount ? "orange" : "none"} />
                  ))}
                </div>
              </div>
              <div className="min-h-[10rem] w-full rounded-md bg-white p-[1rem] shadow-md">
                <p className="text-[1.3rem] font-medium">{review.text}</p>
              </div>
            </div>
          ))}
          {reviews.length === 0 && (
            <div className="flex w-full items-center justify-center">
              <h1 className="text-[1.5rem] font-light uppercase tracking-wider text-gray-500">No reviews yet.</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
