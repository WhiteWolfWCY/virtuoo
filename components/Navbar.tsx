import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import ThemeToggle from "./ThemeToggle";

export default async function Navbar() {

  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()

  return (
    <div className="flex items-center p-4">
        <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        <div className="flex w-full justify-end items-center gap-2">
            <ThemeToggle />
            <UserButton afterSignOutUrl="/" />
        </div>
    </div>
  )
}
