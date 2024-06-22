import Card from "@/app/components/Card";
import Link from "next/link";
export default function ArchivedNoitifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
