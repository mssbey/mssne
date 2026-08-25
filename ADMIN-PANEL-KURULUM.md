# İkarus Reklam Yönetim Paneli

Bu proje, mevcut Next.js vitrini korunarak gerçek veritabanı kullanan bir içerik yönetim sistemiyle genişletildi. Yönetim paneli `/admin` adresindedir; oturum açma sayfası `/admin/login` adresinde çalışır.

## Teknoloji

- Next.js 16.2.11 App Router ve React 19
- TypeScript strict mode
- Prisma ORM 7.9
- Yerel ve tek sunuculu kurulum için SQLite
- bcrypt (12 tur) parola hashleme
- Veritabanında tutulan, iptal edilebilir opaque session
- Zod sunucu doğrulaması
- Vitest

SQLite sıfır bağımlılıkla yerel kurulum sağlamak için seçildi. Prisma modelleri PostgreSQL’e taşınabilir. Yüksek trafikli veya birden fazla uygulama instance’ı kullanan üretim ortamında `provider = "postgresql"` ve `@prisma/adapter-pg` kullanılması önerilir.

## İlk kurulum

Prisma CLI için Node.js 22 LTS önerilir. Uygulama ve Next.js derlemesi Node.js 24 üzerinde de doğrulanmıştır; ancak bu ortamda Prisma’nın migrasyon şema motoru Node.js 24 ile çalışmadığı için migrasyon komutlarını Node.js 22 ile çalıştırmak gerekir.

```powershell
Copy-Item .env.example .env
npm install
npx prisma migrate deploy
npx prisma db seed
npm run dev
```

Yeni bir geliştirme migrasyonu Node.js 24 yüklü bir makinede üretilecekse:

```powershell
npx -p node@22 node node_modules/prisma/build/index.js migrate dev --name degisiklik-adi
```

## İlk yönetici

İlk yönetici bilgileri koda yazılmaz. `.env` içinde seed çalıştırılmadan önce aşağıdaki değişkenleri doldurun:

```dotenv
INITIAL_ADMIN_NAME="Site Yöneticisi"
INITIAL_ADMIN_EMAIL="admin@alanadiniz.com"
INITIAL_ADMIN_PASSWORD="en-az-12-karakter-guclu-bir-sifre"
```

Ardından:

```powershell
npx prisma db seed
```

Seed mevcut yöneticiyi veya içeriği ezmez. İlk yönetici oluşturulduktan sonra `INITIAL_ADMIN_PASSWORD` değerini production ortam değişkenlerinden kaldırın.

## Environment değişkenleri

| Değişken | Açıklama |
|---|---|
| `DATABASE_URL` | Varsayılan `file:./dev.db` |
| `INITIAL_ADMIN_NAME` | Seed ile oluşturulacak ilk yönetici adı |
| `INITIAL_ADMIN_EMAIL` | İlk yönetici e-postası |
| `INITIAL_ADMIN_PASSWORD` | En az 12 karakterlik ilk şifre |
| `NEXT_PUBLIC_SITE_URL` | Canonical, sitemap ve metadata ana adresi |
| `SESSION_HOURS` | Beni hatırla seçilmezse session süresi |
| `UPLOAD_MAX_MB` | Tek dosya yükleme limiti |

Gerçek parola, SMTP, Cloudinary/S3 veya API anahtarı repoya eklenmemelidir.

## Roller

- `SUPER_ADMIN`: bütün içerikler, site ayarları, yöneticiler, audit log ve sistem araçları.
- `EDITOR`: hizmet, proje, blog, sayfa, referans, yorum, menü, medya ve talepler.
- `VIEWER`: yalnızca okuma.

Yetki yalnızca arayüzde gizlenmez; her Server Action ve yönetim API’si sunucuda session/rol doğrulaması yapar.

## Yönetim rotaları

- `/admin`: gerçek verilerden dashboard istatistikleri
- `/admin/homepage`: ana sayfa hero düzenleyici
- `/admin/services`: hizmet CRUD, taslak/yayın ve vitrin durumu
- `/admin/projects`: proje CRUD
- `/admin/promotions`: promosyon kategorileri, ürünler, kapak görselleri ve çoklu ürün galerileri
- `/admin/blog`: blog CRUD
- `/admin/pages`: özel ve yasal sayfa CRUD
- `/admin/references`: referans yönetimi
- `/admin/testimonials`: müşteri yorumları
- `/admin/menus`: header/footer menü öğeleri
- `/admin/media`: mevcut site görsellerini görüntüleme, doğrulamalı medya yükleme ve URL kopyalama
- `/admin/contacts`: iletişim talepleri ve durum akışı
- `/admin/settings`: marka, iletişim, sosyal medya, SEO ve vitrin renkleri
- `/admin/users`: yönetici ve rol yönetimi
- `/admin/audit`: kritik işlem kayıtları
- `/admin/tools`: JSON yedek, CSV talep aktarımı, cache/sitemap yenileme ve sistem bilgisi

