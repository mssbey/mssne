import { MediaLibrary } from "@/components/admin/MediaLibrary";
import { requireUser } from "@/lib/auth/session";
import { listModule } from "@/lib/cms/admin-modules";

export default async function MediaPage() {
  const user = await requireUser();
  const rows = await listModule("media");
  return (
    <>
      <div className="admin-page-heading"><div><p>Dosya yönetimi</p><h1>Medya kütüphanesi</h1><span>Görselleri ve belgeleri güvenli biçimde yükleyin, URL’lerini içeriklerde kullanın.</span></div></div>
      <MediaLibrary rows={rows} canEdit={user.role !== "VIEWER"} />
    </>
  );
}
