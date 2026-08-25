import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";
import { hash } from "bcryptjs";
import { SERVICES } from "../lib/services";
import { defaultHero, defaultSettings } from "../lib/cms/defaults";
import { PROMO_CATEGORIES } from "../lib/promosyon";
import { syncPublicMedia } from "../lib/media/sync-public";

const db = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL,
  }),
});

async function main() {
  await db.siteSetting.upsert({
    where: { id: "main" },
    update: {},
    create: { id: "main", ...defaultSettings },
  });

  const home = await db.page.upsert({
    where: { slug: "ana-sayfa" },
    update: {},
    create: {
      name: "Ana Sayfa",
      slug: "ana-sayfa",
      status: "PUBLISHED",
      template: "HOME",
      seoTitle: String(defaultSettings.seo.title),
      seoDescription: String(defaultSettings.seo.description),
    },
  });

  const standardPages = [
    { name: "Promosyon Ürünleri", slug: "promosyon", template: "PROMOTION", coverImage: "/promosyon/hero.jpg", excerpt: "Logonuzu taşıyan kurumsal hediye ve promosyon ürünlerini keşfedin." },
    { name: "Hizmetler", slug: "hizmetler", template: "SERVICES", coverImage: "/home/services/signage.webp", excerpt: "Keşiften montaja profesyonel tabela ve cephe çözümleri." },
    { name: "Açık Hava Reklamları", slug: "acik-hava", template: "OUTDOOR", coverImage: "/home/services/outdoor.webp", excerpt: "Şehirde ve yolda görünürlük sağlayan açık hava reklam çözümleri." },
    { name: "Baskı ve Matbaa", slug: "baski-matbaa", template: "PRINT", coverImage: "/home/services/print.webp", excerpt: "Kurumsal baskı ve tanıtım materyallerini inceleyin." },
    { name: "Projeler", slug: "projeler", template: "PROJECTS", coverImage: null, excerpt: "Markalar için tasarladığımız seçili projeleri inceleyin." },
    { name: "İletişim", slug: "iletisim", template: "CONTACT", coverImage: null, excerpt: "Projenizi anlatın, ekibimiz size en uygun çözümle ulaşsın." },
    { name: "Tüm Ürünler", slug: "urunler", template: "PRODUCTS", coverImage: null, excerpt: "Kişiye özel neon tabela ve dekoratif neon ürünlerini keşfedin." },
    { name: "Neon Çalışmalarımız", slug: "galeri", template: "GALLERY", coverImage: null, excerpt: "İşletme, ev dekorasyonu ve özel günler için hazırladığımız neon çalışmalarından ilham alın." },
    { name: "Davetiyeler", slug: "davetiyeler", template: "INVITATIONS", coverImage: "/home/services/invitations.webp", excerpt: "Düğün, nişan ve özel günleriniz için davetiye modellerimizi inceleyin." },
    { name: "Neon Stüdyo", slug: "studio", template: "STUDIO", coverImage: null, excerpt: "Yazınızı, renginizi ve ölçünüzü seçerek kişiye özel neon tasarımınızı hazırlayın." },
    { name: "Gizlilik Politikası", slug: "gizlilik-politikasi", template: "LEGAL", coverImage: null, excerpt: "Kişisel verilerin işlenmesi, korunması ve haklarınız hakkında bilgi edinin." },
    { name: "İade Şartları", slug: "iade-sartlari", template: "LEGAL", coverImage: null, excerpt: "Sipariş iptali, cayma hakkı ve geri ödeme süreçlerini inceleyin." },
    { name: "Mesafeli Satış Sözleşmesi", slug: "satis-sozlesmesi", template: "LEGAL", coverImage: null, excerpt: "Uzaktan satış sürecinin temel hak ve yükümlülüklerini inceleyin." },
  ];
  for (const [sortOrder, page] of standardPages.entries()) {
    await db.page.upsert({
      where: { slug: page.slug },
      update: {},
      create: { ...page, status: "PUBLISHED", sortOrder: sortOrder + 1 },
    });
  }
  await db.pageSection.upsert({
    where: { id: "home-hero" },
    update: {},
    create: {
      id: "home-hero",
      pageId: home.id,
      type: "HERO",
      name: "Hero",
      sortOrder: 0,
      content: defaultHero,
    },
  });

  for (const [index, service] of SERVICES.entries()) {
    await db.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: {
        name: service.title,
        slug: service.slug,
        shortDescription: service.tagline,
        content: JSON.parse(JSON.stringify(service)),
        coverImage: `/hizmetler/${service.slug}/hero.jpg`,
        icon: service.heroIcon,
        status: "PUBLISHED",
        active: true,
        featured: index < 4,
        showOnHome: index < 4,
        sortOrder: index,
        publishedAt: new Date(),
        seoTitle: service.seo.title,
        seoDescription: service.seo.description,
        seoKeywords: service.seo.keywords.join(", "),
      },
    });
  }

  for (const [categoryIndex, category] of PROMO_CATEGORIES.entries()) {
    const storedCategory = await db.promotionCategory.upsert({
      where: { slug: category.slug },
      update: {},
      create: {
        name: category.title,
        slug: category.slug,
        description: category.desc,
        image: category.image,
        icon: category.icon,
        color: category.color,
        active: true,
        sortOrder: categoryIndex,
      },
    });
    for (const [productIndex, product] of category.products.entries()) {
      await db.promotionProduct.upsert({
        where: { slug: product.slug },
        update: {},
        create: {
          categoryId: storedCategory.id,
          name: product.name,
          slug: product.slug,
          description: product.description,
          features: product.features,
          minQty: product.minQty,
          image: product.image,
          status: "PUBLISHED",
          active: true,
          sortOrder: productIndex,
        },
      });
    }
  }

  const mediaResult = await syncPublicMedia(db);
  console.log(`Medya senkronu: ${mediaResult.created} yeni, ${mediaResult.total} toplam görsel.`);

  const header = await db.menu.upsert({
    where: { location: "HEADER" },
    update: {},
    create: { name: "Üst Menü", location: "HEADER" },
  });
  const footer = await db.menu.upsert({
    where: { location: "FOOTER" },
    update: {},
    create: { name: "Alt Menü", location: "FOOTER" },
  });
  const headerItems = [
    ["Ana Sayfa", "/"],
    ["Hizmetler", "/hizmetler"],
    ["Baskı & Matbaa", "/baski-matbaa"],
    ["Açık Hava", "/acik-hava"],
    ["Promosyon", "/promosyon"],
    ["İletişim", "/iletisim"],
  ];
  const footerItems = [
    ["Hizmetler", "/hizmetler"],
    ["Neon Tasarla", "/studio"],
    ["İletişim", "/iletisim"],
    ["Gizlilik Politikası", "/gizlilik-politikasi"],
    ["İade Şartları", "/iade-sartlari"],
    ["Mesafeli Satış Sözleşmesi", "/satis-sozlesmesi"],
  ];
  if ((await db.menuItem.count({ where: { menuId: header.id } })) === 0) {
    await db.menuItem.createMany({
      data: headerItems.map(([label, url], sortOrder) => ({
        menuId: header.id,
        label,
        url,
        sortOrder,
      })),
    });
  }
  if ((await db.menuItem.count({ where: { menuId: footer.id } })) === 0) {
    await db.menuItem.createMany({
      data: footerItems.map(([label, url], sortOrder) => ({
        menuId: footer.id,
        label,
        url,
        sortOrder,
      })),
    });
  }

  const email = process.env.INITIAL_ADMIN_EMAIL;
  const password = process.env.INITIAL_ADMIN_PASSWORD;
  if (email && password) {
    if (password.length < 12) throw new Error("INITIAL_ADMIN_PASSWORD en az 12 karakter olmalı.");
    await db.user.upsert({
      where: { email: email.toLowerCase() },
      update: {},
      create: {
        name: process.env.INITIAL_ADMIN_NAME || "Site Yöneticisi",
        email: email.toLowerCase(),
        passwordHash: await hash(password, 12),
        role: "SUPER_ADMIN",
      },
    });
    console.log(`İlk yönetici hazır: ${email}`);
  } else {
    console.log("Yönetici oluşturulmadı. INITIAL_ADMIN_EMAIL ve INITIAL_ADMIN_PASSWORD tanımlayın.");
  }
}

main()
  .finally(async () => db.$disconnect());
