import type { Metadata } from "next";
import { LegalList, LegalListItem, LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { getPublicSettings } from "@/lib/cms/settings";
import { notFound } from "next/navigation";
import { getManagedPage, getManagedPageMetadata } from "@/lib/cms/pages";

const fallbackMetadata: Metadata = {
  title: "İade Şartları | İkarus Reklam",
  description: "İkarus Reklam sipariş iptali, cayma hakkı, iade ve ayıplı ürün süreçleri.",
};

export async function generateMetadata(): Promise<Metadata> {
  return getManagedPageMetadata("iade-sartlari", fallbackMetadata);
}

export default async function IadeSartlariPage() {
  const [settings, page] = await Promise.all([getPublicSettings(), getManagedPage("iade-sartlari")]);
  if (page && (page.deletedAt || page.status !== "PUBLISHED")) notFound();
  const { contact } = settings;
  const sections: LegalSection[] = [
    {
      id: "genel-kosullar",
      title: "Genel koşullar",
      content: <><p>Bu şartlar, İkarus Reklam’dan uzaktan iletişim araçlarıyla satın alınan ürün ve hizmetler için iptal, cayma ve iade sürecini açıklar. Tüketicinin 6502 sayılı Kanun ve ilgili mevzuattan doğan zorunlu hakları saklıdır.</p></>,
    },
    {
      id: "siparis-iptali",
      title: "Sipariş iptali",
      content: <><p>Üretime henüz başlanmamış siparişler için iptal talebinizi mümkün olan en kısa sürede bize iletebilirsiniz. Tasarım onayı verilmiş, malzeme kesimi yapılmış veya kişiye özel üretime başlanmış siparişlerde iptal talebi; gerçekleşen iş, kullanılan malzeme ve ürünün kişiselleştirilme düzeyi dikkate alınarak değerlendirilir.</p></>,
    },
    {
      id: "cayma-hakki",
      title: "14 günlük cayma hakkı",
      content: <><p>İstisna kapsamında olmayan standart ürünlerde tüketici, ürünü teslim aldığı tarihten itibaren 14 gün içinde gerekçe göstermeden cayma hakkını kullanabilir. Bildirimin bu süre içinde e-posta veya başka bir kalıcı veri saklayıcısıyla yöneltilmesi yeterlidir.</p><p>Cayma bildiriminizi sipariş numarası ve iletişim bilgilerinizle <a href={`mailto:${contact.email}`}>{contact.email}</a> adresine gönderebilirsiniz.</p></>,
    },
    {
      id: "ozel-uretim",
      title: "Kişiye özel ürünler",
      content: <><p>Tüketicinin istekleri veya kişisel ihtiyaçları doğrultusunda hazırlanan; özel ölçü, renk, yazı, logo, tasarım ya da üretim özelliği taşıyan ürünlerde mevzuat gereği cayma hakkı bulunmayabilir. Neon, tabela, baskı ve ölçüye özel üretimlerde bu istisna siparişten önce açıkça belirtilir.</p><p>Bu istisna, ürünün ayıplı, hatalı veya sipariş onayına aykırı teslim edilmesi hâlindeki yasal haklarınızı ortadan kaldırmaz.</p></>,
    },
    {
      id: "iade-sureci",
      title: "İade süreci",
      content: <><LegalList><LegalListItem>Talebiniz incelendikten sonra iade adresi ve gönderim adımları tarafınıza yazılı olarak bildirilir.</LegalListItem><LegalListItem>Ürün, mümkünse orijinal ambalajı, aksesuarları ve faturasıyla; yeniden satışa uygun biçimde korunarak gönderilmelidir.</LegalListItem><LegalListItem>Cayma bildirimi sonrası ürün, yasal süre içinde belirtilen taşıyıcıya teslim edilmelidir.</LegalListItem><LegalListItem>Ön bilgilendirmede belirtilen anlaşmalı taşıyıcı kullanıldığında, yürürlükteki mevzuat çerçevesinde tüketiciden iade masrafı talep edilmez.</LegalListItem></LegalList></>,
    },
    {
      id: "hasarli-ayipli-urun",
      title: "Hasarlı veya ayıplı ürün",
      content: <><p>Pakette görünür hasar varsa teslim sırasında taşıyıcıya tutanak tutturmanızı; üründeki sorunu, ambalajı ve kargo etiketini gösteren fotoğraf veya videolarla en kısa sürede bize bildirmenizi öneririz. Bildirim süresi ne olursa olsun, tüketicinin ayıplı mala ilişkin kanuni seçimlik hakları saklıdır.</p><p>İnceleme sonucunda üretim veya teslim kaynaklı bir ayıp doğrulanırsa mevzuattaki şartlara göre ücretsiz onarım, ayıpsız misliyle değişim, bedel indirimi veya sözleşmeden dönme seçenekleri uygulanır.</p></>,
    },
    {
      id: "iade-edilemeyenler",
      title: "İade kapsamı dışında kalan durumlar",
      content: <><LegalList><LegalListItem>Onaylanan tasarım ve ölçülere uygun olarak kişiye özel üretilmiş ürünler.</LegalListItem><LegalListItem>Müşteri tarafından montajı, yapısı veya elektrik bağlantısı değiştirilmiş ürünler.</LegalListItem><LegalListItem>Kullanım talimatına aykırı işlem, darbe, sıvı teması veya hatalı elektrik tesisatı nedeniyle zarar gören ürünler.</LegalListItem><LegalListItem>Hizmetin, tüketicinin açık talebi ve onayıyla tamamen ifa edildiği mevzuattaki istisna hâlleri.</LegalListItem></LegalList><p>Ayıplı mala ilişkin zorunlu tüketici hakları bu sınırlamalardan etkilenmez.</p></>,
    },
    {
      id: "geri-odeme",
      title: "Geri ödeme",
      content: <><p>Geçerli bir cayma bildiriminin bize ulaşmasından sonra tahsil edilen bedeller, mevzuatta öngörülen süre içinde ve satın alırken kullanılan ödeme aracına uygun şekilde iade edilir. İade edilen ürünün bize veya belirtilen taşıyıcıya teslim edildiğine ilişkin belge sunulana kadar, kanunun izin verdiği ölçüde geri ödeme bekletilebilir.</p><p>Banka veya ödeme kuruluşunun bedeli hesabınıza yansıtma süresi İkarus Reklam’ın kontrolü dışında değişebilir.</p></>,
    },
  ];

  return <LegalPage eyebrow="Kolay ve açık süreç" title={page?.name || "İade Şartları"} description={page?.excerpt || "Sipariş iptali, cayma hakkı, kişiye özel üretimler ve geri ödeme adımlarını şeffaf biçimde açıklıyoruz."} updatedAt="31 Temmuz 2026" sections={sections} coverImage={page?.coverImage} additionalContent={page?.content} notice={<><strong>Önemli bilgi</strong><p>İkarus Reklam ürünlerinin önemli bir bölümü ölçü, renk, yazı veya tasarıma göre özel üretilir. Cayma hakkı istisnası varsa sipariş onayından önce ayrıca belirtilir.</p></>} />;
}
