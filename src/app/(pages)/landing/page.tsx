import { BasketCard } from "@/app/components/layout/basket/BasketCard";
import { Hero } from "@/app/components/layout/main/Hero";
import { HitsSection } from "@/app/components/layout/main/HitsSection";
import { AboutUsSection } from "@/app/components/layout/main/AboutUsSection";
import { ReservationForm } from "@/app/components/layout/main/ReservationForm";
import { ReviewsSection } from "@/app/components/layout/main/ReviewsSection";
import { MenuProvider } from "@/app/context/MenuContext";

export default async function Landing() {

  const data = await fetch("https://688b08f42a52cabb9f4fc059.mockapi.io/menu");
  const menu = await data.json();

  return (
    <MenuProvider>
      <div className="bg-body-bg">
        {/* <Hero />
      <HitsSection />
      <AboutUsSection />
      <ReservationSection />
      <ReviewsSection /> */}
        <BasketCard menuItem={menu[0]}/>
      </div>
    </MenuProvider>
  );
}
