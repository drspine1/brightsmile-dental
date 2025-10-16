"use client";
import { motion } from "framer-motion";

export  function ServiceHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="text-center py-20 bg-gradient-to-b mt-[15vh] from-blue-400  to-blue-100"
    >
      <h5 className="text-gray-900 uppercase font-medium tracking-wide">
        What We Offer
      </h5>
      <h2 className="md:text-4xl text-3xl font-bold text-gray-700 mt-2 px-4">
        Our Dental Care Services
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
        Discover professional dental care with comfort, precision, and modern technology.
      </p>
    </motion.section>
  );
}
