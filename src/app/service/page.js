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