import LoadingSpinner from "@/components/misc/LoadingSpinner";
import { loginUser } from "@/scripts/auth/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props extends RegisterField {
  setCreds: React.Dispatch<React.SetStateAction<RegisterField>>;
}

export default function LoginBtn({ setCreds, email, password }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setLoading(true);
    const res = await loginUser({ email, password });

    if (res?.status === 200) {
      router.push("/");
    } else if (res?.status === 500) {
      toast.error("Something went wrong. Please try again later.");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }

    setLoading(false);
  }

  return (
    <button
      type="submit"
      onClick={onLogin}
      className="relative flex h-[3.5rem] w-[12rem] items-center justify-center rounded-lg bg-black text-[1.3rem] font-bold text-white shadow-md"
    >
      {loading ? <LoadingSpinner color="gray" /> : "Login"}
    </button>
  );
}
