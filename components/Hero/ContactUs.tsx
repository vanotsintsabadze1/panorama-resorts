import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import ContactUsBtn from "./ContactUsBtn";

export default function ContactUs() {
  return (
    <section className="my-[5rem] flex w-full flex-col items-center gap-y-[6rem] px-[2rem] py-[2rem] text-center text-[1.5rem] font-medium">
      <div className="flex w-full items-center justify-center">
        <h4 className="text-[2.8rem] font-semibold">Contact our team</h4>
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-x-[6rem] gap-y-[3rem]">
        <div className="flex flex-col items-center gap-[2rem]">
          <MapPin size={100} className="text-orange-800" />
          <div className="flex flex-col gap-[1rem]">
            <p>
              We're located in <b>Lorem, ipsum dolor</b>.
            </p>
            <p>Pay us a visit and enjoy the stay!</p>
            <Link href="/" className="text-[1.3rem] text-blue-600 underline underline-offset-2">
              Find us on the maps
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[2rem]">
          <Phone size={100} className="text-orange-800" />
          <div className="flex flex-col gap-[1rem]">
            <p>
              Contact our hotline <b>(+542) 021 943 221</b>
            </p>
            <p className="max-w-[35rem] leading-[2.5rem]">
              Our line is accessible for 24/7 and we offer you the best support there ever is.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[2rem]">
          <Mail size={100} className="text-orange-800" />
          <div className="flex flex-col gap-[1rem]">
            <p>
              Email us at <b>support@pr.com</b>
            </p>
            <p className="max-w-[35rem] leading-[2.5rem]">
              We'll get at you as fast as we can and give you a thorough help with your inquiries.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-[3rem]">
        <p className="max-w-[45rem] text-[1.8rem] font-semibold">Or use a quick template to contact our team</p>
        <ContactUsBtn />
      </div>
    </section>
  );
}
