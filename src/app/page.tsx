import { Navigation } from "@/components/navigation";
import { HeroCarousel } from "@/components/carousel/heroCarousel";
import { slides } from "@/components/carousel/carouselData";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroCarousel slides={slides} fullBleed={true} />
    </>
  );
}
