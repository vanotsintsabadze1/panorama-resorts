import { useEffect } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import DatePicker from "@/components/DatePicker/DatePicker";
import { ReactLenis } from "lenis/react";

interface Props {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
}

const modalAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function DateSelectorModal({ setModal, setCurrentDate }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <ReactLenis options={{ prevent: () => true }}>
      <motion.div
        onClick={() => setModal(false)}
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="fixed right-0 top-0 flex h-[100dvh] w-screen cursor-pointer items-center justify-center overflow-hidden bg-black/60"
      >
        <DatePicker setModal={setModal} setCurrentDate={setCurrentDate} />
      </motion.div>
    </ReactLenis>,
    document.body,
  );
}
