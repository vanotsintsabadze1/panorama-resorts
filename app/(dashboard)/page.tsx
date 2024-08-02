import AboutUs from "@/components/Hero/AboutUs";
import Benefits from "@/components/Hero/Benefits";
import ContactUs from "@/components/Hero/ContactUs";
import GuestReviews from "@/components/Hero/GuestReviews";
import Introduction from "@/components/Hero/Introduction";
import Showcase from "@/components/Hero/Showcase";

export default function Home() {
  return (
    <>
      <Introduction />
      <AboutUs />
      <Benefits />
      <Showcase />
      <GuestReviews />
      <ContactUs />
    </>
  );
}
