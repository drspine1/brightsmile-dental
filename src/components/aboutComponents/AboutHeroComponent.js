"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative bg-blue-900 text-white py-24 mt-22 md:mt-18">
      <div className="max-w-7xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:text-5xl text-3xl font-bold mb-4"
        >
          Dedicated to Your Confident Smile
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="md:text-xl text-lg max-w-2xl mx-auto"
        >
          At BrightSmile Dental Clinic, we provide compassionate and innovative dental care that makes every patient smile confidently.
        </motion.p>

        <Link href="/booking"
       className="inline-block mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow-md hover:bg-gray-200 hover:scale-105 transition  text-lg z-10 relative"
        >
          Book an Appointment
        </Link>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/dent-b.jpg')" }}
      ></div>
    </section>
  );
}
