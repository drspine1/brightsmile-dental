import Image from "next/image";
const AboutComponent = () => {
  return ( <>
  <section className="py-20 px-6 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center md:mt-48  mt-20">
    <Image
src="/images/dentinterior.jpg"
alt="About our clinic"
width={500}
height={400}
className="rounded-2xl shadow-lg"
/>
<div>
<h2 className="text-3xl font-semibold mb-4 text-blue-700">Caring for Your Smile Since 2010</h2>
<p className="text-gray-700 mb-4 text-lg">
At SmileBright Dental Clinic, we are committed to delivering high-quality dental care with a gentle touch. Our modern facilities and experienced staff ensure a comfortable experience for every patient.
</p>
<ul className="list-disc list-inside space-y-2 text-gray-900 text-lg">
<li>Certified and experienced dentists</li>
<li>State-of-the-art equipment</li>
<li>Comfort-focused care</li>
</ul>
</div>

</section>
  </> );
}
 
export default AboutComponent;