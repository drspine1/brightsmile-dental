import AboutHero from "@/components/aboutComponents/AboutHeroComponent";
import AwardsSection from "@/components/aboutComponents/award";
import CallToAction from "@/components/aboutComponents/calltoAction";
import ClinicHistory from "@/components/aboutComponents/clinic";
import GallerySection from "@/components/aboutComponents/gallery";
import MissionVision from "@/components/aboutComponents/mission";
import ApproachSection from "@/components/aboutComponents/ourApproach";
import TeamSection from "@/components/aboutComponents/teamSelection";
import Testimonials from "@/components/aboutComponents/testimonial";


export const metadata = {
  title: "About SmileCraft Dental | Caring for Your Smile Since 2010",
  description:
    "Learn more about SmileCraft Dental Clinic — our expert dentists, modern technology, and dedication to gentle, high-quality dental care.",
  keywords: [
    "about SmileCraft Dental",
    "dental team",
    "dentist history",
    "oral care specialists",
  ],
  openGraph: {
    title: "About SmileCraft Dental | Caring for Your Smile Since 2010",
    description:
      "Trusted dental professionals providing quality care since 2010. Discover our story and commitment to your smile.",
    url: "https://brightsmile-dental-clinic.vercel.app/about",
    siteName: "SmileCraft Dental",
    images: [
      {
        url: "https://brightsmile-dental-clinic.vercel.app/images/dentinterior.jpg",
        width: 800,
        height: 600,
        alt: "SmileCraft Dental clinic interior",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};




// app/about/page.js

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