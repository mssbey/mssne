import type { Metadata } from "next";
import { LegalList, LegalListItem, LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { getPublicSettings } from "@/lib/cms/settings";
import { notFound } from "next/navigation";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";

const fallbackMetadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi | İkarus Reklam",
  description: "İkarus Reklam mesafeli satış, sipariş, teslimat, cayma ve uyuşmazlık koşulları.",
};

export async function generateMetadata(): Promise<Metadata> {
  return getManagedPageMetadata("satis-sozlesmesi", fallbackMetadata);
}

export default async function SatisSozlesmesiPage() {
  const [settings, page] = await Promise.all([getPublicSettings(), getManagedPage("satis-sozlesmesi")]);
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();
  const { brand, contact } = settings;
  const sections: LegalSection[] = [
    {
      id: "taraflar",
      title: "Taraflar",
      content: <><p>Bu sözleşme, aşağıda bilgileri bulunan satıcı ile teklif veya sipariş onayında bilgileri yer alan alıcı arasında elektronik ortamda kurulur.</p><div className="legal-info-grid"><div><span>Satıcı / sağlayıcı</span><strong>{brand.siteName}</strong></div><div><span>Adres</span><strong>{contact.address}</strong></div><div><span>Telefon</span><a href={`tel:${contact.phone}`}>{contact.phone}</a></div><div><span>E-posta</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div></div><p>Alıcının adı, iletişim bilgileri, teslimat ve fatura adresi; onaylanan teklif, sipariş formu veya kalıcı veri saklayıcısıyla iletilen sipariş özetinde yer alır.</p></>,
    },
    {
      id: "konu-ve-kapsam",
      title: "Sözleşmenin konusu",
      content: <><p>Sözleşmenin konusu; alıcının elektronik ortamda sipariş verdiği ürün veya hizmetin satışı, üretimi, teslimi ve varsa montajına ilişkin tarafların hak ve yükümlülükleridir. 6502 sayılı Tüketicinin Korunması Hakkında Kanun, Mesafeli Sözleşmeler Yönetmeliği ve diğer ilgili mevzuat uygulanır.</p></>,
    },
    {
      id: "urun-ve-fiyat",
      title: "Ürün, tasarım ve toplam bedel",
      content: <><p>Ürünün türü, ölçüsü, rengi, adedi, tasarım görseli, birim ve toplam fiyatı, vergiler, kargo, montaj ve varsa diğer masraflar sipariş özelindeki teklif veya ön bilgilendirme formunda gösterilir. Bu belgeler sözleşmenin ayrılmaz parçasıdır.</p><p>Kişiye özel üretimlerde alıcının yazılı tasarım ve ölçü onayı üretim talimatı sayılır. Onay sonrasında talep edilen değişiklikler ek ücret ve teslim süresi doğurabilir.</p></>,
    },
    {
      id: "kurulus-ve-odeme",
      title: "Sözleşmenin kurulması ve ödeme",
      content: <><p>Alıcı; ürünün temel nitelikleri, toplam bedel, teslimat ve cayma koşulları hakkında önceden bilgilendirildiğini teyit edip ödeme yükümlülüğü doğuran siparişi onayladığında sözleşme kurulur. Ödeme yöntemi ve planı sipariş özetinde belirtilir.</p><p>Ödemenin banka veya ödeme kuruluşu tarafından reddedilmesi, iptal edilmesi ya da satıcıya ulaşmaması hâlinde sipariş işleme alınmayabilir.</p></>,
    },
    {
      id: "uretim-ve-teslimat",
      title: "Üretim ve teslimat",
      content: <><LegalList><LegalListItem>Tahmini üretim ve teslim süresi sipariş onayında bildirilir; özel üretimlerde süre tasarım onayından sonra başlar.</LegalListItem><LegalListItem>Teslimat, alıcının bildirdiği adrese ve sipariş özetinde belirtilen yöntemle yapılır.</LegalListItem><LegalListItem>Alıcı, teslimat bilgilerinin doğru ve eksiksiz olmasından sorumludur.</LegalListItem><LegalListItem>Öngörülemeyen tedarik, taşıma veya mücbir sebep durumlarında alıcı gecikmeksizin bilgilendirilir ve yasal seçim hakları sunulur.</LegalListItem></LegalList></>,
    },
    {
      id: "teslim-kontrolu",
      title: "Teslim kontrolü ve montaj",
      content: <><p>Alıcının ürünü teslim alırken ambalajı kontrol etmesi, görünür taşıma hasarında tutanak düzenletmesi ve durumu fotoğraflarla bildirmesi önerilir. Montaj gerektiren ürünlerde ürünle verilen talimatlara, elektrik güvenliği kurallarına ve gerektiğinde yetkili uzman desteğine uyulmalıdır.</p><p>Teslim tutanağı bulunmaması tüketicinin ayıplı mala ilişkin zorunlu haklarını ortadan kaldırmaz.</p></>,
    },
    {
      id: "cayma-hakki",
      title: "Cayma hakkı",
      content: <><p>Alıcı tüketici ise, istisna kapsamında olmayan ürünlerde teslimden itibaren 14 gün içinde gerekçe göstermeksizin cayma hakkını kullanabilir. Hizmet sözleşmelerinde süre sözleşmenin kurulduğu gün başlar. Bildirim <a href={`mailto:${contact.email}`}>{contact.email}</a> adresine veya kalıcı veri saklayıcısı niteliğindeki başka bir iletişim kanalına yöneltilebilir.</p><p>Cayma, iade gönderimi ve geri ödeme ayrıntıları <a href="/iade-sartlari">İade Şartları</a> sayfasında açıklanmıştır.</p></>,
    },
    {
      id: "cayma-istisnalari",
      title: "Cayma hakkı istisnaları",
      content: <><p>Özel ölçü, yazı, logo, renk veya tasarımla alıcının kişisel ihtiyaçları doğrultusunda hazırlanan ürünler başta olmak üzere Mesafeli Sözleşmeler Yönetmeliği’nde sayılan hâllerde cayma hakkı kullanılamaz. Bu istisna, ayıplı veya siparişe aykırı ürünlere ilişkin hakları sınırlamaz.</p></>,
    },
    {
      id: "ayipli-urun",
      title: "Ayıplı ürün ve garanti",
      content: <><p>Ürünün sözleşmede kararlaştırılan niteliklere uygun olmaması hâlinde alıcı, kanundaki şartlar çerçevesinde sözleşmeden dönme, bedel indirimi, ücretsiz onarım veya ayıpsız misliyle değişim haklarından birini kullanabilir. Ürüne özel garanti kapsamı ve kullanım koşulları sipariş belgelerinde ayrıca belirtilir.</p></>,
    },
    {
      id: "fikri-haklar",
      title: "Tasarım ve fikri haklar",
      content: <><p>Alıcı, üretimde kullanılmak üzere ilettiği logo, metin, görsel ve diğer içerikleri kullanma hakkına sahip olduğunu kabul eder. Üçüncü kişilerin haklarını ihlal eden içeriklerden alıcı sorumludur. İkarus Reklam’ın özgün çizim, üretim dosyası ve teknik çözüm hakları, aksi yazılı olarak kararlaştırılmadıkça devredilmiş sayılmaz.</p><p>Ürünün referans olarak paylaşılması, müşteri veya marka bilgisi görünüyorsa ayrıca izin alınmasına bağlıdır.</p></>,
    },
    {
      id: "uyusmazlik",
      title: "Başvuru ve uyuşmazlıklar",
      content: <><p>Talep ve şikâyetlerinizi öncelikle <a href={`mailto:${contact.email}`}>{contact.email}</a> adresine veya <a href={`tel:${contact.phone}`}>{contact.phone}</a> numarasına iletebilirsiniz. Tüketiciler, yürürlükteki parasal sınırlar ve yetki kuralları çerçevesinde Tüketici Hakem Heyetlerine veya Tüketici Mahkemelerine başvurabilir.</p><p>Sözleşmenin herhangi bir hükmünün geçersiz olması diğer hükümlerin geçerliliğini etkilemez. Emredici tüketici mevzuatı hükümleri her durumda saklıdır.</p></>,
    },
  ];

  return <LegalPage eyebrow="Sipariş ve hizmet koşulları" title={page?.name || "Mesafeli Satış Sözleşmesi"} description={page?.excerpt || "Tekliften üretime, teslimattan cayma hakkına kadar uzaktan satış sürecinin temel koşullarını burada bulabilirsiniz."} updatedAt="31 Temmuz 2026" sections={sections} coverImage={page?.coverImage} additionalContent={page?.content} notice={<><strong>Siparişe özel bilgiler esastır.</strong><p>Ürün, ölçü, tasarım, fiyat ve teslim süresi gibi değişken bilgiler onaylanan teklif veya sipariş özetinde yer alır ve bu metnin ayrılmaz parçasıdır.</p></>} />;
}
