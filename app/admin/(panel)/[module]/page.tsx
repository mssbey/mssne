import { notFound } from "next/navigation";
import { AdminCollection } from "@/components/admin/AdminCollection";
import { requireUser } from "@/lib/auth/session";
import { adminModules, listModule, moduleMeta, type AdminModule } from "@/lib/cms/admin-modules";

export default async function ModulePage({ params }: { params: Promise<{ module: string }> }) {
  const { module: candidate } = await params;
  if (!adminModules.includes(candidate as AdminModule) || ["media"].includes(candidate)) notFound();
  const moduleName = candidate as AdminModule;
  const user = await requireUser();
  if (["users", "audit"].includes(moduleName) && user.role !== "SUPER_ADMIN") notFound();
  const rows = await listModule(moduleName);
  const media = await listModule("media");
  const meta = moduleMeta[moduleName];
  return (
    <>
      <div className="admin-page-heading"><div><p>İçerik yönetimi</p><h1>{meta.title}</h1><span>{meta.description}</span></div></div>
      <AdminCollection
        module={moduleName}
        rows={rows}
        canEdit={user.role !== "VIEWER"}
        singular={meta.singular}
        media={media.filter((item) => item.status.startsWith("image/")).map((item) => ({ url: item.subtitle, title: item.title }))}
      />
    </>
  );
}
