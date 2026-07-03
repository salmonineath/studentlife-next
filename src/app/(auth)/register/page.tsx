import { redirect } from "next/navigation";
import ComingSoon from "@/shared/components/comingsoon";

const REGISTER_URL = "http://localhost:";

async function isReachable(url: string) {
  try {
    await fetch(url, {
      method: "HEAD",
      cache: "no-store",
      signal: AbortSignal.timeout(3000),
    });
    return true;
  } catch {
    return false;
  }
}

export default async function Register() {
  if (await isReachable(REGISTER_URL)) {
    redirect(REGISTER_URL);
  }

  return <>
    <ComingSoon/>
  </>;
}
