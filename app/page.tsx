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
          title="Documentary Videos"
          description="Simplify complex ideas with engaging 2D and 3D animations. Perfect for SaaS products, fintech solutions, and educational content that needs to be understood in seconds."
          imageSrc="https://youtu.be/4YWx5DkBfH4?si=JDNFO6J-UvRhXoyy"
        />
        <CategorySection
          title="Educational Videos"
          description="Walk your users through your product with crystal-clear screen recordings and motion graphics. Increase adoption rates and reduce support tickets with visual guides."
          imageSrc="https://youtu.be/VLk0iBjW2EQ?si=WAtS60iFBDtK5OhP"
          inverted
        />
        <CategorySection
          title="Entertainment Videos"
          description="High-energy videos designed to capture attention on social media and TV. We combine dynamic typography, live-action footage, and rhythm-perfect editing."
          imageSrc="https://youtu.be/HSlVSMFWt0U?si=WB9TUrAG25VZYGMC"
        />
        <ShowcaseCarousel
          heading="Animated Explainer Videos"
          description="Our Animated Explainer videos are here to help you obtain the image you want and need in only 60-90 seconds. Explainer videos are the easiest and most efficient way of breaking down key information about your product. Demonstrate your strengths & prove your worth through us."
          items={[
            { title: 'Blend', image: 'https://img.youtube.com/vi/H9hxJiaCjNY/0.jpg' },
            { title: 'Cornix', image: 'https://img.youtube.com/vi/cCO5OMP5ZDw/0.jpg' },
            { title: 'Onyxia', image: 'https://img.youtube.com/vi/H9hxJiaCjNY/0.jpg' },
          ]}
        />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}