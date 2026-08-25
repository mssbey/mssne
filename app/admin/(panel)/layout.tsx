import { AdminShell } from "@/components/admin/AdminShell";
import { requireUser } from "@/lib/auth/session";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();
  return <AdminShell user={user}>{children}</AdminShell>;
}
