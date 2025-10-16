import AboutHero from "@/components/aboutComponents/AboutHeroComponent";
import AwardsSection from "@/components/aboutComponents/award";
import CallToAction from "@/components/aboutComponents/calltoAction";
import ClinicHistory from "@/components/aboutComponents/clinic";
import GallerySection from "@/components/aboutComponents/gallery";
import MissionVision from "@/components/aboutComponents/mission";
import ApproachSection from "@/components/aboutComponents/ourApproach";
import TeamSection from "@/components/aboutComponents/teamSelection";
import Testimonials from "@/components/aboutComponents/testimonial";

export default function AboutPage() {
  return (
    <>
    <AboutHero/>
    <ClinicHistory/>
    <MissionVision/>
    <TeamSection/>
    <ApproachSection/>
    <GallerySection/>
    <Testimonials/>
    <AwardsSection/>
    <CallToAction/>

    </>
  )
}