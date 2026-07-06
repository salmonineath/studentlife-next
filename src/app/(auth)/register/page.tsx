import { redirect } from "next/navigation";
import ComingSoon from "@/shared/components/comingsoon";

// const REGISTER_URL = "http://localhost:";
const DUMMYURL = process.env.NEXT_PUBLIC_URL

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
  if (DUMMYURL && (await isReachable(DUMMYURL))) {
    redirect(DUMMYURL);
  }

  return <>
    <ComingSoon/>
  </>;
}