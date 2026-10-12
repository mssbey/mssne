import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/services";
import { getCmsService, getCmsServices } from "@/lib/cms/services";
import { getPublicSettings } from "@/lib/cms/settings";
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
import { KutuHarfDesigner } from "@/components/services/KutuHarfDesigner";

const SITE_URL = "https://www.ikarusreklam.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getCmsService(slug);
  if (!service) return {};

  const url = `${SITE_URL}/hizmetler/${service.slug}`;

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

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getCmsService(slug);
  if (!service) notFound();

  const [services, settings] = await Promise.all([getCmsServices(), getPublicSettings()]);
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 4);
  const url = `${SITE_URL}/hizmetler/${service.slug}`;

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
          telephone: `+${settings.contact.whatsapp}`,
          email: settings.contact.email,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/hizmetler` },
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
      <ServiceHero service={service} showGalleryLink={service.slug === "kutu-harf"} />
      {service.slug === "kutu-harf" && <KutuHarfDesigner service={service} />}
      <ServiceIntro service={service} />
      {service.whyUs.length > 0 && <WhyUsSection service={service} />}
      {service.useCases.length > 0 && <UseCasesSection service={service} />}
      {service.process.length > 0 && <ProcessTimeline service={service} />}
      {service.materials.length > 0 && <MaterialsSection service={service} />}
      {service.advantages.length > 0 && <AdvantagesSection service={service} />}
      {service.slug === "kutu-harf" && <GallerySection service={service} />}
      {service.faq.length > 0 && <FaqSection service={service} />}
      <ServiceCTA service={service} />
      <RelatedServices services={others} />
    </>
  );
}
