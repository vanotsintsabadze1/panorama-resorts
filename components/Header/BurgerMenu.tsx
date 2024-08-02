"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function BurgerMenu() {
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
      <div className="absolute right-[1rem] top-1/2 z-50 -translate-y-1/2 lg:hidden">
        <button onClick={openSidebar}>
          <Menu color="white" size={32} />
        </button>
      </div>
      <AnimatePresence>
        {isSideBarOpen && <Sidebar isSideBarOpen={isSideBarOpen} setModal={setSideBar} />}
      </AnimatePresence>
    </>
  );
}
