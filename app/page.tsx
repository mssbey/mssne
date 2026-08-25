import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { OtherServices } from "@/components/home/OtherServices";
import { NeonBoxContents } from "@/components/home/NeonBoxContents";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";
import { defaultHero } from "@/lib/cms/defaults";
import { db } from "@/lib/db";

export default async function HomePage() {
  const [section, testimonials] = await Promise.all([
    db.pageSection.findUnique({ where: { id: "home-hero" } }).catch(() => null),
    db.testimonial.findMany({ where: { deletedAt: null, active: true }, orderBy: { sortOrder: "asc" }, take: 8 }).catch(() => []),
  ]);
  const hero = { ...defaultHero, ...((section?.content as Partial<typeof defaultHero>) || {}) };
  return (
    <>
      {(section?.enabled ?? true) && <HeroSection content={hero} />}
      <StatsSection />
      <OtherServices />
      <NeonBoxContents />
      <HowItWorks />
      <WhyUs />
      <Testimonials items={testimonials.length ? testimonials.map((item, index) => ({ name: item.name, role: [item.position, item.company].filter(Boolean).join(" · "), text: item.comment, rating: item.rating, color: ["#D9668A", "#5FAE7F", "#F2B84B", "#FF8F66"][index % 4] })) : undefined} />
      <WhatsAppCTA />
      <Newsletter />
    </>
  );
}