Panel responsive sidebar/drawer, modal formlar, boş durumlar, loading durumları, onay akışı ve pembe kurumsal tema içerir. `mssbey` kredileri yalnızca görsel geliştirici kredisi olarak bulunur; link, takip veya veri aktarımı içermez.

## Veritabanı tabloları

`User`, `Session`, `LoginAttempt`, `SiteSetting`, `Page`, `PageSection`, `Service`, `Project`, `ProjectCategory`, `ProjectImage`, `BlogPost`, `BlogCategory`, `PromotionCategory`, `PromotionProduct`, `PromotionImage`, `Reference`, `Testimonial`, `Media`, `Menu`, `MenuItem`, `ContactSubmission`, `ContactNote` ve `AuditLog`.

İçerik modellerinde yayın durumu, sıralama, zaman damgaları ve gerekli yerlerde soft delete bulunur. Mevcut hizmetler seed sırasında `lib/services.ts` kaynağından veritabanına taşınır.

## Güvenlik

- Parolalar bcrypt ile hashlenir.
- Session token tarayıcıya yalnızca `HttpOnly`, `SameSite=Strict` cookie olarak verilir; veritabanında tokenın yalnızca SHA-256 özeti tutulur.
- Session localStorage’a yazılmaz ve çıkışta veritabanından iptal edilir.
- Proxy hızlı yönlendirme yapar; gerçek session ve rol kontrolü veri erişim katmanında yeniden yapılır.
- Server Action isteklerinde origin/host eşleşmesi kontrol edilir.
- Giriş, IP + e-posta başına 15 dakikada 5 başarısız denemeyle sınırlandırılır.
- İletişim formunda honeypot, Zod doğrulaması ve IP başına rate limit vardır.
- Medya yüklemede rol, boyut, izinli MIME, güvenli rastgele dosya adı ve dosya magic-byte imzası kontrol edilir.
- Audit log parola, token, secret ve API key alanlarını otomatik maskeler.
- Taslak içerikler public sorgularda yayınlanmaz.

## Dinamik vitrin

- Site metadata, marka, tema, iletişim, sosyal medya ve footer veritabanından okunur.
- Header ve footer menüleri veritabanından gelir.
- Ana sayfa hero, müşteri yorumları ve blog kartları veritabanına bağlıdır.
- Hizmet liste/detay sayfaları veritabanından okunur ve eski içerik için güvenli fallback kullanır.
- Promosyon kategori, ürün ve ürün galerileri veritabanından okunur; ürünlerin ayrı detay sayfaları vardır.
- Blog, proje ve özel sayfa public rotaları yalnızca `PUBLISHED` kayıtları gösterir.
- Ana sayfa, standart sayfalar ve bütün içerik türlerindeki görseller medya kütüphanesinden görsel seçiciyle atanabilir.
- İletişim formu gerçek talepleri `ContactSubmission` tablosuna yazar.
- `sitemap.xml` ve `robots.txt` dinamik olarak oluşturulur.
- Dinamik Service, Article, Breadcrumb ve Organization metadata/şemaları mevcut sayfalarda üretilir.

## Medya depolama

Varsayılan yükleme dizini `public/uploads` klasörüdür. Bu çözüm tek sunuculu ve kalıcı diskli kurulumlar içindir. Vercel gibi ephemeral dosya sistemi kullanan üretim ortamında aynı doğrulama katmanı korunarak S3 veya Cloudinary adaptörü kullanılmalıdır.

Seed çalıştığında `public` altındaki mevcut raster görseller medya kütüphanesine kaydedilir. Dosyalar kopyalanmaz; var olan public URL’leri kullanılır. Böylece eski 427 görsel de panelde aranabilir, önizlenebilir ve yeniden seçilebilir.

## Yedekleme

`/admin/tools` üzerinden:

- Hassas kullanıcı/session verileri hariç tam içerik JSON yedeği
- İletişim talepleri UTF-8 CSV
- Cache ve sitemap yenileme

SQLite veritabanının fiziksel yedeği için uygulama yazma trafiği durdurulduktan sonra `dev.db` dosyası güvenli bir yedek konumuna kopyalanabilir.

## Doğrulama

Teslim sırasında aşağıdaki komutlar başarılı çalıştırıldı:

```powershell
npm test
npx tsc --noEmit
npm run lint -- --no-cache
npm run build
```

Üretim derlemesi 98 rota/sayfayı başarıyla oluşturdu. Ayrıca çalışan sunucuda gerçek bcrypt login + HttpOnly cookie + dashboard oturumu, ana sayfa, hizmetler, sitemap, yetkisiz admin yönlendirmesi, yetkisiz medya API engeli, iletişim formu ve Next Image optimizasyonu HTTP smoke-testleri yapıldı. Test yöneticisi ve test talebi doğrulama sonrasında veritabanından kaldırıldı.
