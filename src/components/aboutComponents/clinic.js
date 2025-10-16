"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function ClinicHistory() {
  return (
    <section className="py-20 bg-white text-gray-800 mt-36">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:gap-12 px-6">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
          className="w-full h-80 md:h-96">
          <Image
          src="/images/dent-b.jpg"
          alt="Our Clinic"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4  text-blue-600">Our Story</h2>
          <p className="text-lg leading-relaxed ">
            BrightSmile Dental Clinic began over a decade ago with a simple mission: to transform the way people experience dental care. 
            From humble beginnings, we’ve grown into one of the most trusted clinics in the region — built on compassion, precision, and innovation.
          </p>
          <p className="text-lg leading-relaxed">
            Every smile we restore reminds us why we started — to make confident smiles accessible to everyone.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
