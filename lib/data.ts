export interface NavChild {
  label: string;
  href: string;
  icon: string; // lucide icon adı — Header'daki NAV_ICONS haritasından çözülür
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  wide?: boolean; // çok alt öğeli menüler için 2 sütunlu geniş dropdown
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Tabela",
    href: "/hizmetler",
    children: [
      { label: "Kutu Harf", href: "/hizmetler/kutu-harf", icon: "Type" },
      { label: "Işıklı / Işıksız Tabela", href: "/hizmetler/isikli-isiksiz-tabela", icon: "Lightbulb" },
      { label: "Kompozit Tabela", href: "/hizmetler/kompozit-tabela", icon: "Layers" },
      { label: "Totem", href: "/hizmetler/totem", icon: "Landmark" },
      { label: "Cephe Giydirme", href: "/hizmetler/cephe-giydirme", icon: "Building2" },
    ],
  },
  { label: "Neon", href: "/urunler" },
  {
    label: "Matbaa",
    href: "/baski-matbaa",
    children: [
      { label: "Kartvizit", href: "/baski-matbaa/kartvizit", icon: "CreditCard" },
      { label: "Broşür", href: "/baski-matbaa/brosur", icon: "FileText" },
      { label: "Magnet", href: "/baski-matbaa/magnet", icon: "Magnet" },
      { label: "Davetiye", href: "/davetiyeler", icon: "Mail" },
    ],
  },
  {
    label: "Açık Hava",
    href: "/acik-hava",
    children: [
      { label: "Billboard", href: "/acik-hava/billboard", icon: "Image" },
      { label: "Vinil Germe", href: "/acik-hava/vinil-germe", icon: "Scan" },
      { label: "Araç Giydirme", href: "/acik-hava/arac-giydirme", icon: "Car" },
    ],
  },
  {
    label: "Promosyon",
    href: "/promosyon",
    wide: true,
    children: [
      { label: "Ajanda ve Defterler", href: "/promosyon/ajanda-ve-defterler", icon: "Notebook" },
      { label: "Kalemler", href: "/promosyon/kalemler", icon: "Pen" },
      { label: "Termoslar ve Bardaklar", href: "/promosyon/termoslar-ve-bardaklar", icon: "CupSoda" },
      { label: "Kupa ve Plaketler", href: "/promosyon/kupa-ve-plaketler", icon: "Trophy" },
      { label: "Saatler", href: "/promosyon/saatler", icon: "Watch" },
      { label: "Kağıt Ürünleri", href: "/promosyon/kagit-urunleri", icon: "FileText" },
      { label: "Çantalar", href: "/promosyon/cantalar", icon: "ShoppingBag" },
      { label: "Teknolojik Ürünler", href: "/promosyon/teknolojik-urunler", icon: "Cpu" },
      { label: "Doğadostu Ürünler", href: "/promosyon/dogadostu-urunler", icon: "Leaf" },
      { label: "Masa Setleri ve Sümenleri", href: "/promosyon/masa-setleri-ve-sumenleri", icon: "LayoutGrid" },
      { label: "Tekstil Ürünleri", href: "/promosyon/tekstil-urunleri", icon: "Shirt" },
      { label: "Kartvizitlikler", href: "/promosyon/kartvizitlikler", icon: "CreditCard" },
      { label: "Anahtarlıklar", href: "/promosyon/anahtarliklar", icon: "KeyRound" },
      { label: "Lüks Hediyelik Setler", href: "/promosyon/luks-hediyelik-setler", icon: "Gift" },
    ],
  },
  {
    label: "Özel Tasarım",
    href: "/studio",
    children: [
      { label: "Neon Tasarla", href: "/studio", icon: "Sparkles" },
    ],
  },
];

export const CONTACT = {
  phone: "0546 815 6089",
  phoneHref: "tel:+905468156089",
  phone2: "0542 571 1321",
  phone2Href: "tel:+905425711321",
  whatsapp: "905468156089",
  email: "ikarusreklam@outlook.com",
  address: "Sanayi Mah. Reklamcılar Cad. No: 12/A, Kadıköy / İstanbul",
  workingHours: "Pzt – Cmt: 09.00 – 17.00",
};

export const PRODUCTS = [
  {
    id: 1,
    name: "Bi Güzellik Yap Kendine",
    category: "Kişisel",
    price: 5985,
    colors: ["#D9668A", "#5FAE7F"],
    tag: "Çok Satan",
    emoji: "✨",
  },
  {
    id: 2,
    name: "Daima Aşk İle",
    category: "Özel Gün",
    price: 5990,
    colors: ["#D9668A", "#FF8F66"],
    tag: "Yeni",
    emoji: "❤️",
  },
  {
    id: 3,
    name: "Hoşgeldiniz",
    category: "İşletme",
    price: 5680,
    colors: ["#F2B84B", "#5FAE7F"],
    tag: "Popüler",
    emoji: "👋",
  },
  {
    id: 4,
    name: "Neon Çerçeveli Ayna",
    category: "Ev Dekorasyon",
    price: 19950,
    colors: ["#5FAE7F", "#F2B84B"],
    tag: "Premium",
    emoji: "🪞",
  },
  {
    id: 5,
    name: "Taç Neon Tabela",
    category: "Kişisel",
    price: 3960,
    colors: ["#FF8F66", "#D9668A"],
    tag: "Çok Satan",
    emoji: "👑",
  },
  {
    id: 6,
    name: "OPEN — İşletme Tabelası",
    category: "İşletme",
    price: 4250,
    colors: ["#F2B84B", "#D9668A"],
    tag: "Popüler",
    emoji: "🟢",
  },
];

