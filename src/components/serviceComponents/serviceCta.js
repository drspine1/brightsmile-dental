"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      
      transition={{ duration: 0.6 }}
      className="py-20 bg-blue-600 text-center text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready for a Brighter Smile?
      </h2>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        Book your dental consultation today and let our experts bring back your confident smile.
      </p>
      <Link
        href="/booking"
        className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
      >
        Book Appointment
      </Link>
    </motion.section>
  );
}
