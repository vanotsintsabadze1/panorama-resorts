import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center px-[1rem] py-[2rem]">
      <div className="flex w-[38rem] items-center justify-center gap-[3rem] rounded-[3rem] border border-gray-300 p-[2rem] shadow-2xl shadow-orange-800/30 md:w-auto xs:w-full">
        <Navigation />
      </div>
    </header>
  );
}
