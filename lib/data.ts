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
  { label: "Neon Tabela", href: "#" },
  {
    label: "Baskı ve Matbaa",
    href: "#",
    children: [
      { label: "Kartvizit", href: "#", icon: "🪪" },
      { label: "Broşür", href: "#", icon: "📄" },
      { label: "Magnet", href: "#", icon: "🧲" },
      { label: "Davetiye", href: "/davetiyeler", icon: "💌" },
    ],
  },
  {
    label: "Açık Hava Reklamları",
    href: "#",
    children: [
      { label: "Billboard", href: "#", icon: "🖼️" },
      { label: "Vinil Germe", href: "#", icon: "🎨" },
      { label: "Araç Giydirme", href: "#", icon: "🚗" },
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
    colors: ["#FF00C8", "#9B5CFF"],
    tag: "Çok Satan",
    emoji: "✨",
  },
  {
    id: 2,
    name: "Daima Aşk İle",
    category: "Özel Gün",
    price: 5990,
    colors: ["#FF00C8", "#FF7A00"],
    tag: "Yeni",
    emoji: "❤️",
  },
  {
    id: 3,
    name: "Hoşgeldiniz",
    category: "İşletme",
    price: 5680,
    colors: ["#00E5FF", "#9B5CFF"],
    tag: "Popüler",
    emoji: "👋",
  },
  {
    id: 4,
    name: "Neon Çerçeveli Ayna",
    category: "Ev Dekorasyon",
    price: 19950,
    colors: ["#9B5CFF", "#00E5FF"],
    tag: "Premium",
    emoji: "🪞",
  },
  {
    id: 5,
    name: "Taç Neon Tabela",
    category: "Kişisel",
    price: 3960,
    colors: ["#FF7A00", "#FF00C8"],
    tag: "Çok Satan",
    emoji: "👑",
  },
  {
    id: 6,
    name: "OPEN — İşletme Tabelası",
    category: "İşletme",
    price: 4250,
    colors: ["#00E5FF", "#FF00C8"],
    tag: "Popüler",
    emoji: "🟢",
  },
];

export const CATEGORIES = [
  {
    id: "kafe",
    title: "Kafe & Restoran",
    desc: "Mekanınızı yıldızlara taşıyın",
    color: "#FF7A00",
    emoji: "☕",
    count: "230+ tasarım",
  },
  {
    id: "guzellik",
    title: "Güzellik & Kuaför",
    desc: "Salonunuza premium dokunuş",
    color: "#FF00C8",
    emoji: "💄",
    count: "180+ tasarım",
  },
  {
    id: "spor",
    title: "Spor & Fitness",
    desc: "Enerjinizi yansıtın",
    color: "#9B5CFF",
    emoji: "💪",
    count: "120+ tasarım",
  },
  {
    id: "ev",
    title: "Ev Dekorasyon",
    desc: "Yaşam alanınıza ışık katın",
    color: "#00E5FF",
    emoji: "🏠",
    count: "350+ tasarım",
  },
  {
    id: "ozel",
    title: "Özel Günler",
    desc: "Unutulmaz anlar için",
    color: "#FF00C8",
    emoji: "🎉",
    count: "200+ tasarım",
  },
  {
    id: "kendin",
    title: "Kendin Tasarla",
    desc: "Hayal et, biz üretelim",
    color: "#9B5CFF",
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
    color: "#FF00C8",
  },
  {
    name: "Selin Arslan",
    role: "Güzellik Salonu, Ankara",
    text: "Stüdyo üzerinden kendi tasarımımı oluşturdum ve tam hayal ettiğim gibi çıktı. Ikarus Reklam'ı herkese tavsiye ederim.",
    rating: 5,
    color: "#9B5CFF",
  },
  {
    name: "Mert Yılmaz",
    role: "Spor Salonu, İzmir",
    text: "3 farklı neon sipariş verdik, hepsi harika. Hem malzeme kalitesi hem de müşteri hizmetleri çok iyiydi.",
    rating: 5,
    color: "#00E5FF",
  },
  {
    name: "Ayşe Demir",
    role: "İç Mimar",
    text: "Projelerimde Ikarus Reklam ürünlerini kullanıyorum. Müşterilerimin tepkisi her seferinde harika oluyor.",
    rating: 5,
    color: "#FF7A00",
  },
];

export const BLOG_POSTS = [
  {
    title: "Neon Tabela Seçerken Dikkat Edilmesi Gerekenler",
    excerpt: "LED neon mi, gerçek neon mu? İşletmeniz için doğru tercihi nasıl yaparsınız?",
    date: "9 Şubat 2026",
    readTime: "5 dk",
    color: "#FF00C8",
  },
  {
    title: "Kafelerde Neon Tabela Kullanımı",
    excerpt: "Mekanınızın ambiyansını neon ışıklarla nasıl zirveye taşıyabilirsiniz?",
    date: "6 Şubat 2026",
    readTime: "4 dk",
    color: "#9B5CFF",
  },
  {
    title: "Ev Dekorasyonunda Neon Trend",
    excerpt: "2026'nın en gözde ev dekorasyonu trendi: kişiselleştirilmiş neon tabelalar.",
    date: "30 Ocak 2026",
    readTime: "6 dk",
    color: "#00E5FF",
  },
];

export const STATS = [
  { value: 10000, suffix: "+", label: "Üretim Tamamlandı", color: "#FF00C8" },
  { value: 2000, suffix: "+", label: "Mutlu İşletme", color: "#00E5FF" },
  { value: 4.9, suffix: "", label: "Müşteri Puanı", color: "#9B5CFF", decimal: true },
  { value: 81, suffix: "", label: "İl Teslimat", color: "#FF7A00" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Tasarla",
    desc: "Online stüdyomuzda yazını gir, fontunu ve rengini seç. Gerçek zamanlı önizleme ile tam olarak ne alacağını gör.",
    color: "#FF00C8",
    icon: "✏️",
  },
  {
    step: "02",
    title: "Onayla",
    desc: "WhatsApp veya web üzerinden bize ulaş. Uzman ekibimiz tasarımı inceler ve üretim için onay gönderir.",
    color: "#9B5CFF",
    icon: "✅",
  },
  {
    step: "03",
    title: "Teslim Al",
    desc: "Premium ambalajda, özenle paketlenmiş ürününüz Türkiye'nin 81 iline hızlı kargo ile kapınıza gelir.",
    color: "#00E5FF",
    icon: "📦",
  },
];

export const WHY_US = [
  { title: "LED Neon Teknolojisi", desc: "Geleneksel cama kıyasla %80 daha az enerji tüketimi, daha uzun ömür.", icon: "⚡", color: "#FF00C8" },
  { title: "Kişiye Özel Üretim", desc: "Her tasarım sizin için sıfırdan üretilir. Standart boyut zorunluluğu yok.", icon: "🎨", color: "#9B5CFF" },
  { title: "2 Yıl Garanti", desc: "Tüm ürünlerimizde 2 yıl üretici garantisi sunuyoruz.", icon: "🛡️", color: "#00E5FF" },
  { title: "Hızlı Teslimat", desc: "Standart siparişlerde 7-10 iş günü içinde teslim. Ekspres seçenek mevcut.", icon: "🚀", color: "#FF7A00" },
];
