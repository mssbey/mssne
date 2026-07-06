import type { ServiceData } from "@/lib/services";

export const ACIK_HAVA: ServiceData[] = [
  // ─────────────────────────────────────────────────────────
  // 1. BILLBOARD
  // ─────────────────────────────────────────────────────────
  {
    slug: "billboard",
    navLabel: "Billboard",
    title: "Billboard Reklamcılığı",
    shortTitle: "Billboard",
    tagline: "Şehrin en görünür noktalarında markanız.",
    heroIcon: "Image",
    category: "Açık Hava Reklamları",
    color: "#FF00C8",
    basePath: "acik-hava",
    sectionLabel: "Açık Hava Reklamları",
    seo: {
      title: "Billboard Reklam Baskı ve Kiralama | Ikarus Reklam",
      description:
        "Otoyol, cadde ve AVM billboard reklam alanları için flex branda baskı, kiralama ve montaj hizmeti. Yüksek trafikli lokasyonlarda geniş kitleye ulaşan açık hava reklamcılığı.",
      keywords: [
        "billboard reklam",
        "billboard kiralama",
        "flex branda baskı",
        "otoyol billboard",
        "açık hava reklamcılığı",
        "billboard fiyatları",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Şehrin Ana Arterlerinde Kitlesel Görünürlük Sağlayan Reklam Formatı",
      paragraphs: [
        "Billboard reklamcılığı, otoyol kenarları, ana caddeler, AVM girişleri ve şehir merkezlerindeki yüksek trafikli noktalarda markanızı binlerce kişiye aynı anda ulaştıran en etkili açık hava reklam formatlarından biridir. Ikarus Reklam olarak billboard reklam alanlarında kullanılan flex branda ve mesh file baskılarını, geniş format dijital baskı makinelerimizle yüksek çözünürlükte ve solmaya dayanıklı mürekkeplerle üretiyoruz.",
        "Billboard tasarımlarında okunabilirlik, kısa mesafede geçen araç sürücülerinin bile mesajı kolayca algılayabilmesi açısından kritik önem taşır. Grafik ekibimiz, uzaktan görünürlüğü optimize eden büyük tipografi, sade kompozisyon ve marka renklerinizle uyumlu bir tasarım dili kullanarak billboard içeriğinizi hazırlar. Rüzgar yüküne dayanıklı file (mesh) branda seçenekleri, özellikle yüksek rüzgarlı bölgelerdeki büyük yüzeyli billboardlar için idealdir.",
        "İstenildiğinde billboard alanı kiralama danışmanlığı da sunarak, hedef kitlenize en uygun lokasyon ve süre seçiminde sizi yönlendiriyoruz. Baskıdan montaja, sökümden yeni kampanya baskısına kadar tüm süreci profesyonel ekiplerimizle anahtar teslim olarak yönetiyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Baskı", desc: "Geniş format dijital baskı ile solmayan, yüksek çözünürlüklü görseller." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Uzaktan okunabilirliği optimize eden billboard tasarım prensipleri." },
      { icon: "CloudRain", title: "Hava Şartlarına Dayanıklılık", desc: "Rüzgar yüküne dayanıklı file branda ve UV korumalı mürekkep." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "Standart billboard baskılarında 3-5 iş günü içinde üretim." },
      { icon: "ShieldCheck", title: "Montaj Güvenliği", desc: "Sertifikalı yüksekte çalışma ekibiyle güvenli montaj ve söküm." },
      { icon: "Headphones", title: "Lokasyon Danışmanlığı", desc: "Hedef kitlenize uygun billboard alanı seçiminde destek." },
    ],
    useCases: [
      { icon: "MapPin", label: "Otoyol Kenarı", desc: "Şehirlerarası yol billboard reklamları" },
      { icon: "Building2", label: "AVM Girişi", desc: "AVM giriş ve otopark billboard alanları" },
      { icon: "Landmark", label: "Şehir Merkezi", desc: "Cadde ve meydan billboard panoları" },
      { icon: "Warehouse", label: "Sanayi Bölgesi", desc: "Sanayi sitesi giriş billboard reklamları" },
      { icon: "Hotel", label: "Turizm Bölgesi", desc: "Turistik bölge tanıtım billboardları" },
      { icon: "Fuel", label: "Benzin İstasyonu", desc: "Yol kenarı istasyon billboard reklamları" },
    ],
    process: [
      { step: "01", icon: "Compass", title: "Lokasyon Seçimi", desc: "Hedef kitleye uygun billboard alanı belirlenir." },
      { step: "02", icon: "PenTool", title: "Tasarım", desc: "Uzaktan okunabilir billboard tasarımı hazırlanır." },
      { step: "03", icon: "Printer", title: "Baskı", desc: "Geniş format dijital baskı ile flex/mesh branda basılır." },
      { step: "04", icon: "Scissors", title: "Kesim", desc: "Billboard ölçüsüne göre hassas kesim ve kaynak yapılır." },
      { step: "05", icon: "Wrench", title: "Montaj", desc: "Yüksekte çalışma güvenliğiyle branda montajı yapılır." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Kontrol sonrası billboard yayına alınır." },
    ],
    materials: [
      { icon: "Layers", name: "Flex Branda (PVC)", desc: "Yoğun kullanılan, dayanıklı ve canlı baskı alan standart branda." },
      { icon: "Layers3", name: "Mesh (File) Branda", desc: "Rüzgar geçirgen yapısıyla büyük yüzeylerde güvenli kullanım." },
      { icon: "Droplets", name: "UV Dayanımlı Mürekkep", desc: "Güneş ışığına karşı yıllarca solmayan baskı mürekkebi." },
      { icon: "Anchor", name: "Çelik İskele / Konstrüksiyon", desc: "Billboard yapısının taşıyıcı ve güvenli iskelet sistemi." },
      { icon: "Ribbon", name: "Kaynaklı Bitiş / Yelken İpi", desc: "Brandanın çerçeveye güvenli sabitlenmesini sağlayan detaylar." },
      { icon: "Lightbulb", name: "LED Aydınlatma", desc: "Gece görünürlüğü için opsiyonel billboard aydınlatma sistemi." },
    ],
    advantages: [
      { icon: "BadgeCheck", title: "Kitlesel Görünürlük", desc: "Yüksek trafikli noktalarda binlerce kişiye aynı anda ulaşım." },
      { icon: "Recycle", title: "Yeniden Kullanılabilir Yapı", desc: "Çerçeve sistemi korunarak yalnızca branda değişimi yeterlidir." },
      { icon: "Sparkles", title: "Yüksek Etki", desc: "Büyük format, markanızı rakiplerinden çok daha görünür kılar." },
      { icon: "Timer", title: "Hızlı Kampanya Değişimi", desc: "Branda değişimiyle kampanyalar hızlıca güncellenebilir." },
      { icon: "CloudRain", title: "Dayanıklı Yapı", desc: "Her hava koşulunda aylarca bozulmadan kalabilen malzeme." },
      { icon: "Gem", title: "Prestijli Algı", desc: "Şehrin görünür noktalarında yer almak marka algısını güçlendirir." },
    ],
    gallery: [
      { icon: "Image", label: "Otoyol Billboard", alt: "Otoyol kenarında büyük ölçekli billboard reklamı" },
      { icon: "Building2", label: "AVM Billboard", alt: "AVM girişinde billboard reklam uygulaması" },
      { icon: "Moon", label: "Gece Görünümü", alt: "Gece aydınlatmalı billboard görünümü" },
      { icon: "Printer", label: "Baskı Detayı", alt: "Billboard geniş format baskı makinesi detayı" },
      { icon: "Wrench", label: "Montaj Süreci", alt: "Billboard branda montaj süreci" },
      { icon: "Layers3", label: "Mesh Branda", alt: "Rüzgar geçirgen mesh branda detayı" },
      { icon: "MapPin", label: "Şehirlerarası Yol", alt: "Şehirlerarası yol kenarı billboard uygulaması" },
      { icon: "Anchor", label: "Çelik Konstrüksiyon", alt: "Billboard çelik iskelet yapısı" },
    ],
    faq: [
      { q: "Billboard reklamı için alan kiralama hizmeti veriyor musunuz?", a: "Evet, hedef kitlenize ve bütçenize uygun billboard lokasyonu seçiminde danışmanlık hizmeti sunuyoruz." },
      { q: "Billboard baskı süresi ne kadar sürer?", a: "Tasarım onayından sonra standart ölçülerde 3-5 iş günü içinde baskı ve montaj tamamlanır." },
      { q: "Flex branda ile mesh branda arasındaki fark nedir?", a: "Flex branda daha yoğun ve canlı renkli baskı sunar; mesh (file) branda ise rüzgar geçirgen yapısıyla büyük ve yüksek rüzgarlı alanlarda tercih edilir." },
      { q: "Billboard tasarımını siz mi hazırlıyorsunuz?", a: "Evet, uzaktan okunabilirlik ilkelerine uygun billboard tasarımını grafik ekibimiz hazırlar." },
      { q: "Billboard reklamı ne kadar süre yayında kalır?", a: "Kiralama süresi genellikle aylık periyotlarla belirlenir; kampanya süresine göre esnek anlaşmalar yapılabilir." },
      { q: "Billboard montajı güvenli mi?", a: "Montaj ve söküm işlemleri, yüksekte çalışma sertifikalı uzman ekibimiz tarafından güvenlik standartlarına uygun yapılır." },
      { q: "Gece görünürlüğü için aydınlatma eklenebilir mi?", a: "Evet, billboard yapısına LED aydınlatma sistemi entegre ederek gece görünürlüğü sağlanabilir." },
      { q: "Billboard baskısı ne kadar dayanıklı?", a: "UV dayanımlı mürekkep ve kaliteli branda malzemesiyle billboard baskıları aylarca solmadan ve yıpranmadan kalabilir." },
    ],
    cta: {
      heading: "Şehrin Görünen Yüzü Markanız Olsun",
      sub: "Yüksek trafikli lokasyonlarda etkili billboard reklamı için bize ulaşın.",
      whatsappMessage: "Merhaba! Billboard reklamı hakkında bilgi ve teklif almak istiyorum.",
    },
  },

  // ─────────────────────────────────────────────────────────
  // 2. VİNİL GERME
  // ─────────────────────────────────────────────────────────
  {
    slug: "vinil-germe",
    navLabel: "Vinil Germe",
    title: "Vinil Germe",
    shortTitle: "Vinil Germe",
    tagline: "Her yüzeyi markanızın tuvaline dönüştürün.",
    heroIcon: "Palette",
    category: "Açık Hava Reklamları",
    color: "#9B5CFF",
    basePath: "acik-hava",
    sectionLabel: "Açık Hava Reklamları",
    seo: {
      title: "Vinil Germe ve Kaplama Uygulaması | Ikarus Reklam",
      description:
        "Vitrin, cam, cephe ve zemin vinil germe uygulamaları. One-way vision cam folyo, dijital baskılı vinil ve UV dayanımlı kaplama çözümleriyle mekan ve vitrin tanıtımı.",
      keywords: [
        "vinil germe",
        "vitrin vinil kaplama",
        "one way vision",
        "cam folyo",
        "dijital baskı vinil",
        "vinil kaplama fiyatları",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Vitrinden Zemine Her Yüzeyde Etkileyici Görsel Kaplama",
      paragraphs: [
        "Vinil germe, mağaza vitrinleri, cam cepheler, iç mekan duvarları ve hatta zeminlerin dijital baskılı vinil malzeme ile kaplanarak markanızın görsel kimliğine dönüştürülmesi işlemidir. Ikarus Reklam olarak, yüksek çözünürlüklü UV baskı teknolojimizle hazırladığımız vinil kaplamaları, kabarcıksız ve pürüzsüz bir yüzey elde etmek için özel germe teknikleriyle uyguluyoruz.",
        "Vitrin camlarında sıklıkla tercih edilen one-way vision (tek yönlü görüş) vinil, dışarıdan bakıldığında tam görsel etkisi sunarken, içeriden dışarısının görülebilmesine olanak tanır; bu sayede hem etkileyici bir vitrin tasarımı hem de doğal ışık kullanımı bir arada sağlanır. Mat, parlak veya buzlu cam efekti veren vinil seçenekleriyle, hem estetik hem de mahremiyet ihtiyaçlarına uygun çözümler sunuyoruz.",
        "Etkinlik standlarından mağaza içi yönlendirme grafiklerine, zemin vinillerinden büyük ölçekli cephe kaplamalarına kadar geniş bir uygulama yelpazesinde hizmet veriyoruz. Uygulama öncesi yüzey temizliği ve doğru germe tekniğiyle, vinil kaplamanın hem görsel kalitesini hem de uzun ömürlü kullanımını garanti ediyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Vinil", desc: "UV dayanımlı, kabarcık yapmayan kaliteli vinil malzeme kullanıyoruz." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Yüzeye ve mesafeye uygun optimize edilmiş görsel tasarım." },
      { icon: "Sparkles", title: "One-Way Vision", desc: "Tek yönlü görüş sağlayan özel vitrin cam vinil çözümleri." },
      { icon: "Truck", title: "Hızlı Uygulama", desc: "Standart vitrin ölçülerinde 1-2 gün içinde baskı ve montaj." },
      { icon: "ShieldCheck", title: "Kabarcıksız Germe", desc: "Özel germe tekniğiyle pürüzsüz, profesyonel görünüm." },
      { icon: "Headphones", title: "Bakım Desteği", desc: "Vinil temizliği ve olası hasar onarımında teknik destek." },
    ],
    useCases: [
      { icon: "Store", label: "Vitrin", desc: "Mağaza vitrin cam kaplama ve tanıtım" },
      { icon: "Building2", label: "Cephe", desc: "Bina cephesi geçici veya kalıcı vinil kaplama" },
      { icon: "Coffee", label: "Cafe / Restoran", desc: "İç mekan duvar ve cam vinil uygulamaları" },
      { icon: "Landmark", label: "Etkinlik Standı", desc: "Fuar ve etkinlik stant vinil kaplamaları" },
      { icon: "Hospital", label: "Sağlık", desc: "Klinik iç mekan yönlendirme vinilleri" },
      { icon: "Briefcase", label: "Ofis", desc: "Ofis cam bölme ve duvar vinil uygulamaları" },
    ],
    process: [
      { step: "01", icon: "Compass", title: "Keşif", desc: "Uygulanacak yüzey ve ölçüler yerinde incelenir." },
      { step: "02", icon: "PenTool", title: "Tasarım", desc: "Yüzeye özel görsel tasarım hazırlanır ve onaya sunulur." },
      { step: "03", icon: "Printer", title: "Baskı", desc: "UV dayanımlı mürekkeple yüksek çözünürlüklü vinil baskısı yapılır." },
      { step: "04", icon: "Scissors", title: "Kesim", desc: "Vinil, uygulama alanına göre hassas şekilde kesilir." },
      { step: "05", icon: "Wrench", title: "Germe / Uygulama", desc: "Yüzey temizliği sonrası kabarcıksız germe tekniğiyle uygulanır." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Kalite kontrolü sonrası uygulama tamamlanır." },
    ],
    materials: [
      { icon: "Layers", name: "Dijital Baskı Vinil", desc: "Tam renkli, yüksek çözünürlüklü baskıya uygun temel malzeme." },
      { icon: "Square", name: "One-Way Vision Folyo", desc: "Delikli yapısı sayesinde tek yönlü görüş sağlayan cam folyosu." },
      { icon: "Shield", name: "Mat/Parlak Laminasyon", desc: "Çizilme, nem ve UV etkisine karşı koruyucu yüzey kaplaması." },
      { icon: "Droplets", name: "Buzlu Cam Efekti Folyo", desc: "Mahremiyet sağlayan yarı şeffaf mat folyo seçeneği." },
      { icon: "Box", name: "Zemin Vinili", desc: "Yüksek trafiğe dayanıklı, kaymaz yüzeyli zemin uygulama vinili." },
      { icon: "Ribbon", name: "Kesim Folyo", desc: "Düz renk logo ve yazı uygulamaları için keskin kenarlı folyo." },
    ],
    advantages: [
      { icon: "Sparkles", title: "Etkileyici Görünüm", desc: "Geniş yüzeyleri hızlıca markanızın görsel diline dönüştürür." },
      { icon: "BadgeCheck", title: "Esnek Kullanım", desc: "Vitrin, cephe, zemin ve iç mekanda çok amaçlı uygulama imkânı." },
      { icon: "Recycle", title: "Kolay Yenileme", desc: "Kampanya değişiminde vinil kolayca sökülüp yenilenebilir." },
      { icon: "Timer", title: "Hızlı Uygulama", desc: "Standart alanlarda birkaç saat içinde tamamlanan montaj." },
      { icon: "CloudRain", title: "Dış Mekân Dayanıklılığı", desc: "UV dayanımlı malzemeyle dış cephe kullanımına da uygundur." },
      { icon: "Gem", title: "Şeffaflık Dengesi", desc: "One-way vision ile hem reklam hem doğal ışık bir arada." },
    ],
    gallery: [
      { icon: "Store", label: "Vitrin Kaplama", alt: "Mağaza vitrini one-way vision vinil kaplama" },
      { icon: "Square", label: "Cam Folyo Detay", alt: "One-way vision cam folyo yakın çekim detay" },
      { icon: "Building2", label: "Cephe Vinili", alt: "Bina cephesinde büyük ölçekli vinil kaplama" },
      { icon: "Box", label: "Zemin Vinili", alt: "Mağaza içi zemin vinil uygulaması" },
      { icon: "Wrench", label: "Germe Süreci", alt: "Vinil kabarcıksız germe uygulama süreci" },
      { icon: "Printer", label: "Baskı Detayı", alt: "Vinil dijital baskı makinesi detayı" },
      { icon: "Coffee", label: "İç Mekan Uygulaması", alt: "Cafe iç mekan duvar vinil kaplaması" },
      { icon: "Landmark", label: "Etkinlik Standı", alt: "Fuar standı vinil kaplama uygulaması" },
    ],
    faq: [
      { q: "One-way vision vinil nedir?", a: "One-way vision, küçük delikli bir folyo yapısıdır; dışarıdan bakıldığında tam görsel/reklam görünürken, içeriden dışarısı rahatlıkla görülebilir." },
      { q: "Vitrin vinili ne kadar sürede uygulanır?", a: "Standart bir vitrin ölçüsünde tasarım onayından sonra 1-2 gün içinde baskı ve uygulama tamamlanır." },
      { q: "Vinil kaplama zemin için de kullanılabilir mi?", a: "Evet, yüksek trafiğe dayanıklı ve kaymaz özel zemin vinili ile mağaza içi zemin uygulamaları yapılabilir." },
      { q: "Vinil kaplama camı zedeler mi?", a: "Hayır, doğru uygulama ve söküm tekniğiyle vinil, cam veya yüzeye zarar vermeden kaldırılabilir." },
      { q: "Vinil kaplama dış mekanda ne kadar dayanıklı?", a: "UV dayanımlı vinil ve laminasyon kullanıldığında dış mekanda ortalama 2-4 yıl solmadan kullanılabilir." },
      { q: "Kabarcık oluşmadan uygulama nasıl sağlanıyor?", a: "Yüzey öncesi detaylı temizlik ve özel germe/rakle teknikleriyle hava kabarcığı oluşmadan pürüzsüz bir yüzey elde ediyoruz." },
      { q: "Vinil kaplamayı zamanla değiştirebilir miyim?", a: "Evet, kampanya veya sezon değişikliklerinde eski vinil sökülüp yenisi kolayca uygulanabilir." },
      { q: "Buzlu cam efekti hangi durumlarda tercih edilir?", a: "Ofis cam bölmelerinde veya vitrin alt kısımlarında mahremiyet sağlamak amacıyla buzlu cam efektli folyo tercih edilir." },
    ],
    cta: {
      heading: "Her Yüzeyi Markanızla Buluşturalım",
      sub: "Vitrin, cephe, zemin ve iç mekan vinil kaplama projeleriniz için bize ulaşın.",
      whatsappMessage: "Merhaba! Vinil germe hakkında bilgi ve teklif almak istiyorum.",
    },
  },

  // ─────────────────────────────────────────────────────────
  // 3. ARAÇ GİYDİRME
  // ─────────────────────────────────────────────────────────
  {
    slug: "arac-giydirme",
    navLabel: "Araç Giydirme",
    title: "Araç Giydirme",
    shortTitle: "Araç Giydirme",
    tagline: "Filonuz yolda giderken markanız her yerde.",
    heroIcon: "Car",
    category: "Açık Hava Reklamları",
    color: "#00E5FF",
    basePath: "acik-hava",
    sectionLabel: "Açık Hava Reklamları",
    seo: {
      title: "Araç Giydirme ve Araç Kaplama | Ikarus Reklam",
      description:
        "Kurumsal filo, ticari araç ve binek araç tam/parsiyel kaplama hizmeti. Oracal/Avery folyo, one-way vision cam kaplama ve 3D kesim detaylarıyla araç giydirme.",
      keywords: [
        "araç giydirme",
        "araç kaplama",
        "filo araç reklamı",
        "ticari araç folyo",
        "araç sticker",
        "araç giydirme fiyatları",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Yollarda Hareket Eden En Etkili Reklam Panonuz",
      paragraphs: [
        "Araç giydirme, işletmenizin logosunu ve iletişim bilgilerini kurumsal filo araçları, ticari araçlar veya binek araçlar üzerine uygulayarak, sabit bir reklam panosunun aksine sürekli hareket halinde ve farklı bölgelere ulaşan bir tanıtım yüzeyine dönüştürme işlemidir. Ikarus Reklam olarak tam kaplama, parsiyel (kısmi) kaplama ve sticker uygulamaları olmak üzere üç farklı seviyede araç giydirme hizmeti sunuyoruz.",
        "Kullandığımız yüksek kaliteli kalandırılmış vinil folyolar (Oracal, Avery gibi markalar), araç yüzeyinin kavisli formlarına dahi sorunsuz uyum sağlayarak profesyonel ve pürüzsüz bir görünüm elde etmemizi sağlar. 3D kesim teknolojimizle logo ve yazı detayları en ince çizgisine kadar keskin şekilde kesilir; araç camlarında ise sürüş güvenliğini etkilemeyen, dışarıdan tam görünürlük sağlayan one-way vision folyo kullanılır.",
        "Kurumsal filo araçlarında marka tutarlılığı sağlamak için standart bir şablon oluşturuyor ve tüm araçlarınıza aynı kalitede, hızlı bir şekilde uyguluyoruz. Uygulama öncesi araç yüzeyinin detaylı temizliği ve doğru ısıtma/germe teknikleriyle, kaplamanın hem estetik hem de dayanıklılık açısından uzun ömürlü olmasını garanti ediyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Folyo", desc: "Oracal, Avery gibi sertifikalı marka folyolarla üretim yapıyoruz." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Araç formuna uygun optimize edilmiş kaplama tasarımı." },
      { icon: "Sparkles", title: "3D Kesim Detayı", desc: "Logo ve yazılarda kusursuz kesim hassasiyeti." },
      { icon: "Truck", title: "Hızlı Uygulama", desc: "Standart binek araç kaplamalarında 1 gün içinde tamamlama." },
      { icon: "ShieldCheck", title: "Kavis Uyumlu Uygulama", desc: "Araç yüzeyinin kıvrımlarına kabarcıksız tam uyum." },
      { icon: "Headphones", title: "Filo Danışmanlığı", desc: "Kurumsal filo projelerinde marka tutarlılığı danışmanlığı." },
    ],
    useCases: [
      { icon: "Truck", label: "Ticari Filo", desc: "Kargo ve lojistik filo araç kaplamaları" },
      { icon: "Car", label: "Binek Araç", desc: "Kişisel veya kurumsal binek araç kaplaması" },
      { icon: "Store", label: "Esnaf Aracı", desc: "Mağaza ve esnaf teslimat aracı kaplaması" },
      { icon: "Hospital", label: "Sağlık", desc: "Ambulans ve sağlık hizmeti araç kaplaması" },
      { icon: "Landmark", label: "Emlak", desc: "Emlak danışmanı araç kaplaması" },
      { icon: "Warehouse", label: "Lojistik", desc: "Kamyon ve tır tam kaplama uygulamaları" },
    ],
    process: [
      { step: "01", icon: "Compass", title: "Keşif", desc: "Araç model ve yüzey ölçüleri detaylı incelenir." },
      { step: "02", icon: "PenTool", title: "Tasarım", desc: "Araç formuna özel kaplama tasarımı hazırlanır ve onaylanır." },
      { step: "03", icon: "Printer", title: "Baskı", desc: "Yüksek çözünürlüklü dijital baskı ile folyo basılır." },
      { step: "04", icon: "Scissors", title: "3D Kesim", desc: "Logo ve detaylar hassas 3D kesim teknolojisiyle kesilir." },
      { step: "05", icon: "Wrench", title: "Uygulama", desc: "Yüzey temizliği sonrası kavis uyumlu germe ile kaplama yapılır." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Son kalite kontrolü sonrası araç teslim edilir." },
    ],
    materials: [
      { icon: "Layers", name: "Kalandırılmış Vinil Folyo", desc: "Kavisli yüzeylere uyumlu, dayanıklı premium araç folyosu." },
      { icon: "Square", name: "One-Way Vision Cam Folyo", desc: "Sürüş güvenliğini etkilemeyen tek yönlü görüş cam kaplaması." },
      { icon: "Shield", name: "Koruyucu Laminasyon", desc: "Çizilme, UV ve kimyasal etkilere karşı ekstra yüzey koruması." },
      { icon: "Scissors", name: "3D Kesim Şablonu", desc: "Logo ve yazı detaylarının hassas kesimi için özel şablon." },
      { icon: "Droplets", name: "UV Dayanımlı Mürekkep", desc: "Güneş ışığına karşı yıllarca solmayan baskı mürekkebi." },
      { icon: "Palette", name: "Mat/Parlak/Krom Folyo", desc: "Farklı yüzey efektleriyle özgün görünüm seçenekleri." },
    ],
    advantages: [
      { icon: "BadgeCheck", title: "Hareketli Reklam Etkisi", desc: "Araç günlük rotasında markanızı farklı bölgelere taşır." },
      { icon: "Recycle", title: "Aracı Korur", desc: "Kaplama, orijinal boyayı çizik ve UV etkisinden korur." },
      { icon: "Sparkles", title: "Kurumsal Tutarlılık", desc: "Filo araçlarında standart marka görünümü sağlar." },
      { icon: "Timer", title: "Hızlı Uygulama", desc: "Standart araçlarda bir günde tamamlanan kaplama süreci." },
      { icon: "Gem", title: "Yeniden Satış Değeri", desc: "Kaliteli kaplama sökülünce araç boyasını korunmuş bırakır." },
      { icon: "CloudRain", title: "Dış Etkenlere Dayanıklılık", desc: "Yağmur, güneş ve yıkamaya karşı uzun ömürlü performans." },
    ],
    gallery: [
      { icon: "Truck", label: "Ticari Filo Kaplaması", alt: "Kurumsal ticari filo araç tam kaplama" },
      { icon: "Car", label: "Binek Araç Kaplaması", alt: "Binek araç tam kaplama uygulaması" },
      { icon: "Square", label: "One-Way Vision Cam", alt: "Araç camında one-way vision folyo detayı" },
      { icon: "Scissors", label: "3D Kesim Detayı", alt: "Araç logosu 3D kesim yakın çekim" },
      { icon: "Wrench", label: "Uygulama Süreci", alt: "Araç kaplama germe ve uygulama süreci" },
      { icon: "Printer", label: "Baskı Detayı", alt: "Araç folyo dijital baskı makinesi detayı" },
      { icon: "Warehouse", label: "Kamyon Kaplaması", alt: "Lojistik kamyon tam kaplama uygulaması" },
      { icon: "Palette", label: "Krom Folyo Detay", alt: "Krom efektli araç folyo detayı" },
    ],
    faq: [
      { q: "Tam kaplama ile parsiyel kaplama arasındaki fark nedir?", a: "Tam kaplama aracın tüm yüzeyini kapsarken, parsiyel kaplama yalnızca belirli bölümleri (kapı, kaput, arka cam gibi) kapsayan daha ekonomik bir seçenektir." },
      { q: "Araç kaplama boyaya zarar verir mi?", a: "Hayır, doğru uygulama ve söküm tekniğiyle kaliteli folyo, orijinal boyayı korur; hatta çizik ve UV etkisinden koruyucu bir katman görevi görür." },
      { q: "Araç kaplama ne kadar sürede tamamlanır?", a: "Standart bir binek araç tam kaplaması genellikle 1 gün, ticari araç ve kamyonlar 2-3 gün içinde tamamlanır." },
      { q: "One-way vision cam folyo sürüş güvenliğini etkiler mi?", a: "Hayır, özel delikli yapısı sayesinde içeriden dışarısı net görülür ve sürüş güvenliğini etkilemez." },
      { q: "Araç kaplama ne kadar dayanıklı?", a: "Kaliteli folyo ve laminasyon ile araç kaplamaları ortalama 3-5 yıl solmadan ve yıpranmadan kullanılabilir." },
      { q: "Kaplamayı istediğim zaman söktürebilir miyim?", a: "Evet, profesyonel söküm ile folyo, boya yüzeyine zarar vermeden kaldırılabilir." },
      { q: "Filo araçlarında toplu kaplama indirimi var mı?", a: "Evet, birden fazla araç için yapılan filo kaplama projelerinde kademeli birim fiyat avantajı sunuyoruz." },
      { q: "Kaplama sonrası araç yıkanabilir mi?", a: "Evet, standart araç yıkamaları kaplamaya zarar vermez; yalnızca ilk 48 saat içinde yüksek basınçlı yıkamadan kaçınılması önerilir." },
    ],
    cta: {
      heading: "Filonuz Yolda, Markanız Her Yerde Olsun",
      sub: "Kurumsal filo veya bireysel aracınız için profesyonel araç giydirme hizmeti alın.",
      whatsappMessage: "Merhaba! Araç giydirme hakkında bilgi ve teklif almak istiyorum.",
    },
  },
];

export function getAcikHavaBySlug(slug: string): ServiceData | null {
  return ACIK_HAVA.find((s) => s.slug === slug) ?? null;
}

export function getOtherAcikHava(slug: string, limit = 4): ServiceData[] {
  return ACIK_HAVA.filter((s) => s.slug !== slug).slice(0, limit);
}
