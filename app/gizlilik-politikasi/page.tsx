import type { Metadata } from "next";
import { LegalList, LegalListItem, LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { getPublicSettings } from "@/lib/cms/settings";
import { notFound } from "next/navigation";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";

const fallbackMetadata: Metadata = {
  title: "Gizlilik Politikası | İkarus Reklam",
  description: "İkarus Reklam kişisel verilerin işlenmesi, korunması ve ilgili kişi hakları hakkında gizlilik politikası.",
};

export async function generateMetadata(): Promise<Metadata> {
  return getManagedPageMetadata("gizlilik-politikasi", fallbackMetadata);
}

export default async function GizlilikPolitikasiPage() {
  const [settings, page] = await Promise.all([getPublicSettings(), getManagedPage("gizlilik-politikasi")]);
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();
  const { brand, contact } = settings;
  const sections: LegalSection[] = [
    {
      id: "veri-sorumlusu",
      title: "Veri sorumlusu ve kapsam",
      content: <><p>Bu politika; web sitemizi ziyaret ettiğinizde, teklif istediğinizde, bizimle iletişime geçtiğinizde veya bir sipariş ilişkisi kurduğunuzda kişisel verilerinizin nasıl işlendiğini açıklar.</p><div className="legal-info-grid"><div><span>Veri sorumlusu</span><strong>{brand.siteName}</strong></div><div><span>E-posta</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div><span>Adres</span><strong>{contact.address}</strong></div><div><span>Telefon</span><a href={`tel:${contact.phone}`}>{contact.phone}</a></div></div></>,
    },
    {
      id: "islenen-veriler",
      title: "İşlediğimiz veriler",
      content: <><p>Yalnızca sunduğumuz hizmet için gerekli olan ve bize doğrudan ilettiğiniz ya da site kullanımı sırasında teknik olarak oluşan verileri işleriz.</p><LegalList><LegalListItem>Ad, soyad ve gerektiğinde fatura için gerekli kimlik bilgileri.</LegalListItem><LegalListItem>Telefon, e-posta, teslimat ve fatura adresi gibi iletişim bilgileri.</LegalListItem><LegalListItem>Teklif, ölçü, tasarım, ürün tercihi, sipariş ve teslimat bilgileri.</LegalListItem><LegalListItem>Ödeme yöntemi, tahsilat ve fatura kayıtları. Kart bilgileri doğrudan ödeme hizmeti sağlayıcısı tarafından işleniyorsa İkarus Reklam tarafından saklanmaz.</LegalListItem><LegalListItem>IP adresi, erişim zamanı, tarayıcı ve güvenlik kayıtları gibi işlem güvenliği verileri.</LegalListItem><LegalListItem>İletişim tercihleri ile talep, öneri ve şikâyet içerikleri.</LegalListItem></LegalList></>,
    },
    {
      id: "amac-ve-hukuki-sebep",
      title: "Amaç ve hukuki sebepler",
      content: <><p>Veriler; teklif hazırlanması, siparişin kurulması ve ifası, üretim ile teslimatın yürütülmesi, müşteri desteği, finans ve muhasebe işlemleri, yasal yükümlülüklerin yerine getirilmesi ve bilgi güvenliğinin sağlanması amaçlarıyla işlenir.</p><p>İşleme faaliyetleri; KVKK’nın 5. maddesindeki sözleşmenin kurulması veya ifası, veri sorumlusunun hukuki yükümlülüğü, bir hakkın tesisi, kullanılması ya da korunması ve temel haklarınıza zarar vermemek kaydıyla meşru menfaat hukuki sebeplerine dayanır. Ticari elektronik ileti veya zorunlu olmayan pazarlama faaliyeti gerektiğinde ayrıca açık rızanız alınır.</p></>,
    },
    {
      id: "toplama-yontemi",
      title: "Verilerin toplanma yöntemi",
      content: <><p>Veriler; site formları, üyelik ve sepet alanları, telefon, e-posta, WhatsApp, sosyal medya mesajları, yüz yüze görüşmeler, teklif ve sipariş belgeleri ile site üzerinde otomatik oluşan teknik kayıtlar aracılığıyla elektronik veya fiziki ortamda toplanabilir.</p></>,
    },
    {
      id: "aktarim",
      title: "Verilerin paylaşılması",
      content: <><p>Kişisel verileriniz, yalnızca ilgili hizmetin gerektirdiği ölçüde; kargo ve lojistik firmaları, ödeme ve finans kuruluşları, muhasebe ile bilişim hizmeti sağlayıcıları, hukuki danışmanlar ve yetkili kamu kurumlarıyla paylaşılabilir.</p><p>Yurt dışına veri aktarımı gerekmesi hâlinde KVKK’nın 9. maddesindeki güncel aktarım şartları ve uygun güvenceler uygulanır. Veriler reklam amacıyla üçüncü kişilere satılmaz.</p></>,
    },
    {
      id: "saklama-guvenlik",
      title: "Saklama ve güvenlik",
      content: <><p>Veriler, işleme amacının gerektirdiği süre ve ilgili mevzuatta öngörülen yasal saklama süreleri boyunca tutulur; süre sonunda silinir, yok edilir veya anonim hâle getirilir. Yetkisiz erişim, kayıp ve kötüye kullanımı azaltmak için erişim yetkisi, kayıt takibi, yedekleme ve güncel teknik güvenlik tedbirleri uygulanır.</p></>,
    },
    {
      id: "haklariniz",
      title: "KVKK kapsamındaki haklarınız",
      content: <><p>KVKK’nın 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme; işlenmişse bilgi talep etme; amacına uygun kullanılıp kullanılmadığını öğrenme; aktarıldığı üçüncü kişileri bilme; eksik veya yanlış verilerin düzeltilmesini, şartları oluştuğunda silinmesini ya da yok edilmesini isteme; bu işlemlerin üçüncü kişilere bildirilmesini talep etme; otomatik analiz sonucuna itiraz etme ve hukuka aykırı işlem nedeniyle zararın giderilmesini isteme haklarına sahipsiniz.</p><p>Başvurunuzu kimliğinizi doğrulamaya elverişli bilgilerle birlikte <a href={`mailto:${contact.email}`}>{contact.email}</a> adresine iletebilirsiniz. Başvurular, niteliğine göre yasal süre içinde sonuçlandırılır.</p></>,
    },
    {
      id: "cerezler-degisiklikler",
      title: "Çerezler, bağlantılar ve değişiklikler",
      content: <><p>Site, temel işlevlerin ve güvenliğin sağlanması için gerekli teknik çerezleri veya benzer teknolojileri kullanabilir. Zorunlu olmayan analiz ve pazarlama teknolojileri kullanılması hâlinde tercihlerinizi yönetebilmeniz için gerekli bilgilendirme ve onay mekanizması sunulur.</p><p>Üçüncü taraf sitelerine verilen bağlantılar kendi gizlilik kurallarına tabidir. Bu politika, hizmet veya mevzuat değişikliklerine göre güncellenebilir; güncel metin bu sayfada yayımlanır.</p></>,
    },
  ];

  return <LegalPage eyebrow="Güven ve şeffaflık" title={page?.name || "Gizlilik Politikası"} description={page?.excerpt || "Kişisel verilerinizi hangi amaçlarla işlediğimizi, nasıl koruduğumuzu ve haklarınızı açık bir dille anlatıyoruz."} updatedAt="31 Temmuz 2026" sections={sections} coverImage={page?.coverImage} additionalContent={page?.content} notice={<><strong>Gizliliğiniz bizim için önemlidir.</strong><p>Verilerinizi yalnızca belirli, açık ve meşru amaçlarla; hizmetin gerektirdiği ölçüde işleriz.</p></>} />;
}
