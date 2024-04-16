import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div>
      <p>Dashboard page (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
