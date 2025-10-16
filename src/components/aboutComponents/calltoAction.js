"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Ready to Book Your Appointment?
      </motion.h2>
      <p className="text-lg mb-6 px-6">Your smile transformation starts today.</p>
     <motion.button
      whileHover={{ scale: 1.05 }}
     >
       <Link
        href="/contact"
       
        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
      >
        Contact Us Now
      </Link>
     </motion.button>
    </section>
  );
}
