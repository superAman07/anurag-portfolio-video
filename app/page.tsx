import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProjectGrid } from '../components/ProjectGrid';
import { CategorySection } from '../components/CategorySection';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { ShowcaseCarousel } from '../components/ShowcaseCarousel';
import { VideoShowcase } from '../components/VideoShowcase';

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
          heading="Educational videos"
          description={"Professional editing for educational content that holds attention. I focus on clear pacing, strategic B-roll, and clean visuals to help your audience actually retain and understand what they're learning."}
          items={[
            { title: '', video: 'https://www.youtube.com/watch?v=8nm9KAYl3Cg' },
            { title: '', video: 'https://drive.google.com/file/d/1h8nm8nTl_PiUDmv0CfRIU1dPHucbRLLZ/view?usp=drive_link' },
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
        <VideoShowcase
          heading="Video Showcase"
          description=""
          initialIndex={5}
          videos={[
            'https://res.cloudinary.com/ui17kpco/video/upload/Act_Like_the_Runner_V3_flttnw.mp4',
            'https://res.cloudinary.com/ui17kpco/video/upload/Don_t_Switch_Your_Number_-_Hook_1_9x16_qcijcv.mp4',
            'https://res.cloudinary.com/ui17kpco/video/upload/Hard_Comedy_-_Hook_1_9x16_V3_zi7ddf.mp4',
            'https://res.cloudinary.com/ui17kpco/video/upload/Video_Retention_Test_-_Hook_1_9x16_cjqeuf.mp4',
            'https://res.cloudinary.com/ui17kpco/video/upload/One_piece_ep1_x9troz.mp4',
            'https://res.cloudinary.com/ui17kpco/video/upload/9x16_Free_Scan_Callout_gobu1x.mp4',
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