import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="w-full flex-1 pb-[3rem]">{children}</main>
      <Footer />
    </>
  );
}
