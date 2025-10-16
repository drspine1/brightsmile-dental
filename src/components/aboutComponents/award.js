"use client";
import { motion } from "framer-motion";

export default function AwardsSection() {
  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-8"
      >
        Our Achievements
      </motion.h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-100 px-6 leading-relaxed ">
        Recognized for excellence in dental care, BrightSmile Clinic has received multiple awards for innovation, service quality, and patient satisfaction.
      </p>
    </section>
  );
}
