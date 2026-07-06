export const NAV_ITEMS = [
  {
    label: "Tabela Sistemleri",
    href: "/hizmetler",
    children: [
      { label: "Kutu Harf", href: "/hizmetler/kutu-harf", icon: "🔠" },
      { label: "Işıklı / Işıksız Tabela", href: "/hizmetler/isikli-isiksiz-tabela", icon: "💡" },
      { label: "Kompozit Tabela", href: "/hizmetler/kompozit-tabela", icon: "🪟" },
      { label: "Totem", href: "/hizmetler/totem", icon: "🗿" },
      { label: "Cephe Giydirme", href: "/hizmetler/cephe-giydirme", icon: "🏢" },
    ],
  },
  { label: "Neon Tabela", href: "/urunler" },
  {
    label: "Baskı ve Matbaa",
    href: "/baski-matbaa",
    children: [
      { label: "Kartvizit", href: "/baski-matbaa/kartvizit", icon: "🪪" },
      { label: "Broşür", href: "/baski-matbaa/brosur", icon: "📄" },
      { label: "Magnet", href: "/baski-matbaa/magnet", icon: "🧲" },
      { label: "Davetiye", href: "/davetiyeler", icon: "💌" },
    ],
  },
  {
    label: "Açık Hava Reklamları",
    href: "/acik-hava",
    children: [
      { label: "Billboard", href: "/acik-hava/billboard", icon: "🖼️" },
      { label: "Vinil Germe", href: "/acik-hava/vinil-germe", icon: "🎨" },
      { label: "Araç Giydirme", href: "/acik-hava/arac-giydirme", icon: "🚗" },
    ],
  },
  {
    label: "Kendin Tasarla",
    href: "/studio",
    children: [
      { label: "Davetiye Tasarla", href: "/studio", icon: "💌" },
      { label: "Kartvizit / Broşür / Tabela Tasarla", href: "/studio", icon: "🎨" },
      { label: "Neon Tasarla", href: "/studio", icon: "✨" },
    ],
  },
];

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
    text: "Stüdyo üzerinden kendi tasarımımı oluşturdum ve tam hayal ettiğim gibi çıktı. Ikarus Reklam'ı herkese tavsiye ederim.",
    rating: 5,
    color: "#5FAE7F",
  },
  {
    name: "Mert Yılmaz",
    role: "Spor Salonu, İzmir",
    text: "3 farklı neon sipariş verdik, hepsi harika. Hem malzeme kalitesi hem de müşteri hizmetleri çok iyiydi.",
    rating: 5,
    color: "#F2B84B",
  },
  {
    name: "Ayşe Demir",
    role: "İç Mimar",
    text: "Projelerimde Ikarus Reklam ürünlerini kullanıyorum. Müşterilerimin tepkisi her seferinde harika oluyor.",
    rating: 5,
    color: "#FF8F66",
  },
];

export const BLOG_POSTS = [
  {
    title: "Neon Tabela Seçerken Dikkat Edilmesi Gerekenler",
    excerpt: "LED neon mi, gerçek neon mu? İşletmeniz için doğru tercihi nasıl yaparsınız?",
    date: "9 Şubat 2026",
    readTime: "5 dk",
    color: "#D9668A",
  },
  {
    title: "Kafelerde Neon Tabela Kullanımı",
    excerpt: "Mekanınızın ambiyansını neon ışıklarla nasıl zirveye taşıyabilirsiniz?",
    date: "6 Şubat 2026",
    readTime: "4 dk",
    color: "#5FAE7F",
  },
  {
    title: "Ev Dekorasyonunda Neon Trend",
    excerpt: "2026'nın en gözde ev dekorasyonu trendi: kişiselleştirilmiş neon tabelalar.",
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
    title: "Tasarla",
    desc: "Online stüdyomuzda yazını gir, fontunu ve rengini seç. Gerçek zamanlı önizleme ile tam olarak ne alacağını gör.",
    color: "#D9668A",
    icon: "✏️",
  },
  {
    step: "02",
    title: "Onayla",
    desc: "WhatsApp veya web üzerinden bize ulaş. Uzman ekibimiz tasarımı inceler ve üretim için onay gönderir.",
    color: "#5FAE7F",
    icon: "✅",
  },
  {
    step: "03",
    title: "Teslim Al",
    desc: "Premium ambalajda, özenle paketlenmiş ürününüz Türkiye'nin 81 iline hızlı kargo ile kapınıza gelir.",
    color: "#F2B84B",
    icon: "📦",
  },
];

export const WHY_US = [
  { title: "LED Neon Teknolojisi", desc: "Geleneksel cama kıyasla %80 daha az enerji tüketimi, daha uzun ömür.", icon: "⚡", color: "#D9668A" },
  { title: "Kişiye Özel Üretim", desc: "Her tasarım sizin için sıfırdan üretilir. Standart boyut zorunluluğu yok.", icon: "🎨", color: "#5FAE7F" },
  { title: "2 Yıl Garanti", desc: "Tüm ürünlerimizde 2 yıl üretici garantisi sunuyoruz.", icon: "🛡️", color: "#F2B84B" },
  { title: "Hızlı Teslimat", desc: "Standart siparişlerde 7-10 iş günü içinde teslim. Ekspres seçenek mevcut.", icon: "🚀", color: "#FF8F66" },
];
