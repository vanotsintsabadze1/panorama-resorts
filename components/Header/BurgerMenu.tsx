"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface Props {
  isUserLoggedIn: boolean;
  isUserAdmin: boolean;
}

export default function BurgerMenu({ isUserLoggedIn, isUserAdmin }: Props) {
  const [isSideBarOpen, setSideBar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setSideBar(false);
  }, [pathname]);

  function openSidebar() {
    setSideBar(true);
  }

  return (
    <>
      <div className="absolute right-0 top-1/2 z-50 -translate-y-1/2 lg:hidden">
        <button onClick={openSidebar}>
          <Menu color="white" size={32} />
        </button>
      </div>
      <AnimatePresence>
        {isSideBarOpen && (
          <Sidebar
            setModal={setSideBar}
            isUserAdmin={isUserAdmin}
            isUserLoggedIn={isUserLoggedIn}
          />
        )}
      </AnimatePresence>
    </>
  );
}
