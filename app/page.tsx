import LandingSection from "@/app/components/LandingSection";
import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import PartnersSection from "@/app/components/PartnersSection";
import CarForSaleSection from "@/app/components/CarForSaleSection";
import AboutSection from "@/app/components/AboutSection";
import CarXpertSection from "@/app/components/CarXpertSection";


export default function Home() {
  return (
    <>
      <div className="w-full">
        <LandingSection />
        <div className="py-12"></div>
        <AboutSection />
        <div className="py-12"></div>
        <PartnersSection />
        <div className="py-12"></div>
        <CarXpertSection />
        <div className="py-12"></div>
        <CarForSaleSection />
        <div className="py-12"></div>
        <ClientReviewsSection />
      </div>
    </>
  );
}
