import Header from "@/components/Admin/Header/Header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="w-full flex-1 pb-[3rem]">{children}</main>
    </>
  );
}