export const CATEGORIES = [
  {
    id: "kafe",
    title: "Kafe & Restoran",
    desc: "Mekanınızı yıldızlara taşıyın",
    color: "#FF8F66",
    emoji: "☕",
    count: "230+ tasarım",
  },
  {
    id: "guzellik",
    title: "Güzellik & Kuaför",
    desc: "Salonunuza premium dokunuş",
    color: "#D9668A",
    emoji: "💄",
    count: "180+ tasarım",
  },
  {
    id: "spor",
    title: "Spor & Fitness",
    desc: "Enerjinizi yansıtın",
    color: "#5FAE7F",
    emoji: "💪",
    count: "120+ tasarım",
  },
  {
    id: "ev",
    title: "Ev Dekorasyon",
    desc: "Yaşam alanınıza ışık katın",
    color: "#F2B84B",
    emoji: "🏠",
    count: "350+ tasarım",
  },
  {
    id: "ozel",
    title: "Özel Günler",
    desc: "Unutulmaz anlar için",
    color: "#D9668A",
    emoji: "🎉",
    count: "200+ tasarım",
  },
  {
    id: "kendin",
    title: "Kendin Tasarla",
    desc: "Hayal et, biz üretelim",
    color: "#5FAE7F",
    emoji: "✏️",
    count: "Sınırsız",
  },
];

export const TESTIMONIALS = [
  {
    name: "Deniz Kaya",
    role: "Kafe Sahibi, İstanbul",
    text: "Kafemiz için tasarlattığımız neon tabela müşterilerimizin en çok fotoğraf çektiği nokta oldu. Kalite mükemmel, teslimat hızlıydı.",
    rating: 5,
    color: "#D9668A",
  },
  {
    name: "Selin Arslan",
    role: "Güzellik Salonu, Ankara",
    text: "Cephemize yaptırdığımız kutu harf tabela salonumuzun görünürlüğünü ikiye katladı. Montaj ekibi de çok titizdi.",
    rating: 5,
    color: "#5FAE7F",
  },
  {
    name: "Mert Yılmaz",
    role: "Filo Yöneticisi, İzmir",
    text: "10 araçlık filomuzu araç giydirme ile yeniledik. Hem malzeme kalitesi hem de teslim süresi beklentimizin üzerindeydi.",
    rating: 5,
    color: "#F2B84B",
  },
  {
    name: "Ayşe Demir",
    role: "İç Mimar",
    text: "Projelerimde tabeladan baskıya, neon detaylara kadar Ikarus Reklam'ın tüm hizmetlerini kullanıyorum. Tek adresten hallediyorum.",
    rating: 5,
    color: "#FF8F66",
  },
];

export const BLOG_POSTS = [
  {
    title: "Kutu Harf mi, Işıklı Tabela mı? Doğru Seçimi Yapmak",
    excerpt: "Cephe tabelanızda hangi sistem işletmenize daha çok yakışır? Avantaj ve maliyetleri karşılaştırdık.",
    date: "9 Şubat 2026",
    readTime: "5 dk",
    color: "#D9668A",
  },
  {
    title: "Araç Giydirme ile Markanızı Sokaklara Taşıyın",
    excerpt: "Filo araçlarınız gezici bir reklam panosuna dönüşsün. Süreç nasıl işliyor, nelere dikkat etmeli?",
    date: "6 Şubat 2026",
    readTime: "4 dk",
    color: "#5FAE7F",
  },
  {
    title: "Neon Tabela Seçerken Dikkat Edilmesi Gerekenler",
    excerpt: "LED neon mi, gerçek neon mu? İşletmeniz için doğru tercihi nasıl yaparsınız?",
    date: "30 Ocak 2026",
    readTime: "6 dk",
    color: "#F2B84B",
  },
];

export const STATS = [
  { value: 10000, suffix: "+", label: "Üretim Tamamlandı", color: "#D9668A" },
  { value: 2000, suffix: "+", label: "Mutlu İşletme", color: "#F2B84B" },
  { value: 4.9, suffix: "", label: "Müşteri Puanı", color: "#5FAE7F", decimal: true },
  { value: 81, suffix: "", label: "İl Teslimat", color: "#FF8F66" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "İhtiyacını Anlat",
    desc: "Tabela, baskı, açık hava reklamı ya da neon — talebini web üzerinden, WhatsApp'tan ya da stüdyomuzdan bize ilet.",
    color: "#D9668A",
    icon: "✏️",
  },
  {
    step: "02",
    title: "Onayla",
    desc: "Uzman ekibimiz projeni inceler, teklif ve tasarım önerisini hazırlar. Beğenince üretime onay verirsin.",
    color: "#5FAE7F",
    icon: "✅",
  },
  {
    step: "03",
    title: "Teslim Al",
    desc: "Kendi atölyemizde özenle üretilen ürününüz Türkiye'nin 81 iline hızlı kargo ile kapınıza gelir.",
    color: "#F2B84B",
    icon: "📦",
  },
];

export const WHY_US = [
  { title: "Tek Çatı Altında Üretim", desc: "Tabela, baskı-matbaa, açık hava ve neon — hepsi kendi atölyemizde, aracısız üretilir.", icon: "🏭", color: "#D9668A" },
  { title: "Kişiye Özel Tasarım", desc: "Her proje sizin markanız için sıfırdan tasarlanır. Standart şablon zorunluluğu yok.", icon: "🎨", color: "#5FAE7F" },
  { title: "2 Yıl Garanti", desc: "Tüm ürünlerimizde 2 yıl üretici garantisi sunuyoruz.", icon: "🛡️", color: "#F2B84B" },
  { title: "81 İle Hızlı Teslimat", desc: "Standart siparişlerde 7-10 iş günü içinde teslim. Ekspres seçenek mevcut.", icon: "🚀", color: "#FF8F66" },
];
