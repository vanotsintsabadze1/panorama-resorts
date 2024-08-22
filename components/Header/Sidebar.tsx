import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import Navigation from "./Navigation";
import { User, X } from "lucide-react";
import React from "react";
import { logoutUser } from "@/scripts/auth/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const sideBarAnimation = {
  hidden: {
    width: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  visible: {
    width: "16rem",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const item = {
  hidden: { opacity: 0, transition: { duration: 0.5 } },
  visible: { opacity: 1, transition: { delay: 0.5 } },
};

interface Props {
  isUserLoggedIn: boolean;
  isUserAdmin: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isUserAdmin, isUserLoggedIn, setModal }: Props) {
  const router = useRouter();

  function closeSidebar() {
    setModal(false);
  }

  return createPortal(
    <motion.div
      variants={sideBarAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed right-0 top-0 z-40 h-screen w-[15rem] bg-primary lg:hidden"
    >
      <motion.div
        variants={item}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ ease: "easeIn" }}
        className="flex h-full w-full flex-col px-[1rem] pb-[2rem] pt-[3rem]"
      >
        <div className="flex w-full items-center justify-end">
          <button onClick={closeSidebar}>
            <X color="gray" size={30} />
          </button>
        </div>
        {!isUserLoggedIn && (
          <div className="mt-[3rem] flex w-full justify-end">
            <button
              onClick={() => router.push("/auth/login")}
              className="flex justify-center gap-[.8rem] text-[1.5rem] font-medium text-white"
            >
              <div className="flex flex-col items-end">
                Guest
                <span className="text-[1rem]">Log In</span>
              </div>
              <User size={30} color="white" />
            </button>
          </div>
        )}
        <Navigation className="flex w-full flex-col items-end gap-[5rem] px-[1rem] pt-[3rem] text-[1.8rem] font-light text-white" />
        {isUserLoggedIn && (
          <div className="mt-[5rem] flex w-full flex-col items-end justify-end gap-[5rem] px-[1rem]">
            {isUserAdmin && <Link href="/admin">Admin</Link>}
            <button onClick={() => logoutUser()}>Log Out</button>
          </div>
        )}
      </motion.div>
    </motion.div>,
    document.body,
  );
}
