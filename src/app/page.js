import FAQSection from "@/components/homeComponents/faq";
import AboutComponent from "../components/homeComponents/about";
import WhyUs from "../components/homeComponents/choose";
import ContactComponent from "../components/homeComponents/contact";
import HeroComponent from "../components/homeComponents/hero";

import BeforeAfterSection from "@/components/homeComponents/beforeandAfter";

import DentalEducationAndPromise from "@/components/homeComponents/dentalEdu";

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
