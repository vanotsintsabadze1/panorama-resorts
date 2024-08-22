import ReviewCreation from "./ReviewCreation";
import ReviewContainer from "./ReviewContainer";

interface Props {
  roomId: string;
  reviews: RoomReview[] | null;
  canReview: boolean;
  userId: string | undefined;
}

export default function ReviewsWrapper({ roomId, reviews, userId, canReview }: Props) {
  return (
    <section className="mb-[1rem] mt-[5rem] flex w-full flex-col items-center">
      <div className="flex w-full flex-col gap-[2rem] px-[2rem] md:w-[60rem] lg:w-[100rem]">
        <h1 className="text-[3rem] font-medium text-slate-800">Reviews</h1>
        <canvas className="h-[.1rem] w-[90%] bg-black/10" />
        {canReview && <ReviewCreation roomId={roomId} />}
        <div className="flex w-full flex-col gap-[4rem]">
          {reviews &&
            reviews.map((review, i) => <ReviewContainer userId={userId} roomId={roomId} key={i} review={review} />)}
          {reviews && reviews.length === 0 && (
            <div className="flex w-full items-center justify-center">
              <h1 className="text-[1.5rem] font-light uppercase tracking-wider text-gray-500">No reviews yet.</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
