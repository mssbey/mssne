export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceUseCase {
  icon: string;
  label: string;
  desc: string;
}

export interface ServiceMaterial {
  icon: string;
  name: string;
  desc: string;
}

export interface ServiceProcessStep {
  step: string;
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceGalleryItem {
  icon: string;
  label: string;
  alt: string;
}

export interface ServiceData {
  slug: string;
  navLabel: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroIcon: string;
  category: string;
  color: string;
  /** Route segment the detail pages live under, e.g. "hizmetler" or "baski-matbaa". Defaults to "hizmetler". */
  basePath?: string;
  /** Breadcrumb / section label shown above the title. Defaults to "Hizmetler". */
  sectionLabel?: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  whyUs: ServiceCard[];
  useCases: ServiceUseCase[];
  process: ServiceProcessStep[];
  materials: ServiceMaterial[];
  advantages: ServiceCard[];
  gallery: ServiceGalleryItem[];
  faq: ServiceFaq[];
  cta: {
    heading: string;
    sub: string;
    whatsappMessage: string;
  };
}

export const SERVICES: ServiceData[] = [
  // ─────────────────────────────────────────────────────────
  // 1. KUTU HARF
  // ─────────────────────────────────────────────────────────
  {
    slug: "kutu-harf",
    navLabel: "Kutu Harf",
    title: "Kutu Harf Tabela",
    shortTitle: "Kutu Harf",
    tagline: "Markanızın adını üç boyutlu ışıkla yazıyoruz.",
    heroIcon: "CaseSensitive",
    category: "Tabela Sistemleri",
    color: "#D9668A",
    seo: {
      title: "Kutu Harf Tabela İmalatı ve Montajı | Ikarus Reklam",
      description:
        "Paslanmaz, pleksi ve LED ışıklı kutu harf tabela imalatı. AVM, mağaza, plaza ve ofis cepheleri için üç boyutlu kurumsal tabela çözümleri. Ücretsiz keşif ve teklif.",
      keywords: [
        "kutu harf tabela",
        "kutu harf imalatı",
        "led kutu harf",
        "paslanmaz kutu harf",
        "3d tabela",
        "AVM tabela",
        "kutu harf fiyatları",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Kurumsal Kimliğinizi Üç Boyuta Taşıyan Tabela Sistemi",
      paragraphs: [
        "Kutu harf tabela, marka isminizi veya logonuzu tek tek üretilmiş üç boyutlu harflerle cepheye taşıyan, günümüzün en çok tercih edilen kurumsal tabelacılık çözümüdür. Ikarus Reklam olarak her harfi, markanızın yazı karakterine, oranlarına ve renk kimliğine birebir sadık kalarak milimetrik hassasiyetle üretiyoruz. Pleksiglas, paslanmaz çelik, alüminyum kompozit ve galvaniz sac gibi farklı gövde malzemeleriyle üretilen kutu harfler, gündüz mat veya parlak yüzeyleriyle şıklık katarken; içine yerleştirilen yüksek verimli LED modüller sayesinde gece saatlerinde markanızı kilometrelerce uzaktan görünür kılar.",
        "Kutu harf sistemleri, özellikle AVM cepheleri, plaza girişleri, mağaza vitrinleri ve fabrika binalarında kurumsal kimliğin en güçlü ifadesi olarak öne çıkar. Işık kaynağının konumuna göre ön ışıklı (front-lit), arka ışıklı (back-lit / halo efekt) veya hem ön hem arka ışıklı (combo) olarak tasarlanabilen kutu harfler, mekanınızın mimarisine ve markanızın algısına en uygun ışık efektini seçme özgürlüğü tanır. Halo efektli kutu harfler özellikle premium ve butik markalar için tercih edilirken, klasik ön ışıklı kutu harfler yüksek görünürlük gerektiren işletmeler için idealdir.",
        "Üretim sürecinde kullandığımız CNC lazer kesim teknolojisi, en karmaşık logo ve tipografilerin dahi kusursuz keskinlikte kesilmesini sağlar. Harflerin iç yapısında kullanılan alüminyum profil sistemi, hem dayanıklılığı artırır hem de LED modüllerin homojen ışık dağılımı yapmasına imkân tanır. Trafo ve sürücü kartları, harflerin arkasına gizlenerek estetik bütünlüğü bozmadan uzun ömürlü ve enerji tasarruflu bir aydınlatma sunar. Tüm kutu harf tabelalarımız, IP65 su geçirmezlik standardına uygun üretilir; bu sayede yağmur, kar ve nem gibi dış hava koşullarından etkilenmeden yıllarca sorunsuz çalışır.",
        "Ikarus Reklam güvencesiyle üretilen kutu harf tabelalar, sadece bir tabela değil, markanızın cepheden geçen her müşteriye verdiği ilk izlenimdir. Keşiften montaja kadar tüm süreci kendi mühendislik ve üretim ekibimizle yürütüyor, projenizin büyüklüğü ne olursa olsun aynı özenle çalışıyoruz. İster tek bir mağaza vitrini, ister bir AVM'nin tüm kiracı tabelaları olsun, kutu harf projelerinizde teknik çizimden montaja kadar eksiksiz bir hizmet sunuyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Malzeme", desc: "A sınıfı pleksi, paslanmaz çelik ve orijinal LED modüllerle, göz yormayan homojen bir ışık elde ediyoruz." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Endüstriyel LED sürücüler ve korozyona dayanıklı gövde malzemeleri ile 50.000 saati aşan kullanım ömrü." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Marka kimliğinize uygun tipografi ve oranlarla, grafik ekibimizce hazırlanan 3D önizimli tasarım." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "Standart ölçekli kutu harf projelerinde 7-10 iş günü içinde üretim ve montaj tamamlanır." },
      { icon: "ShieldCheck", title: "Garanti", desc: "Tüm kutu harf tabelalarımızda 2 yıl işçilik ve malzeme garantisi sunuyoruz." },
      { icon: "Headphones", title: "Teknik Destek", desc: "Montaj sonrası arıza, LED değişimi ve bakım taleplerinde 7/24 teknik destek hattı." },
    ],
    useCases: [
      { icon: "Building2", label: "AVM", desc: "Kiracı cephe tabelaları ve yönlendirme sistemleri" },
      { icon: "Store", label: "Mağaza", desc: "Vitrin üstü marka tabelaları" },
      { icon: "Factory", label: "Fabrika", desc: "Fabrika giriş ve idari bina tabelaları" },
      { icon: "Landmark", label: "Plaza", desc: "Plaza cephesi ve lobi tabelaları" },
      { icon: "Hospital", label: "Hastane", desc: "Özel hastane ve klinik cephe tabelaları" },
      { icon: "Hotel", label: "Otel", desc: "Otel girişi ve cephe marka tabelaları" },
      { icon: "Coffee", label: "Cafe", desc: "Cafe tabelası ve vitrin aydınlatması" },
      { icon: "UtensilsCrossed", label: "Restoran", desc: "Restoran cephe ve logo tabelaları" },
      { icon: "Briefcase", label: "Ofis", desc: "Kurumsal ofis binası tabelaları" },
    ],
    process: [
      { step: "01", icon: "Compass", title: "Keşif", desc: "Uzman ekibimiz cepheyi yerinde inceler, ışık ve mimari uyumu değerlendirir." },
      { step: "02", icon: "Ruler", title: "Ölçü Alma", desc: "Cephe ölçüleri ve montaj noktaları milimetrik olarak tespit edilir." },
      { step: "03", icon: "PenTool", title: "Tasarım", desc: "Logonuza uygun 3D kutu harf tasarımı hazırlanır, onayınıza sunulur." },
      { step: "04", icon: "Hammer", title: "Üretim", desc: "CNC kesim, LED montajı ve boyama işlemleri atölyemizde tamamlanır." },
      { step: "05", icon: "Wrench", title: "Montaj", desc: "Uzman montaj ekibimiz güvenlik önlemleriyle cepheye kurulumu yapar." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Test edilen tabela devreye alınır ve garanti belgeniz teslim edilir." },
    ],
    materials: [
      { icon: "Layers", name: "Pleksi (Akrilik)", desc: "Şeffaf ve renkli seçenekleriyle ışığı homojen dağıtan yüzey malzemesi." },
      { icon: "Gem", name: "Paslanmaz Çelik", desc: "Satine veya krome kaplamayla premium ve dayanıklı gövde malzemesi." },
      { icon: "Box", name: "Alüminyum", desc: "Hafif, korozyona dayanıklı ve elektrostatik boyaya uygun profil." },
      { icon: "Shield", name: "Galvaniz Sac", desc: "Ekonomik ve dayanıklı, dış mekân kullanımına uygun gövde sacı." },
      { icon: "Lightbulb", name: "LED Modül", desc: "Yüksek parlaklıkta, düşük enerji tüketimli homojen aydınlatma modülleri." },
      { icon: "Zap", name: "Trafo (Güç Kaynağı)", desc: "Sessiz çalışan, uzun ömürlü ve sertifikalı LED güç kaynakları." },
    ],
    advantages: [
      { icon: "Recycle", title: "Düşük Bakım", desc: "Paslanmaz ve galvaniz gövdeler yıllarca boya ve bakım gerektirmez." },
      { icon: "BatteryCharging", title: "Enerji Tasarrufu", desc: "LED teknolojisi neon tüpe göre %70'e varan enerji tasarrufu sağlar." },
      { icon: "Sparkles", title: "Modern Görünüm", desc: "Üç boyutlu form, cepheye çağdaş ve premium bir karakter katar." },
      { icon: "BadgeCheck", title: "Kurumsal İmaj", desc: "Markanızın algısını güçlendiren profesyonel ve tutarlı bir görünüm." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Kaliteli malzeme seçimiyle 10 yılı aşan kullanım süresi." },
      { icon: "CloudRain", title: "Hava Şartlarına Dayanıklılık", desc: "IP65 sertifikalı üretim ile her iklim koşulunda güvenle çalışır." },
    ],
    gallery: [
      { icon: "Building2", label: "AVM Cephesi", alt: "AVM cephesinde üç boyutlu kutu harf tabela uygulaması" },
      { icon: "Gem", label: "Paslanmaz Kutu Harf", alt: "Paslanmaz çelik kutu harf tabela yakın çekim detay" },
      { icon: "Moon", label: "Gece Görünümü", alt: "Gece LED ışıklı kutu harf tabela" },
      { icon: "Store", label: "Mağaza Vitrini", alt: "Mağaza vitrini üzerinde kutu harf tabela" },
      { icon: "Landmark", label: "Plaza Girişi", alt: "Plaza giriş cephesinde kutu harf logo tabelası" },
      { icon: "UtensilsCrossed", label: "Restoran Logosu", alt: "Restoran cephesinde kutu harf logo tabela" },
      { icon: "Wrench", label: "Montaj Süreci", alt: "Kutu harf tabela montaj süreci vinç ile kurulum" },
      { icon: "Lightbulb", label: "LED Modül Detayı", alt: "Kutu harf içi LED modül ve trafo detay görüntüsü" },
    ],
    faq: [
      { q: "Kutu harf tabela nedir, nasıl üretilir?", a: "Kutu harf tabela, marka isminizin her bir harfinin ayrı ayrı üç boyutlu kutu formunda üretildiği tabela sistemidir. Pleksi, paslanmaz çelik veya alüminyum gövde içine yerleştirilen LED modüllerle aydınlatılır ve CNC lazer kesim teknolojisiyle şekillendirilir." },
      { q: "Kutu harf tabela fiyatları neye göre değişir?", a: "Fiyatlandırma; harf boyutu, malzeme türü (pleksi, paslanmaz, alüminyum), ışıklandırma tipi (ön/arka ışıklı), montaj yüksekliği ve toplam metrekareye göre değişir. Kesin fiyat için ücretsiz keşif talep edebilirsiniz." },
      { q: "Ön ışıklı ve arka ışıklı (halo) kutu harf arasındaki fark nedir?", a: "Ön ışıklı kutu harflerde ışık harfin ön yüzeyinden yayılır ve yüksek görünürlük sağlar. Arka ışıklı (halo) kutu harflerde ise ışık harfin arkasından cepheye yansır, daha şık ve premium bir efekt oluşturur." },
      { q: "Kutu harf tabelanın üretim ve montaj süresi ne kadar sürer?", a: "Standart ölçekli projelerde tasarım onayından sonra üretim 5-7 iş günü, montaj ise cephe büyüklüğüne göre 1-3 gün içinde tamamlanır." },
      { q: "Kutu harf tabelalar dış mekân koşullarına dayanıklı mı?", a: "Evet. Tüm kutu harf tabelalarımız IP65 su geçirmezlik standardında üretilir, yağmur, kar, nem ve UV ışınlarına karşı dayanıklıdır." },
      { q: "Kutu harf tabela için ruhsat veya izin gerekir mi?", a: "Cephe tabela uygulamalarında belediye tabela ruhsatı gerekebilir. Ikarus Reklam olarak ölçü ve teknik çizim dosyalarını hazırlayarak bu süreçte size destek oluyoruz." },
      { q: "LED modüller arızalanırsa ne yapılmalı?", a: "Garanti süresi içindeki tüm LED ve trafo arızaları ücretsiz olarak giderilir. Teknik destek hattımızdan randevu alarak yerinde servis talep edebilirsiniz." },
      { q: "Kutu harf tabela hangi renklerde üretilebilir?", a: "Gövde rengi RAL kartelasından dilediğiniz tonda elektrostatik boya ile, LED ışık rengi ise beyaz, sıcak beyaz, RGB ve marka renginize özel tonlarda üretilebilir." },
      { q: "Küçük işletmeler için de kutu harf tabela uygun mu?", a: "Evet. Kutu harf sistemleri modüler üretildiği için tek bir mağaza vitrini ölçeğinden büyük AVM cephelerine kadar her bütçeye uygun çözümler sunulabilir." },
      { q: "Eski tabelamı kutu harfe dönüştürebilir miyim?", a: "Evet, mevcut tabelanızın sökümü, cephe onarımı ve yeni kutu harf montajı tek elden Ikarus Reklam tarafından planlanıp uygulanabilir." },
      { q: "Kutu harf tabela için garanti süresi ne kadar?", a: "Malzeme ve işçilik kusurlarına karşı 2 yıl garanti sunuyoruz. LED modüller için ayrıca üretici garantisi de geçerlidir." },
    ],
    cta: {
      heading: "Markanız İçin Kutu Harf Tabela Zamanı",
      sub: "Cephenizi ölçüsüz mü bıraktınız? Uzman ekibimiz ücretsiz keşif için yanınızda.",
      whatsappMessage: "Merhaba! Kutu harf tabela hakkında bilgi ve teklif almak istiyorum.",
    },
  },

  // ─────────────────────────────────────────────────────────
  // 2. IŞIKLI / IŞIKSIZ TABELA
  // ─────────────────────────────────────────────────────────
  {
    slug: "isikli-isiksiz-tabela",
    navLabel: "Işıklı / Işıksız Tabela",
    title: "Işıklı / Işıksız Tabela",
    shortTitle: "Işıklı Tabela",
    tagline: "Gündüz şık, gece göz alıcı.",
    heroIcon: "Lightbulb",
    category: "Tabela Sistemleri",
    color: "#FF8F66",
    seo: {
      title: "Işıklı ve Işıksız Tabela İmalatı | Ikarus Reklam",
      description:
        "Kutu tip ışıklı tabela ve dijital baskılı ışıksız tabela çözümleri. Mağaza, ofis, dükkan cepheleri için ekonomik ve premium tabela imalatı ve montajı.",
      keywords: [
        "ışıklı tabela",
        "ışıksız tabela",
        "kutu tabela",
        "led tabela",
        "dükkan tabelası",
        "cephe tabelası",
        "tabela fiyatları",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Her Bütçeye ve Her Cepheye Uygun Klasik Tabela Çözümü",
      paragraphs: [
        "Işıklı ve ışıksız tabelalar, işletmelerin en yaygın ve en ekonomik cephe tanıtım çözümüdür. Ikarus Reklam olarak, gece boyunca içeriden LED ile aydınlatılan ışıklı kutu tabelalardan, gündüz kullanımına yönelik dijital baskılı ışıksız tabelalara kadar geniş bir yelpazede üretim yapıyoruz. Her iki sistemde de alüminyum kaset gövde, pleksi/forex yüzey ve yüksek çözünürlüklü dijital baskı ya da folyo kaplama kullanarak markanızın görsel kimliğini net ve okunaklı bir şekilde cepheye taşıyoruz.",
        "Işıklı tabelalarda kullandığımız LED modül sistemi, tabelanın iç yüzeyine homojen ve titremesiz bir ışık dağılımı sağlayacak şekilde konumlandırılır. Bu sayede gece saatlerinde de gündüz kadar net ve profesyonel bir görünüm elde edilir. Işıksız tabelalar ise özellikle iç mekân yönlendirmeleri, gündüz yoğun trafiği olan cadde mağazaları veya bütçe odaklı projeler için idealdir; UV dayanımlı dijital baskı sayesinde renk solması yaşanmadan yıllarca canlılığını korur.",
        "Tabela gövdesi, alüminyum profil sistemiyle hem hafif hem de rüzgar yüküne dayanıklı şekilde tasarlanır. İstenirse tabela yüzeyine kabartma logo, 3D harf detayları veya farklı renk kombinasyonları eklenerek sıradan bir tabela, markaya özel bir kimlik unsuruna dönüştürülebilir. Kutu tabelalarımızda kullanılan contalı montaj sistemi, su ve nem girişini engelleyerek elektrik aksamının korunmasını sağlar.",
        "İster küçük bir esnaf dükkanı, ister zincir mağaza şubesi olsun; Ikarus Reklam, keşiften üretime, üretimden montaja kadar tüm süreci tek çatı altında yönetir. Standart ölçülerin yanı sıra cepheye özel kesim ve ölçülendirme yaparak, bütçenize en uygun malzeme ve ışıklandırma kombinasyonunu birlikte belirliyoruz. Amacımız, her işletmenin kendi ölçeğine uygun, kaliteli ve uzun ömürlü bir tabelaya sahip olmasını sağlamaktır.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Malzeme", desc: "Alüminyum kaset gövde, UV dayanımlı baskı ve orijinal LED modüller kullanıyoruz." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Contalı su yalıtımı ve dayanıklı baskı teknolojisiyle yıllarca solmayan görünüm." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Marka renklerinize uygun kompozisyon ve tipografi ile hazırlanan tasarım." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "Standart kutu tabelalarda 4-7 iş günü içinde üretim ve montaj." },
      { icon: "ShieldCheck", title: "Garanti", desc: "Tüm ışıklı ve ışıksız tabelalarımızda 2 yıl garanti sunuyoruz." },
      { icon: "Headphones", title: "Teknik Destek", desc: "LED değişimi, baskı yenileme ve bakım için 7/24 destek hattı." },
    ],
    useCases: [
      { icon: "Building2", label: "AVM", desc: "AVM içi mağaza yönlendirme tabelaları" },
      { icon: "Store", label: "Mağaza", desc: "Cadde mağazası cephe tabelası" },
      { icon: "Factory", label: "Fabrika", desc: "Fabrika ve depo giriş tabelaları" },
      { icon: "Landmark", label: "Plaza", desc: "Plaza kiracı yönlendirme tabelaları" },
      { icon: "Hospital", label: "Hastane", desc: "Poliklinik ve muayenehane tabelaları" },
      { icon: "Hotel", label: "Otel", desc: "Otel resepsiyon ve oda numarası tabelaları" },
      { icon: "Coffee", label: "Cafe", desc: "Cafe menü ve cephe tabelası" },
      { icon: "UtensilsCrossed", label: "Restoran", desc: "Restoran giriş ve menü tabelası" },
      { icon: "Briefcase", label: "Ofis", desc: "Ofis kapı ve yönlendirme tabelaları" },
    ],
    process: [
      { step: "01", icon: "Compass", title: "Keşif", desc: "Cephe ve ortam ışığı incelenir, en uygun sistem belirlenir." },
      { step: "02", icon: "Ruler", title: "Ölçü Alma", desc: "Tabela alanı ve montaj yüzeyi detaylı ölçülür." },
      { step: "03", icon: "PenTool", title: "Tasarım", desc: "Baskı tasarımı ve renk provası hazırlanarak onaya sunulur." },
      { step: "04", icon: "Hammer", title: "Üretim", desc: "Kaset üretimi, dijital baskı ve LED montajı atölyede tamamlanır." },
      { step: "05", icon: "Wrench", title: "Montaj", desc: "Cepheye güvenli ve su yalıtımlı şekilde montajı yapılır." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Elektrik testleri tamamlanarak tabela hizmete açılır." },
    ],
    materials: [
      { icon: "Layers", name: "Pleksi Panel", desc: "Işık geçirgenliği yüksek, darbeye dayanıklı yüzey malzemesi." },
      { icon: "Box", name: "Alüminyum Kaset", desc: "Hafif, korozyona dayanıklı ve rüzgar yüküne uygun gövde profili." },
      { icon: "Lightbulb", name: "LED Modül / Şerit", desc: "Homojen ve titremesiz iç aydınlatma sağlayan LED sistemleri." },
      { icon: "Palette", name: "Folyo Baskı", desc: "Kesim folyo ile keskin kenarlı logo ve yazı uygulamaları." },
      { icon: "Image", name: "Dijital Baskı", desc: "UV dayanımlı, yüksek çözünürlüklü tam renkli baskı seçeneği." },
      { icon: "Layers3", name: "Kompozit Arka Panel", desc: "Işıksız tabelalarda kullanılan dayanıklı ve düz yüzeyli panel." },
    ],
    advantages: [
      { icon: "Recycle", title: "Düşük Bakım", desc: "Alüminyum gövde ve UV baskı, yıllarca yenileme gerektirmez." },
      { icon: "BatteryCharging", title: "Enerji Tasarrufu", desc: "LED aydınlatma, klasik florasan armatürlere göre çok daha az tüketir." },
      { icon: "Sparkles", title: "Modern Görünüm", desc: "Temiz hatlar ve net baskı ile sade, profesyonel bir görünüm." },
      { icon: "BadgeCheck", title: "Kurumsal İmaj", desc: "Standart ama etkili bir çözümle marka tutarlılığı sağlar." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Doğru malzeme seçimiyle 8-10 yıl sorunsuz kullanım." },
      { icon: "CloudRain", title: "Hava Şartlarına Dayanıklılık", desc: "Contalı montaj sistemiyle her mevsim güvenle çalışır." },
    ],
    gallery: [
      { icon: "Store", label: "Cadde Mağazası", alt: "Cadde üzerinde ışıklı kutu tabela uygulaması" },
      { icon: "Moon", label: "Gece Çekimi", alt: "Gece LED ışıklı tabela çekimi" },
      { icon: "Coffee", label: "Cafe Tabelası", alt: "Cafe cephesinde ışıklı tabela uygulaması" },
      { icon: "Image", label: "Dijital Baskı Detay", alt: "Işıksız tabela dijital baskı yakın çekim" },
      { icon: "Briefcase", label: "Ofis Yönlendirme", alt: "Ofis binası içi yönlendirme tabelası" },
      { icon: "Hospital", label: "Poliklinik Tabelası", alt: "Poliklinik giriş ışıklı tabelası" },
      { icon: "Wrench", label: "Montaj Detayı", alt: "Işıklı tabela cephe montaj süreci" },
      { icon: "Lightbulb", label: "LED Aydınlatma", alt: "Işıklı tabela iç LED modül detayı" },
    ],
    faq: [
      { q: "Işıklı tabela ile ışıksız tabela arasındaki fark nedir?", a: "Işıklı tabelalarda LED modüller ile iç aydınlatma yapılır ve gece görünürlüğü sağlanır. Işıksız tabelalar ise dijital baskı veya folyo ile üretilir, aydınlatma içermez ve daha ekonomiktir." },
      { q: "Hangi tabela türü benim işletmeme daha uygun?", a: "Gece de açık olan işletmeler (restoran, eczane, market) için ışıklı tabela önerilir. Gündüz yoğun trafiği olan ve bütçe odaklı işletmeler için ışıksız tabela yeterli olabilir." },
      { q: "Işıklı tabela elektrik faturamı ne kadar etkiler?", a: "LED modüller çok düşük güç tüketir; standart bir kutu tabela günlük ortalama birkaç kuruşluk elektrik tüketimine sahiptir." },
      { q: "Tabela üretim süresi ne kadar sürer?", a: "Standart ölçülerde tasarım onayından sonra 4-7 iş günü içinde üretim ve montaj tamamlanır." },
      { q: "Tabelamın baskısı zamanla soluyor mu?", a: "UV dayanımlı dijital baskı ve laminasyon kullandığımız için renk solması minimum seviyededir; ortalama 5-7 yıl canlılığını korur." },
      { q: "Mevcut tabelamın baskısını yenileyebilir misiniz?", a: "Evet, mevcut kaset gövdenizin baskısını söküp yeni tasarımınızla yeniden kaplayabiliriz; bu daha ekonomik bir seçenektir." },
      { q: "Tabela boyutlarını kim belirliyor?", a: "Cephe ölçüleri ve belediye yönetmeliklerine göre uzman ekibimiz size en uygun ölçüyü önerir, nihai kararı siz verirsiniz." },
      { q: "Işıklı tabelalarda hangi LED renkleri kullanılabilir?", a: "Beyaz, sıcak beyaz, kırmızı, mavi, yeşil ve RGB (çok renkli) seçenekler mevcuttur; marka renginize özel de üretim yapılabilir." },
      { q: "Tabela montajı için özel izin gerekiyor mu?", a: "Bulunduğunuz ilçe belediyesine göre değişebilir. Gerekli evrak ve teknik çizim hazırlığında size destek sağlıyoruz." },
      { q: "Arızalanan LED modülü kendim değiştirebilir miyim?", a: "Elektrik güvenliği açısından önerilmez. Garanti kapsamındaki tüm arızalar teknik ekibimiz tarafından ücretsiz giderilir." },
    ],
    cta: {
      heading: "Cepheniz İçin Doğru Tabelayı Birlikte Seçelim",
      sub: "Işıklı mı, ışıksız mı emin değil misiniz? Ücretsiz keşifle size en uygun çözümü öneriyoruz.",
      whatsappMessage: "Merhaba! Işıklı/ışıksız tabela hakkında bilgi ve teklif almak istiyorum.",
    },
  },

  // ─────────────────────────────────────────────────────────
  // 3. KOMPOZİT TABELA
  // ─────────────────────────────────────────────────────────
  {
    slug: "kompozit-tabela",
    navLabel: "Kompozit Tabela",
    title: "Kompozit Tabela",
    shortTitle: "Kompozit Tabela",
    tagline: "Cepheden tabelaya kusursuz bütünlük.",
    heroIcon: "PanelsTopLeft",
    category: "Tabela Sistemleri",
    color: "#5FAE7F",
    seo: {
      title: "Kompozit Tabela (ACP) İmalatı ve Uygulaması | Ikarus Reklam",
      description:
        "Alüminyum kompozit panel (ACP) ile üretilen kompozit tabela ve cephe kaplama çözümleri. UV baskı, dijital baskı ve modern kesim teknikleriyle kurumsal tabela imalatı.",
      keywords: [
        "kompozit tabela",
        "acp tabela",
        "alüminyum kompozit panel",
        "cephe kaplama tabela",
        "uv baskı tabela",
        "kompozit panel fiyat",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Alüminyum Kompozit Panel ile Cephe ve Tabelada Kusursuz Uyum",
      paragraphs: [
        "Kompozit tabela, iki alüminyum yüzey arasına sıkıştırılmış polietilen çekirdekten oluşan alüminyum kompozit panel (ACP) kullanılarak üretilen, hem hafif hem de son derece dayanıklı bir tabela ve cephe kaplama sistemidir. Ikarus Reklam olarak kompozit panelleri, CNC yönlendirmeli kesim makinelerimizle milimetrik hassasiyetle işleyerek, logonuzun ve marka isminizin en karmaşık formlarını dahi kusursuz şekilde hayata geçiriyoruz. Düz, kabartma veya oyma teknikleriyle üretilen kompozit tabelalar, cephenizle bütünleşen tek parça bir görünüm sunar.",
        "Kompozit panelin en büyük avantajlarından biri, cephe kaplama ile tabelanın aynı malzeme diliyle tasarlanabilmesidir. Bu sayede işletmenizin bina cephesi ile tabela arasında görsel bir kopukluk yaşanmaz; tam tersine, bütünsel ve mimari bir kurumsal kimlik ortaya çıkar. UV baskı teknolojimiz sayesinde panel yüzeyine doğrudan tam renkli, yüksek çözünürlüklü görseller ve logolar basılabilir; bu da hem maliyet avantajı hem de sınırsız tasarım özgürlüğü sağlar.",
        "Kompozit tabelalar, hafif yapısı sayesinde büyük ölçekli cephelerde bile yapısal yük oluşturmadan uygulanabilir. Yangına dayanıklı A2 sınıfı kompozit panel seçenekleri, özellikle yönetmelik gerektiren AVM ve plaza projelerinde tercih edilir. İstenildiğinde panel arkasına LED aydınlatma yerleştirilerek ışıklı kompozit tabela seçeneği de sunulabilir; bu şekilde hem gündüz hem gece etkileyici bir görünüm elde edilir.",
        "Renk skalasında sınır tanımayan kompozit paneller, mat, parlak, metalik, ahşap desenli ve fırçalanmış metal gibi onlarca farklı yüzey seçeneğiyle üretilebilir. Ikarus Reklam olarak, tasarım aşamasından üretime, üretimden cephe montajına kadar tüm süreci kendi ekibimizle yürütüyor; büyük ölçekli cephe giydirme projelerinde olduğu gibi kompozit tabela projelerinde de mühendislik hesaplarıyla desteklenen güvenli montaj çözümleri sunuyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Malzeme", desc: "Yangına dayanıklı sertifikalı alüminyum kompozit panellerle üretim yapıyoruz." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Korozyona ve renk solmasına dirençli yüzey kaplamasıyla uzun ömürlü kullanım." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Cephe mimarisiyle bütünleşen özel kesim ve baskı tasarımları." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "CNC kesim teknolojisiyle orta ölçekli projelerde 7-10 iş günü teslim." },
      { icon: "ShieldCheck", title: "Garanti", desc: "Panel ve uygulama işçiliğinde 2 yıl kapsamlı garanti." },
      { icon: "Headphones", title: "Teknik Destek", desc: "Panel bakımı, temizliği ve olası hasar onarımında teknik destek." },
    ],
    useCases: [
      { icon: "Building2", label: "AVM", desc: "AVM cephe kaplama ve kiracı tabelaları" },
      { icon: "Store", label: "Mağaza", desc: "Mağaza cephe kompozit kaplama" },
      { icon: "Factory", label: "Fabrika", desc: "Fabrika bina cephesi kompozit kaplama" },
      { icon: "Landmark", label: "Plaza", desc: "Plaza cephe giydirme ve tabela entegrasyonu" },
      { icon: "Hospital", label: "Hastane", desc: "Hastane cephe ve yönlendirme panelleri" },
      { icon: "Hotel", label: "Otel", desc: "Otel cephesi kompozit kaplama tabelası" },
      { icon: "Coffee", label: "Cafe", desc: "Cafe cephe ve tezgah kompozit uygulaması" },
      { icon: "UtensilsCrossed", label: "Restoran", desc: "Restoran cephe kompozit tabela" },
      { icon: "Briefcase", label: "Ofis", desc: "Kurumsal ofis binası kompozit tabela" },
    ],
    process: [
      { step: "01", icon: "Compass", title: "Keşif", desc: "Cephe malzemesi ve mimari detaylar yerinde incelenir." },
      { step: "02", icon: "Ruler", title: "Ölçü Alma", desc: "Panel kesim planı için hassas cephe ölçümü yapılır." },
      { step: "03", icon: "PenTool", title: "Tasarım", desc: "Kesim ve baskı tasarımı hazırlanır, 3D görsel ile onaya sunulur." },
      { step: "04", icon: "Hammer", title: "Üretim", desc: "CNC kesim, UV baskı ve alt yapı montajı atölyede tamamlanır." },
      { step: "05", icon: "Wrench", title: "Montaj", desc: "Panel alt yapısı kurulur, kompozit yüzeyler cepheye monte edilir." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Kalite kontrolünün ardından proje teslim edilir." },
    ],
    materials: [
      { icon: "Layers3", name: "Alüminyum Kompozit Panel (ACP)", desc: "İki alüminyum yüzey arasında polietilen çekirdekli hafif panel." },
      { icon: "Image", name: "UV Baskı", desc: "Panel yüzeyine doğrudan tam renkli, dayanıklı baskı teknolojisi." },
      { icon: "Palette", name: "Dijital Baskı Folyo", desc: "Kesim ve dijital folyo ile detaylı logo ve yazı uygulamaları." },
      { icon: "Box", name: "Alüminyum Profil", desc: "Panel montajı için kullanılan taşıyıcı alt yapı profili." },
      { icon: "Layers", name: "Alt Yapı Kaset", desc: "Panelin cepheye sabitlenmesini sağlayan gizli montaj kaseti." },
      { icon: "Ribbon", name: "Kenar Bant / Fitil", desc: "Panel kenarlarında su yalıtımı sağlayan profesyonel bitiş detayı." },
    ],
    advantages: [
      { icon: "Recycle", title: "Düşük Bakım", desc: "Kompozit yüzey kir tutmaz, periyodik temizlik yeterlidir." },
      { icon: "BatteryCharging", title: "Enerji Tasarrufu", desc: "Hafif yapısı montaj enerjisini azaltır, ışıklı versiyonda LED kullanılır." },
      { icon: "Sparkles", title: "Modern Görünüm", desc: "Pürüzsüz ve tek parça görünümüyle mimari bir estetik sunar." },
      { icon: "BadgeCheck", title: "Kurumsal İmaj", desc: "Cephe ile tabelanın bütünleşmesi güçlü bir marka algısı yaratır." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Kaliteli panel seçimiyle 15-20 yıl deformasyonsuz kullanım." },
      { icon: "CloudRain", title: "Hava Şartlarına Dayanıklılık", desc: "Nem, UV ve sıcaklık farklarına karşı yüksek direnç." },
    ],
    gallery: [
      { icon: "Building2", label: "ACP Cephe", alt: "Alüminyum kompozit panel ile kaplanmış bina cephesi" },
      { icon: "PanelsTopLeft", label: "Kompozit Uygulama", alt: "Kompozit tabela kesim ve uygulama detayı" },
      { icon: "Image", label: "UV Baskı Detay", alt: "Kompozit panel üzerine UV baskı yakın çekim" },
      { icon: "Landmark", label: "Plaza Cephesi", alt: "Plaza cephesinde kompozit tabela ve kaplama" },
      { icon: "Store", label: "Mağaza Kaplaması", alt: "Mağaza cephesinde kompozit panel kaplama" },
      { icon: "Wrench", label: "Montaj Süreci", alt: "Kompozit panel cephe montaj süreci" },
      { icon: "Palette", label: "Renk Seçenekleri", alt: "Kompozit panel farklı renk ve doku seçenekleri" },
      { icon: "Ruler", label: "Kesim Detayı", alt: "CNC ile kesilmiş kompozit panel logo detayı" },
    ],
    faq: [
      { q: "Kompozit tabela (ACP) nedir?", a: "Alüminyum kompozit panel (ACP), iki ince alüminyum tabaka arasına sıkıştırılmış polietilen çekirdekten oluşan hafif ve dayanıklı bir malzemedir; tabela ve cephe kaplamada yaygın kullanılır." },
      { q: "Kompozit tabela ile kutu harf tabela birlikte kullanılabilir mi?", a: "Evet, sıklıkla kompozit cephe kaplaması üzerine kutu harf tabela monte edilerek hem bütünlük hem de üç boyutlu vurgu elde edilir." },
      { q: "Kompozit panel yangına dayanıklı mı?", a: "A2 sınıfı yangına dayanıklı kompozit panel seçeneklerimiz mevcuttur; yönetmelik gerektiren projelerde bu panelleri öneriyoruz." },
      { q: "UV baskı ile folyo baskı arasındaki fark nedir?", a: "UV baskı, panel yüzeyine doğrudan tam renkli baskı yapılmasını sağlar ve karmaşık görseller için idealdir. Folyo baskı ise düz renk ve keskin kenarlı logo/yazılar için tercih edilir." },
      { q: "Kompozit tabela hangi renk seçeneklerinde üretilir?", a: "RAL renk kartelasından herhangi bir renk, ayrıca metalik, mat, parlak, ahşap desenli ve fırçalanmış metal görünümlü onlarca seçenek mevcuttur." },
      { q: "Kompozit panel ne kadar dayanıklı?", a: "Doğru kalınlık ve kalite seçimiyle kompozit paneller 15-20 yıl deformasyon ve renk solması yaşamadan kullanılabilir." },
      { q: "Kompozit tabela montajı ne kadar sürer?", a: "Orta ölçekli bir cephe projesinde alt yapı ve panel montajı ortalama 3-5 iş günü içinde tamamlanır." },
      { q: "Kompozit panel arkasına LED aydınlatma eklenebilir mi?", a: "Evet, panel oyma tekniğiyle kesilerek arkasına LED modül yerleştirilebilir, bu şekilde gece ışıklı bir görünüm elde edilir." },
      { q: "Eski cephe kaplamamı kompozite dönüştürebilir misiniz?", a: "Evet, mevcut cephenizin sökümünden yeni kompozit panel montajına kadar tüm süreci uçtan uca üstleniyoruz." },
      { q: "Kompozit tabela fiyatları nasıl hesaplanır?", a: "Metrekare, panel kalınlığı, baskı türü (UV/folyo) ve montaj yüksekliğine göre fiyatlandırma yapılır. Kesin teklif için keşif gereklidir." },
    ],
    cta: {
      heading: "Cepheniz ve Tabelanız Tek Bir Dilde Konuşsun",
      sub: "Kompozit panel ile mimari bütünlük sağlayan kurumsal tabela çözümleri için bize ulaşın.",
      whatsappMessage: "Merhaba! Kompozit tabela hakkında bilgi ve teklif almak istiyorum.",
    },
  },

  // ─────────────────────────────────────────────────────────
  // 4. TOTEM
  // ─────────────────────────────────────────────────────────
  {
    slug: "totem",
    navLabel: "Totem",
    title: "Totem Tabela",
    shortTitle: "Totem",
    tagline: "Uzaktan görünür, yakından etkileyici.",
    heroIcon: "SignpostBig",
    category: "Tabela Sistemleri",
    color: "#F2B84B",
    seo: {
      title: "Totem Tabela İmalatı ve Montajı | Ikarus Reklam",
      description:
        "Benzin istasyonu, yol kenarı ve AVM girişleri için totem tabela üretimi. Çelik konstrüksiyon, LED aydınlatma ve rüzgar yüküne dayanıklı mühendislik ile totem imalatı.",
      keywords: [
        "totem tabela",
        "yol kenarı totem",
        "benzin istasyonu totem",
        "reklam totemi",
        "led totem",
        "totem imalatı fiyat",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Uzun Mesafeden Görünürlük Sağlayan Dikey Reklam Yapısı",
      paragraphs: [
        "Totem tabela, işletmenizi yol kenarından, kavşaktan veya AVM otoparkından geçen sürücülerin ve yayaların dikkatini çekmek üzere tasarlanan, genellikle 3 ila 15 metre yüksekliğe sahip dikey reklam yapılarıdır. Ikarus Reklam olarak totem projelerini, statik hesaplamaları yapılmış çelik konstrüksiyon iskelet üzerine, alüminyum kompozit panel veya pleksi yüzey kaplaması ve iç/dış LED aydınlatma sistemleriyle birlikte anahtar teslim olarak üretiyor ve monte ediyoruz.",
        "Özellikle benzin istasyonları, oto galerileri, AVM girişleri, sanayi siteleri ve yol kenarı işletmeleri için totem tabela, markanın kilometrelerce öteden fark edilmesini sağlayan en etkili tanıtım aracıdır. Totem gövdesi, rüzgar yüküne ve deprem yönetmeliğine uygun statik projelendirme ile tasarlanır; beton temel ve ankraj sistemleriyle güvenli bir şekilde zemine sabitlenir. Bu mühendislik yaklaşımı, totemin uzun yıllar boyunca güvenle ayakta kalmasını garanti eder.",
        "Totem tabelaların iç aydınlatmasında kullanılan yüksek parlaklıklı LED modüller, panel yüzeyinden homojen bir ışık yayarak gece saatlerinde de markanın net bir şekilde okunmasını sağlar. Çift taraflı veya tek taraflı olarak üretilebilen totemler, döner (rotary) sistemle 360 derece hareketli olarak da tasarlanabilir; bu sayede her yönden gelen trafik akışına aynı görünürlük sunulur. Fiyat panosu entegrasyonu, dijital ekran ünitesi veya klasik statik panel seçenekleriyle totem, ihtiyacınıza göre özelleştirilebilir.",
        "Ikarus Reklam güvencesiyle üretilen totemler, sadece bir reklam yapısı değil, aynı zamanda markanızın bulunduğu lokasyondaki en güçlü yönlendirme işaretidir. Zemin etüdünden statik projeye, üretimden vinçli montaja kadar tüm süreci profesyonel mühendislik ekibimizle yürütüyor, yerel yönetmeliklere uygun izin süreçlerinde de danışmanlık sağlıyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Malzeme", desc: "Statik hesaplı çelik konstrüksiyon ve hava koşullarına dayanıklı kaplama malzemesi." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Galvaniz kaplı çelik gövde ile korozyona karşı uzun süreli koruma." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Lokasyona ve trafik akışına göre optimize edilmiş görünürlük tasarımı." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "Orta ölçekli totem projelerinde 15-20 iş günü içinde teslim." },
      { icon: "ShieldCheck", title: "Garanti", desc: "Statik yapı ve elektrik aksamında 2 yıl kapsamlı garanti." },
      { icon: "Headphones", title: "Teknik Destek", desc: "Periyodik bakım, LED değişimi ve statik kontrol hizmeti." },
    ],
    useCases: [
      { icon: "Fuel", label: "Benzin İstasyonu", desc: "Yakıt fiyat panosu entegreli totem tabela" },
      { icon: "Car", label: "Oto Galeri", desc: "Galeri girişi marka totem tabelası" },
      { icon: "Building2", label: "AVM", desc: "AVM giriş ve otopark yönlendirme totemi" },
      { icon: "Landmark", label: "Plaza", desc: "Plaza giriş tanıtım totemi" },
      { icon: "Warehouse", label: "Sanayi Sitesi", desc: "Sanayi sitesi giriş yönlendirme totemi" },
      { icon: "Store", label: "Mağaza", desc: "Cadde mağazası önü tanıtım totemi" },
      { icon: "Hotel", label: "Otel", desc: "Otel girişi karşılama totemi" },
      { icon: "UtensilsCrossed", label: "Restoran", desc: "Yol kenarı restoran tanıtım totemi" },
      { icon: "MapPin", label: "Yol Kenarı", desc: "Ana yol ve kavşak reklam totemi" },
    ],
    process: [
      { step: "01", icon: "Compass", title: "Keşif", desc: "Zemin etüdü ve trafik görüş açısı yerinde değerlendirilir." },
      { step: "02", icon: "Ruler", title: "Ölçü Alma", desc: "Arsa ölçüleri ve totem yüksekliği için ön ölçüm yapılır." },
      { step: "03", icon: "PenTool", title: "Tasarım", desc: "Statik proje ve görsel tasarım birlikte hazırlanır." },
      { step: "04", icon: "Hammer", title: "Üretim", desc: "Çelik konstrüksiyon kaynağı, kaplama ve LED montajı yapılır." },
      { step: "05", icon: "Wrench", title: "Montaj", desc: "Beton temel dökümü ve vinçli dikey montaj gerçekleştirilir." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Elektrik ve statik testlerin ardından totem devreye alınır." },
    ],
    materials: [
      { icon: "Box", name: "Galvaniz Çelik Gövde", desc: "Statik hesaplı, korozyona dayanıklı ana taşıyıcı iskelet." },
      { icon: "Layers3", name: "Alüminyum Kompozit Kaplama", desc: "Totem yüzeyinde kullanılan hafif ve estetik dış kaplama." },
      { icon: "Lightbulb", name: "LED Aydınlatma Modülü", desc: "Yüksek parlaklıkta iç aydınlatma sağlayan LED sistemi." },
      { icon: "Layers", name: "Pleksi Yüzey", desc: "Işığı homojen dağıtan görsel panel yüzeyi." },
      { icon: "Anchor", name: "Beton Temel / Ankraj", desc: "Totemin zemine güvenli sabitlenmesini sağlayan temel sistemi." },
      { icon: "Paintbrush", name: "Elektrostatik Toz Boya", desc: "Uzun ömürlü, çizilmeye dayanıklı gövde boyası." },
    ],
    advantages: [
      { icon: "Recycle", title: "Düşük Bakım", desc: "Galvaniz ve toz boya kaplama yıllarca pas ve boya bakımı gerektirmez." },
      { icon: "BatteryCharging", title: "Enerji Tasarrufu", desc: "LED modüller düşük tüketimle yüksek parlaklık sunar." },
      { icon: "Sparkles", title: "Modern Görünüm", desc: "Yalın geometrik formuyla dikkat çekici ve şık bir siluet." },
      { icon: "BadgeCheck", title: "Kurumsal İmaj", desc: "Uzaktan görünürlük markanızın lokasyon bilinirliğini artırır." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Doğru mühendislikle 20 yılı aşan yapısal ömür." },
      { icon: "CloudRain", title: "Hava Şartlarına Dayanıklılık", desc: "Rüzgar yüküne göre projelendirilmiş, her iklimde güvenli." },
    ],
    gallery: [
      { icon: "Fuel", label: "Benzin İstasyonu Totemi", alt: "Benzin istasyonu girişinde yüksek totem tabela" },
      { icon: "MapPin", label: "Yol Kenarı Totem", alt: "Ana yol kenarında reklam totemi" },
      { icon: "Moon", label: "Gece Görünümü", alt: "Gece LED aydınlatmalı totem tabela" },
      { icon: "Car", label: "Oto Galeri Totemi", alt: "Oto galeri girişinde marka totemi" },
      { icon: "Building2", label: "AVM Girişi", alt: "AVM giriş yolunda yönlendirme totemi" },
      { icon: "Hammer", label: "Üretim Aşaması", alt: "Totem çelik konstrüksiyon üretim aşaması" },
      { icon: "Wrench", label: "Vinçli Montaj", alt: "Totem tabela vinç ile dikey montaj süreci" },
      { icon: "Anchor", label: "Temel Çalışması", alt: "Totem beton temel ve ankraj çalışması" },
    ],
    faq: [
      { q: "Totem tabela nedir, ne işe yarar?", a: "Totem tabela, işletmenizi uzak mesafeden görünür kılmak amacıyla dikey olarak yükseltilen, genellikle çelik konstrüksiyon üzerine kaplanan reklam yapısıdır. Yol kenarı ve geniş alanlı işletmelerde tercih edilir." },
      { q: "Totem tabela için hangi yükseklikler mümkün?", a: "Projeye ve lokasyona göre 3 metreden 15 metreye kadar farklı yüksekliklerde totem üretimi yapılabilir; yükseklik arttıkça statik proje detayları da genişler." },
      { q: "Totem tabela için zemin etüdü gerekli mi?", a: "Evet, özellikle 6 metrenin üzerindeki totemlerde zemin taşıma kapasitesinin belirlenmesi için etüt yapılması önerilir." },
      { q: "Totem tabelaya fiyat panosu eklenebilir mi?", a: "Evet, özellikle akaryakıt istasyonları için dijital veya mekanik fiyat panosu modülleri totem tasarımına entegre edilebilir." },
      { q: "Totem tabela rüzgara karşı ne kadar dayanıklı?", a: "Tüm totem projelerimiz bölgesel rüzgar yükü hesaplamalarına göre statik olarak projelendirilir ve buna uygun çelik kesitlerle üretilir." },
      { q: "Totem tabela üretim ve montaj süresi ne kadar?", a: "Statik proje onayının ardından üretim ve montaj süreci, totem büyüklüğüne bağlı olarak ortalama 15-20 iş günü sürer." },
      { q: "Totem tabela için belediye izni gerekir mi?", a: "Evet, yükseklik ve konuma bağlı olarak imar ve reklam izni gerekebilir. Gerekli teknik dosyaların hazırlanmasında destek sağlıyoruz." },
      { q: "Totem çift taraflı üretilebilir mi?", a: "Evet, tek taraflı, çift taraflı veya üç/dört yüzeyli totem seçenekleri sunuyoruz; trafik akışına göre en uygun formu öneriyoruz." },
      { q: "Totem tabela bakımı nasıl yapılıyor?", a: "Periyodik LED kontrolü, panel temizliği ve statik bağlantı kontrolü öneriyoruz; teknik ekibimiz yıllık bakım hizmeti de sunmaktadır." },
      { q: "Totem tabela maliyeti neye göre değişir?", a: "Yükseklik, çelik konstrüksiyon miktarı, kaplama malzemesi, LED aydınlatma ve fiyat panosu gibi eklentilere göre maliyet değişir. Kesin teklif için keşif gereklidir." },
    ],
    cta: {
      heading: "Uzaktan Görünen Bir Marka Olun",
      sub: "Lokasyonunuzu kilometrelerce öteden fark ettirecek totem tabela projeniz için bizimle iletişime geçin.",
      whatsappMessage: "Merhaba! Totem tabela hakkında bilgi ve teklif almak istiyorum.",
    },
  },

  // ─────────────────────────────────────────────────────────
  // 5. CEPHE GİYDİRME
  // ─────────────────────────────────────────────────────────
  {
    slug: "cephe-giydirme",
    navLabel: "Cephe Giydirme",
    title: "Cephe Giydirme",
    shortTitle: "Cephe Giydirme",
    tagline: "Binanızın kimliğini yeniden tasarlayın.",
    heroIcon: "Building2",
    category: "Tabela Sistemleri",
    color: "#D9668A",
    seo: {
      title: "Cephe Giydirme (ACP / Cam Cephe) Uygulaması | Ikarus Reklam",
      description:
        "Alüminyum kompozit panel ve cam cephe sistemleriyle kurumsal bina cephesi giydirme. Mimari cephe kaplama, izolasyon ve estetik yenileme çözümleri.",
      keywords: [
        "cephe giydirme",
        "alüminyum kompozit cephe",
        "cam cephe",
        "bina cephe kaplama",
        "kurumsal bina cephesi",
        "cephe yenileme",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Binanızın Kimliğini Baştan Tanımlayan Mimari Cephe Çözümü",
      paragraphs: [
        "Cephe giydirme, bir binanın dış yüzeyinin alüminyum kompozit panel, cam cephe sistemleri veya kompozit-cam kombinasyonlarıyla yeniden kaplanarak hem estetik hem de fonksiyonel açıdan güçlendirilmesi işlemidir. Ikarus Reklam olarak cephe giydirme projelerinde, binanın mevcut statik yapısını koruyarak ya da güçlendirerek, mimari projeye uygun taşıyıcı alt yapı sistemleri kuruyor ve üzerine yüksek kaliteli kaplama malzemelerini monte ediyoruz.",
        "Kurumsal binalar, plazalar, AVM'ler ve fabrika idari binaları için cephe giydirme, sadece görsel bir yenileme değil; aynı zamanda ısı yalıtımı, ses izolasyonu ve dış etkenlere karşı koruma sağlayan yapısal bir yatırımdır. Alüminyum kompozit panel (ACP) ile yapılan cephe giydirmeler, hafif yapısı sayesinde binaya ek yük bindirmeden hızlı uygulama imkânı sunarken; cam cephe sistemleri, doğal ışığı içeri alarak modern ve şeffaf bir mimari karakter oluşturur.",
        "Taşıyıcı alt yapı sistemimiz, alüminyum profil ve paslanmaz bağlantı elemanlarıyla, rüzgar yükü ve deprem yönetmeliğine uygun mühendislik hesaplarıyla projelendirilir. Cephe panelleri arasında bırakılan derz boşlukları, hem ısıl genleşmeye izin verir hem de su drenaj sistemiyle nem birikimini engeller. İstenildiğinde cephe giydirme projesine, markanızın logosunu vurgulayan kutu harf tabela veya ışıklı panel entegrasyonu da yapılarak, bina cephesi kurumsal kimliğin en güçlü taşıyıcısına dönüştürülebilir.",
        "Ikarus Reklam, cephe giydirme projelerinde iskele kurulumundan mühendislik hesaplarına, panel üretiminden yüksekte çalışma güvenliği sertifikalı montaj ekibine kadar tüm süreci anahtar teslim olarak yürütür. Eski ve yıpranmış bir bina cephesini haftalar içinde modern, enerji verimli ve kurumsal bir görünüme kavuşturarak, hem bina değerini hem de marka algısını güçlendiriyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Malzeme", desc: "Sertifikalı alüminyum kompozit panel ve temperli cam cephe malzemeleri." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Doğru alt yapı ve kaplama seçimiyle 20-25 yıl yapısal dayanıklılık." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Mimari projeyle uyumlu, statik hesaplarla desteklenen cephe tasarımı." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "Modüler panel sistemiyle geniş cephelerde hızlı uygulama süreci." },
      { icon: "ShieldCheck", title: "Garanti", desc: "Malzeme ve işçilikte 2 yıl, taşıyıcı sistemde genişletilmiş garanti." },
      { icon: "Headphones", title: "Teknik Destek", desc: "Periyodik cephe kontrolü ve bakım hizmetleriyle sürekli destek." },
    ],
    useCases: [
      { icon: "Building2", label: "AVM", desc: "AVM dış cephe giydirme ve yenileme" },
      { icon: "Landmark", label: "Plaza", desc: "Plaza cephesi kompozit veya cam giydirme" },
      { icon: "Factory", label: "Fabrika", desc: "Fabrika idari bina cephe yenileme" },
      { icon: "Store", label: "Mağaza", desc: "Zincir mağaza cephe standardizasyonu" },
      { icon: "Hospital", label: "Hastane", desc: "Hastane bina cephesi modernizasyonu" },
      { icon: "Hotel", label: "Otel", desc: "Otel cephesi estetik yenileme" },
      { icon: "Briefcase", label: "Ofis", desc: "Kurumsal ofis binası cephe giydirme" },
      { icon: "GraduationCap", label: "Kurumsal Kampüs", desc: "Eğitim ve kurumsal kampüs bina cepheleri" },
      { icon: "Warehouse", label: "Depo / Lojistik", desc: "Lojistik merkez bina cephe kaplaması" },
    ],
    process: [
      { step: "01", icon: "Compass", title: "Keşif", desc: "Bina cephesi ve statik durum yerinde detaylı incelenir." },
      { step: "02", icon: "Ruler", title: "Ölçü Alma", desc: "Cephe rölövesi çıkarılır, panel modülasyonu planlanır." },
      { step: "03", icon: "PenTool", title: "Tasarım", desc: "Mimari cephe tasarımı ve statik proje birlikte hazırlanır." },
      { step: "04", icon: "Hammer", title: "Üretim", desc: "Alt yapı profilleri ve kaplama panelleri atölyede üretilir." },
      { step: "05", icon: "Wrench", title: "Montaj", desc: "İskele kurulumu ile alt yapı ve panel montajı gerçekleştirilir." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Su yalıtım testleri sonrası proje anahtar teslim edilir." },
    ],
    materials: [
      { icon: "Layers3", name: "Alüminyum Kompozit Panel", desc: "Hafif, dayanıklı ve geniş renk seçenekli cephe kaplama malzemesi." },
      { icon: "Square", name: "Cam Cephe Sistemi", desc: "Temperli veya lamine cam ile şeffaf modern cephe çözümü." },
      { icon: "Box", name: "Alüminyum Alt Yapı Profili", desc: "Taşıyıcı ve montaj sistemini oluşturan mühendislik profili." },
      { icon: "ShieldHalf", name: "Isı ve Su Yalıtım Membranı", desc: "Cephe arkasında nem ve ısı kaybını önleyen izolasyon katmanı." },
      { icon: "Anchor", name: "Paslanmaz Bağlantı Elemanları", desc: "Panel ve profillerin güvenli sabitlenmesini sağlayan aparatlar." },
      { icon: "Droplets", name: "Silikon Derz / Drenaj Sistemi", desc: "Su geçirmezlik ve ısıl genleşme payı sağlayan bitiş detayları." },
    ],
    advantages: [
      { icon: "Recycle", title: "Düşük Bakım", desc: "Kompozit ve cam yüzeyler minimum periyodik temizlikle uzun süre şık kalır." },
      { icon: "BatteryCharging", title: "Enerji Tasarrufu", desc: "Yalıtımlı cephe sistemi ısıtma-soğutma maliyetlerini azaltır." },
      { icon: "Sparkles", title: "Modern Görünüm", desc: "Bina cephesine çağdaş ve prestijli bir mimari karakter kazandırır." },
      { icon: "BadgeCheck", title: "Kurumsal İmaj", desc: "Bütünsel cephe kimliği, kurumun profesyonel algısını güçlendirir." },
      { icon: "Timer", title: "Uzun Ömür", desc: "Mühendislik destekli uygulamayla 20 yılı aşan yapısal ömür." },
      { icon: "CloudRain", title: "Hava Şartlarına Dayanıklılık", desc: "Su drenaj ve derz sistemleriyle her iklimde güvenli performans." },
    ],
    gallery: [
      { icon: "Building2", label: "Kurumsal Bina Cephesi", alt: "Alüminyum kompozit panel ile kaplanmış kurumsal bina cephesi" },
      { icon: "Square", label: "Cam Cephe", alt: "Modern cam cephe sistemi uygulaması" },
      { icon: "Layers3", label: "Kompozit Kaplama", alt: "Bina cephesinde kompozit panel kaplama detayı" },
      { icon: "Landmark", label: "Plaza Cephesi", alt: "Plaza binası cephe giydirme uygulaması" },
      { icon: "Wrench", label: "İskele ve Montaj", alt: "Cephe giydirme iskele kurulumu ve montaj süreci" },
      { icon: "Ruler", label: "Alt Yapı Sistemi", alt: "Cephe giydirme alüminyum alt yapı profil detayı" },
      { icon: "Droplets", label: "Su Yalıtım Detayı", alt: "Cephe panel derz ve su yalıtım detayı" },
      { icon: "Moon", label: "Gece Görünümü", alt: "Gece aydınlatmalı cephe giydirme görünümü" },
    ],
    faq: [
      { q: "Cephe giydirme nedir?", a: "Cephe giydirme, bir binanın dış yüzeyinin alüminyum kompozit panel, cam veya benzeri malzemelerle yeniden kaplanarak estetik ve fonksiyonel olarak yenilenmesi işlemidir." },
      { q: "Cephe giydirme bina statiğine ek yük bindirir mi?", a: "Alüminyum kompozit panel sistemleri oldukça hafiftir ve doğru mühendislik hesabıyla mevcut yapıya ek yük bindirmeden uygulanabilir." },
      { q: "Cephe giydirme ısı yalıtımı sağlar mı?", a: "Evet, panel arkasına yerleştirilen yalıtım membranı ve hava boşluğu sayesinde binanın ısı ve ses yalıtımı önemli ölçüde artar." },
      { q: "Cam cephe ile kompozit cephe arasında nasıl seçim yapılır?", a: "Cam cephe daha şeffaf ve modern bir görünüm sunarken, kompozit cephe daha ekonomik, hafif ve renk seçeneği geniştir. Bina kullanım amacına göre birlikte de kullanılabilir." },
      { q: "Cephe giydirme uygulaması ne kadar sürer?", a: "Bina büyüklüğüne ve seçilen sisteme göre değişmekle birlikte, orta ölçekli bir proje ortalama 4-8 hafta içinde tamamlanır." },
      { q: "Cephe giydirme sırasında bina kullanımı durur mu?", a: "Hayır, iskele ve güvenlik önlemleri alınarak bina kullanımı sürerken cephe giydirme uygulaması yürütülebilir." },
      { q: "Cephe giydirme için ruhsat gerekiyor mu?", a: "Bina dış cephesinde yapılacak değişiklikler için ilgili belediyeden onay alınması gerekebilir; bu süreçte teknik dosya hazırlığında destek sağlıyoruz." },
      { q: "Cephe paneline logo veya tabela entegre edilebilir mi?", a: "Evet, cephe giydirme projesine kutu harf tabela, ışıklı panel veya UV baskılı logo entegrasyonu yaparak kurumsal kimliği güçlendirebiliriz." },
      { q: "Cephe giydirmede kullanılan malzemeler yangına dayanıklı mı?", a: "A2 sınıfı yangına dayanıklı kompozit panel ve sertifikalı cam sistemleri, yönetmelik gerektiren projelerde tercih edilmektedir." },
      { q: "Cephe giydirme maliyeti neye göre belirlenir?", a: "Cephe metrekaresi, seçilen malzeme (kompozit/cam), alt yapı karmaşıklığı ve bina yüksekliğine göre maliyet hesaplanır. Kesin teklif için keşif gereklidir." },
    ],
    cta: {
      heading: "Binanızın Kimliğini Yeniden Tasarlayalım",
      sub: "Kurumsal cepheniz için mühendislik destekli, anahtar teslim cephe giydirme çözümleri sunuyoruz.",
      whatsappMessage: "Merhaba! Cephe giydirme hakkında bilgi ve teklif almak istiyorum.",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | null {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export function getOtherServices(slug: string, limit = 4): ServiceData[] {
  return SERVICES.filter((s) => s.slug !== slug).slice(0, limit);
}
