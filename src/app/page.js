import FAQSection from "@/components/homeComponents/faq";
import AboutComponent from "../components/homeComponents/about";
import WhyUs from "../components/homeComponents/choose";
import ContactComponent from "../components/homeComponents/contact";
import HeroComponent from "../components/homeComponents/hero";

import BeforeAfterSection from "@/components/homeComponents/beforeandAfter";

import DentalEducationAndPromise from "@/components/homeComponents/dentalEdu";
export const metadata = {
  title: "SmileCraft Dental Clinic | Modern, Gentle & Affordable Care",
  description:
    "Experience top-quality dental care at SmileCraft Dental Clinic. From cosmetic dentistry to family checkups, our certified dentists make every smile brighter.",
  keywords: [
    "dentist",
    "dental clinic",
    "teeth whitening",
    "SmileCraft Dental",
    "cosmetic dentistry",
    "family dentist",
    "oral hygiene",
  ],
  openGraph: {
    title: "SmileCraft Dental Clinic | Modern, Gentle & Affordable Care",
    description:
      "Brighten your smile with SmileCraft Dental Clinic. Expert dentists, modern facilities, and compassionate care for all ages.",
    url: `https://brightsmile-dental-clinic.vercel.app/`,
    siteName: "SmileCraft Dental",
    images: [
      {
        url: `https://brightsmile-dental-clinic.vercel.app/images/dentist.jpg`,
        width: 800,
        height: 600,
        alt: "Dentist with patient at SmileCraft Dental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


// app/components/HeroSection.jsx
export default function HomePage() {
  return (
   <>
   <HeroComponent/>
   <AboutComponent/>
   <WhyUs/>
   <DentalEducationAndPromise/>
   <BeforeAfterSection/>
   <FAQSection/>
   <ContactComponent/>
  
   </>
  );
}
