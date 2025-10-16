"use client";
import { motion } from "framer-motion";

export default function ApproachSection() {
  return (
    <section className="py-20 bg-blue-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-blue-50"
        >
          Our Approach to Dental Care
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-100"
        >
          Every patient is unique, and so is our approach. We combine advanced technology with compassion and attention to detail — ensuring each treatment is tailored to your comfort and goals.
        </motion.p>
      </div>
    </section>
  );
}
