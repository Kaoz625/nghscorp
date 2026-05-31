import Hero from '@/components/Hero'
import StatsBar from '@/components/StatsBar'
import WhoWeHelp from '@/components/WhoWeHelp'
import ServicesOverview from '@/components/ServicesOverview'
import PhotoBreak from '@/components/PhotoBreak'
import ProcessTeaser from '@/components/ProcessTeaser'
import Testimonials from '@/components/Testimonials'
import AboutTeaser from '@/components/AboutTeaser'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WhoWeHelp />
      <ServicesOverview />
      <PhotoBreak />
      <ProcessTeaser />
      <Testimonials />
      <AboutTeaser />
      <CTABanner />
    </>
  )
}
