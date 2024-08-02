import { cookies } from "next/headers";
import AuthButton from "./AuthButton";
import BurgerMenu from "./BurgerMenu";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { getUserAuthStatus } from "@/scripts/auth/getUserAuthStatus";
import UserReservationsMarker from "./UserReservationsMarker";
import { getUserReservations } from "@/scripts/rooms/getUserReservations";

export default async function Header() {
  const token = cookies().get("user");
  const isUserAuth = token?.value ? await getUserAuthStatus(token.value) : false;
  const userReservations = await getUserReservations();

  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-center bg-primary px-[2rem]">
      <div className="flex w-full items-center justify-center py-[2.5rem] md:py-[2rem] lg:justify-between xl:max-w-[150rem]">
        <Logo />
        <BurgerMenu /> {/* only visible on mobile & tablet */}
        <div className="hidden items-center justify-center gap-[2rem] px-[2rem] lg:flex">
          {/* only visible on desktop */}
          <Navigation className="flex gap-[3rem] text-[1.2rem] font-medium uppercase text-white" />
          {userReservations && <UserReservationsMarker reservationCount={userReservations.length} />}
          <AuthButton isUserAuth={isUserAuth} />
        </div>
      </div>
    </header>
  );
}