
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