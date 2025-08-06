import { Hero } from "@/app/components/layout/main/Hero";
import { HitsSection } from "@/app/components/layout/main/HitsSection";
import { AboutUsSection } from "@/app/components/layout/main/AboutUsSection";
import { ReservationForm } from "@/app/components/layout/main/ReservationForm";
import { ReviewsSection } from "@/app/components/layout/main/ReviewsSection";
import { MenuProvider } from "@/app/context/MenuContext";

export default async function Landing() {

  return (
    <MenuProvider>
      <div className="bg-body-bg">
        <Hero />
      <HitsSection />
      <AboutUsSection />
      <ReservationForm />
      <ReviewsSection />
      </div>
    </MenuProvider>
  );
}
