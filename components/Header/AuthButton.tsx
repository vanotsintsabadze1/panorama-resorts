"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DashboardDropdown from "./DashboardDropdown";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  isUserAuth: boolean;
  isUserAdmin: boolean;
}

export default function AuthButton({ isUserAuth, isUserAdmin }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setDropdown] = useState(false);

  useEffect(() => {
    if (isDropdownOpen) {
      setDropdown(false);
    }
  }, [pathname]);

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
      <AnimatePresence>
        {isDropdownOpen && isUserAuth && <DashboardDropdown isUserAdmin={isUserAdmin} />}
      </AnimatePresence>
    </div>
  );
}
