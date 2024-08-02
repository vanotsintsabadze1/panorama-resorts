"use client";
import { schema } from "@/schemas/contactSchema";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function ContactCard() {
  const formRef = useRef<HTMLFormElement>(null);

  function onSend(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current) {
      return;
    }

    const formData = new FormData(formRef.current);

    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      topic: formData.get("topic") as string,
      message: formData.get("message") as string,
    };

    const result = schema.safeParse(data);

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    toast.success("Message sent successfully!");

    formRef.current.reset();
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSend}
      className="flex w-[40rem] flex-col gap-[2.5rem] px-[2rem] md:w-[60rem] xs:w-full xs:px-[1rem]"
    >
      <div className="flex w-full flex-col gap-[.5rem]">
        <span className="text-[1.1rem] font-semibold uppercase">Full Name</span>
        <input
          type="text"
          name="fullName"
          className="h-[4rem] w-full rounded-md border border-gray-300 px-[1rem] text-[1.3rem] shadow-sm"
          placeholder="Write your name.."
        />
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <span className="text-[1.1rem] font-semibold uppercase">Email Address</span>
        <input
          type="text"
          name="email"
          className="h-[4rem] w-full rounded-md border border-gray-300 px-[1rem] text-[1.3rem] shadow-sm"
          placeholder="Write your name.."
        />
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <span className="text-[1.1rem] font-semibold uppercase">Topic</span>
        <input
          type="text"
          name="topic"
          className="h-[4rem] w-full rounded-md border border-gray-300 px-[1rem] text-[1.3rem] shadow-sm"
          placeholder="Write your name.."
        />
      </div>
      <div className="flex w-full flex-col gap-[.5rem]">
        <span className="text-[1.1rem] font-semibold uppercase">Description</span>
        <textarea
          name="message"
          className="h-[10rem] w-full overflow-scroll rounded-md border border-gray-300 p-[1rem] text-[1.3rem] shadow-sm"
          placeholder="Write your name.."
        />
      </div>
      <div className="mt-[2rem] flex w-full items-center justify-center">
        <button
          type="submit"
          className="h-[3.5rem] w-[12rem] rounded-md bg-orange-600 text-[1.3rem] font-semibold uppercase text-white shadow-sm"
        >
          Send
        </button>
      </div>
    </form>
  );
}
