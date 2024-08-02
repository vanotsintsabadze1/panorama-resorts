import { logoutUser } from "@/scripts/auth/auth";
import { motion } from "framer-motion";

const divAnimation = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 1 },
};

export default function DashboardDropdown() {
  function onLogout() {
    logoutUser();
  }

  return (
    <motion.div
      variants={divAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute left-0 flex w-full flex-col items-center rounded-b-lg bg-white text-[1.3rem] font-medium"
    >
      <button className="h-[4rem] w-full duration-150 ease-in-out hover:bg-gray-300/60">Settings</button>
      <button className="h-[4rem] w-full duration-150 ease-in-out hover:bg-gray-300/60">Admin</button>
      <button className="h-[4rem] w-full duration-150 ease-in-out hover:bg-gray-300/60" onClick={onLogout}>
        Log Out
      </button>
    </motion.div>
  );
}
