"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DashboardDropdown from "./DashboardDropdown";
import { AnimatePresence } from "framer-motion";

interface Props {
  isUserAuth: boolean;
}

export default function AuthButton({ isUserAuth }: Props) {
  const router = useRouter();
  const [isDropdownOpen, setDropdown] = useState(false);

  function onButtonClick() {
    if (isUserAuth) {
      setDropdown(!isDropdownOpen);
    } else {
      router.push("/auth/login");
    }
  }

  return (
    <div className="relative">
      <button
        onClick={onButtonClick}
        className={`h-[3rem] ${isUserAuth ? "w-[12rem]" : "w-[8rem]"} truncate rounded-lg ${isDropdownOpen && "rounded-b-none"} bg-white px-[1rem] text-[1.3rem] font-medium shadow-md`}
      >
        {isUserAuth ? "Dashboard" : "Sign In"}
      </button>
      <AnimatePresence>{isDropdownOpen && isUserAuth && <DashboardDropdown />}</AnimatePresence>
    </div>
  );
}
