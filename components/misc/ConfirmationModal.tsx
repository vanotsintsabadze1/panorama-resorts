import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const divAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface Props {
  callback: () => void;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ConfirmationModal({ callback, setModal }: Props) {
  function onConfirmation() {
    callback();
    setModal(false);
  }

  function onCancel() {
    setModal(false);
  }

  return createPortal(
    <motion.div
      className="fixed flex h-[100dvh] w-screen items-center justify-center bg-black/60"
      variants={divAnimations}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="flex flex-col items-center gap-[2rem] rounded-[1.5rem] bg-white px-[3rem] py-[2rem] shadow-md">
        <span className="text-[1.6rem] font-semibold">Are you sure?</span>
        <div className="flex items-center justify-center gap-[2rem]">
          <button
            onClick={onConfirmation}
            className="font h-[3.2rem] w-[10rem] rounded-[1rem] bg-orange-600 text-[1.3rem] font-bold text-white"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="h-[3.2rem] w-[10rem] rounded-[1rem] border border-orange-600 text-[1.3rem] font-bold"
          >
            No
          </button>
        </div>
      </div>
    </motion.div>,
    document.body,
  );
}
