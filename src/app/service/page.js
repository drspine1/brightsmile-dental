export const metadata = {
  title: "Our Dental Services | SmileCraft Dental Clinic",
  description:
    "Discover expert dental services at SmileCraft Dental Clinic — from teeth cleaning and whitening to braces, root canals, and pediatric dentistry. Your smile deserves the best care.",
  keywords: [
    "dental services",
    "teeth cleaning",
    "teeth whitening",
    "braces",
    "root canal",
    "cosmetic dentistry",
    "pediatric dentist",
    "orthodontics",
    "dental care",
    "SmileCraft Dental Clinic",
  ],
  openGraph: {
    title: "Our Dental Services | SmileCraft Dental Clinic",
    description:
      "Professional dental treatments for all ages — whitening, braces, root canal therapy, and more. Visit SmileCraft Dental Clinic for gentle, modern care.",
    url: "https://brightsmile-dental-clinic.vercel.app/service",
    siteName: "SmileCraft Dental Clinic",
    images: [
      {
        url: "https://brightsmile-dental-clinic.vercel.app/images/dentinterior.jpg",
        width: 1200,
        height: 630,
        alt: "Professional Dental Services at SmileCraft Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  }
};

import Services from "@/components/serviceComponents/service";
import ServiceCTA from "@/components/serviceComponents/serviceCta";
import { ServiceHeader } from "@/components/serviceComponents/serviceHeader";

export default function ServicePage() {
  return (
   <>
  <ServiceHeader/>
  <Services/>
  <ServiceCTA/>
   </>
   )
  }