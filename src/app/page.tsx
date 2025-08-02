import { AboutUsSection } from "./components/layout/main/AboutUsSection";
import { Hero } from "./components/layout/main/Hero";
import { HitsSection } from "./components/layout/main/HitsSection";
import { ReservationSection } from "./components/layout/main/ReservationSection";
import { ReviewsSection } from "./components/layout/main/ReviewsSection";

export default function Home() {
  return (
    <div className="bg-body-bg">
      <Hero />
      <HitsSection />
      <AboutUsSection />
      <ReservationSection />
      <ReviewsSection />
    </div>
  );
}
