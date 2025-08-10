import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { TargetAudience } from "@/components/target-audience"
import { FinalCTA } from "@/components/final-cta"
import { ProductPreview } from "@/components/product-preview"
import { Footer } from "@/components/footer"
import { StickyBuyButton } from "@/components/sticky-buy-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StorySection />
      <FeaturesSection />
      <TestimonialsSection />
      <TargetAudience />
      <FinalCTA />
      <ProductPreview />
      <Footer />
      <StickyBuyButton />
    </main>
  )
}
