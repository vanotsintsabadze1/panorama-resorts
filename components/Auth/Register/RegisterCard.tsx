import Image from "next/image";
import RegisterFields from "./RegisterFields";
import GoogleLoginBtn from "../Login/GoogleLoginBtn";

export default function RegisterCard() {
  const url = process.env.API_ADDR;

  return (
    <div className="flex w-[40rem] flex-col items-center rounded-lg bg-white py-[2rem] shadow-md xs:w-[30rem]">
      <div className="relative h-[1.2rem] w-[14rem]">
        <Image src="/images/logos/logo_black_md.webp" fill alt="company-logo" />
      </div>
      <div className="mt-[2rem] flex w-full flex-col items-center gap-[1rem]">
        <h1 className="text-[2rem] font-semibold">Register</h1>
        <p className="max-w-[30rem] text-center text-[1.1rem] font-medium">Using social connection</p>
      </div>
      <canvas className="my-[2rem] h-[.1rem] w-[70%] bg-gray-300" />
      <div className="flex w-full items-center justify-center gap-[.5rem]">
        <GoogleLoginBtn url={url as string} />
      </div>
      <div className="mt-[2rem] flex w-full justify-center">
        <p className="text-[1.2rem] font-medium">OR</p>
      </div>
      <RegisterFields />
    </div>
  );
}
