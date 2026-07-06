import type { ServiceData } from "@/lib/services";

export const BASKI_MATBAA: ServiceData[] = [
  // ─────────────────────────────────────────────────────────
  // 1. KARTVİZİT
  // ─────────────────────────────────────────────────────────
  {
    slug: "kartvizit",
    navLabel: "Kartvizit",
    title: "Kartvizit Baskı",
    shortTitle: "Kartvizit",
    tagline: "İlk izlenim elinizde — kaliteli kağıt, kusursuz baskı.",
    heroIcon: "CreditCard",
    category: "Baskı ve Matbaa",
    color: "#F2B84B",
    basePath: "baski-matbaa",
    sectionLabel: "Baskı ve Matbaa",
    seo: {
      title: "Kartvizit Baskı ve Tasarımı | Ikarus Reklam",
      description:
        "Kuşe, bristol, kraft ve metalize kartvizit baskı seçenekleri. Lamine, UV lak ve kabartma detaylarla kurumsal kimliğinizi yansıtan kartvizit tasarımı ve üretimi.",
      keywords: [
        "kartvizit baskı",
        "kartvizit tasarımı",
        "kuşe kartvizit",
        "bristol kartvizit",
        "metalize kartvizit",
        "kartvizit fiyatları",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Elden Ele Geçen En Küçük, En Etkili Reklamınız",
      paragraphs: [
        "Kartvizit, dijitalleşen dünyada bile hâlâ bir işletmenin veya profesyonelin ilk elle tutulan temas noktasıdır. Ikarus Reklam olarak kartvizitlerinizi, marka kimliğinize uygun kağıt dokusu, renk paleti ve bitiş seçenekleriyle üretiyoruz. Kuşe kağıttan bristol ve metalize yüzeylere kadar geniş malzeme yelpazemizle, elinize alan herkesin farkı hissettiği bir kartvizit ortaya çıkarıyoruz.",
        "Baskı sürecinde kullandığımız yüksek çözünürlüklü dijital ve ofset baskı teknolojisi, logo ve tipografi detaylarının en ince çizgisine kadar net basılmasını sağlar. Mat veya parlak lamine, seçici UV lak, kabartma (embossing) ve yaldız (foil) gibi özel bitiş uygulamalarıyla kartvizitinize dokunsal bir premium his katabiliyoruz. İster sade ve minimal bir kurumsal tasarım, ister yaratıcı ve renkli bir kişisel kartvizit isteyin, grafik ekibimiz markanıza özel bir tasarım hazırlar.",
        "Küçük işletmelerden büyük kurumsal firmalara kadar her ölçekte müşteri için esnek adetlerde üretim yapıyoruz. Tek bir çalışan için 100 adetlik küçük bir baskıdan, tüm şirket için binlerce adetlik toplu üretime kadar aynı kalite standardını koruyoruz. Tasarımdan baskıya, kesimden paketlemeye kadar tüm süreci kendi matbaamızda yürüterek hızlı teslimat ve tutarlı kalite sunuyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Kağıt", desc: "350gr-600gr kuşe, bristol ve özel dokulu kağıtlarla premium his." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Marka kimliğinize uygun, grafik ekibimizce hazırlanan özgün tasarım." },
      { icon: "Sparkles", title: "Özel Bitişler", desc: "Mat/parlak lamine, UV lak, yaldız ve kabartma seçenekleri." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "Standart siparişlerde 2-3 iş günü içinde baskı ve teslimat." },
      { icon: "ShieldCheck", title: "Renk Garantisi", desc: "Kalibre edilmiş baskı makineleriyle ekrandakiyle birebir renk uyumu." },
      { icon: "Headphones", title: "Teknik Destek", desc: "Tasarım dosyası hazırlığında ücretsiz teknik danışmanlık." },
    ],
    useCases: [
      { icon: "Briefcase", label: "Kurumsal Ofis", desc: "Şirket çalışanları için standart kartvizit seti" },
      { icon: "Store", label: "Mağaza", desc: "Mağaza sahibi ve satış ekibi kartvizitleri" },
      { icon: "Coffee", label: "Cafe", desc: "Cafe ve restoran işletme kartvizitleri" },
      { icon: "Gem", label: "Emlak", desc: "Emlak danışmanı kişisel kartvizitleri" },
      { icon: "Hospital", label: "Sağlık", desc: "Doktor ve klinik kartvizitleri" },
      { icon: "GraduationCap", label: "Danışmanlık", desc: "Avukat, mali müşavir, danışman kartvizitleri" },
      { icon: "Sparkles", label: "Güzellik Salonu", desc: "Kuaför ve güzellik uzmanı kartvizitleri" },
      { icon: "Building2", label: "Etkinlik", desc: "Fuar ve networking etkinlikleri için kartvizit" },
    ],
    process: [
      { step: "01", icon: "PenTool", title: "Tasarım", desc: "Marka kimliğinize uygun kartvizit tasarımı hazırlanır." },
      { step: "02", icon: "Compass", title: "Onay", desc: "Dijital ön izleme ile tasarım onayınıza sunulur." },
      { step: "03", icon: "Printer", title: "Baskı", desc: "Seçilen kağıt ve renk profiliyle yüksek çözünürlüklü baskı yapılır." },
      { step: "04", icon: "Scissors", title: "Kesim", desc: "Hassas kesim makineleriyle standart veya özel ölçüde kesim." },
      { step: "05", icon: "Sparkles", title: "Bitiş İşlemleri", desc: "Lamine, UV lak veya yaldız gibi özel bitişler uygulanır." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Kalite kontrolünün ardından paketlenip kargoya verilir." },
    ],
    materials: [
      { icon: "Layers", name: "Kuşe Kağıt", desc: "Parlak veya mat yüzeyli, canlı renk baskısına uygun standart kağıt." },
      { icon: "Layers3", name: "Bristol Kağıt", desc: "Kalın, mat dokulu ve premium his veren kartvizit kağıdı." },
      { icon: "Sparkles", name: "Metalize Kağıt", desc: "Metalik parıltılı yüzeyle dikkat çekici, özel kartvizitler." },
      { icon: "Box", name: "Kraft Kağıt", desc: "Doğal dokulu, sürdürülebilir ve butik markalar için ideal." },
      { icon: "Palette", name: "UV Lak / Yaldız Folyo", desc: "Seçili alanlarda parlaklık veya altın/gümüş yaldız detayı." },
      { icon: "Shield", name: "Lamine Film", desc: "Mat veya parlak lamine ile su ve yıpranmaya karşı koruma." },
    ],
    advantages: [
      { icon: "BadgeCheck", title: "Kurumsal İmaj", desc: "Kaliteli kartvizit, ilk görüşmede profesyonellik algısı yaratır." },
      { icon: "Recycle", title: "Uzun Ömür", desc: "Lamine ve kaliteli kağıt sayesinde yıpranmadan uzun süre kullanılır." },
      { icon: "Sparkles", title: "Ayırt Edici Tasarım", desc: "Özel bitişlerle rakiplerinizden bir adım öne çıkarsınız." },
      { icon: "Truck", title: "Esnek Adetler", desc: "100 adetten binlerce adete kadar ölçeklenebilir üretim." },
      { icon: "Gem", title: "Dokunsal Kalite", desc: "Kabartma ve özel kağıt dokusuyla hissedilir bir fark yaratır." },
      { icon: "Timer", title: "Hızlı Üretim", desc: "Standart siparişlerde birkaç gün içinde elinizde." },
    ],
    gallery: [
      { icon: "CreditCard", label: "Kuşe Kartvizit", alt: "Parlak kuşe kağıt üzerine baskılı kartvizit" },
      { icon: "Layers3", label: "Bristol Kartvizit", alt: "Mat bristol kağıt kartvizit yakın çekim" },
      { icon: "Sparkles", label: "Yaldız Detay", alt: "Altın yaldız folyo detaylı premium kartvizit" },
      { icon: "Box", label: "Kraft Kartvizit", alt: "Doğal kraft kağıt kartvizit tasarımı" },
      { icon: "Palette", label: "Metalize Yüzey", alt: "Metalik parıltılı kartvizit yüzeyi" },
      { icon: "Scissors", label: "Kesim Süreci", alt: "Kartvizit hassas kesim makinesi süreci" },
      { icon: "Printer", label: "Baskı Detayı", alt: "Kartvizit dijital baskı makinesi detayı" },
      { icon: "PackageCheck", label: "Paketleme", alt: "Tamamlanmış kartvizit setleri paketleme" },
    ],
    faq: [
      { q: "Kartvizit için hangi kağıt türünü seçmeliyim?", a: "Kurumsal ve klasik bir görünüm için kuşe veya bristol, premium ve butik bir his için metalize veya kraft kağıt önerilir. İhtiyacınıza göre örnek gönderebiliriz." },
      { q: "Minimum sipariş adedi nedir?", a: "100 adetten başlayan siparişlerle çalışıyoruz; büyük adetlerde birim fiyat avantajı sunuyoruz." },
      { q: "Kartvizit tasarımını siz mi yapıyorsunuz?", a: "Evet, grafik ekibimiz marka kimliğinize uygun özgün tasarım hazırlar; hazır tasarımınız varsa dosya üzerinden de baskıya alabiliriz." },
      { q: "Kartvizit baskı süresi ne kadar?", a: "Tasarım onayından sonra standart siparişlerde 2-3 iş günü içinde baskı ve kesim tamamlanır." },
      { q: "Kabartma (embossing) ve yaldız uygulaması her tasarımda mümkün mü?", a: "Evet, ancak tasarımın bu tekniklere uygun hazırlanması gerekir; ekibimiz dosyanızı bu uygulamalara göre optimize eder." },
      { q: "Çift taraflı baskı yapılıyor mu?", a: "Evet, tek veya çift taraflı baskı seçenekleri sunuyoruz; çift taraflı baskılarda ek ücret farkı minimaldir." },
      { q: "Kartvizit ölçüleri standart mı, özel ölçü mümkün mü?", a: "Standart ölçü 85x55mm'dir; talebe göre kare, yuvarlak köşeli veya özel kesim kartvizit de üretebiliyoruz." },
      { q: "Numune görmeden sipariş verebilir miyim?", a: "Dijital ön izleme ve talep halinde fiziksel kağıt numunesi göndererek kararınızı kolaylaştırıyoruz." },
    ],
    cta: {
      heading: "Elinize Alan Herkes Farkı Hissetsin",
      sub: "Kurumsal kimliğinize uygun kaliteli kartvizit tasarımı ve baskısı için bize ulaşın.",
      whatsappMessage: "Merhaba! Kartvizit baskısı hakkında bilgi ve teklif almak istiyorum.",
    },
  },

  // ─────────────────────────────────────────────────────────
  // 2. BROŞÜR
  // ─────────────────────────────────────────────────────────
  {
    slug: "brosur",
    navLabel: "Broşür",
    title: "Broşür Baskı",
    shortTitle: "Broşür",
    tagline: "Markanızın hikayesini katlanır sayfalarda anlatın.",
    heroIcon: "FileText",
    category: "Baskı ve Matbaa",
    color: "#FF8F66",
    basePath: "baski-matbaa",
    sectionLabel: "Baskı ve Matbaa",
    seo: {
      title: "Broşür Baskı ve Tasarımı | Ikarus Reklam",
      description:
        "Katalog, tanıtım broşürü ve ürün föyü baskı hizmeti. İkiye/üçe katlanır broşür, kuşe ve mat kağıt seçenekleriyle kurumsal tanıtım materyali üretimi.",
      keywords: [
        "broşür baskı",
        "katalog baskı",
        "tanıtım broşürü",
        "üç katlı broşür",
        "kurumsal broşür",
        "broşür fiyatları",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Ürününüzü ve Hikayenizi Sayfa Sayfa Anlatan Tanıtım Materyali",
      paragraphs: [
        "Broşür, bir işletmenin ürün ve hizmetlerini görsel olarak zengin, düzenli ve akılda kalıcı bir formatta müşteriyle buluşturan en etkili basılı tanıtım materyalidir. Ikarus Reklam olarak tek sayfa el ilanından, ikiye/üçe katlanır broşürlere ve çok sayfalı kataloglara kadar her formatta tasarım ve baskı hizmeti sunuyoruz. Yüksek çözünürlüklü dijital baskı ve ofset baskı teknolojimizle, görsellerinizin ve metinlerinizin en canlı haliyle basılmasını sağlıyoruz.",
        "Grafik ekibimiz, broşür içeriğinizi okunabilir bir hiyerarşiyle kurgulayarak, marka renklerinize ve tipografinize uygun bir sayfa düzeni tasarlar. Katlama şekli (ikiye, üçe, akordeon), kağıt gramajı ve yüzey bitişi (mat/parlak lamine) gibi teknik detaylar, broşürün hem estetiğini hem de dayanıklılığını doğrudan etkiler; bu nedenle her projeye özel malzeme kombinasyonu öneriyoruz.",
        "Fuarlar, tanıtım günleri, showroom sunumları veya doğrudan posta kampanyaları için toplu adetlerde broşür üretimi yapıyoruz. Tasarımdan baskıya, kesimden katlama işlemine kadar tüm üretim sürecini kendi matbaamızda yöneterek, büyük adetli siparişlerde bile tutarlı kalite ve hızlı teslimat sağlıyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Baskı", desc: "Yüksek çözünürlüklü dijital ve ofset baskı ile canlı renkler." },
      { icon: "PenTool", title: "Profesyonel Tasarım", desc: "Marka kimliğinize uygun, okunabilir sayfa düzeni tasarımı." },
      { icon: "Layers", title: "Esnek Katlama", desc: "İkiye, üçe veya akordeon katlama seçenekleriyle format çeşitliliği." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "Standart broşür siparişlerinde 3-5 iş günü içinde teslimat." },
      { icon: "ShieldCheck", title: "Renk Tutarlılığı", desc: "Kalibre edilmiş baskı sistemiyle tasarımla birebir renk uyumu." },
      { icon: "Headphones", title: "İçerik Danışmanlığı", desc: "Broşür kurgusu ve metin yerleşiminde ücretsiz danışmanlık." },
    ],
    useCases: [
      { icon: "Building2", label: "Fuar Standı", desc: "Fuar ve etkinlik tanıtım broşürleri" },
      { icon: "Store", label: "Mağaza", desc: "Mağaza içi ürün ve kampanya broşürleri" },
      { icon: "Hospital", label: "Sağlık", desc: "Klinik ve hastane hizmet tanıtım broşürleri" },
      { icon: "Landmark", label: "Emlak", desc: "Proje ve konut tanıtım broşürleri" },
      { icon: "GraduationCap", label: "Eğitim", desc: "Kurs ve okul tanıtım broşürleri" },
      { icon: "Hotel", label: "Turizm", desc: "Otel ve tatil köyü tanıtım broşürleri" },
      { icon: "Briefcase", label: "Kurumsal", desc: "Şirket faaliyet ve hizmet broşürleri" },
      { icon: "UtensilsCrossed", label: "Restoran", desc: "Menü kataloğu ve tanıtım broşürleri" },
    ],
    process: [
      { step: "01", icon: "PenTool", title: "Tasarım", desc: "İçerik kurgusu ve sayfa düzeni tasarımı hazırlanır." },
      { step: "02", icon: "Compass", title: "Onay", desc: "Dijital PDF ön izleme ile onayınıza sunulur." },
      { step: "03", icon: "Printer", title: "Baskı", desc: "Seçilen kağıt ve formatta yüksek çözünürlüklü baskı yapılır." },
      { step: "04", icon: "Scissors", title: "Kesim", desc: "Sayfalar standart veya özel ölçüde hassas kesilir." },
      { step: "05", icon: "BookOpen", title: "Katlama", desc: "İkiye, üçe veya akordeon katlama işlemi uygulanır." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Kalite kontrolü sonrası paketlenip teslim edilir." },
    ],
    materials: [
      { icon: "Layers", name: "Kuşe Kağıt", desc: "Parlak yüzeyli, görsel ağırlıklı broşürler için canlı renk baskısı." },
      { icon: "Layers3", name: "Mat Kağıt", desc: "Yansımasız, okunabilirliği yüksek metin ağırlıklı broşürler için." },
      { icon: "Shield", name: "Mat/Parlak Lamine", desc: "Yüzey koruması ve premium his için opsiyonel laminasyon." },
      { icon: "Box", name: "Kraft Kağıt", desc: "Doğal ve sürdürülebilir marka algısı için alternatif kağıt." },
      { icon: "Ribbon", name: "Spot UV", desc: "Seçili görsellerde parlaklık vurgusu sağlayan özel baskı tekniği." },
      { icon: "Palette", name: "Pantone Renk Eşleştirme", desc: "Marka renklerinizin birebir tutarlılığı için özel renk kalibrasyonu." },
    ],
    advantages: [
      { icon: "BadgeCheck", title: "Kurumsal İmaj", desc: "Kaliteli broşür, ürün ve hizmetlerinizi profesyonel şekilde anlatır." },
      { icon: "Sparkles", title: "Görsel Zenginlik", desc: "Yüksek çözünürlüklü baskı ile fotoğraf ve grafiklerde detay kaybı olmaz." },
      { icon: "Recycle", title: "Dayanıklı Yapı", desc: "Doğru gramaj ve lamine seçimiyle uzun süre elden ele dolaşır." },
      { icon: "Truck", title: "Toplu Üretim", desc: "Yüzlerce ile binlerce adet arasında esnek üretim kapasitesi." },
      { icon: "Timer", title: "Hızlı Teslimat", desc: "Standart formatlarda birkaç gün içinde teslim." },
      { icon: "Gem", title: "Detaylı İçerik Kurgusu", desc: "Çok sayfalı kataloglarda dahi tutarlı ve okunabilir tasarım." },
    ],
    gallery: [
      { icon: "FileText", label: "Üç Katlı Broşür", alt: "Üçe katlanır kurumsal tanıtım broşürü" },
      { icon: "BookOpen", label: "Katalog Baskı", alt: "Çok sayfalı ürün kataloğu baskısı" },
      { icon: "Store", label: "Mağaza Broşürü", alt: "Mağaza içi kampanya broşürü" },
      { icon: "Hotel", label: "Turizm Broşürü", alt: "Otel tanıtım broşürü tasarımı" },
      { icon: "Printer", label: "Baskı Detayı", alt: "Broşür ofset baskı makinesi detayı" },
      { icon: "Scissors", label: "Kesim Süreci", alt: "Broşür sayfa kesim süreci" },
      { icon: "Ribbon", label: "Spot UV Detay", alt: "Spot UV uygulanmış broşür kapak detayı" },
      { icon: "PackageCheck", label: "Paketleme", alt: "Tamamlanmış broşürlerin paketlenmesi" },
    ],
    faq: [
      { q: "Broşür için hangi katlama seçenekleri mevcut?", a: "İkiye katlı, üçe katlı (üç panel) ve akordeon katlama seçenekleri sunuyoruz; içeriğinize en uygun formatı birlikte belirliyoruz." },
      { q: "Broşür tasarımını siz mi hazırlıyorsunuz?", a: "Evet, grafik ekibimiz içeriğinizi görsel olarak zengin bir sayfa düzenine dönüştürür; hazır tasarım dosyanız varsa doğrudan baskıya da alabiliriz." },
      { q: "Minimum sipariş adedi nedir?", a: "250 adetten başlayan siparişlerle çalışıyoruz; adet arttıkça birim maliyet avantajlı hale gelir." },
      { q: "Broşür baskı süresi ne kadar sürer?", a: "Tasarım onayından sonra standart siparişlerde 3-5 iş günü içinde baskı, kesim ve katlama tamamlanır." },
      { q: "Çok sayfalı katalog baskısı yapılıyor mu?", a: "Evet, tel dikiş veya kanal cilt (perfect binding) ile 8 sayfadan başlayan çok sayfalı katalog üretimi de yapıyoruz." },
      { q: "Hangi kağıt gramajını seçmeliyim?", a: "Standart broşürler için 150-200gr kuşe, daha premium bir his için 250gr üzeri kağıt önerilir; örnek gönderebiliriz." },
      { q: "Broşürde özel efektler (spot UV, folyo) kullanılabilir mi?", a: "Evet, kapak veya öne çıkarmak istediğiniz alanlara spot UV, yaldız folyo gibi özel bitiş teknikleri uygulanabilir." },
      { q: "Kurumsal renklerimle birebir uyum sağlanabilir mi?", a: "Pantone renk eşleştirme ve kalibre edilmiş baskı sistemimizle marka renklerinizle yüksek tutarlılık sağlıyoruz." },
    ],
    cta: {
      heading: "Hikayenizi Sayfa Sayfa Anlatalım",
      sub: "Ürün ve hizmetlerinizi etkileyici bir broşürle tanıtmak için bize ulaşın.",
      whatsappMessage: "Merhaba! Broşür baskısı hakkında bilgi ve teklif almak istiyorum.",
    },
  },

  // ─────────────────────────────────────────────────────────
  // 3. MAGNET
  // ─────────────────────────────────────────────────────────
  {
    slug: "magnet",
    navLabel: "Magnet",
    title: "Reklam Magneti",
    shortTitle: "Magnet",
    tagline: "Buzdolabında kalıcı, aklınızda kalıcı reklam.",
    heroIcon: "Magnet",
    category: "Baskı ve Matbaa",
    color: "#5FAE7F",
    basePath: "baski-matbaa",
    sectionLabel: "Baskı ve Matbaa",
    seo: {
      title: "Reklam Magneti Baskı ve Üretimi | Ikarus Reklam",
      description:
        "Buzdolabı magneti, reklam magneti ve kurumsal hediyelik magnet üretimi. Özel kesim, UV baskılı ve kalın magnetik malzemeyle uzun ömürlü tanıtım ürünleri.",
      keywords: [
        "reklam magneti",
        "buzdolabı magneti",
        "magnet baskı",
        "özel kesim magnet",
        "hediyelik magnet",
        "magnet fiyatları",
      ],
    },
    intro: {
      eyebrow: "Hizmet Tanıtımı",
      heading: "Evlerde ve İş Yerlerinde Yıllarca Kalan Sessiz Reklamınız",
      paragraphs: [
        "Reklam magneti, diğer basılı materyallerin aksine çöpe atılmayan, buzdolabı veya metal yüzeylerde yıllarca asılı kalarak markanızı sürekli görünür kılan benzersiz bir tanıtım aracıdır. Ikarus Reklam olarak standart dikdörtgen ve daire formların yanı sıra, logonuzun veya ürününüzün silüetine uygun özel kesim magnet üretimi de yapıyoruz. UV baskı teknolojimiz sayesinde magnet yüzeyine tam renkli, yüksek çözünürlüklü görseller basılabilir.",
        "Kalınlığı ve manyetik gücü optimize edilmiş magnet malzememiz, hem dayanıklı bir yapışma sağlar hem de kolay kırılmaz. Restoran ve kafe menü magnetlerinden, emlak ve sigorta acenteleri için iletişim bilgisi magnetlerine, düğün ve özel gün hatıra magnetlerinden kurumsal hediyelik setlere kadar geniş bir kullanım alanı sunuyoruz. Yüzey isteğe göre mat veya parlak laminasyonla kaplanarak çizilmeye ve solmaya karşı ekstra dayanıklılık kazanır.",
        "Toplu adetlerde üretim yaptığımız magnetler, özellikle kapı kapı dağıtım kampanyaları, fuar hediyeleri ve müşteri sadakat programları için maliyet etkin ve kalıcı bir reklam çözümüdür. Tasarımdan kesime, baskıdan kalite kontrolüne kadar tüm süreci kendi atölyemizde yürüterek, büyük siparişlerde bile tutarlı kalite ve hızlı teslimat garantisi veriyoruz.",
      ],
    },
    whyUs: [
      { icon: "Gem", title: "Kaliteli Malzeme", desc: "Güçlü manyetik tabaka ve UV dayanımlı baskı yüzeyi kullanıyoruz." },
      { icon: "PenTool", title: "Özel Kesim Tasarım", desc: "Logonuza veya ürün silüetinize uygun özel şekilli kesim." },
      { icon: "Sparkles", title: "Canlı Renk Baskı", desc: "UV baskı teknolojisiyle solmayan, keskin renkli görseller." },
      { icon: "Truck", title: "Hızlı Teslim", desc: "Standart siparişlerde 3-4 iş günü içinde üretim ve teslimat." },
      { icon: "ShieldCheck", title: "Dayanıklılık Garantisi", desc: "Kalın magnetik malzeme ile kırılma ve deformasyona karşı direnç." },
      { icon: "Headphones", title: "Tasarım Desteği", desc: "Kesim şablonu ve baskı dosyası hazırlığında ücretsiz destek." },
    ],
    useCases: [
      { icon: "UtensilsCrossed", label: "Restoran", desc: "Menü ve sipariş hattı magnetleri" },
      { icon: "Coffee", label: "Cafe", desc: "Kampanya ve sadakat magnetleri" },
      { icon: "Landmark", label: "Emlak", desc: "Danışman iletişim bilgisi magnetleri" },
      { icon: "ShieldHalf", label: "Sigorta", desc: "Acente ve danışman tanıtım magnetleri" },
      { icon: "Gift", label: "Düğün / Özel Gün", desc: "Hatıra ve davetiye magnetleri" },
      { icon: "Briefcase", label: "Kurumsal Hediye", desc: "Fuar ve etkinlik hediyelik magnetleri" },
      { icon: "Hospital", label: "Sağlık", desc: "Klinik randevu hatırlatma magnetleri" },
      { icon: "Store", label: "Mağaza", desc: "Kampanya duyuru ve indirim magnetleri" },
    ],
    process: [
      { step: "01", icon: "PenTool", title: "Tasarım", desc: "Logo veya görsel içeriğinize uygun magnet tasarımı hazırlanır." },
      { step: "02", icon: "Compass", title: "Onay", desc: "Kesim şablonu ve baskı ön izlemesi onayınıza sunulur." },
      { step: "03", icon: "Printer", title: "Baskı", desc: "Magnet yüzeyine UV baskı ile tam renkli görsel basılır." },
      { step: "04", icon: "Scissors", title: "Özel Kesim", desc: "Standart veya özel şekilli kesim işlemi uygulanır." },
      { step: "05", icon: "Shield", title: "Laminasyon", desc: "Talep halinde mat/parlak koruyucu laminasyon eklenir." },
      { step: "06", icon: "PackageCheck", title: "Teslim", desc: "Kalite kontrolü sonrası paketlenip teslim edilir." },
    ],
    materials: [
      { icon: "Layers3", name: "Manyetik Vinil Tabaka", desc: "Esnek, dayanıklı ve güçlü tutunma sağlayan ana malzeme." },
      { icon: "Image", name: "UV Baskı Yüzeyi", desc: "Tam renkli, yüksek çözünürlüklü ve solmaya dayanıklı baskı katmanı." },
      { icon: "Shield", name: "Mat/Parlak Laminasyon", desc: "Çizilme ve neme karşı ekstra koruma sağlayan yüzey kaplaması." },
      { icon: "Scissors", name: "Özel Kesim Şablonu", desc: "Logo veya ürün formuna göre hazırlanan kesim kalıbı." },
      { icon: "Box", name: "Standart Kalınlıklar", desc: "0.5mm - 0.8mm arası farklı kalınlık ve sertlik seçenekleri." },
      { icon: "Palette", name: "Pantone Renk Eşleştirme", desc: "Marka renklerinizle birebir uyum için özel renk kalibrasyonu." },
    ],
    advantages: [
      { icon: "Timer", title: "Uzun Ömür", desc: "Doğru laminasyon ve kalite ile yıllarca solmadan kullanılır." },
      { icon: "BadgeCheck", title: "Kalıcı Görünürlük", desc: "Buzdolabında sürekli görünen, unutulmayan bir reklam alanı." },
      { icon: "Sparkles", title: "Özgün Tasarım", desc: "Özel kesim seçeneğiyle sıradan magnetlerden ayrışan tasarım." },
      { icon: "Recycle", title: "Düşük Maliyetli Etki", desc: "Toplu üretimde birim maliyeti düşük, etkisi uzun süreli bir reklam." },
      { icon: "Truck", title: "Esnek Adetler", desc: "Yüzlü siparişlerden binlerce adete kadar üretim kapasitesi." },
      { icon: "Gem", title: "Hediyelik Değeri", desc: "Fuar ve etkinliklerde akılda kalıcı, pratik bir hediye seçeneği." },
    ],
    gallery: [
      { icon: "Magnet", label: "Özel Kesim Magnet", alt: "Logo silüetine özel kesilmiş reklam magneti" },
      { icon: "UtensilsCrossed", label: "Restoran Magneti", alt: "Restoran menü ve sipariş hattı magneti" },
      { icon: "Landmark", label: "Emlak Magneti", alt: "Emlak danışmanı iletişim bilgisi magneti" },
      { icon: "Gift", label: "Hatıra Magneti", alt: "Düğün hatıra magnet tasarımı" },
      { icon: "Printer", label: "UV Baskı Detayı", alt: "Magnet yüzeyi UV baskı yakın çekim" },
      { icon: "Scissors", label: "Kesim Süreci", alt: "Magnet özel şekilli kesim süreci" },
      { icon: "Shield", label: "Laminasyon Detayı", alt: "Magnet mat laminasyon yüzey detayı" },
      { icon: "PackageCheck", label: "Paketleme", alt: "Tamamlanmış magnetlerin paketlenmesi" },
    ],
    faq: [
      { q: "Magnet hangi ölçülerde üretilebilir?", a: "Standart olarak 6x9cm, 9x9cm ve A5 gibi ölçülerde üretim yapıyoruz; özel kesim taleplerinde logonuza uygun serbest ölçü de mümkündür." },
      { q: "Özel şekilli kesim nasıl yapılıyor?", a: "Logonuzun veya ürün görselinizin dış hattına uygun bir kesim şablonu hazırlanır ve magnet bu şablona göre hassas şekilde kesilir." },
      { q: "Minimum sipariş adedi nedir?", a: "250 adetten başlayan siparişlerle çalışıyoruz; adet arttıkça birim maliyet önemli ölçüde düşer." },
      { q: "Magnet baskısı zamanla soluyor mu?", a: "UV baskı ve opsiyonel laminasyon sayesinde renk solması minimum seviyededir; ortalama 3-5 yıl canlılığını korur." },
      { q: "Magnetin tutunma gücü yeterli mi?", a: "Kullandığımız manyetik vinil tabaka, standart buzdolabı ve metal yüzeylerde güvenli ve kalıcı bir tutunma sağlar." },
      { q: "Magnet üretim süresi ne kadar sürer?", a: "Tasarım onayından sonra standart siparişlerde 3-4 iş günü içinde üretim ve teslimat tamamlanır." },
      { q: "Magnet üzerine QR kod veya kampanya bilgisi eklenebilir mi?", a: "Evet, iletişim bilgileri, QR kod veya kampanya detayları tasarıma kolaylıkla entegre edilebilir." },
      { q: "Toptan sipariş için indirim uygulanıyor mu?", a: "Evet, adet arttıkça kademeli birim fiyat indirimi uyguluyoruz; kesin teklif için sipariş adedini bizimle paylaşmanız yeterli." },
    ],
    cta: {
      heading: "Markanız Buzdolabında Yıllarca Kalsın",
      sub: "Özel kesim ve kaliteli baskıyla üretilen reklam magnetleri için bize ulaşın.",
      whatsappMessage: "Merhaba! Reklam magneti hakkında bilgi ve teklif almak istiyorum.",
    },
  },
];

export function getBaskiMatbaaBySlug(slug: string): ServiceData | null {
  return BASKI_MATBAA.find((s) => s.slug === slug) ?? null;
}

export function getOtherBaskiMatbaa(slug: string, limit = 4): ServiceData[] {
  return BASKI_MATBAA.filter((s) => s.slug !== slug).slice(0, limit);
}
