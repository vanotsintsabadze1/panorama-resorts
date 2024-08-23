import LoadingSpinner from "@/components/misc/LoadingSpinner";

export default function loading() {
  return (
    <div className="flex h-[100dvh] w-screen items-center justify-center">
      <LoadingSpinner width="6rem" height="6rem" color="black" />
    </div>
  );
}
