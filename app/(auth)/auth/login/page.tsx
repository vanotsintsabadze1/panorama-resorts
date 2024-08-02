import LoginCard from "@/components/Auth/Login/LoginCard";

export default function page() {
  return (
    <main className="no-scrollbar fixed flex h-[100dvh] w-screen items-center justify-center overflow-y-scroll bg-black/80">
      <LoginCard />
    </main>
  );
}
