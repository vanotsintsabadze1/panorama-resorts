import LoadingSpinner from "@/components/misc/LoadingSpinner";
import { registerFieldSchema } from "@/schemas/registerFieldSchema";
import { registerUser } from "@/scripts/auth/auth";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props extends RegisterField {
  setCreds: React.Dispatch<React.SetStateAction<RegisterField>>;
}

export default function RegisterSubmitBtn({ email, password, setCreds }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  async function onRegister(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsLoading(true);

    const result = registerFieldSchema.safeParse({ email, password });

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    const res = await registerUser({ email, password });
    console.log("onRegister  res:", res?.status);

    if (res?.status === 200) {
      toast.success("Success - Check your email for confirmation");
    } else if (res?.status === 500) {
      toast.error("An error occurred on the server. Please try again later.");
    } else {
      toast.error("User already exists with that email");
    }

    setCreds({ email: "", password: "" });
    setIsLoading(false);
  }

  return (
    <button
      type="submit"
      onClick={onRegister}
      className="h-[3.5rem] w-[12rem] relative rounded-lg bg-black text-[1.3rem] font-bold text-white shadow-md"
    >
      {isLoading ? <LoadingSpinner color="gray" width="2rem" height="2rem" /> : "Register"}
    </button>
  );
}
