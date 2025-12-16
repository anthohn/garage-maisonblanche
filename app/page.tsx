import LandingSection from "@/app/components/LandingSection";
import ClientReviewsSection from "@/app/components/ClientReviewsSection";
import LogoBandSection from "@/app/components/LogoBandSection";
import CarForSaleSection from "@/app/components/CarForSaleSection";
import PresentationSection from "@/app/components/PresentationSection";
import CarXpertSection from "@/app/components/CarXpertSection";


export default function Home() {
  return (
    <>
      <div className="w-full">
        <LandingSection />
        <div className="py-12"></div>
        <PresentationSection />
        <div className="py-12"></div>
        <CarForSaleSection />
        <div className="py-12"></div>
        <LogoBandSection />
        <div className="py-12"></div>
        <CarXpertSection />
        <div className="py-12"></div>
        <ClientReviewsSection />
        <div className="py-12"></div>
        <div className="py-12"></div>
      </div>
    </>
  );
}
