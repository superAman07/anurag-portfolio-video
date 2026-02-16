import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { CategorySection } from '../components/CategorySection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CategorySection
          title="Animated Explainer Videos"
          description="Simplify complex ideas with engaging 2D and 3D animations. Perfect for SaaS products, fintech solutions, and educational content that needs to be understood in seconds."
          imageSrc="https://picsum.photos/seed/explainer/800/500"
        />
        <CategorySection
          title="App Tutorials & Demos"
          description="Walk your users through your product with crystal-clear screen recordings and motion graphics. Increase adoption rates and reduce support tickets with visual guides."
          imageSrc="https://picsum.photos/seed/tutorial/800/500"
          inverted
        />
        <CategorySection
          title="Promo & Commercials"
          description="High-energy videos designed to capture attention on social media and TV. We combine dynamic typography, live-action footage, and rhythm-perfect editing."
          imageSrc="https://picsum.photos/seed/promo99/800/500"
        />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}