import { Star } from "lucide-react";
import ReviewActions from "./ReviewActions";

interface Props {
  roomId: string;
  userId: string | undefined;
  review: RoomReview;
}

export default async function ReviewContainer({ userId, review, roomId }: Props) {
  return (
    <div className="flex w-full flex-col gap-[1rem]">
      <div className="flex w-full items-center gap-[2rem] px-[.5rem]">
        <span className="text-[1.2rem] font-medium uppercase">John Doe</span>
        <div className="flex gap-[1rem]">
          {[...Array(5).fill(0)].map((_, idx) => (
            <Star key={idx} size={20} color="orange" fill={idx < review.starCount ? "orange" : "none"} />
          ))}
        </div>
      </div>
      <div className="relative min-h-[10rem] w-full rounded-md bg-white px-[1rem] py-[1rem] shadow-md">
        <p className="font-medium] w-[90%] text-[1.3rem]">{review.text}</p>
        {userId === review.user.id && <ReviewActions roomId={roomId} reviewId={review.id} reviewText={review.text} />}
      </div>
    </div>
  );
}
