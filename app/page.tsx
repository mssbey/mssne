import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { OtherServices } from "@/components/home/OtherServices";
import { NeonBoxContents } from "@/components/home/NeonBoxContents";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyUs } from "@/components/home/WhyUs";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogSection } from "@/components/home/BlogSection";
import { Newsletter } from "@/components/home/Newsletter";
import { WhatsAppCTA } from "@/components/home/WhatsAppCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <OtherServices />
      <NeonBoxContents />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <BlogSection />
      <WhatsAppCTA />
      <Newsletter />
    </>
  );
}
