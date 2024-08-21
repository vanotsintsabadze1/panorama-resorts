import { googleLogin } from "@/scripts/auth/auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  code: string;
}

export default function GoogleLoginWrapper({ code }: Props) {
  const router = useRouter();

  async function singleSignOnWrapper() {
    await googleLogin(code);
    router.push("/");
  }

  useEffect(() => {
    singleSignOnWrapper();
  }, []);

  return <></>;
}
