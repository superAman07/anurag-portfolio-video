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
          description="Entertainment videos with energy and purpose. I blend storytelling with music-driven pacing to create content that's not just watchable — it's rewatchable."
          imageSrc="https://youtu.be/HSlVSMFWt0U?si=WB9TUrAG25VZYGMC"
        />
        <ShowcaseCarousel
          heading="Educationa video"
          description={"Professional editing for educational content that holds attention. I focus on clear pacing, strategic B-roll, and clean visuals to help your audience actually retain and understand what they're learning."}
          items={[
            { title: '', video: 'https://youtu.be/VLk0iBjW2EQ?si=WAtS60iFBDtK5OhP' },
            { title: '', video: 'https://youtu.be/VLk0iBjW2EQ?si=WAtS60iFBDtK5OhP' },
            { title: '', video: 'https://youtu.be/VLk0iBjW2EQ?si=WAtS60iFBDtK5OhP' },
          ]}
        />
        <CategorySection
          title="Documentary Videos"
          description="Documentary editing that holds attention. I craft educational and narrative-driven content with strategic pacing, B-roll integration, and music selection designed to maximize watch time and keep your audience engaged till the end."
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
        <div className='pt-20 sm:pt-24 lg:pt-32'>
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}