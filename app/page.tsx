import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { CategorySection } from '../components/CategorySection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { ShowcaseCarousel } from '../components/ShowcaseCarousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CategorySection
          title="Entertainment Videos"
          description="High-energy videos designed to capture attention on social media and TV. We combine dynamic typography, live-action footage, and rhythm-perfect editing."
          imageSrc="https://youtu.be/HSlVSMFWt0U?si=WB9TUrAG25VZYGMC"
        />
        <CategorySection
          title="Educational Videos"
          description="Walk your users through your product with crystal-clear screen recordings and motion graphics. Increase adoption rates and reduce support tickets with visual guides."
          imageSrc="https://youtu.be/VLk0iBjW2EQ?si=WAtS60iFBDtK5OhP"
          inverted
        />
        <CategorySection
          title="Documentary Videos"
          description="Simplify complex ideas with engaging 2D and 3D animations. Perfect for SaaS products, fintech solutions, and educational content that needs to be understood in seconds."
          imageSrc="https://youtu.be/4YWx5DkBfH4?si=JDNFO6J-UvRhXoyy"
        />
        <ShowcaseCarousel
          heading="Motion Graphics"
          description=""
          items={[
            { title: '', video: '/Graphic_02.mp4' },
            { title: '', video: '/Graphic_01.mp4' },
            { title: '', video: '/Graphic_03.mp4' },
          ]}
        />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}