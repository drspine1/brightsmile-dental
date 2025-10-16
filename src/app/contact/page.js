

export const metadata = {
  title: "Contact SmileCraft Dental | Get in Touch Today",
  description:
    "Have questions or need dental advice? Contact SmileCraft Dental Clinic — we’re here to help you smile confidently.",
  keywords: [
    "contact dentist",
    "dental clinic phone",
    "dentist email",
    "SmileCraft Dental contact",
  ],
  openGraph: {
    title: "Contact SmileCraft Dental | Get in Touch Today",
    description:
      "Reach out to SmileCraft Dental Clinic for appointments, questions, or consultations.",
    url: "https://brightsmile-dental-clinic.vercel.app/contact",
    siteName: "SmileCraft Dental",
    images: [
      {
        url: "https://https://brightsmile-dental-clinic.vercel.app/images/care.jpg",
        width: 800,
        height: 600,
        alt: "Contact SmileCraft Dental team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


import { ContactForm } from "@/components/contactComponents/contactForm";
import { ContactHeader } from "@/components/contactComponents/contactHeader";
import { ContactInfo } from "@/components/contactComponents/contactInfo";
import { GoogleMap } from "@/components/contactComponents/googleMap";

export default function ContactPage(){
  return (<>
  <ContactHeader/>
  <ContactInfo/>
   <ContactForm/>
  <GoogleMap/>

  
  </>)
}