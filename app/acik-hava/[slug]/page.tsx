import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ACIK_HAVA, getAcikHavaBySlug, getOtherAcikHava } from "@/lib/acik-hava";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { WhyUsSection } from "@/components/services/WhyUsSection";
import { UseCasesSection } from "@/components/services/UseCasesSection";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { MaterialsSection } from "@/components/services/MaterialsSection";
import { AdvantagesSection } from "@/components/services/AdvantagesSection";
import { GallerySection } from "@/components/services/GallerySection";
import { FaqSection } from "@/components/services/FaqSection";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { RelatedServices } from "@/components/services/RelatedServices";

const SITE_URL = "https://www.ikarusreklam.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ACIK_HAVA.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getAcikHavaBySlug(slug);
  if (!service) return {};

  const url = `${SITE_URL}/acik-hava/${service.slug}`;

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url,
      type: "website",
      siteName: "Ikarus Reklam",
      locale: "tr_TR",
    },
    twitter: {
      card: "summary_large_image",
      title: service.seo.title,
      description: service.seo.description,
    },
  };
}

export default async function AcikHavaDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getAcikHavaBySlug(slug);
  if (!service) notFound();

  const others = getOtherAcikHava(service.slug, 4);
  const url = `${SITE_URL}/acik-hava/${service.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.seo.description,
        url,
        areaServed: { "@type": "Country", name: "Türkiye" },
        provider: {
          "@type": "Organization",
          name: "Ikarus Reklam",
          url: SITE_URL,
          telephone: "+905001234567",
          email: "info@ikarusreklam.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Açık Hava Reklamları", item: `${SITE_URL}/acik-hava` },
          { "@type": "ListItem", position: 3, name: service.shortTitle, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceHero service={service} />
      <ServiceIntro service={service} />
      <WhyUsSection service={service} />
      <UseCasesSection service={service} />
      <ProcessTimeline service={service} />
      <MaterialsSection service={service} />
      <AdvantagesSection service={service} />
      <GallerySection service={service} />
      <FaqSection service={service} />
      <ServiceCTA service={service} />
      <RelatedServices
        services={others}
        eyebrow="Diğer Açık Hava Reklamlarımız"
        heading="Açık Hava Reklam Çözümlerimizin Tamamını Keşfedin"
      />
    </>
  );
}
