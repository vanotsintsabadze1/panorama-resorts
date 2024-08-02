import { redirect } from "next/navigation";
import { confirmEmail } from "@/scripts/auth/confirmEmail";
import { Suspense } from "react";
import EmailConfirmationContainer from "@/components/Auth/EmailConfirmationContainer";

interface Props {
  searchParams: {
    token: string;
  };
}

export default async function page({ searchParams }: Props) {
  if (
    !searchParams ||
    !searchParams.token ||
    (searchParams && !searchParams.token)
  ) {
    return redirect("/auth/login");
  }

  if (searchParams.token) {
    const res = await confirmEmail(searchParams.token);
    return (
      <Suspense
        fallback={
          <div className="no-scrollbar flex h-screen w-full items-center justify-center text-[1.3rem] font-bold">
            Loading..
          </div>
        }
      >
        {res?.status && <EmailConfirmationContainer status={res.status} />}
      </Suspense>
    );
  }
}
