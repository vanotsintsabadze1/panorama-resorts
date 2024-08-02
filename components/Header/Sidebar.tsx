import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import Navigation from "./Navigation";
import { X } from "lucide-react";
import React from "react";

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
  isSideBarOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isSideBarOpen, setModal }: Props) {
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
        className="flex w-full flex-col gap-[.5rem] px-[1rem] py-[3rem]"
      >
        <div className="flex w-full items-center justify-end">
          <button onClick={closeSidebar}>
            <X color="gray" size={30} />
          </button>
        </div>
        <Navigation className="flex w-full flex-col items-end gap-[5rem] px-[1rem] py-[3rem] text-[1.8rem] font-light text-white" />
      </motion.div>
    </motion.div>,
    document.body,
  );
}
